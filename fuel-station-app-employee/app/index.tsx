import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, StyleSheet, Alert, View, Text } from 'react-native';
import { useState } from "react";
import { employee_authentication } from "@/api/login-api/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Login: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

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
                alert("Incorrect credentials");
            }
        } else {
            Alert.alert('Error', 'Please fill in all fields', [{ text: 'OK' }]);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.form}>
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
                    <Button title="Login" onPress={handleLogin} />
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
        backgroundColor: '#f5f5f5',
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
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
});

