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

