import axios from "axios";
import { createBusinessGovUri, otpBusinessGovUri } from "./Uri";


const createBusinessGov = async(
    businessGovernmentRegNo,
    email,
    password,
    mobile
) => {

    let data = JSON.stringify(
        {
            "businessGovernmentRegNo": businessGovernmentRegNo,
            "email": email,
            "password": password,
            "mobile": mobile
        }
    )

    let config = {
        'method': 'post',
        'url': createBusinessGovUri,
        'headers': {
            'Content-Type': 'application/json',
        },
        'data': data
    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch (err){
        console.log(err);
        return null;
    }
}

const businessGovOtpVerification = async(businessGovernmentId,otp) => {
    let data = JSON.stringify({
        "otp": otp
    });

    let uri = `${otpBusinessGovUri}/${businessGovernmentId}`;

    let config = {
        'method': 'post',
        'url': uri,
        'headers': {
            'Content-Type': 'application/json'
        },
        'data': data
    }

    try{
        let response = await axios.request(config);
        return response.data;
    }catch(e){
        console.log(e);
        return null;
    }
}


export {
    createBusinessGov,
    businessGovOtpVerification
}