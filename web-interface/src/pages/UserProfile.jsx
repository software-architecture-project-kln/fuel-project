import React, { useState, useEffect } from 'react';
import { Flex, Button } from 'antd';
import ShowUserRegVehicle from '../components/user/ShowUserRegVehicle';
import UserLogout from '../components/user/UserLogout';
import { Header } from 'antd/es/layout/layout';
import '../style/UserProfile.css';
import UserAccInfo from '../components/user/UserAccInfo';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const vehicleRegisterNavigation = () => {
        navigate("/vehicleRegister");
    }

    useEffect(() => {
        setToken(localStorage.getItem("userAccessToken"));
        const data = localStorage.getItem("userData");

        if (data) {
            try {
                const parsedData = JSON.parse(data);
                console.log("User Data:", parsedData); // Debugging
                setUserData(parsedData);
            } catch (error) {
                console.error("Error parsing userData:", error);
            }
        }
    }, []);

    return (
        <>
            <Header className="header">
                {/* Left Side: Logo + Title */}
                <div className="header-left">
                    <img 
                        src="src/assets/FuelIQ.png" 
                        alt="Home" 
                        className="logo-icon"
                        onClick={() => navigate('/')} 
                    />
                    <h1>User Profile</h1>
                </div>

                {/* Right Side: User Info + Logout */}
                <div className="header-right">
                {
                    token && userData && (
                        <UserAccInfo token={token} userData={userData} />
                    )
                }
                <UserLogout />
                </div>
            </Header>

            
            <div className="vehi-button">
            <Button type="primary" onClick={vehicleRegisterNavigation}>
                Vehicle Registration
            </Button>
            </div>
            

            <div>
                {token && userData && (
                    <ShowUserRegVehicle 
                        token={token}
                        userId={userData.userId}
                    />
                )}
            </div>
            <ToastContainer />
        </>
    )
}

export default UserProfile;