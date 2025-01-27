import { useState } from "react";
import { Button, Input } from 'antd';
import { userAuthentication } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const UserLogin = () => {

    const navigate = useNavigate();
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();

    const userLogin = async() => {
        setError(false);

        if(mobile === "" || mobile === null){
            setError(true);
            return
        }
        if(password === "" || password === null){
            setError(true);
            return
        }

        if(!error){
            try {
                // Send data to the API
                const res = await userAuthentication(mobile,password)
                console.log(res);
                
                
                if (res.statusCode === 200) {
                    toast.info("User created successfully");
                    

                    localStorage.setItem("userAccessToken", res.accessToken);
                    localStorage.setItem("userData",JSON.stringify(res.data));

                    navigate("/vehicleRegister");

                } else {
                    toast.error("username or password is invalied");
                    return
                }
            } catch (err) {
                toast.error("API request failed");
                console.error(err);
            }
            
        }
<<<<<<< HEAD

=======
>>>>>>> 987e58b103fd17e11d60df8a7f81cc15c7203335
    }


    return (
        <>

        <h1>User Login</h1>

            <Input
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="primary" onClick={userLogin}>
                Login
            </Button>

            <ToastContainer />
        </>
    )
}


export default UserLogin;