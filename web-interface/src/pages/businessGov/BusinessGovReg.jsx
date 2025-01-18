import React, { useState } from "react";
import {Button, Input} from "antd";
import { toast, ToastContainer } from "react-toastify";
import { createBusinessGov } from "../../api/businessGov";


const BusinessGovReg = () => {

    const [businessGovRegNo, setBusinessGovRegNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

    const [error, setError] = useState();

    // verification

    const [otp,setOtp] = useState();

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

                // verify the account
            }
        }
    }

    return (
        <>
        <h1>Business Goverment Registration - BRN </h1>

        <Input
            placeholder="Business Reg No"
            value={businessGovRegNo}
            onChange={(e) => setBusinessGovRegNo(e.target.value)}
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

         <ToastContainer />
        </>
    )
}


export default BusinessGovReg;