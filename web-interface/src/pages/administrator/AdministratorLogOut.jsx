import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const AdmnistratorLogOut = () => {

    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('administratorData');
        localStorage.removeItem("accessToken");
        navigate("/administrator");
    }
    return (
        <>
        <Button color="danger" variant="outlined" onClick={handleLogOut}>
            Logout
        </Button>
        </>
    )
}

export default AdmnistratorLogOut;