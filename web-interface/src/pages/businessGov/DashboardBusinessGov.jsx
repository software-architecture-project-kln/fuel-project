import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Flex, Radio, Layout } from "antd";
import { getAllFuel } from "../../api/Fuel";
import { getAllVehicleClasses } from "../../api/VehicleClasses";
import { toast, ToastContainer } from "react-toastify";
import { createBusinessGovVehicle } from "../../api/Vehicle";
import { useNavigate } from "react-router-dom";
import BusinessGovVehicleRegShow from "./BusinessGovVehicleRegShow";
import BusinessLogout from "./BusinessLogout";
import logo from "../../assets/FuelIQ.png";

const { Header } = Layout;

const DashboardBusinessGov = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [businessGovData, setBusinessGovData] = useState({});
    const [fuel, setFuel] = useState([]);
    const [vehicleClasses, setVehicleClasses] = useState([]);
    const [vehicleRegisterId, setVehicleRegisterId] = useState("");
    const [vehicleEngineNo, setVehicleEngineNo] = useState("");
    const [model, setModel] = useState("");
    const [yearOfManufacture, setYearOfManufacture] = useState("2000-10-12");
    const [vehicleClassId, setVehicleClassId] = useState("");
    const [fuelId, setFuelId] = useState("");
    const [showModal, setShowModel] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem("businessAccessToken");
        setToken(storedToken);
        const data = localStorage.getItem("businessGovData");
        if (data) {
            setBusinessGovData(JSON.parse(data));
        }
        if (storedToken) {
            fetchFuelDetails(storedToken);
            fetchAllVehicleClasses(storedToken);
        }
    }, []);

    const vehicleNames = {
        "A": "A",
        "A1": "A1",
        "B": "B",
        "B1": "B1",
        "C": "C",
        "C1": "C1",
        "D": "D",
        "D1": "D1",
        "J": "J",
        "G": "G",
        "CE": "CE",
        "G1": "G1"
    };

    const fetchFuelDetails = async (token) => {
        const response = await getAllFuel(token);
        if (response) {
            setFuel(response.data);
        }
    };

    const fetchAllVehicleClasses = async (token) => {
        const response = await getAllVehicleClasses(token);
        if (response) {
            setVehicleClasses(response.data);
        }
    };

    const validateInputs = () => {
        setError(false);
        if (!vehicleRegisterId || !vehicleEngineNo || !model || !vehicleClassId || !fuelId) {
            setError(true);
            toast.error("All fields are required");
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (validateInputs() && token) {
            const res = await createBusinessGovVehicle(
                vehicleRegisterId,
                vehicleEngineNo,
                model,
                yearOfManufacture,
                businessGovData.businessGovernmentId,
                vehicleClassId,
                fuelId,
                token
            );
            if (res) {
                toast.success("Vehicle Added Successfully");
                setShowModel(false);
                const vehicleId = res.data.vehicleId;
                if (vehicleId) {
                    navigate(`/regVehicle/${vehicleId}`);
                }
            }
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

            <Button type="primary" onClick={() => setShowModel(true)}>Register Business and Gov Vehicles</Button>
            
            <Modal
                title="Business And Gov Vehicle Registration"
                open={showModal}
                onCancel={() => setShowModel(false)}
                onOk={handleSubmit}
            >
                <Input placeholder="Vehicle Register ID" value={vehicleRegisterId} onChange={(e) => setVehicleRegisterId(e.target.value)} style={{ marginBottom: 16 }} />
                <Input placeholder="Vehicle Engine No" value={vehicleEngineNo} onChange={(e) => setVehicleEngineNo(e.target.value)} style={{ marginBottom: 16 }} />
                <Input placeholder="Vehicle Model" value={model} onChange={(e) => setModel(e.target.value)} style={{ marginBottom: 16 }} />
                
                <Flex style={{ marginBottom: 16 }}>
                    <Radio.Group onChange={(e) => setVehicleClassId(e.target.value)}>
                        {vehicleClasses.map((item, index) => (
                            <Radio key={index} value={item.vehicleClassId}>{vehicleNames[item.vehicleClassName]}</Radio>
                        ))}
                    </Radio.Group>
                </Flex>

                <Flex>
                    <Radio.Group onChange={(e) => setFuelId(e.target.value)}>
                        {fuel.map((item, index) => (
                            <Radio key={index} value={item.fuelId}>{item.fuelName}</Radio>
                        ))}
                    </Radio.Group>
                </Flex>
            </Modal>
            
            {token && businessGovData && (
                <BusinessGovVehicleRegShow token={token} businessId={businessGovData.businessGovernmentId} />
            )}
            
            <ToastContainer />
        </>
    );
};

export default DashboardBusinessGov