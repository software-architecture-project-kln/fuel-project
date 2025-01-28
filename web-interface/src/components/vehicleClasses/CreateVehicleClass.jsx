import React, { useEffect, useState } from "react";
import { Button, Flex, Modal, Select, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { createVehicleClass } from "../../api/VehicleClasses";
import { useNavigate } from "react-router-dom";


const options = [
    {
        value: 'A',
        label: 'A'
    },
    
    {
        value: 'B',
        label: 'B'
    },
    {
        value: 'B1',
        label: 'B1'
    },
    {
        value: 'C',
        label: 'C'
    },
    {
        value: 'C1',
        label: 'C1'
    },
    {
        value: 'CE',
        label: 'CE'
    },
    {
        value: 'D1',
        label: 'D1'
    },
    {
        value: 'D',
        label: 'D'
    },
    {
        value: 'G1',
        label: 'G1'
    },
    {
        value: 'G',
        label: 'G'
    },
    {
        value: 'J',
        label: 'J'
    },

]


const CreateVehicleClass = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState("");
    const [administrator, setAdministrator] = useState();

    const [showModel,setShowModel] = useState(false);

    const [vehicleClassName, setVehicleClassName] = useState("");
    const [maxFuelCapacityPerWeek, setMaxFuelCapacityPerWeek] = useState(0.00);
    const [maxFuelCapacityPerWeekForBusinessGov, setMaxFuelCapacityPerWeekForBusinessGov] = useState(0.00);

    

    const formValidation = () => {
        let hasError = false; 
    
        if (vehicleClassName === "") {
            toast.error("Vehicle class is required");
            hasError = true;
        }
    
        if (maxFuelCapacityPerWeek === null || maxFuelCapacityPerWeek === "") {
            setMaxFuelCapacityPerWeek(0.00);
        }
    
        if (maxFuelCapacityPerWeekForBusinessGov === null || maxFuelCapacityPerWeekForBusinessGov === "") {
            setMaxFuelCapacityPerWeekForBusinessGov(0.00);
        }
    
        try {
            setMaxFuelCapacityPerWeek(parseFloat(maxFuelCapacityPerWeek));
            setMaxFuelCapacityPerWeekForBusinessGov(parseFloat(maxFuelCapacityPerWeekForBusinessGov));
        } catch (error) {
            toast.error("Max fuel capacity per week must be a number");
            hasError = true;
        }
    
        return !hasError; 
    };
    
    const handleCreatVehicleClass = async () => {
        if (!formValidation()) {
            return; 
        }
    
        const response = await createVehicleClass(vehicleClassName, maxFuelCapacityPerWeek, maxFuelCapacityPerWeekForBusinessGov, token);
        console.log(response);
    
        if (response) {
            setMaxFuelCapacityPerWeek(0.00);
            setMaxFuelCapacityPerWeekForBusinessGov(0.00);
            setShowModel(false);
            navigate(`/administrator/dashboard?key=2`, { replace: false });
            navigate(0);
            // toast.success("Vehicle Class created Successfully");
            
            
            // setTimeout(() => {
            //     navigate("/administrator/dashboard?key=2");
            // }, 2000);
        }else{
            toast.error("this class is already created");
        }
    };
    

    const handleClick = () => {
        setShowModel(true);
    }


    const cansel = () => {
        setMaxFuelCapacityPerWeek(0.00);
        setMaxFuelCapacityPerWeekForBusinessGov(0.00);
        setShowModel(false);
    }

    


    useEffect(() => {
        setToken(localStorage.getItem("accessToken"));
        setAdministrator(localStorage.getItem("administratorData"));
    },[])


    return (
        <>
        <Flex>
            <Button type="primary" block onClick={handleClick}>
                Create New Vehicle Class
            </Button>
        </Flex>

        {
            showModel && (
                <Modal
                    open={showModel}
                    title="Create New Vehicle Class"
                    onCancel={cansel}
                    onOk={handleCreatVehicleClass}
                >

                    <div style={{ marginBottom: 16 }}>
                        <label>Class Name: </label>
                        <Select options={options} onChange={(e) => setVehicleClassName(e)} />
                    </div>

                    <div style={{ marginBottom: 16 }}>
                        <label>Max Fuel Per Week: </label>
                        <Input type="number" value={maxFuelCapacityPerWeek}  onChange={(e)=> setMaxFuelCapacityPerWeek(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                        <label>Max Fuel Per Week For Business and Government: </label>
                        <Input type="number" value={maxFuelCapacityPerWeekForBusinessGov} onChange={(e)=> setMaxFuelCapacityPerWeekForBusinessGov(e.target.value)} />
                    </div>

                </Modal>
            )
        }

        
        </>
    )
}

export default CreateVehicleClass;