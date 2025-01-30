import { Button, Text, View } from "react-native";
import AsyncStroage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
    const router = useRouter();
    const [isLogin, setLogin] = useState<Boolean| null>();

    const [token, setToken] = useState<string>();
    const [employeeId, setEmployeeId] = useState<string>();
    const [employeeUsername, setEmployeeUsername] = useState<string>();
    const [employeeEmail, setEmployeeEmail] = useState<string>();
    const [fuelStationId, setFuelStationId] = useState<string>();
    const [password,setPassword] = useState<string>();


    const checkEmployeeIsLogin = async() =>{
        const value = await AsyncStroage.getItem("isLogin");
        if(value === 'true'){
            setLogin(true);
            router.navigate("/dashboard/fuel");
        }else{
            setLogin(false);
            router.navigate("/");
        }
    }

    const fetchData = async() => {
      const token = await AsyncStroage.getItem("employeeAccessToken");
      if(token){
        setToken(token);
      }
      const employeeId = await AsyncStroage.getItem("employeeId");
      if(employeeId){
        setEmployeeId(employeeId);
      }
      const employeeUsername = await AsyncStroage.getItem("employeeUsername");
      if(employeeUsername){
        setEmployeeUsername(employeeUsername);
      }
      const employeeEmail = await AsyncStroage.getItem("employeeEmail");
      if(employeeEmail){
        setEmployeeEmail(employeeEmail);
      }
      const fuelStationId = await AsyncStroage.getItem("fuelStationId");
      if(fuelStationId){
        setFuelStationId(fuelStationId);
        }
    }

    const handleLogout = () => {
      AsyncStroage.removeItem("isLogin");
      AsyncStroage.removeItem("employeeAccessToken");
      AsyncStroage.removeItem("employeeId");
      AsyncStroage.removeItem("employeeUsername");
      AsyncStroage.removeItem("employeeEmail");
      AsyncStroage.removeItem("fuelStationId");
      router.navigate("/");
    }

    useEffect(()=>{
        checkEmployeeIsLogin();
        fetchData();
    },[]);

  return ( 

    <SafeAreaProvider>
      <SafeAreaView>
        <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Profile</Text>
                <Text style={{ fontSize: 18 }}>Username: {employeeUsername || "N/A"}</Text>
                <Text style={{ fontSize: 18 }}>Email: {employeeEmail || "N/A"}</Text>
                
                <Button
                  title="LogOut"
                  color="red"
                  onPress={handleLogout}
                />
      </View>
      </SafeAreaView>
    </SafeAreaProvider>

    
  );
}
