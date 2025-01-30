import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Flex, Radio } from "antd";
import { getAllFuel } from "../../api/Fuel";
import { getAllVehicleClasses } from "../../api/VehicleClasses";
import { toast, ToastContainer } from "react-toastify";
import { createBusinessGovVehicle } from "../../api/Vehicle";
import { useNavigate } from "react-router-dom";
import BusinessGovVehicleRegShow from "./BusinessGovVehicleRegShow";
import BusinessLogout from "./BusinessLogout";



const DashboardBusinessGov = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState("");
    const [businessGovData, setBusinessGovData] = useState({});

    const [fuel, setFuel] = useState([]);
    const [vehicleClasses, setVehicleClasses] = useState([]);

    const [vehicleRegisterId, setVehicleRegisterId] = useState();
    const [vehicleEngineNo, setVehicleEngineNo] = useState("");
    const [model, setModel] = useState("");
    const [ownerId, setOwnerId] = useState();
    const [yearOfManufacture, setYearOfManufacture] = useState("2000-10-12");
    const [vehicleClassId, setVehicleClassId] = useState("");
    const [fuelId, setFuelId] = useState();

    const [showModal, setShowModel] = useState(false);
    const [error, setError] = useState();

    const vehicleNames = {
        "A": "Bike",
        "A1": "car"
        
    }

    const fuelDetails = async(token) => {
    
            const response = await getAllFuel(token);
    
            console.log(response.data);
    
            if(response){
                setFuel(response.data);
                
            }
            
    }

    const AllVehicleClasses = async(token) => {
            const response = await getAllVehicleClasses(token);
    
            console.log(response.data);
    
            if(response){
                setVehicleClasses(response.data);
            }
    }

    const showing_reg_form = () => {
        setShowModel(true);
    }

    const close = () => {
        setShowModel(false);
    }

    const validation = () => {
        setError(false)
        if (vehicleRegisterId === "" || vehicleEngineNo === "" || model === "" || vehicleClassId === null || fuelId === null) {
            setError(true)
            toast.error("All fields are required");
            return;
            
        }
    }

    const handleSubmittion = async() => {
        validation();

        if(!error && token){
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
            console.log(res);
            if (res){
                toast.success("Vehicle Added Successfully");
                setShowModel(false);
                const vehicleId = res.data.vehicleId;
                if(vehicleId){
                    navigate(`/regVehicle/${vehicleId}`);
                }
                
            }
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("businessAccessToken");
        setToken(token);
        const data = localStorage.getItem("businessGovData");
        if(data){
            setBusinessGovData(JSON.parse(data));
        }

        if(token){
            fuelDetails(token);
            AllVehicleClasses(token);
        }
    },[])
    
    return (
        <>
        <div>
            <Flex>
                <h1>Business Government Dashboard</h1>
                <BusinessLogout />
            </Flex>
        
        </div>

        <Button type="primary" onClick={showing_reg_form}>Register Business and Gov Vehicles</Button>

        <div>
            <Modal
                title="Business And Gov Vehicle Registration"
                open={showModal}
                onClose={close}
                onCancel={close}
                onOk={handleSubmittion}

            >
                <div style={{ marginBottom: 16 }}>
                    <Input 
                        placeholder="Vehicle Register ID"
                        value={vehicleRegisterId}
                        onChange={(e) => setVehicleRegisterId(e.target.value)}
                    />
                </div>
                
                <div style={{ marginBottom: 16 }}>
                    <Input 
                        placeholder="Vehicle Engine No"
                        value={vehicleEngineNo}
                        onChange={(e) => setVehicleEngineNo(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <Input 
                        placeholder="Vehicle Model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: 16 }}>
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
                </div>

                <div style={{ marginBottom: 16 }}>
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
                </div>
            </Modal>
        </div>

        <div>
            {
                token && businessGovData && (
                    <BusinessGovVehicleRegShow
                        token={token}
                        businessId={businessGovData.businessGovernmentId}
                    />
                )
            }
        </div>
        <ToastContainer />
        </>
    )
}

export default DashboardBusinessGov;