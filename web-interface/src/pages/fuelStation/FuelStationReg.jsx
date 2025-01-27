<<<<<<< HEAD
import React from "react";
import { Button, Input } from 'antd';

const FuelStationReg = () => {
    return (
        <>
        </>
    )
}

export default FuelStationReg;
=======
import React, { useState } from "react";
import { Button, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createFuelStation } from "../../api/fuelStation";

const FuelStationReg = () => {
    const navigate = useNavigate();

    const [fuelStationRegisterId, setFuelStationRegisterId] = useState("");
    const [fuelStationOwnerName, setFuelStationOwnerName] = useState("");
    const [fuelStationEmail, setFuelStationEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);

    const validation = () => {
        let hasError = false;

        if (!fuelStationRegisterId || !fuelStationOwnerName || !fuelStationEmail || !password) {
            toast.error("Please fill all the fields");
            hasError = true;
        }

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(fuelStationEmail)) {
            toast.error("Invalid Email");
            hasError = true;
        }

        setError(hasError);
        return hasError; 
    };

    const handleCreation = async () => {
        const hasError = validation();
        if (hasError) return; 

        try {
            const response = await createFuelStation(fuelStationRegisterId, fuelStationOwnerName, fuelStationEmail, password);
            if (response) {
                toast.success("Fuel Station Created Successfully");

                setTimeout(() => navigate("/fuelStation"), 2000);
            }
        } catch (error) {
            toast.error("Failed to create fuel station");
            console.error("Creation Error:", error);
        }
    };

    return (
        <>
            <div>
                <h1>Registration of Fuel Station</h1>
            </div>

            <div>
                <h2>Registration Form</h2>

                <Input
                    type="text"
                    placeholder="Fuel Station Registration No"
                    value={fuelStationRegisterId}
                    onChange={(e) => setFuelStationRegisterId(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="Owner Name"
                    value={fuelStationOwnerName}
                    onChange={(e) => setFuelStationOwnerName(e.target.value)}
                />

                <Input
                    type="email"
                    placeholder="Fuel Station Email"
                    value={fuelStationEmail}
                    onChange={(e) => setFuelStationEmail(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="primary" onClick={handleCreation}>Register</Button>
            </div>
            <ToastContainer />
        </>
    );
};

export default FuelStationReg;
>>>>>>> 987e58b103fd17e11d60df8a7f81cc15c7203335
