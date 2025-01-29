import { useState } from "react";
import { Button, Input } from "antd";
import { userAuthentication } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../style/UserLogin.css";  // Import the CSS file

const UserLogin = () => {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = async () => {
        if (!mobile || !password) {
            toast.error("Please enter both mobile number and password");
            return;
        }

        try {
            // Send data to the API
            const res = await userAuthentication(mobile, password);
            console.log(res);

            if (res.statusCode === 200) {
                toast.success("User logged in successfully");

                localStorage.setItem("userAccessToken", res.accessToken);
                localStorage.setItem("userData", JSON.stringify(res.data));

                navigate("/vehicleRegister");
            } else {
                toast.error("Invalid username or password");
            }
        } catch (err) {
            toast.error("API request failed");
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>User Login</h1>

                <Input
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="primary" onClick={userLogin}>
                    Login
                </Button>

                <Button type="primary" className="register-btn" onClick={() => navigate("/userRegister")}>
                    Register
                </Button>
            </div>
            <ToastContainer />
        </div>
    );
};




export default UserLogin;