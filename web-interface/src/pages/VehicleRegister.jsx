import React, { useEffect, useState } from 'react';
import { getAllFuel } from "../api/Fuel";
import { toast, ToastContainer } from "react-toastify";
import { getAllVehicleClasses } from "../api/VehicleClasses";
import { Button, Input, DatePicker, Radio, Flex } from 'antd';
import '../style/VehicleRegister.css';
import { createVehicle } from "../api/Vehicle";
import { useNavigate } from "react-router-dom";

const VehicleRegister = () => {
    const navigate = useNavigate();
    const [fuel, setFuel] = useState([]);
    const [vehicleClasses, SetVehicleClasses] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState();
    const [vehicleRegisterId, setVehicleRegisterId] = useState("");
    const [vehicleEngineNo, setVehicleEngineNo] = useState("");
    const [model, setModel] = useState("");
    const [yearOfManufacture, setYearOfManufacture] = useState("2020-10-18");
    const [ownerId, setOwnerId] = useState("");
    const [vehicleClassId, setVehicleClassId] = useState();
    const [fuelId, setFuelId] = useState();
    const [error, setError] = useState();

    const vehicleNames = {
        "A": "Bike",
        "A1": "Car"
    };

    const fuelDetails = async (token) => {
        const response = await getAllFuel(token);
        if (response) setFuel(response.data);
    };

    const AllVehicleClasses = async (token) => {
        const response = await getAllVehicleClasses(token);
        if (response) SetVehicleClasses(response.data);
    };

    const registerVehicle = async () => {
        setError(false);

        if (!vehicleRegisterId || !vehicleEngineNo || !model || !fuelId || !vehicleClassId) {
            setError(true);
            toast.error("All fields are required");
            return;
        }

        if (user) {
            const data = JSON.parse(user);
            setOwnerId(data.userId);
        }

        if (ownerId && !error && token) {
            try {
                const response = await createVehicle(
                    vehicleRegisterId,
                    vehicleEngineNo,
                    model,
                    yearOfManufacture,
                    ownerId,
                    vehicleClassId,
                    fuelId,
                    token
                );

                if (response) {
                    toast.success("Vehicle registered successfully");
                    navigate("/regVehicle/" + response.data.vehicleId);
                }
            } catch (error) {
                toast.error("Failed to create vehicle");
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("userAccessToken");
        setToken(token);
        setUser(localStorage.getItem("userData"));

        if (token) {
            fuelDetails(token);
            AllVehicleClasses(token);
        }
    }, []);

    return (
        <div className="vehicle-register-container">
            <h1>Vehicle Register</h1>

            <Input
                placeholder="Vehicle Reg Id"
                value={vehicleRegisterId}
                onChange={(e) => setVehicleRegisterId(e.target.value)}
            />

            <Input
                placeholder="Vehicle Engine No"
                value={vehicleEngineNo}
                onChange={(e) => setVehicleEngineNo(e.target.value)}
            />

            <Input
                placeholder="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
            />

            {/* <DatePicker placeholder="Year Of Manufacture" onChange={(e) => setYearOfManufacture(e)} /> */}

            <div className="radio-group">
                <h3>Select Vehicle Class:</h3>
                <Radio.Group onChange={(e) => setVehicleClassId(e.target.value)}>
                    {vehicleClasses.map((item, index) => (
                        <Radio key={index} value={item.vehicleClassId}>
                            {vehicleNames[item.vehicleClassName]}
                        </Radio>
                    ))}
                </Radio.Group>
            </div>

            <div className="radio-group">
                <h3>Select Fuel Type:</h3>
                <Radio.Group onChange={(e) => setFuelId(e.target.value)}>
                    {fuel.map((item, index) => (
                        <Radio key={index} value={item.fuelId}>
                            {item.fuelName}
                        </Radio>
                    ))}
                </Radio.Group>
            </div>

            <Button className="register-btn" onClick={registerVehicle}>
                Register Vehicle
            </Button>

            <ToastContainer />
        </div>
    );
};

export default VehicleRegister;
