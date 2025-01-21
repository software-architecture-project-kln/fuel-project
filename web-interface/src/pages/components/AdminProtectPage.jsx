import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminProtectedPage = ({ children }) => {
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
    
    const token = localStorage.getItem("accessToken");
    if (!token || !validateToken(token)) {
      navigate("/administrator");

    }
  }, [navigate]);

  return <div>{children}</div>;
};

export default AdminProtectedPage;
