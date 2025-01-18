import axios from "axios";
import { userAuthUri } from "./Uri";

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

export {
    userAuthentication
}