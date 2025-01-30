import React, { useState } from "react";
import { Input, Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { fuelStationAuthentication } from "../../api/AuthApi";
import { useNavigate } from "react-router-dom";
import "../../style/FuelStationLogin.css";  // Import the CSS file


const FuelStationLogin = () => {
    const navigate = useNavigate();
    const [fuelStationRegisterId, setFuelStationRegisterId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    };

    const validation = () => {
        setError(false);

        if (fuelStationRegisterId === "") {
            setError(true);
            toast.error("Registration ID is required");
            return;
        }
        if (password === "") {
            setError(true);
            toast.error("Password is required");
            return;
        }
    };

    const handleLogin = async () => {
        validation();

        if (!error) {
            const response = await fuelStationAuthentication(fuelStationRegisterId, password);
            console.log(response);
            if (response) {
                localStorage.setItem("fuelStationAccessToken", response.accessToken);
                localStorage.setItem("fuelStationData", JSON.stringify(response.data));
                navigate("/fuelStation/dashboard");
            } else {
                toast.error("Invalid Registration ID or Password");
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Fuel Station Login</h1>

                <Input
                    placeholder="Fuel Station Register ID"
                    value={fuelStationRegisterId}
                    onChange={(e) => setFuelStationRegisterId(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="primary" onClick={handleLogin}>Login</Button>
                <Button type="primary" className="register-btn" onClick={() => navigate("/fuelStationReg")}>
                    Register
                </Button>

                <ToastContainer />
            </div>
        </div>
    );
};

export default FuelStationLogin;