import axios from "axios";
import { fuel_uri } from "./end_point";


const fuelgetAll :any = async(token:string) => {
    let config ={
        "method": "get",
        "url": fuel_uri,
        "headers": {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }

    try{
        const response:any = await axios.request(config);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export {
    fuelgetAll
}