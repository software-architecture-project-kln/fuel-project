import axios from "axios";
import { fuelStationUri } from "./Uri";

const fuelStationGetAll = async(token) => {

    const config = {
        "method": "get",
        "url": fuelStationUri,
        "headers": {
            "Authorization": `Bearer ${token}`
            }
    }

    try{
        const res = await axios.request(config);
        return res.data;
    }catch(err){
        console.log(err);
        return null;
    }
}

const createFuelStation = async(
    fuelStationRegisterId,
    fuelStationOwnerName,
    fuelStationEmail,
    password  
) => {

    let data = JSON.stringify({
        "fuelStationRegisterId": fuelStationRegisterId,
        "fuelStationOwnerName": fuelStationOwnerName,
        "fuelStationEmail": fuelStationEmail,
        "password": password
    });

    let config = {
        "method": "post",
        "url": fuelStationUri,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": data
    }

    try {
        const res = await axios.request(config);
        return res.data;
    }catch(e){
        console.log(e);
        return null;
    }
}

const fuelStationUpdate = async(
    fuelStationId,
    fuelStationRegisterId,
    fuelStationOwnerName,
    fuelStationEmail,
    password,
    token
) => {
    let url = `${fuelStationUri}/${fuelStationId}`;

    let data = JSON.stringify(
        {
            "fuelStationRegisterId": fuelStationRegisterId,
            "fuelStationOwnerName": fuelStationOwnerName,
            "fuelStationEmail": fuelStationEmail,
            "password": password
        }
    )

    let config = {
        "method": "put",
        "url": url,
        "headers": {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
            },
        "data": data
    }

    try{
        const res = await axios.request(config);
        return res.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export {
    fuelStationGetAll,
    createFuelStation,
    fuelStationUpdate
}