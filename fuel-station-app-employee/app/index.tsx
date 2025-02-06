import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Index: React.FC = () => {
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={require("../assets/images/FuelIQ.png")} style={styles.logo} />
                    <Text style={styles.greeting}>Your Fuel, Your Way</Text>
                    {/* Custom styled Get Started button */}
                    <TouchableOpacity 
                        style={styles.getStartedButton}
                        onPress={() => router.push("/login")}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8', // Adjust background color if needed
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        maxWidth: 400, // Limit the width for larger screens
    },
    logo: {
        width: 300, // Adjust the logo size
        height: 200, // Adjust the logo height
        resizeMode: 'contain',
        marginBottom: 10, // Add margin for spacing
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Change text color to match the design
        marginBottom: 20,
    },
    getStartedButton: {
        backgroundColor: '#0388A6', // Button background color
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25, // Rounded corners
        alignItems: 'center', // Center text inside button
        justifyContent: 'center',
        marginTop: 20,
        elevation: 3, // Shadow effect on Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff', // White text color
    },
});
