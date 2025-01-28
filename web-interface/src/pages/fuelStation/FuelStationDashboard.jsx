import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Flex } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { employeeCreate } from "../../api/Employee";
import { useNavigate } from "react-router-dom";
import ShowEmployeeFuelStation from "../../components/employee/showEmployeeFuelStation";
import FuelStationLogOutBtn from "./FuelStationLogOutBtn";
import "../../style/FuelStationDashboard.css";
import FuelStationDetail from "./fuelStationDatail";
import { Header } from "antd/es/layout/layout";
import logo from "../../assets/FuelIQ.png";


const FuelStationDashboard = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [fuelStation, setFuelStation] = useState({});
    const [employeeUsername, setEmployeeUsername] = useState("");
    const [password, setPassword] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [error, setError] = useState("");
    const [showModel, setShowModel] = useState(false);

    useEffect(() => {
        setToken(localStorage.getItem("fuelStationAccessToken"));
        const data = localStorage.getItem("fuelStationData");
        if (data) {
            setFuelStation(JSON.parse(data));
        }
    }, []);

    const formValidation = () => {
        setError(false);
        if (employeeUsername === "") {
            setError(true);
            toast.error("Employee username is required");
            return;
        }
        if (password === "") {
            setError(true);
            toast.error("Password is required");
            return;
        }
        if (employeeEmail === "") {
            setError(true);
            toast.error("Email is required");
            return;
        }
    };

    const handleCreation = async () => {
        formValidation();
        if (!error && token && fuelStation) {
            const response = await employeeCreate(employeeUsername, password, employeeEmail, fuelStation.fuelStationId, token);
            if (response) {
                navigate(0);
            } else {
                toast.error("Employee email already exists");
            }
        }
    };

    const showEmployeeForm = () => setShowModel(true);
    const cancel = () => {
        setEmployeeEmail("");
        setEmployeeUsername("");
        setPassword("");
        setShowModel(false);
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
                    <h1>Fuel Station Dashboard</h1>
                </div>
                <div className="header-right">
                    {token && fuelStation && (
                        <FuelStationDetail token={token} fuelStationData={fuelStation} />
                    )}
                    <FuelStationLogOutBtn />
                </div>
            </Header>

            <div >
                <Button className="createButton" type="primary" onClick={showEmployeeForm}>Create Employee</Button>

                {showModel && (
                    <Modal
                        onCancel={cancel}
                        title="Create Employee"
                        open={showModel}
                        onOk={handleCreation}
                    >
                        <Input placeholder="Employee Username" value={employeeUsername} onChange={(e) => setEmployeeUsername(e.target.value)} />
                        <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Input type="email" placeholder="Employee Email" value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} />
                    </Modal>
                )}

                {token && fuelStation && (
                    <ShowEmployeeFuelStation token={token} fuelstationId={fuelStation.fuelStationId} />
                )}
            </div>

            <ToastContainer />
        </>
    );
};

export default FuelStationDashboard;
