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

<div className="login-container">
        <div className="login-box">
            <h1>Business Login</h1>

            <Input
                className="ant-input"
                placeholder="Business Gov Reg No"
                value={businessGovernmentRegNo}
                onChange={(e) => setBusinessGovernmentRegNo(e.target.value)}
            />
            <Input
                className="ant-input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="ant-btn-primary" onClick={businessLogin}>
                Login
            </Button>

            <br />

            <Button className="register-btn" onClick={() => navigate("/businessGovReg")}>
                Register Business
            </Button>

            <ToastContainer />
        </div>
    </div>
</>
        
    )
}

export default BusinessLogin;