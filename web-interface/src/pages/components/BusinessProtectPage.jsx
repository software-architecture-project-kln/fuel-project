import React from "react";
import { useNavigate } from "react-router-dom";

const BusinessProtectedPage = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("businessAccessToken");
    if (!token) {
      navigate("/businessLogin");
    }
  }, [navigate]);

  return <div>{children}</div>;
};

export default BusinessProtectedPage;