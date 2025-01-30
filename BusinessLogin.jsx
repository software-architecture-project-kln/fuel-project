import React, { useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { businessGovAuthentication } from "../../api/AuthApi";
import { ToastContainer, toast } from "react-toastify";
import "../../style/BusinessLogin.css";


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