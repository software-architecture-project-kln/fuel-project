import React from 'react';
import { useEffect, useState } from "react";
import { getAllFuel } from "../api/Fuel";
import { toast, ToastContainer } from "react-toastify";
import { getAllVehicleClasses } from "../api/VehicleClasses";
import { Button, Input, DatePicker, Radio, Flex } from 'antd';
import '../style/VehicleRegister.css'
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
        "A1": "car"
        
    }

    // fetch the fuel data

    const fuelDetails = async(token) => {

        const response = await getAllFuel(token);

        console.log(response.data);

        if(response){
            setFuel(response.data);
            
        }
        
    }

    // fetch the vehicleClasses
    const AllVehicleClasses = async(token) => {
        const response = await getAllVehicleClasses(token);

        console.log(response.data);

        if(response){
            SetVehicleClasses(response.data);
        }
    }

    const registerVehicle = async() => {
        setError(false);

        if(vehicleRegisterId === ""){
            setError(true);
            toast.error("vehicle register id is required");
            return;
        }

        if(vehicleEngineNo === ""){
            setError(true);
            toast.error("vehicle engine No is required");
            return;
        }

        if(model === ""){
            setError(true);
            toast.error("vehicle model is required");
            return;
        }

        // if(yearOfManufacture === ""){
        //     setError(true);
        //     toast.error("vehicle manufacture date is required");
        //     return;
        // }

        if(fuelId=== null){
            setError(true);
            toast.error("vehicle fuel is required");
            return;
        }

        if(vehicleClassId === null){
            setError(true);
            toast.error("vehicle class required");
            return;
        }

        // set the owner id
        if(user){
            const data = JSON.parse(user);
            setOwnerId(data.userId)
        }

        
        if(ownerId && (!error) && token){
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
                
                if (response){
                    toast.success("Vehicle created successfully");
                    
                    navigate("/regVehicle/"+response.data.vehicleId);
                }
            }catch (error){
                console.log(error);
                toast.error("Failed to create vehicle");
            }
        }
    }


    useEffect(()=>{
        const token = localStorage.getItem("userAccessToken");
        setToken(token);
        console.log(token);

        const user = localStorage.getItem("userData");
        console.log(user);
        setUser(user);

        if(token){
            fuelDetails(token);
            AllVehicleClasses(token);
        }
    },[])

    

    return(
        <>
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

        <DatePicker placeholder="Year Of Manufacture"  onChange={(e) => setYearOfManufacture(e)}/>

            <Flex>
                <Radio.Group
                    onChange={(e)=> {setVehicleClassId(e.target.value)}}
                >
                    {
                        vehicleClasses.map((item,index)=> {
                            return(
                                <Radio key={index} value={item.vehicleClassId}>{vehicleNames[item.vehicleClassName]}</Radio>
                                )
                        })
                    }

                </Radio.Group>
            </Flex>

            <Flex>
                <Radio.Group 
                    onChange={(e)=>{setFuelId(e.target.value)}}
                >
                    
                    {
                        fuel.map((item, index) => {
                            return(
                                <Radio key={index} value={item.fuelId}>{item.fuelName}</Radio>
                                )
                                })
                    }

                </Radio.Group>
            </Flex>
        
        <br></br>
        <Button onClick={registerVehicle}>
            Register Vehicle
        </Button>
        
        <ToastContainer />
        </>
    )
}

export default VehicleRegister;