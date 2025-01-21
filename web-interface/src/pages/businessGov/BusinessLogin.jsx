import React, { useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { businessGovAuthentication } from "../../api/AuthApi";
import { ToastContainer, toast } from "react-toastify";

const BusinessLogin = () => {

    const navigate = useNavigate();

    const [businessGovernmentRegNo, setBusinessGovernmentRegNo] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();

    const businessLogin = async() => {
        setError(false);

        if(businessGovernmentRegNo === ""){
            toast.error("businessGov Reg number is required");
            setError(true);
            return
        }

        if(password === ""){
            toast.error("Password is required");
            setError(true);
            return
        }

        if(!error){
            const response = await businessGovAuthentication(businessGovernmentRegNo, password);
            console.log(response);

            if (response){
                localStorage.setItem("businessAccessToken", response.accessToken);
                localStorage.setItem("businessGovData",JSON.stringify(response.data));
                navigate("/businessGov/dashboard");
            }else{
                toast.error("Invalid businessGov Reg number or password");
                return
            }
        }
    }

    return (
        <>

        

        <h2>business login form</h2>

            <Input
                placeholder="Business Gov Reg No"
                value={businessGovernmentRegNo}
                onChange={(e) => setBusinessGovernmentRegNo(e.target.value)}
            />
            <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="primary" onClick={businessLogin}>
                Login
            </Button>

            <ToastContainer />
        </>
    )
}

export default BusinessLogin;