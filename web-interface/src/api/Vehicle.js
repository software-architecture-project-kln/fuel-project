import axios from "axios";
import { createvehicleUri, createVehicleBusinessUri, findBusinessGovVehicleUri, findUserVehicleUri } from "./Uri";


const createVehicle = async(
    vehicleRegisterId,
    vehicleEngineNo,
    model,
    yearOfManufacture,
    OwnerId,
    vehicleClassId,
    fuelId,
    token
) => {

    let data = JSON.stringify({
        "vehicleRegisterId": vehicleRegisterId,
        "vehicleEngineNo": vehicleEngineNo,
        "model": model,
        "yearOfManufacture": yearOfManufacture,
        "ownerId": OwnerId,
        "vehicleClassId": vehicleClassId,
        "fuelId": fuelId
    })

    let config = {
        "method": 'post',
        "url": createvehicleUri,
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        "data": data
    }

    try{
        const response = await axios.request(config);
        return response.data;
    }catch (err){
        console.log(err);
        return null;
    }

}

const createBusinessGovVehicle = async(
    vehicleRegisterId,
    vehicleEngineNo,
    model,
    yearOfManufacture,
    OwnerId,
    vehicleClassId,
    fuelId,
    token
) => {

    let data = JSON.stringify({
        "vehicleRegisterId": vehicleRegisterId,
        "vehicleEngineNo": vehicleEngineNo,
        "model": model,
        "yearOfManufacture": yearOfManufacture,
        "ownerId": OwnerId,
        "vehicleClassId": vehicleClassId,
        "fuelId": fuelId
    })

    let config = {
        "method": 'post',
        "url": createVehicleBusinessUri,
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        "data": data
    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch (err){
        console.log(err);
        return null;
    }

}

const findVehicleByBusinessId = async(businessId,token) => {

    let url = `${findBusinessGovVehicleUri}/${businessId}`;

    let config =  {
        "method": 'get',
        "url": url,
        "headers": {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch(e){
        console.log(e);
        return null;
    }
}

const findVehicleByUserId = async(userId,token) => {
    let url = `${findUserVehicleUri}/${userId}`;

    let config = {
        "method": 'get',
        "url": url,
        "headers": {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
            }

    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch(err){
        console.log(err);
        return null;
    }
}

const findVehicleByVehicleId = async(vehicleId,token) => {
    let url = `${createvehicleUri}/${vehicleId}`;

    let config = {
        "method": 'get',
        "url": url,
        "headers": {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
            }
    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}






export {
    createVehicle,
    createBusinessGovVehicle,
    findVehicleByBusinessId,
    findVehicleByUserId,
    findVehicleByVehicleId
}