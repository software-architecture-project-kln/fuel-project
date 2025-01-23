import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { findVehicleByUserId } from "../../api/Vehicle";


const ShowUserRegVehicle = ({token: prefToken, userId: prefUserId}) => {

    const navigate = useNavigate();
    const [token, setToken] = useState(prefToken || null);
    const [userId, setUserId] = useState(prefUserId || null);

    const [vehicles, setVehicles] = useState([]);

    const fetchUserVehicle = async() => {
        if(token && userId){
            const response = await findVehicleByUserId(userId,token);
            if(response){
                const updateVehicle = response.data.map(
                    (vehicle) => (
                        {
                            ...vehicle,
                            key: vehicle.vehicleId
                        }
                    )
                );
                setVehicles(updateVehicle);
            }
        }
    }

    useEffect(() => {
        fetchUserVehicle();
    },[token,userId]);

    return (
        <>

        <Table dataSource={vehicles} rowKey="vehicleId">
            <Table.Column title="Vehicle ID" dataIndex="vehicleId" key="vehicleId"/>
            <Table.Column title="Register Id" dataIndex="vehicleRegisterId" key="vehicleRegisterId"/>
            <Table.Column title="Engine No" dataIndex="vehicleEngineNo" key="vehicleEngineNo"/>
            <Table.Column title="model" dataIndex="model" key="model" />
            <Table.Column title="Current Capacity" dataIndex="currentFuelCapacity" key="currentFuelCapacity" />
            <Table.Column
                title="Show QR"
                key="action"
                render={(text, record) => (    
                    <Button onClick={() => navigate(`/regVehicle/${record.vehicleId}`)}>
                        Download Or Show QR
                    </Button>       
                )}
            />
        </Table>
        </>
    )
}

export default ShowUserRegVehicle;