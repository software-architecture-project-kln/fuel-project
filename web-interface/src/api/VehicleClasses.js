import axios from "axios";
import { getAllVehicleClassesUri } from "./Uri";

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

export {
    getAllVehicleClasses
}