import axios from "axios";
import { employeeUri, employeeFindFuelstationId } from "./Uri";

const employeeCreate = async(
    employeeUsername,
    password,
    employeeEmail,
    fuelStationId,
    token
) => {
    let data = JSON.stringify({
        "employeeUsername": employeeUsername,
        "password": password,
        "employeeEmail": employeeEmail,
        "fuelStationId": fuelStationId
    });

    let config = {
        method: 'post',
        url: employeeUri,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            data: data
    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

const employeeFindByFuelStation = async(fuelStationId,token) =>{
    let uri = `${employeeFindFuelstationId}/${fuelStationId}`

    let config = {
        "method": "get",
        "url": uri,
        "headers": {
            "Authorization": `Bearer ${token}`
            }
    }

    try{
        const res = await axios.request(config);
        return res.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

const employeeChangeStatus = async(employeeId, token) => {

    let url = `${employeeUri}/${employeeId}`

    let config = {
        "method": "patch",
        "url": url,
        "headers": {
            "Authorization": `Bearer ${token}`
            },      
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
    employeeCreate,
    employeeFindByFuelStation,
    employeeChangeStatus
}