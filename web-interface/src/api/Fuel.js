import axios from "axios";

import { getAllFuellUri, updateFuelPriceUri } from "./Uri";


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

const updateFuelPrice = async(administratorId,price,token) => {
    let data = JSON.stringify({
        "price": price
    })

    let url = `${updateFuelPriceUri}/${administratorId}`

    let config = {
        "method": "put",
        "url": url,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        "data": data
    }

    try {
        const response = await axios.request(config);
        return response.data;
    }catch(error){
        console.log(error);
        return null
    }
}
export {
    getAllFuel, 
    updateFuelPrice
}