import React, { useState } from "react";
import {Button, Input, Flex, Typography} from "antd";
import { toast, ToastContainer } from "react-toastify";
import { createBusinessGov, businessGovOtpVerification } from "../../api/businessGov";
import { useNavigate } from "react-router-dom";
import '../../style/BusinessGovReg.css';

const { Title } = Typography;



const BusinessGovReg = () => {

    const navigate = useNavigate();
    const [businessGovernmentId, setBusinessGovernmentId] = useState();
    const [businessGovRegNo, setBusinessGovRegNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

    const [error, setError] = useState();

    // verification

    const [otp,setOtp] = useState();

    const [showForm, setShowForm] = useState(true);
    const [success, setSuccess] = useState(false);

    const onChange = (text) => {
        console.log('onChange:', text);
        
        setOtp(parseInt(text));
      };
    
    const sharedProps = {
        onChange
      };

    const formValidation = () => {

        setError(false);

        if (businessGovRegNo === "") {
            toast.error("Business Government Registration Number is required");
            setError(true);
            return
        }

        if (email ===""){
            toast.error("Email is required");
            setError(true);
            return;
        }

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            toast.error("Invalid Email");
            setError(true);
            return;
        }

        if (password === ""){
            toast.error("Password is required");
            setError(true);
            return
        }

        if (mobile === ""){
            toast.error("Mobile Number is required");
            setError(true);
            return;
        }
    }

    const registerBusinessGov = async() => {
        formValidation();

        if(!error){
            const res = await createBusinessGov(businessGovRegNo,email,password,mobile);
            console.log(res);
            if(res){
                toast.success("Business Government Registration Number is successfully created");
                setShowForm(false);
                // verify the account
                setBusinessGovernmentId(res.data.businessGovernmentId);
            }
        }
    }

    const otpVerificationBusinessGov = async() => {
        if(businessGovernmentId && otp){
            const response = await businessGovOtpVerification(businessGovernmentId,otp);
            console.log(response);
            if(response){
                setSuccess(true);
                toast.success("OTP is successfully verified");
            }
        }else{
            toast.error("Please enter OTP or missing Business Government ID");
        }
    }

    const navigateBusinessGovLogin = () => {
        navigate("/businessLogin");
    }

    return (
        <>
        <h1>Business Goverment Registration - BRN </h1>

        {
            showForm ? (
                <div className="container">

                <Input
                        placeholder="Business Reg No"
                        value={businessGovRegNo}
                        onChange={(e) => {
                            setBusinessGovRegNo(e.target.value)
                        }}
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
                        placeholder="Mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <Button onClick={registerBusinessGov}>
                        Register
                    </Button>

                </div>
            ) : (

                !success ? (
                    <div className="container">
                        <Flex gap="middle" align="flex-start" vertical>
                            <Title level={5}>Enter OTP</Title>

                            <Input.OTP type="number" length={5} {...sharedProps}/>
                        </Flex>
                        <Button onClick={otpVerificationBusinessGov}>Vefify</Button>
                    </div>
                ):
                (
                    <div className="container2">
                        <h2>BRN number : {businessGovernmentId}</h2>
                        <Button onClick={navigateBusinessGovLogin}>Login BusinessGov account</Button>
                    </div>
                )

            )
        }

        

         <ToastContainer />
        </>
    )
}


export default BusinessGovReg;