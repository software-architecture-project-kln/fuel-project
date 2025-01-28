import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BusinessLogout = () => {

    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem("businessGovData");
        localStorage.removeItem("businessAccessToken");
        navigate("/businessLogin");
    }
    return (
        <>
        <Button color="danger" variant="outlined" onClick={handleLogout}>
            Logout
        </Button>
        </>
    )
}

export default BusinessLogout;