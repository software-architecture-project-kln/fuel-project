import axios from "axios";
import { updating_fuel_capacity } from "./end_point";
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

export {
    update_fueling_vehicle
}