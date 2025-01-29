import React from "react";

import { useNavigate } from "react-router-dom";

const FuelStationProtectPage = ({ children }) => {
  const navigate = useNavigate();

  const validateToken = (token) => {
      if(!token){
        return false;
      }
  
      try{
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; 
        return decoded.exp > currentTime;
      }catch(e){
        return false;
      }
    }

  React.useEffect(() => {
    const token = localStorage.getItem("fuelStationAccessToken");
    if (!token && !validateToken(token)) {
      navigate("/fuelStation");
    }
  }, [navigate]);

  return <div>{children}</div>;
};

export default FuelStationProtectPage;