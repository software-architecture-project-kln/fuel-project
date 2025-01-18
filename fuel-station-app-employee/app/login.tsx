import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from "react";
import { employee_authentication } from "@/api/login-api/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { text } from "stream/consumers";

const Login: React.FC = () => {

    const router = useRouter();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [showInputFields, setShowInputFields] = useState<boolean>(true);

    const showErrorMsg = () => {
        Alert.alert("Login Fail","username or password is incorrect",[
            {
                text: "reTry",
                onPress: () => console.log("reTry press.."),
            }
        ])
    }

    

    const handleLogin = async () => {
        if (username !== '' && password !== '') {
            try {
                const response: AuthResponse = await employee_authentication(username, password);
                console.log(response);
    
                // Save the employee data in AsyncStorage
                await AsyncStorage.setItem('employeeAccessToken', response.accessToken);
                await AsyncStorage.setItem('employeeId', response.employeeId);
                await AsyncStorage.setItem('employeeUsername', response.employeeUsername);
                await AsyncStorage.setItem('employeeEmail', response.employeeEmail);
                await AsyncStorage.setItem('fuelStationId', response.fuelStationId);
                await AsyncStorage.setItem("isLogin", 'true');
    
                router.navigate('/');
            } catch (error) {
                console.error(error);
                alert("incorrect credentials");
            }
        } else {
            Alert.alert('Error', 'Please fill in all fields', [
                {
                    text: 'OK',
                    onPress: () => console.log('OK pressed..'),
                },
            ]);
        }
    };
    

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <div className="form">
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        onChangeText={(value: string) => setUsername(value)}
                        value={username} // Controlled input, bound to state
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value: string) => setPassword(value)}
                        value={password} // Controlled input, bound to state
                        placeholder="Password"
                    />
                    <Button title="Login" onPress={handleLogin} />
                </div>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,
    },
});
