import React from "react";

import { useNavigate } from "react-router-dom";

const FuelStationProtectPage = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("fuelStationAccessToken");
    if (!token) {
      navigate("/fuelStation");
    }
  }, [navigate]);

  return <div>{children}</div>;
};

export default FuelStationProtectPage;