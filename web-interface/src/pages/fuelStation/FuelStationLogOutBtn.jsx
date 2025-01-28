import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const FuelStationLogOutBtn = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("fuelStationAccessToken");
        localStorage.removeItem("fuelStationData");
        navigate("/");
    }
    return (
        <>
            <Button color="danger" variant="outlined"  onClick={handleLogout} >Logout</Button>
        </>
    )
}

export default FuelStationLogOutBtn;