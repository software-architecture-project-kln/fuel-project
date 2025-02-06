import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity, StyleSheet, Alert, View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { employee_authentication } from "@/api/login-api/login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>(''); // To manage error message

    const handleLogin = async () => {
        if (username !== '' && password !== '') {
            try {
                const response: AuthResponse = await employee_authentication(username, password);
                console.log(response);

                // Save the employee data in AsyncStorage
                await AsyncStorage.setItem('employeeAccessToken', response.accessToken);
                await AsyncStorage.setItem('employeeId', response.data.employeeId);
                await AsyncStorage.setItem('employeeUsername', response.data.employeeUsername);
                await AsyncStorage.setItem('employeeEmail', response.data.employeeEmail);
                await AsyncStorage.setItem('fuelStationId', response.data.fuelStationId);
                await AsyncStorage.setItem("isLogin", 'true');

                router.navigate('/dashboard/fuel');
            } catch (error) {
                console.error(error);
                setError("Incorrect credentials"); // Show error message if login fails
            }
        } else {
            setError('Please fill in all fields'); // Show error if any field is empty
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.form}>
                    <Image source={require("../assets/images/FuelIQ.png")} style={styles.logo} />
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        onChangeText={setUsername}
                        value={username}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true} // Hides the password input
                    />
                    {/* Error message displayed below input fields */}
                    {error && <Text style={styles.errorText}>{error}</Text>}
                    {/* Custom styled Login button */}
                    <TouchableOpacity 
                        style={styles.loginButton}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8', // Adjust background color
    },
    form: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    logo: {
        width: 200, // Adjust the logo size
        height: 100, // Adjust the logo height
        resizeMode: 'contain',
        marginBottom: 20, // Add margin for spacing
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333', // Text color
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    loginButton: {
        backgroundColor: '#0388A6', // Button background color
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25, // Rounded corners
        alignItems: 'center', // Center text inside button
        justifyContent: 'center',
        marginTop: 20,
        elevation: 3, // Shadow effect for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', // White text color
    },
    errorText: {
        color: 'red', // Red color for error message
        marginBottom: 15, // Space between error and button
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
