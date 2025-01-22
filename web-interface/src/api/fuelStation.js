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

export {
    fuelStationGetAll
}