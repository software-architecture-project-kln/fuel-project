import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { employeeUpdatePassword } from "@/api/employee";

const ChangePassword: React.FC = () => {
    const router = useRouter();

    const [token, setToken] = useState<string>("");
    const [employeeId, setEmployeeId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [reEnterPassword, setReEnterPassword] = useState<string>("");

    const handleChangePassword = async () => {
        let error = false;

        if (password === "" || reEnterPassword === "") {
            error = true;
            return;
        }

        if (password !== reEnterPassword) {
            error = true;
            alert("Re-enter password does not match.");
            return;
        }

        if (!error) {
            const res = await employeeUpdatePassword(employeeId, password, token);
            console.log(res);
            if (res) {
                alert("Password changed successfully");
                return;
            }
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
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaProvider>
            <Stack.Screen options={{ title: "Change Password", headerShown: true }} />
            <SafeAreaView style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Change Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Re-Enter Password"
                        secureTextEntry={true}
                        onChangeText={setReEnterPassword}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                        <Text style={styles.buttonText}>Change Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.secondaryButton]}
                        onPress={() => router.navigate("/dashboard")}
                    >
                        <Text style={styles.buttonText}>Back to Settings</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default ChangePassword;

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
        backgroundColor: "red", // Secondary button color
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff", // White text color
    },
});
