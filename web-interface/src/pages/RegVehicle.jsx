import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QRCode, Space, Button } from 'antd';
import { findVehicleByVehicleId } from '../api/Vehicle';
import "../style/RegVehicle.css"

const RegVehicle = () => {
    const { vehicleId } = useParams();
    const qrCodeRef = useRef(null); 
    const [vehicle, setVehicle] = useState({});
    const [token, setToken] = useState("");

    const fetchVehicle = async() => {
        if(token && vehicleId){
            const response = await findVehicleByVehicleId(vehicleId, token);
            console.log(response);
            if(response){
                setVehicle(response.data);
            }
        }
    }

    useEffect(()=> {
        const token = localStorage.getItem("userAccessToken");
        setToken(token);
        if(!token){
           const token = localStorage.getItem("businessAccessToken");
           setToken(token);
        }  
    },[])

    useEffect(()=>{
        fetchVehicle();
    },[token,vehicleId]);

    const handleDownload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const width = 300;  
        const height = 300; 
        const qrSize = 200; 

        
        canvas.width = width;
        canvas.height = height;

        
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        
        context.font = '20px Arial';
        context.textAlign = 'center';
        context.fillStyle = 'black'; 
        context.fillText('National Fuel Pass', width / 2, 30);

        
        const qrCanvas = qrCodeRef.current.querySelector('canvas');
        context.drawImage(qrCanvas, (width - qrSize) / 2, 50, qrSize, qrSize);

        
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `National-Fuel-Pass-${vehicleId}-qrcode.png`;
        link.click();
    };

    return (
        <>  
            
            <div className="reg-vehicle-container">
                <h1 className="reg-vehicle-header">National Fuel Pass</h1>
                <label className="reg-vehicle-label">Vehicle Register No: {vehicle.vehicleRegisterId}</label> <br />
                <label className="reg-vehicle-label">Model: {vehicle.model}</label>

                <div className="qr-code-container" ref={qrCodeRef}>
                    <QRCode value={vehicleId} size={200} color="green" />
                </div>

                <button className="download-btn" onClick={handleDownload}>
                    Download QR Code
                </button>
            </div>

            
        </>
    );
};

export default RegVehicle;


