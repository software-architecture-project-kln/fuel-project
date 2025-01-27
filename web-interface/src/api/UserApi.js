import axios from "axios";
import { createUserUri, userOtpUri } from "./Uri";


const createUserAPI = async (
    f_name,
    l_name,
    email,
    password,
    mobile
) => {
    let data = JSON.stringify({
        "f_name": f_name,
        "l_name": l_name,
        "email": email,
        "password": password,
        "mobile": mobile
    })

    let config = {
        "method": "POST",
        "url": createUserUri,
        "headers": {
            "Content-Type": "application/json"
            },
        "data": data 
    }

    try{
        let res = await axios.request(config);
        return res.data;

    }catch(error){
        console.log(error);
        return null
    }
}

const userOtpVerification = async(userId,otp) => {
    let data = JSON.stringify({
        "otp": otp
    });

    let uri = `${userOtpUri}/${userId}`;

    let config = {
        "method": "post",
        "url": uri,
        "headers": {
            "Content-Type": "application/json"
            },
        "data": data
    }

    try {
        let res = await axios.request(config);
        return res.data;
    }catch(err){
        console.log(err);
        return null;
    }
}


export {
    createUserAPI,
    userOtpVerification
}