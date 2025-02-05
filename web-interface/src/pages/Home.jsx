import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();

    const userRegisterNavigation = () => {
        navigate("/userRegister");
    }

    const userLoginNavigation = () => {
        navigate("/userLogin");
    }

    const businessGovRegNavigation = () => {
        navigate("/businessGovReg");
    }

    const businessGovLogingNavigation = () => {
        navigate("/businessLogin");
    }

    const administratorLoginNavigation = () => {
        navigate("/administrator");
    }

    const fuelStationRegistrationNavigation = () => {
        navigate("/fuelStationReg");
    }

    const fuelStationLoginNavigate = () => {
        navigate("/fuelStation");
    }
    return (
        <div className="home">
            <Button onClick={userRegisterNavigation}>
                User Register
            </Button>

            <Button onClick={userLoginNavigation}>
                User Login
            </Button>

            <Button onClick={businessGovRegNavigation}>
                Business and Gov Register
            </Button>

            <Button onClick={businessGovLogingNavigation}>
                Business and Gov Login
            </Button>

            <Button onClick={fuelStationRegistrationNavigation}>
                FuelStation Register
            </Button>

            <Button onClick={fuelStationLoginNavigate}>
                FuelStation Login
            </Button>

            <Button onClick={administratorLoginNavigation}>
                Administrator Login
            </Button>
        </div>
    )
}

export default Home;