import React, { useEffect, useState } from "react";
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { employeeUpdateProfile } from "@/api/employee";

export default function Index() {
    const router = useRouter();
    const [isLogin, setLogin] = useState<Boolean | null>();
    const [token, setToken] = useState<string>();
    const [employeeId, setEmployeeId] = useState<string>();
    const [employeeUsername, setEmployeeUsername] = useState<string>();
    const [employeeEmail, setEmployeeEmail] = useState<string>();
    const [fuelStationId, setFuelStationId] = useState<string>();
    const [password, setPassword] = useState<string>();

    const checkEmployeeIsLogin = async () => {
        const value = await AsyncStorage.getItem("isLogin");
        if (value === "true") {
            setLogin(true);
            router.navigate("/dashboard/fuel");
        } else {
            setLogin(false);
            router.navigate("/");
        }
    };

    const fetchData = async () => {
        const token = await AsyncStorage.getItem("employeeAccessToken");
        if (token) {
            setToken(token);
        }
        const employeeId = await AsyncStorage.getItem("employeeId");
        if (employeeId) {
            setEmployeeId(employeeId);
        }
        const employeeUsername = await AsyncStorage.getItem("employeeUsername");
        if (employeeUsername) {
            setEmployeeUsername(employeeUsername);
        }
        const employeeEmail = await AsyncStorage.getItem("employeeEmail");
        if (employeeEmail) {
            setEmployeeEmail(employeeEmail);
        }
        const fuelStationId = await AsyncStorage.getItem("fuelStationId");
        if (fuelStationId) {
            setFuelStationId(fuelStationId);
        }
    };

    const handleLogout = () => {
        AsyncStorage.removeItem("isLogin");
        AsyncStorage.removeItem("employeeAccessToken");
        AsyncStorage.removeItem("employeeId");
        AsyncStorage.removeItem("employeeUsername");
        AsyncStorage.removeItem("employeeEmail");
        AsyncStorage.removeItem("fuelStationId");
        router.navigate("/");
    };

    const updateProfile = async () => {
        let error: boolean = false;

        if (employeeUsername === "" || employeeUsername === null) {
            error = true;
            return;
        }

        if (employeeEmail === "" || employeeEmail === null) {
            error = true;
            return;
        }

        if (!error) {
            const response = await employeeUpdateProfile(employeeUsername, employeeEmail, employeeId, token);
            console.log(response);
            if (response) {
                alert("Profile updated successfully");
                return;
            }
        }
    };

    useEffect(() => {
        checkEmployeeIsLogin();
        fetchData();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Profile</Text>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={employeeUsername}
                        onChangeText={setEmployeeUsername}
                    />
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={employeeEmail}
                        onChangeText={setEmployeeEmail}
                    />
                    <TouchableOpacity style={styles.button} onPress={updateProfile}>
                        <Text style={styles.buttonText}>Save Changes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.secondaryButton]}
                        onPress={() => router.navigate("/changePassword/changePassword")}
                    >
                        <Text style={styles.buttonText}>Change Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.logoutButton]}
                        onPress={handleLogout}
                    >
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        padding: 20,
    },
    form: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#0388A6", // Button background color
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25, // Rounded corners
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        elevation: 3, // Shadow effect for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    secondaryButton: {
        backgroundColor: "#0388A6", // Secondary button color
    },
    logoutButton: {
        backgroundColor: "red", // Log out button color
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff", // White text color
    },
});
