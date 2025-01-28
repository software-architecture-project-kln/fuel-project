import axios from "axios";
import { vehicle_uri } from "./end_point";
import { UUID } from "crypto";

const vehicleFindById: any = async(vehicleId: UUID, token: string) => {

    let url: string = `${vehicle_uri}/${vehicleId}`;

    let config = {
        "method": "get",
        "url": url,
        "headers": {
            "Authorization": `Bearer ${token}`
            }
    }

    try{
        let res: any = await axios.request(config);
        return res.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export {
    vehicleFindById
}