import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("userAccessToken");
        localStorage.removeItem("userData");
        navigate("/userLogin");
    }
    return(
        <div>
            <Button color="danger" variant="outlined" onClick={logout}>Logout</Button>
        </div>
    )
}

export default UserLogout;