import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Modal, TextInput } from "react-native";
import { CameraView, useCameraPermissions, BarcodeScanningResult } from "expo-camera";
import LoginChecker from "@/components/LoginChecker";
import { fuelgetAll } from "@/api/fuel";
import { vehicleFindById } from "@/api/vehicle";
import { update_fueling_vehicle } from "@/api/employee";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UUID } from "crypto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { vehicleClassGetAll } from "@/api/vehicleClass";


const Fuel: React.FC = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [scannedData, setScannedData] = useState<string | null>(null);

    const [token, setToken] = useState<string | null>(null);
    const [employeeId, setEmployeeId] = useState<string>("");

    const [fuels, setFuels] = useState<any[] | null>(null);
    const [vehicleClasses, setVehicleClasses] = useState<any[] | null>(null);
    const [vehicle, setVehicle] = useState<any | null>(null);

    const [vehicleId, setVehicleId] = useState<UUID | null>(null);
    const [modalVisibal, setModalVisibal] = useState<boolean>(false);

    const [price, setPrice] = useState<string>(""); 
    const [fuelCapacity, setFuelCapacity] = useState<number>(0);
    const [maxFuelCapacity, setMaxFuelCapacity] = useState<number>(0);
    const [error, setError] = useState<string>("");

    

    const getMaxFuelCapacity = () => {
        if (vehicleClasses && vehicle) {
            const vehicleClass = vehicleClasses.find(vc => vc.vehicleClassId === vehicle.vehicleClassId);
            if (vehicleClass) {
                const capacity = vehicle.ownerType === 'User'
                    ? vehicleClass.maxFuelCapacityPerWeek
                    : vehicleClass.maxFuelCapacityPerWeekForBusinessGov;
                setMaxFuelCapacity(capacity || 0);
            }
        }
    };

    const calculatePrice = () => {
        if (price && fuels && vehicle) {
            getMaxFuelCapacity(); 

            const fuelData = fuels.find(fuel => fuel.fuelId === vehicle.fuelId);
            if (fuelData) {
                const fuelPricePerLiter = fuelData.price;
                const liters = parseFloat((parseFloat(price) / fuelPricePerLiter).toFixed(2));

                if (vehicle.currentFuelCapacity + liters <= maxFuelCapacity) {
                    setFuelCapacity(liters);
                    setError("");
                } else {
                    setError("You cannot exceed the vehicle’s max fuel capacity.");
                }
            }
        }
    };

    useEffect(() => {
        calculatePrice();
    }, [price]);

    const retrieveToken = async () => {
        const storedToken = await AsyncStorage.getItem("employeeAccessToken");
        if (storedToken) setToken(storedToken);
        const empId = await AsyncStorage.getItem("employeeId");
        console.log(empId);
        if (empId) setEmployeeId(empId);
    };

    const fetchFuel = async () => {
        if (token) {
            const response = await fuelgetAll(token);
            console.log(response);
            if (response) setFuels(response.data);
        }
    };

    const fetchVehicleClasses = async () => {
        if (token) {
            const response = await vehicleClassGetAll(token);
            console.log(response);
            if (response) setVehicleClasses(response.data);
        }
    };

    useEffect(() => {
        if (!permission || permission.status !== "granted") {
            requestPermission();
        }
    }, [permission]);

    useEffect(() => {
        retrieveToken();
    }, [permission]);

    useEffect(() => {
        fetchFuel();
        fetchVehicleClasses();
    }, [token]);

    const handleBarCodeScanned = async (event: BarcodeScanningResult) => {
        if (!scannedData) {
            const scannedValue = event.data;
            setScannedData(scannedValue);

            if (scannedValue) {
                setVehicleId(scannedValue as UUID);
                if (token) {
                    const response = await vehicleFindById(scannedValue, token);
                    console.log(response)
                    if (response) {
                        setVehicle(response.data);
                        setModalVisibal(true);
                    }
                }
            }
        }
    };

    if (!permission) return <Text>Requesting camera permission...</Text>;
    if (permission.status !== "granted") {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>
                <Button title="Grant Permission" onPress={requestPermission} />
            </View>
        );
    }

    const handleClose = () => {
        setVehicle(null);
        setVehicleId(null);
        setError("");
        setPrice("");
        setFuelCapacity(0);
        setMaxFuelCapacity(0);
        setModalVisibal(false);
    }

    const handleUpdate = async() => {
        if(vehicleId && fuelCapacity && employeeId && token){
            console.log(employeeId);
            const response = await update_fueling_vehicle(employeeId,vehicleId,fuelCapacity,token);
            console.log(response);
            if(response){
                setVehicle(null);
                setVehicleId(null);
                setFuelCapacity(0);
                setPrice("");
                setError("");
                setMaxFuelCapacity(0);
                setModalVisibal(false);
                
            }
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <LoginChecker>
                    <Text style={styles.title}>Fueling Service</Text>

                    {!scannedData ? (
                        <View style={styles.cameraContainer}>
                            <CameraView
                                style={StyleSheet.absoluteFillObject}
                                barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
                                onBarcodeScanned={handleBarCodeScanned}
                            />
                        </View>
                    ) : (
                        <View style={styles.scannedDataContainer}>
                            <Text style={styles.scannedText}>Scanned QR Code:</Text>
                            <Text style={styles.scannedData}>{scannedData}</Text>
                            <Button title="Scan Again" onPress={() => setScannedData(null)} />
                        </View>
                    )}

                    {fuels && fuels.length > 0 ? (
                        <View>
                            {fuels.map((fuel, index) => (
                                <View key={index} style={styles.fuelContainer}>
                                    <Text style={styles.fuelText}>{fuel.fuelName || "Unknown Fuel"}</Text>
                                    <Text style={styles.fuelPrice}>
                                        Rs {fuel.price !== undefined ? fuel.price : "N/A"}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ) : (
                        <Text style={styles.noFuelText}>No fuel data available</Text>
                    )}

                    {vehicle && (
                        <Modal visible={modalVisibal} transparent animationType="slide">
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.modalTitle}>Vehicle Details</Text>
                                    <Text>Current Capacity: {vehicle.currentFuelCapacity}</Text>
                                    <Text>
                                        Fuel Type: {fuels?.find(fuel => fuel.fuelId === vehicle.fuelId)?.fuelName || "N/A"}
                                    </Text>
                                    <Text>
                                        Max Capacity:{" "}
                                        {vehicle.ownerType === "User"
                                            ? vehicleClasses?.find(vc => vc.vehicleClassId === vehicle.vehicleClassId)?.maxFuelCapacityPerWeek || "N/A"
                                            : vehicleClasses?.find(vc => vc.vehicleClassId === vehicle.vehicleClassId)?.maxFuelCapacityPerWeekForBusinessGov || "N/A"}
                                    </Text>
                                    <TextInput
                                        placeholder="Enter a Price"
                                        style={styles.inputField}
                                        keyboardType="numeric"
                                        value={price}
                                        onChangeText={setPrice}
                                    />
                                    {!error ? <Text>Total Fueling Liters: {fuelCapacity}</Text> : <Text style={styles.error}>{error}</Text>}
                                    <Button title="Update" onPress={handleUpdate} />
                                    <Button title="Close" onPress={handleClose} />
                                </View>
                            </View>
                        </Modal>
                    )}
                </LoginChecker>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    cameraContainer: {
        width: 300,
        height: 300,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },
    scannedDataContainer: {
        alignItems: "center",
        marginTop: 20,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    scannedText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
    },
    scannedData: {
        fontSize: 16,
        marginVertical: 10,
        color: "#000",
        fontWeight: "600",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    modalContent: {
        width: 320,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#222",
    },
    inputField: {
        width: "100%",
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        fontSize: 16,
    },
    fuelContainer: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    fuelText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
    },
    fuelPrice: {
        fontSize: 16,
        color: "green",
        fontWeight: "600",
    },
    noFuelText: {
        fontSize: 16,
        color: "red",
        marginTop: 20,
    },
    error: {
        color: "red",
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default Fuel;
