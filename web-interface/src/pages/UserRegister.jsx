import React from 'react';
import { useState } from "react";
import { Button, Input ,Flex, Typography} from 'antd';
import '../style/UserRegister.css'; 
import {toast, ToastContainer} from "react-toastify";
import { createUserAPI , userOtpVerification} from "../api/UserApi";
import { useNavigate } from "react-router-dom";


const { Title } = Typography;

const UserRegister = () => {

    const navigate = useNavigate();

    const [userId, setUserId] = useState();

    const [f_name, setF_name] = useState("");
    const [l_name, setL_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState();

    const [otp, setOtp] = useState();
    
    const [regSuccess, setRegSuccess] = useState(false);

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const onChange = (text) => {
        console.log('onChange:', text);
        try{
            setOtp(parseInt(text));
        }catch(e){
            console.log(e);
            toast.error("Pleace enter numbers");
            return
        }
        
    };
    
    const sharedProps = {
        onChange
    };

    const validateFields = () => {
        setError(false); 

        if (f_name.trim() === "" || l_name.trim() === "" || email.trim() === "" || password === "" || confirm_password === "" || mobile.trim() === "") {
            toast.error("All fields are required");
            setError(true);
            return;
        }

        if (password !== confirm_password) {
            toast.error("Password and Confirm Password must be the same");
            setError(true);
            return;
        }

        if (mobile.length !== 10) {
            toast.error("Mobile number should be 10 digits");
            setError(true);
            return;
        }

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            toast.error("Invalid Email");
            setError(true);
            return;
        }
    };

    const createUser = async () => {
        
        validateFields();
        console.log(error);
        if (!error) {
            const res = await createUserAPI(f_name, l_name, email, password, mobile);
            console.log(res);
            if (res) {
                setUserId(res.data.userId)
                toast.info("User created successfully");
                setRegSuccess(true);
            } else {
                toast.error("Error creating user");
            }
        }
    };

    const otpverifyUser = async() => {
        if(otp && userId){
            const response = await userOtpVerification(userId,otp);
            console.log(response);
            if(response){
                setRegSuccess(true);
                toast.success("User verified successfully");
                await delay(2000);
                navigate("/userLogin")
            }else{
                toast.error("Error verifying user");
            }
        }else{
            toast.error("Please enter OTP or missing User ID");
        }
    }

    return (
        <>
            <div className='register-container'>
            <h1>Register User</h1>

            <Input
                placeholder="First Name"
                value={f_name}
                onChange={(e) =>setF_name(e.target.value)}
            />
            <Input
                placeholder="Last Name"
                value={l_name}
                onChange={(e) => setL_name(e.target.value)}
            />
            <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                placeholder="Confirm Password"
                type="password"
                value={confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
            />
            <Input
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            <Button type="primary" onClick={createUser}>
                Register
            </Button>

            {
                regSuccess && (
                    <div className="container">
                        <Flex gap="middle" align="flex-start" vertical>
                            <Title level={6}>Enter OTP</Title>
                    
                            <Input.OTP  length={5} {...sharedProps}/>
                        </Flex>
                        <Button onClick={otpverifyUser}>Vefify</Button>
                    </div>
                ) 
            }
            </div>
            

            <ToastContainer/>
        </>
    );
};

export default UserRegister;
