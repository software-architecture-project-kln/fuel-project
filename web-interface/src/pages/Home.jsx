import { Button, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
    const navigate = useNavigate();

    const userLoginNavigation = () => navigate("/userLogin");
    const businessGovLogingNavigation = () => navigate("/businessLogin");
    const administratorLoginNavigation = () => navigate("/administrator");
    const fuelStationLoginNavigate = () => navigate("/fuelStation");

    const userProfileNavigation = () => navigate("/userProfile");
    const businessGovNavigation = () => navigate("/businessGov/dashboard");
    const fuelStationNavigation = () => navigate("/fuelStation/dashboard");
    const administratorNavigation = () => navigate("/administrator/dashboard");

    const [loginUsers, setLoginUsers] = useState({});

    const fetchCredentials = () => {
        let updatedUsers = {};

        if (localStorage.getItem("userAccessToken")) {
            updatedUsers.user = JSON.parse(localStorage.getItem("userData") || "{}");
        }

        if (localStorage.getItem("businessAccessToken")) {
            updatedUsers.businessGov = JSON.parse(localStorage.getItem("businessGovData") || "{}");
        }

        if (localStorage.getItem("accessToken")) {
            updatedUsers.administrator = JSON.parse(localStorage.getItem("administratorData") || "{}");
        }

        if (localStorage.getItem("fuelStationAccessToken")) {
            updatedUsers.fuelStation = JSON.parse(localStorage.getItem("fuelStationData") || "{}");
        }

        setLoginUsers(updatedUsers);
    };

    useEffect(() => {
        fetchCredentials();
    }, []);

    const accountNavigation = () => {
        if (loginUsers.user) {
            userProfileNavigation();
        } else if (loginUsers.businessGov) {
            businessGovNavigation();
        } else if (loginUsers.fuelStation) {
            fuelStationNavigation();
        } else if (loginUsers.administrator) {
            administratorNavigation();
        }
    };

    const logOut = () => {
        if (loginUsers.user) {
            localStorage.removeItem("userAccessToken");
            localStorage.removeItem("userData");
        } else if (loginUsers.businessGov) {
            localStorage.removeItem("businessAccessToken");
            localStorage.removeItem("businessGovData");
        } else if (loginUsers.fuelStation) {
            localStorage.removeItem("fuelStationAccessToken");
            localStorage.removeItem("fuelStationData");
        } else if (loginUsers.administrator) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("administratorData");
        }
        setLoginUsers({}); 
    };

    const items = [
        {
            key: "1",
            label: "User",
            onClick: userLoginNavigation,
        },
        {
            key: "2",
            label: "Business Gov",
            onClick: businessGovLogingNavigation,
        },
        {
            key: "3",
            label: "Fuel Station",
            onClick: fuelStationLoginNavigate,
        },
        {
            key: "4",
            label: "Administrator",
            onClick: administratorLoginNavigation,
        },
    ];

    return (
        <div className="home-container">
            <header className="navbar">
                <div className="header-left">
                    <img 
                        src="src/assets/FuelIQ.png" 
                        alt="Home" 
                        className="logo-icon"
                        onClick={() => navigate('/')} 
                    />
                    <div className="logo">FuelIQ</div>
                </div>
                <div className="nav-buttons">
                    {Object.keys(loginUsers).length > 0 && (
                        <Button className="button" onClick={accountNavigation}>My Profile</Button>
                    )}
                    {Object.keys(loginUsers).length > 0 ? (
                        <Button className="button" onClick={logOut}>Log Out</Button>
                    ) : (
                        <Dropdown menu={{ items }} trigger={["hover"]}>
                            <Button className="nav-btn">Log In</Button>
                        </Dropdown>
                    )}
                </div>
            </header>
            <main className="welcome-section">
                <h2>WELCOME FUELIQ</h2>
                <img src="src/assets/FuelIQ.png" alt="FuelIQ Logo" className="logo-img" />
                <p>Your Fuel, Your Way</p>
            </main>
        </div>
    );
};

export default Home;