import { employee_login } from "../end_point";
import axios from "axios";

const employee_authentication = async (username: string, password: string) => {
    try {
        let data = JSON.stringify({
            username: username,
            password: password,
        });

        let config = {
            method: 'post',
            url: employee_login,
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        const response = await axios.request(config);
        return response.data; 
    } catch (error) {
        console.error("Login error:", error);
        throw error; 
    }
};

export { employee_authentication };
