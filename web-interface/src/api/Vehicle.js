import axios from "axios";
import { createvehicleUri } from "./Uri";


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


export {
    createVehicle
}