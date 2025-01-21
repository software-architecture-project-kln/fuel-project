import { Text, View } from "react-native";
import AsyncStroage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();
    const [isLogin, setLogin] = useState<Boolean| null>();

    const checkEmployeeIsLogin = async() =>{
        const value = await AsyncStroage.getItem("isLogin");
        if(value === 'true'){
            setLogin(true);
            router.navigate("/fuel");
        }else{
            setLogin(false);
            router.navigate("/login");
        }
    }

    useEffect(()=>{
        checkEmployeeIsLogin();
    },[]);

  return ( 

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    </View>
  );
}
