import axios from "axios";
import { vehicle_class_uri } from "./end_point";

const vehicleClassGetAll :any = async(token:string) => {

    let config = {
        "method": "get",
        "url": vehicle_class_uri,
        "headers": {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }

    try{
        const response:any = await axios.request(config);
        return response.data;
    }catch(err){
        console.log(err);
        return null;
    }
}

export {
    vehicleClassGetAll
}