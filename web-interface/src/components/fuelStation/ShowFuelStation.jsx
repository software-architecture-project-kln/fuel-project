import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { fuelStationGetAll } from "../../api/fuelStation";



const ShowFuelStation = () => {

    const [token, setToken] = useState("");
    const [fuelStations, setFuelStations] = useState([]);

    const fetchFuelStation = async() => {
        if(token){
            const response = await fuelStationGetAll(token);
            console.log(response);
            if(response){
                const updateResponse = response.data.map((fuelStation) =>{
                    return {
                        ...fuelStation,
                        key: fuelStation.fuelStationId
                    }
                });
                setFuelStations(updateResponse);
            }
        }
    }


    useEffect(()=>{
        setToken(localStorage.getItem("accessToken"));
    },[])

    useEffect(()=> {
        fetchFuelStation();
        
    },[token]);

    return (
        <>
            <Table dataSource={fuelStations} rowKey="fuelStationId" >
                <Table.Column title="Fuel Station Id" dataIndex="fuelStationId" key="fuelStationId" />
                <Table.Column title="Fuel Station Name" dataIndex="fuelStationRegisterId" key="fuelStationRegisterId" />
                <Table.Column title="Fuel Station Owner name" dataIndex="fuelStationOwnerName" key="fuelStationOwnerName" />
                <Table.Column title="Fuel Station email" dataIndex="fuelStationEmail" key="fuelStationEmail" />
            </Table>
        </>
    )
}

export default ShowFuelStation;