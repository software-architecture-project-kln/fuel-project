import React, { useState, useEffect } from 'react';
import {  Flex } from 'antd';
import ShowUserRegVehicle from '../components/user/ShowUserRegVehicle';
import UserLogout from '../components/user/UserLogout';
import { Header } from 'antd/es/layout/layout';
import '../style/UserProfile.css';
import UserAccInfo from '../components/user/UserAccInfo';
import { ToastContainer } from 'react-toastify';

const UserProfile = () => {

    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setToken(localStorage.getItem("userAccessToken"));
        const data = localStorage.getItem("userData");
        setUserData(JSON.parse(data));
    },[])

    return (
        <>
        <Header >
            <Flex>
                <h1>User Profile</h1>
                {
                    token && userData && (
                        <UserAccInfo token={token} userData={userData} />
                    )
                }
                <UserLogout />
            </Flex>
        </Header>
        
        <div>
            {
                token && userData && (
                    <ShowUserRegVehicle 
                        token={token}
                        userId={userData.userId}
                    />
                )
            }
        </div>
        <ToastContainer />
        </>
    )
}

export default UserProfile;
