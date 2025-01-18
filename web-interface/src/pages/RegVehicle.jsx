import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { QRCode, Space, Button } from 'antd';

const RegVehicle = () => {
    const { vehicleId } = useParams();
    const qrCodeRef = useRef(null); 

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
            <h1>National Fuel Pass</h1>
            <Space direction="vertical" size="large">
                <div ref={qrCodeRef}>
                    <QRCode
                        value={vehicleId}
                        size={200}
                        color="green"
                    />
                </div>
                <Button type="primary" onClick={handleDownload}>
                    Download QR Code
                </Button>
            </Space>
        </>
    );
};

export default RegVehicle;


