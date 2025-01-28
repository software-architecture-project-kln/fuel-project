import React, { useState ,useEffect} from "react";
import { getAllVehicleClasses } from "../../api/VehicleClasses";
import { Table, Button, Modal, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { updateFuelCapacity, updateFuelCapacityBusinessGov } from "../../api/VehicleClasses";


const ShowVehicleClasses = () => {

    const [vehicleClasses, setVehicleClasses] = useState([]);

    const [token, setToken] = useState();
    const [administrator, setAdministrator] = useState();

    const [vehicleClassId, setVehiclassId] = useState();
    const [vehicleClassName, setVehicleClassName] = useState("");
    const [maxFuelCapacityPerWeek, setMaxFuelCapacityPerWeek] = useState();
    const [maxFuelCapacityPerWeekForBusinessGov, setMaxFuelCapacityPerWeekForBusinessGov] = useState();

    const [showModel, setShowModel] = useState(false);

    const retrieveVehicleClasses = async () => {
        if (token) {
            const response = await getAllVehicleClasses(token);
            if (response) {
                const VehicleClassesWithKey = response.data.map((vehicleClass) => ({
                    ...vehicleClass, 
                    key: vehicleClass.vehicleClassId 
                }));
                console.log(VehicleClassesWithKey)
                setVehicleClasses(VehicleClassesWithKey);
            }
        }
    };
    

    const handleUpdate = (data) => {
        console.log(data);
        setVehiclassId(data.vehicleClassId);
        setVehicleClassName(data.vehicleClassName);
        setMaxFuelCapacityPerWeek(data.maxFuelCapacityPerWeek);
        setMaxFuelCapacityPerWeekForBusinessGov(data.maxFuelCapacityPerWeekForBusinessGov);
        setShowModel(true);
    }

    const handleModalCancel = () => {
        setMaxFuelCapacityPerWeek();
        setMaxFuelCapacityPerWeekForBusinessGov();
        setVehicleClassName("");
        setVehiclassId();
        setShowModel(false);
        
    };

    const handleOk = () => {
        setMaxFuelCapacityPerWeek();
        setMaxFuelCapacityPerWeekForBusinessGov();
        setVehicleClassName("");
        setVehiclassId();
        setShowModel(false);
    }

    const handleUpdateFuelCapacity = async () => {
        if (token && administrator) {
            try {
                const data = JSON.parse(administrator);
                const response = await updateFuelCapacity(maxFuelCapacityPerWeek, data.administratorId, token);
                console.log(response);
                if (response) {
                    toast.success("Updated successfully.");
                    
                    const updatedVehicleClasses = vehicleClasses.map((vehicleClass) =>
                        vehicleClass.vehicleClassId === vehicleClassId
                            ? { ...vehicleClass, maxFuelCapacityPerWeek: maxFuelCapacityPerWeek }
                            : vehicleClass
                    );
    
                    setVehicleClasses(updatedVehicleClasses);
                }
            } catch (error) {
                console.error("Error updating fuel capacity:", error);
                toast.error("Failed to update.");
            }
        }
    };
    

    const handleUpdateFuelCapacityBusinessGov = async () => {
        if (token && administrator) {
            try {
                const data = JSON.parse(administrator);
                const response = await updateFuelCapacityBusinessGov(
                    maxFuelCapacityPerWeekForBusinessGov,
                    data.administratorId,
                    token
                );
                console.log(response);
                if (response) {
                    toast.success("Updated successfully.");
                    
                    // Ensure each vehicleClass is returned properly
                    const updatedVehicleClasses = vehicleClasses.map((vehicleClass) =>
                        vehicleClass.vehicleClassId === vehicleClassId
                            ? { ...vehicleClass, maxFuelCapacityPerWeekForBusinessGov: maxFuelCapacityPerWeekForBusinessGov }
                            : vehicleClass
                    );
    
                    setVehicleClasses(updatedVehicleClasses);
                }
            } catch (error) {
                console.error("Error updating fuel capacity:", error);
                toast.error("Failed to update.");
            }
        }
    };
    

    

    useEffect(()=> {
        setToken(localStorage.getItem("accessToken"));
        setAdministrator(localStorage.getItem("administratorData"));
    },[])

    useEffect(() => {
        retrieveVehicleClasses();
    },[token])

    return (
        <>

        <Table dataSource={vehicleClasses} rowKey="vehicleClassId">
                <Table.Column title="Class Id" dataIndex="vehicleClassId" key="vehicleClassId" />
                <Table.Column title="Class Name" dataIndex="vehicleClassName" key="vehicleClassName" />
                <Table.Column title="Max Capacity Per Week" dataIndex="maxFuelCapacityPerWeek" key="maxFuelCapacityPerWeek" />
                <Table.Column title="Max Capacity Per Week For business" dataIndex="maxFuelCapacityPerWeekForBusinessGov" key="maxFuelCapacityPerWeekForBusinessGov" />
                <Table.Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                            <Button onClick={() => handleUpdate(record)} >Update</Button>
                    )}
                />
        </Table>

        {
            showModel && (
                <Modal
                    onCancel={handleModalCancel}
                    open={showModel}
                    title="update fuel capacity per week"
                    onOk={handleOk}
                >

                    <div style={{ marginBottom: 16 }}>
                        <label>Class Name: </label>
                        <Input value={vehicleClassName} disabled />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>maxFuelCapacityPerWeek: </label>
                        <Input
                            type="number"
                            value={maxFuelCapacityPerWeek}
                            onChange={(e) => setMaxFuelCapacityPerWeek(e.target.value)}
                        />
                        <Button onClick={handleUpdateFuelCapacity}>
                            update
                        </Button>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>maxFuelCapacityPerWeekForBusinessGov: </label>
                        <Input
                            type="number"
                            value={maxFuelCapacityPerWeekForBusinessGov}
                            onChange={(e) => setMaxFuelCapacityPerWeekForBusinessGov(e.target.value)}
                        />
                        <Button onClick={handleUpdateFuelCapacityBusinessGov}>
                            update
                        </Button>
                    </div>

                </Modal>
            )
        }

        <ToastContainer />
        </>
    )
}

export default ShowVehicleClasses;