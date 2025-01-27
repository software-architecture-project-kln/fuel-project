import React, { useState } from "react";
import { Input, Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { fuelStationAuthentication } from "../../api/AuthApi";
import { useNavigate } from "react-router-dom";


const FuelStationLogin = () => {

    const navigate = useNavigate();

    const [fuelStationRegisterId, setFuelStationRegisterId] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();

    const validation = () => {
        setError(false);

        if(fuelStationRegisterId === ""){
            setError(true);
            toast.error("registation id is required");
            return;
        }
        if(password === ""){
            setError(true);
            toast.error("password is required");
            return;
        }
    }
    
    const handleLogin = async() => {
        validation();

        if(!error){
            const response = await fuelStationAuthentication(fuelStationRegisterId,password);
            console.log(response);
            if(response){
                localStorage.setItem("fuelStationAccessToken", response.accessToken);
                localStorage.setItem("fuelStationData", JSON.stringify(response.data));
                navigate("/fuelStation/dashboard");
            }else{
                toast.error("Invalid registation id or password");
            }
        }
        
    }

    return (
        <>
         <h1>Fuel Station Login</h1>

         <Input 
            placeholder="Fuel Station Register Id"
            value={fuelStationRegisterId}
            onChange={(e) => setFuelStationRegisterId(e.target.value)}
         />
         <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />

         <Button onClick={handleLogin} >Login</Button>

        <ToastContainer />
        </>
    )
}

export default FuelStationLogin;