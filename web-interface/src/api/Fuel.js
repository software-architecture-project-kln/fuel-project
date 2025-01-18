import axios from "axios";

import { getAllFuellUri } from "./Uri";


const getAllFuel = async(token) => {

    let config = {
        "method": "GET",
        "url": getAllFuellUri,
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

export {getAllFuel}