import React from "react";
import { useNavigate } from "react-router-dom";

const VehicleProtectedPage = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("userAccessToken");
    if (!token) {
      navigate("/userLogin");
    }
  }, [navigate]);

  return <div>{children}</div>;
};

export default VehicleProtectedPage;