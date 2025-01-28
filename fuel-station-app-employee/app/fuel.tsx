import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";
import { CameraView, useCameraPermissions, BarcodeScanningResult } from "expo-camera";
import LoginChecker from "@/components/LoginChecker";
import { fuelgetAll } from "@/api/fuel";
import { vehicleFindById } from "@/api/vehicle";
import { update_fueling_vehicle } from "@/api/employee";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UUID } from "crypto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Fuel: React.FC = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [scannedData, setScannedData] = useState<string | null>(null);

    const [token, setToken] = useState<string | null>("")

    const [fuels, setFuels] = useState<any[] | null>(null);
    const [vehicle, setVehicle] = useState<any | null>(null);

    const [vehicleId, setVehicleId] = useState<UUID |null>();
    const [modalVisibal, setModalVisibal] = useState<boolean>(false);

    const retrieveToken = async() => {
        const token:any = await AsyncStorage.getItem('employeeAccessToken');
        if(token){
            setToken(token)
        }
    }

    const fetchFuel: any = async() => {
        if(token){
            const response = await fuelgetAll(token);
            console.log(response);
            if(response){
                setFuels(response.data);
            }
        }
    }

    const fetchVehicleById: any = async() => {
        if (token && vehicleId){
            const response = await vehicleFindById(vehicleId,token);
            console.log(response);
            if(response){
                setVehicle(response.data);
            }
        }
    }

    useEffect(() => {
        if (!permission || permission.status !== "granted") {
            requestPermission();
        }
    }, [permission]);

    useEffect(()=>{
        retrieveToken();
    },[permission])

    useEffect(()=>{
        fetchFuel()
    },[permission,token]);

    const handleBarCodeScanned = async(event: BarcodeScanningResult) => {
        if (!scannedData) {
            const scannedValue = event.data;
            
            setScannedData(scannedValue);
    
            try {
                
                if (scannedValue && typeof scannedValue === "string") {
                    setVehicleId(scannedValue as UUID);
                    if (token){
                        const response = await vehicleFindById(scannedValue,token);
                        console.log(response);
                        if(response){
                            setVehicle(response.data);
                            setModalVisibal(true);
                            
                        }
                    }
                    
                    
                } else {
                    console.warn("Scanned data is not a valid UUID:", scannedValue);
                }
            } catch (error) {
                console.error("Error parsing UUID:", error);
            }
    
            console.log("Scanned QR Data:", scannedValue);
        }
    };
    

    if (!permission) {
        return <Text>Requesting camera permission...</Text>;
    }

    if (permission.status !== "granted") {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>
                <Button title="Grant Permission" onPress={requestPermission} />
            </View>
        );
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
                                barcodeScannerSettings={{
                                    barcodeTypes: ["qr"],
                                }}
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

                    {vehicle && (
                        <Modal visible={modalVisibal} transparent={true} animationType="slide">
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.modalTitle}>Vehicle Details</Text>
                                    <Text>Current Capacity: {vehicle.currentFuelCapacity}</Text>
                                    <Text>Fuel Type: 
                                        {fuels && fuels[vehicle.fuelId].fuelName}
                                    </Text>
                                    <Text>License Plate: {vehicle.licensePlate}</Text>
                                    <Button title="Close" onPress={() => setModalVisibal(false)} />
                                </View>
                            </View>
                        </Modal>
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
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    cameraContainer: {
        width: 300,
        height: 300,
        overflow: "hidden",
    },
    scannedDataContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    scannedText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    scannedData: {
        fontSize: 16,
        marginBottom: 10,
    },
    fuelContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    fuelText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    fuelPrice: {
        fontSize: 16,
        color: "green",
    },
    noFuelText: {
        fontSize: 16,
        color: "red",
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
});


export default Fuel;




