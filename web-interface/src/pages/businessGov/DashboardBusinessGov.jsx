import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Flex, Radio } from "antd";
import { getAllFuel } from "../../api/Fuel";
import { getAllVehicleClasses } from "../../api/VehicleClasses";
import { toast, ToastContainer } from "react-toastify";
import { createBusinessGovVehicle } from "../../api/Vehicle";
import { useNavigate } from "react-router-dom";
import BusinessGovVehicleRegShow from "./BusinessGovVehicleRegShow";
import BusinessLogout from "./BusinessLogout";
import { Header } from "antd/es/layout/layout";
import logo from "../../assets/FuelIQ.png";


const DashboardBusinessGov = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [businessGovData, setBusinessGovData] = useState({});
    const [fuel, setFuel] = useState([]);
    const [vehicleClasses, setVehicleClasses] = useState([]);
    const [vehicleRegisterId, setVehicleRegisterId] = useState();
    const [vehicleEngineNo, setVehicleEngineNo] = useState("");
    const [model, setModel] = useState("");
    const [yearOfManufacture, setYearOfManufacture] = useState("2000-10-12");
    const [vehicleClassId, setVehicleClassId] = useState("");
    const [fuelId, setFuelId] = useState();
    const [showModal, setShowModel] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const token = localStorage.getItem("businessAccessToken");
        setToken(token);
        const data = localStorage.getItem("businessGovData");
        if (data) {
            setBusinessGovData(JSON.parse(data));
        }
        if (token) {
            fuelDetails(token);
            AllVehicleClasses(token);
        }
    }, []);

    const vehicleNames = {
        "A": "Bike",
        "A1": "Car"
    };

    const fuelDetails = async (token) => {
        const response = await getAllFuel(token);
        if (response) {
            setFuel(response.data);
        }
    };

    const AllVehicleClasses = async (token) => {
        const response = await getAllVehicleClasses(token);
        if (response) {
            setVehicleClasses(response.data);
        }
    };

    return (
        <>
            <Header className="header">
                <div className="header-left">
                    <img 
                        src={logo} 
                        alt="Home" 
                        className="logo-icon"
                        onClick={() => navigate('/')} 
                    />
                    <h1>Business Government Dashboard</h1>
                </div>
                <div className="header-right">
                    <BusinessLogout />
                </div>
            </Header>
            <div >
                <Button type="primary" onClick={() => setShowModel(true)}>Register Business and Gov Vehicles</Button>
                <Modal
                    title="Business And Gov Vehicle Registration"
                    open={showModal}
                    onCancel={() => setShowModel(false)}
                    onOk={() => setShowModel(false)}
                >
                    <Input placeholder="Vehicle Register ID" value={vehicleRegisterId} onChange={(e) => setVehicleRegisterId(e.target.value)} />
                    <Input placeholder="Vehicle Engine No" value={vehicleEngineNo} onChange={(e) => setVehicleEngineNo(e.target.value)} />
                    <Input placeholder="Vehicle Model" value={model} onChange={(e) => setModel(e.target.value)} />
                </Modal>
                {token && businessGovData && (
                    <BusinessGovVehicleRegShow token={token} businessId={businessGovData.businessGovernmentId} />
                )}
            </div>
            <ToastContainer />
        </>
    );
};

export default DashboardBusinessGov;
