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