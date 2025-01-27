import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Flex } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { employeeCreate } from "../../api/Employee";
import { useNavigate } from "react-router-dom";
import ShowEmployeeFuelStation from "../../components/employee/showEmployeeFuelStation";
import FuelStationLogOutBtn from "./FuelStationLogOutBtn";

const FuelStationDashboard = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState("");
    const [fuelStation, setFuelStation] = useState({});

    const [employeeUsername, setEmployeeUsername] = useState("");
    const [password, setPassword] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");

    const [error, setError] = useState("");
    const [showModel, setShowModel] = useState(false);

    const formValidation = () => {
        setError(false);

        if(employeeUsername === ""){
            setError(true);
            toast.error("employee username is required");
            return;
        }

        if(password === ""){
            setError(true);
            toast.error("password is required");
            return;
        }

        if(employeeEmail === ""){
            setError(true);
            toast.error("email is required");
            return;
        }
    }

    const handlecreation = async() => {
        formValidation();

        if(!error && token && fuelStation){
            
            const response = await employeeCreate(employeeUsername,password,employeeEmail,fuelStation.fuelStationId,token);
            console.log(response);
            if(response){
                navigate(0);
            }else{
                toast.error("employee email already exits");
                return;
            }
        }
    }

    const showEmployeeForm = () => {
        setShowModel(true);
    }

    const cansel = () => {
        setEmployeeEmail("");
        setEmployeeUsername("");
        setPassword("");
        setShowModel(false);
    }


    useEffect(() => {
        setToken(localStorage.getItem("fuelStationAccessToken"));
        const data = localStorage.getItem("fuelStationData");
        if (data) {
            setFuelStation(JSON.parse(data));  
        }
    }, []);

    return (
        <>
        <Flex >
            <h1>FuelStation dashboard</h1>  
            <FuelStationLogOutBtn />
        </Flex>
            
       
            

            <Button type="primary" onClick={showEmployeeForm} >Create Employee</Button>

            {
                showModel && (
                    <Modal
                        onCancel={cansel}
                        onClose={cansel}
                        title="Create Employee"
                        open={showModel}
                        onOk={handlecreation}
                    >

                        <div style={{ marginBottom: 16 }}>
                            <Input 
                                placeholder="Employee Username"
                                value={employeeUsername}
                                onChange={(e) => setEmployeeUsername(e.target.value)}
                            />
                        </div>

                        <div style={{ marginBottom: 16 }}>
                            <Input 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div style={{ marginBottom: 16 }}>
                            <Input 
                                type="email"
                                placeholder="Employee email"
                                value={employeeEmail}
                                onChange={(e) => setEmployeeEmail(e.target.value)}
                            />
                        </div>

                    </Modal>
                )
            }

            {
                token && fuelStation && (
                    <ShowEmployeeFuelStation token={token} fuelstationId={fuelStation.fuelStationId} />
                )
            }

            

            <ToastContainer />
        </>
    )
}

export default FuelStationDashboard;