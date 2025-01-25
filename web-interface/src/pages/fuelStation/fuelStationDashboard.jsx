import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { employeeCreate } from "../../api/Employee";
import { useNavigate } from "react-router-dom";
import ShowEmployeeFuelStation from "../../components/employee/showEmployeeFuelStation";

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
