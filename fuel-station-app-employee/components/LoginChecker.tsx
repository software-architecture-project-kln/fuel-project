import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";

interface LoginCheckerProps {
    children: ReactNode;
}

const LoginChecker: React.FC<LoginCheckerProps> = ({ children }) => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState<boolean | null>(null);

    const checker = async () => {
        try {
            const data = await AsyncStorage.getItem("isLogin");
            if (data === 'true') {
                setIsLogin(true);
            } else {
                setIsLogin(false);
                router.navigate("/login");
            }
        } catch (error) {
            console.error("Error checking login status:", error);
            setIsLogin(false);
            router.navigate("/login");
        }
    };

    useEffect(() => {
        checker();
    }, []);

    if (isLogin === null) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!isLogin) {
        return null;
    }

    return <View style={{ flex: 1 }}>{children}</View>;
};

export default LoginChecker;
