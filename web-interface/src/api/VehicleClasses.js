import axios from "axios";
import { getAllVehicleClassesUri, updateMaxFuelCapacityPerWeekUri, updatemaxFuelBusinessGovUri, createVehicleClassUri } from "./Uri";

const getAllVehicleClasses = async(token) => {
    let config = {
        "method": "GET",
        "url": getAllVehicleClassesUri,
        "headers": {
            "Authorization": `Bearer ${token}`
            }
    
    }

    try{
        const response = await axios.request(config);
        return response.data;
    }catch(error){
        console.error(error);
        return null;
    }
}

const updateFuelCapacity = async(maxFuelCapacityPerWeek,vehicleClassId,token) => {

    let data = JSON.stringify({
        "maxFuelCapacityPerWeek": maxFuelCapacityPerWeek
    })

    let url = `${updateMaxFuelCapacityPerWeekUri}/${vehicleClassId}`

    let config = {
        "method": "PUT",
        "url": url,
        "headers": {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        "data": data
    }

    try{
        let res = await axios.request(config);
        return res.data;
    }catch(error){
        console.log(error);
        return null
    }
}

const updateFuelCapacityBusinessGov = async(maxFuelCapacityPerWeekForBusinessGov,vehicleClassId,token) => {
    let data = JSON.stringify({
        "maxFuelCapacityPerWeekForBusinessGov": maxFuelCapacityPerWeekForBusinessGov
    })

    let url = `${updatemaxFuelBusinessGovUri}/${vehicleClassId}`

    let config = {
        "method": "PUT",
        "url": url,
        "headers": {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
            },
            "data": data
    }

    try{
        let res = await axios.request(config);
        return res.data;
    }catch(error){
        console.log(error);
        return null
    }
}

const createVehicleClass = async(
    vehicleClassName,
    maxFuelCapacityPerWeek,
    maxFuelCapacityPerWeekForBusinessGov,
    token

) => {
    let data = JSON.stringify({
        "vehicleClassName": vehicleClassName,
        "maxFuelCapacityPerWeek": maxFuelCapacityPerWeek,
        "maxFuelCapacityPerWeekForBusinessGov": maxFuelCapacityPerWeekForBusinessGov
    });

    let config ={
        "method": "POST",
        "url": createVehicleClassUri,
        "headers": {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
            },
            "data": data
    }

    try {
        const res = await axios.request(config);
        return res.data;
    }catch(err){
        console.log(err);
        return null;
    }
}

export {
    getAllVehicleClasses,
    updateFuelCapacityBusinessGov,
    updateFuelCapacity,
    createVehicleClass
}