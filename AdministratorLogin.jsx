import { Input, Button } from "antd";
import React, { useState } from "react";
import { administratorAuthentication } from "../../api/AuthApi";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../../style/AdministratorLogin.css";

const AdministratorLogin = () => {

    const navigate = useNavigate();

    const [administratorUsername, setAdministratorUsername] = useState("");
    const [password, setPassword] = useState("")

    const administratorAuth = async() => {
        if(administratorUsername && password){
            const res = await administratorAuthentication(administratorUsername,password);
            console.log(res)
            if(res){
                localStorage.setItem("accessToken",res.accessToken);
                localStorage.setItem("administratorData", JSON.stringify(res.data))
                navigate("/administrator/dashboard");
            }else{
                toast.error("username or password incorrect")
                return
            }
        }
    }