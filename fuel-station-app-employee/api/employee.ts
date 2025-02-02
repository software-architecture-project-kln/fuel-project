import axios from "axios";
import { updating_fuel_capacity, employee_uri } from "./end_point";
import { Double, Float } from "react-native/Libraries/Types/CodegenTypes";


const update_fueling_vehicle: any = async(employeeId:string, vehicleId:string, fuelCapacity: number, token: string) => {

    let url: string = `${updating_fuel_capacity}/${employeeId}`;

    let data = JSON.stringify({
        "vehicleId": vehicleId,
        "fuelCapacity": fuelCapacity
    });

    let config = {
        "method": "PUT",
        "url": url,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
            },
            "data": data
    }

    try{
        const res: any = await axios.request(config);
        return res.data;
    }catch(e){
        console.log(e);
        return null;
    }
}

const employeeUpdateProfile: any = async(
    employeeUsername: string,
    employeeEmail: string,
    employeeId: string,
    token: string,
) => {
    let url: string = `${employee_uri}/${employeeId}`;

    let data = JSON.stringify({
        "employeeUsername": employeeUsername,
        "employeeEmail": employeeEmail,
    });

    let config = {
        "method": "PUT",
        "url": url,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        "data": data
    }

    try{
        const res: any = await axios.request(config);
        return res.data;
    }catch (err){
        console.log(err);
        return null;
    }
}

const employeeUpdatePassword: any = async(
    employeeId: string,
    password: string,
    token: string
) => {
    let url: string = `${employee_uri}/password/${employeeId}`;

    let data = JSON.stringify({
        "password": password
    });

    let config = {
        "method": "PUT",
        "url": url,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        "data": data
    }

    try{
        const res: any = await axios.request(config);
        return res.data;
    }catch (err){
        console.log(err);
        return null;
    }
}



export {
    update_fueling_vehicle,
    employeeUpdateProfile,
    employeeUpdatePassword
}