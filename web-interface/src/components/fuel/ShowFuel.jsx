import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Input } from "antd";
import { getAllFuel, updateFuelPrice } from "../../api/Fuel";
import { ToastContainer, toast } from "react-toastify";

const ShowFuel = () => {
    const [fuels, setFuels] = useState([]);
    const [administrator, setAdministrator] = useState();
    const [token, setToken] = useState("");

    const [showModel, setShowModel] = useState(false);
    const [fuelId, setFuelId] = useState(null);
    const [fuelName, setFuelName] = useState("");
    const [fuelPrice, setFuelPrice] = useState(null);

    const retrieveFuelDetails = async () => {
        if (token) {
            const response = await getAllFuel(token);
            if (response) {
                const fuelDataWithKey = response.data.map((fuel) => ({
                    ...fuel,
                    key: fuel.fuelId,
                }));
                setFuels(fuelDataWithKey);
            }
        }
    };

    useEffect(() => {
        setToken(localStorage.getItem("accessToken"));
        setAdministrator(localStorage.getItem("administratorData"));
    }, []);

    useEffect(() => {
        retrieveFuelDetails();
    }, [token]);

    const handleUpdate = (record) => {
        setFuelId(parseInt(record.fuelId));
        setFuelName(record.fuelName);
        setFuelPrice(parseFloat(record.price));
        setShowModel(true);
    };

    const handleModalCancel = () => {
        setShowModel(false);
        setFuelId(null);
        setFuelName("");
        setFuelPrice(null);
    };

    const handleModalOk = async () => {
        setShowModel(false);

        if (token && administrator) {
            const data = JSON.parse(administrator);
            const response = await updateFuelPrice(data.administratorId, fuelPrice, token);
            if (response) {
                const updatedFuels = fuels.map((fuel) =>
                    fuel.fuelId === fuelId ? { ...fuel, price: fuelPrice } : fuel
                );
                setFuels(updatedFuels);
                setFuelId(null);
                setFuelName("");
                setFuelPrice(null);
                toast.info("Fuel price updated successfully");
            }
        }
    };

    return (
        <>
            <Table dataSource={fuels} rowKey="fuelId">
                <Table.Column title="Fuel Id" dataIndex="fuelId" key="fuelId" />
                <Table.Column title="Fuel Type" dataIndex="fuelName" key="fuelName" />
                <Table.Column title="Fuel Price" dataIndex="price" key="fuelPrice" />
                <Table.Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Button onClick={() => handleUpdate(record)}>Update</Button>
                    )}
                />
            </Table>

            {showModel && (
                <Modal
                    title="Update Fuel Details"
                    open={showModel}
                    onOk={handleModalOk}
                    onCancel={handleModalCancel}
                >
                    <div style={{ marginBottom: 16 }}>
                        <label>Fuel Id: </label>
                        <Input value={fuelId} disabled />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Fuel Type: </label>
                        <Input
                            value={fuelName}
                            onChange={(e) => setFuelName(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Fuel Price: </label>
                        <Input
                            type="number"
                            value={fuelPrice}
                            onChange={(e) => setFuelPrice(parseFloat(e.target.value))}
                        />
                    </div>
                </Modal>
            )}
            <ToastContainer />
        </>
    );
};

export default ShowFuel;


