import axios from "axios";
import { userAuthUri, administratorAuthUri, businessGovAuthUri, fuelStationAuthUri } from "./Uri";

const userAuthentication = async(mobile, password) => {

    

    let data = JSON.stringify({
        "mobile": mobile,
        "password": password
    })

    let config = {
        'method': 'POST',
        'url': userAuthUri,
        'headers': {
            'Content-Type': 'application/json',
        },
        'data': data
    }

    try {
        let response = await axios.request(config);
        return response.data;

    }catch(error){

        console.error(error);
        return null;
    }
}

const administratorAuthentication = async(administratorUsername, password) =>{
    let data = JSON.stringify({
        "administratorUsername": administratorUsername,
        "password": password
    })

    let config = {
        'method': 'POST',
        'url': administratorAuthUri,
        'headers': {
            'Content-Type': 'application/json',
            },
        'data': data
    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

const businessGovAuthentication = async(businessGovernmentRegNo,password) => {
    let data = JSON.stringify({
        "businessGovernmentRegNo": businessGovernmentRegNo,
        "password": password
    })

    let config = {
        'method': 'POST',
        'url': businessGovAuthUri,
        'headers': {
            'Content-Type': 'application/json',
            },
            'data': data
    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch (error){
        console.log(error);
        return null;
    }
}

const fuelStationAuthentication = async(fuelStationRegisterId,password) => {
    let data = JSON.stringify({
        "fuelStationRegisterId": fuelStationRegisterId,
        "password": password
    });

    let config = {
        'method': 'POST',
        'url': fuelStationAuthUri,
        'headers': {
            'Content-Type': 'application/json',
            },
            'data': data
    }

   
}

export {
    userAuthentication,
    administratorAuthentication,
    businessGovAuthentication,
    fuelStationAuthentication
}