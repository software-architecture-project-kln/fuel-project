import React, { useState, useEffect } from "react";
import { getAllVehicleClasses, updateFuelCapacity, updateFuelCapacityBusinessGov } from "../../api/VehicleClasses";
import { Table, Button, Modal, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowVehicleClasses = () => {
    const [vehicleClasses, setVehicleClasses] = useState([]);
    const [token, setToken] = useState(null);
    const [administrator, setAdministrator] = useState(null);
    const [vehicleClassId, setVehiclassId] = useState(null);
    const [vehicleClassName, setVehicleClassName] = useState("");
    const [maxFuelCapacityPerWeek, setMaxFuelCapacityPerWeek] = useState(null);
    const [maxFuelCapacityPerWeekForBusinessGov, setMaxFuelCapacityPerWeekForBusinessGov] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setToken(localStorage.getItem("accessToken"));
        setAdministrator(localStorage.getItem("administratorData"));
    }, []);

    useEffect(() => {
        if (token) retrieveVehicleClasses();
    }, [token]);

    const retrieveVehicleClasses = async () => {
        if (token) {
            const response = await getAllVehicleClasses(token);
            if (response) {
                setVehicleClasses(response.data.map(vc => ({ ...vc, key: vc.vehicleClassId })));
            }
        }
    };

    const handleUpdate = (data) => {
        setVehiclassId(data.vehicleClassId);
        setVehicleClassName(data.vehicleClassName);
        setMaxFuelCapacityPerWeek(data.maxFuelCapacityPerWeek);
        setMaxFuelCapacityPerWeekForBusinessGov(data.maxFuelCapacityPerWeekForBusinessGov);
        setShowModal(true);
    };

    const handleModalCancel = () => {
        setShowModal(false);
    };

    const handleUpdateFuelCapacity = async () => {
        if (token && administrator) {
            try {
                const adminData = JSON.parse(administrator);
                await updateFuelCapacity(maxFuelCapacityPerWeek, vehicleClassId, token);
                toast.success("Updated successfully.");
                setVehicleClasses(prev => prev.map(vc => vc.vehicleClassId === vehicleClassId ? { ...vc, maxFuelCapacityPerWeek } : vc));
            } catch (error) {
                toast.error("Failed to update.");
            }
        }
    };

    const handleUpdateFuelCapacityBusinessGov = async () => {
        if (token && administrator) {
            try {
                const adminData = JSON.parse(administrator);
                await updateFuelCapacityBusinessGov(maxFuelCapacityPerWeekForBusinessGov,vehicleClassId, token);
                toast.success("Updated successfully.");
                setVehicleClasses(prev => prev.map(vc => vc.vehicleClassId === vehicleClassId ? { ...vc, maxFuelCapacityPerWeekForBusinessGov } : vc));
            } catch (error) {
                toast.error("Failed to update.");
            }
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <Table dataSource={vehicleClasses} rowKey="vehicleClassId" bordered>
                <Table.Column title="Class Id" dataIndex="vehicleClassId" key="vehicleClassId" />
                <Table.Column title="Class Name" dataIndex="vehicleClassName" key="vehicleClassName" />
                <Table.Column title="Max Capacity Per Week" dataIndex="maxFuelCapacityPerWeek" key="maxFuelCapacityPerWeek" />
                <Table.Column title="Max Capacity Per Week (Business)" dataIndex="maxFuelCapacityPerWeekForBusinessGov" key="maxFuelCapacityPerWeekForBusinessGov" />
                <Table.Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Button type="primary" onClick={() => handleUpdate(record)}>Update</Button>
                    )}
                />
            </Table>

            <Modal
                open={showModal}
                title="Update Fuel Capacity"
                onCancel={handleModalCancel}
                footer={null}
            >
                <div style={{ marginBottom: 16 }}>
                    <label><strong>Class Name:</strong></label>
                    <Input value={vehicleClassName} disabled style={{ marginTop: 8 }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label><strong>Max Fuel Capacity Per Week:</strong></label>
                    <Input
                        type="number"
                        value={maxFuelCapacityPerWeek}
                        onChange={(e) => setMaxFuelCapacityPerWeek(e.target.value)}
                        style={{ marginTop: 8 }}
                    />
                    <Button type="primary" onClick={handleUpdateFuelCapacity} style={{ marginTop: 8, width: "100%" }}>Update</Button>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label><strong>Max Fuel Capacity Per Week (Business):</strong></label>
                    <Input
                        type="number"
                        value={maxFuelCapacityPerWeekForBusinessGov}
                        onChange={(e) => setMaxFuelCapacityPerWeekForBusinessGov(e.target.value)}
                        style={{ marginTop: 8 }}
                    />
                    <Button type="primary" onClick={handleUpdateFuelCapacityBusinessGov} style={{ marginTop: 8, width: "100%" }}>Update</Button>
                </div>
            </Modal>

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>
    );
};

export default ShowVehicleClasses;