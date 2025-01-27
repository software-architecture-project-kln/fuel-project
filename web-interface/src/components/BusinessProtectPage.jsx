import React from "react";
import { useNavigate } from "react-router-dom";

const BusinessProtectedPage = ({ children }) => {
  const navigate = useNavigate();

<<<<<<< HEAD
  React.useEffect(() => {
    const token = localStorage.getItem("businessAccessToken");
    if (!token) {
=======
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
    const token = localStorage.getItem("businessAccessToken");
    if (!token && !validateToken(token)) {
>>>>>>> 987e58b103fd17e11d60df8a7f81cc15c7203335
      navigate("/businessLogin");
    }
  }, [navigate]);

  return <div>{children}</div>;
};

export default BusinessProtectedPage;