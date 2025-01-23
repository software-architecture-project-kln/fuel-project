import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { findVehicleByBusinessId } from "../../api/Vehicle";
import { useNavigate } from "react-router-dom";



const BusinessGovVehicleRegShow = ({token: prefToken, businessId: prefBusinessId}) => {


    const navigate = useNavigate();
    const [token, setToken] = useState(prefToken || null);
    const [businessId, setBusinessId] = useState(prefBusinessId || null);
    const [vehicles, setVehicles] = useState([])

    const fetchVehicles = async() => {
        if(token && businessId){
            const response = await findVehicleByBusinessId(businessId,token);
            console.log(response);
            if(response){
                const updateResponse = response.data.map(
                    (vehicle) =>({
                        ...vehicle,
                        key: vehicle.vehicleId
                    })
                );
                setVehicles(updateResponse);
            }
        }
    }

    useEffect(()=>{
        fetchVehicles();
    },[token,businessId]);

    return (
        <>

        <Table
            pagination={false}
            dataSource={vehicles}
            rowKey="vehicleId"
        >
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
    );
}

export default BusinessGovVehicleRegShow;