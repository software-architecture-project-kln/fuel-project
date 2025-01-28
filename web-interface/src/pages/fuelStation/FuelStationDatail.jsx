import React, { useEffect, useState } from "react";
import { Modal, Input } from "antd";
import { fuelStationUpdate } from "../../api/fuelStation";
import { toast } from "react-toastify";

const FuelStationDetail = ({fuelStationData :prefFuelStationData , token: prefToken}) => {

    const [token, setToken] = useState(prefToken || null);
    const [fuelStationData, setFuelStationData] = useState(prefFuelStationData || null);

    const [fuelStationId, setFuelStationId] = useState();
    const [fuelStationRegisterId, setFuelStationRegisterId] = useState();
    const [fuelStationOwnerName, setFuelStationOwnerName] = useState();
    const [fuelStationEmail, setFuelStationEmail] = useState();
    const [password, setPassword] = useState();
    const [showModal, setShowModel] = useState(false);

    const handleModel = () => {
        setShowModel(!showModal);
    }

    const onOk = async() => {

        if(fuelStationEmail && password){
            const response = await fuelStationUpdate(fuelStationId,fuelStationRegisterId,fuelStationOwnerName,fuelStationEmail,password,token);
            console.log(response);
            if(response){
                toast.success("Update Successfully");
                setPassword("")
                setShowModel(false);
                return
            }
        }
        toast.error("update Fail");
        setShowModel(false);
    }

    const onCancel = () => {
        setPassword("");
        setShowModel(false);
    }


    useEffect(()=>{
        setFuelStationRegisterId(fuelStationData.fuelStationRegisterId);
        setFuelStationId(fuelStationData.fuelStationId);
        setFuelStationOwnerName(fuelStationData.fuelStationOwnerName);
        setFuelStationEmail(fuelStationData.fuelStationEmail);
    },[fuelStationData,token]);

    return (
        <>

        <a onClick={handleModel}>
            {
                fuelStationData && (
                    fuelStationRegisterId
                )
            }
        </a>

        {
            token && fuelStationData && (
                <Modal
                    title="Fuel Station Details"
                    open={showModal}
                    onCancel={onCancel}
                    onClose={oncancel}
                    onOk={onOk}
                >
                    <div style={{ marginBottom: 16 }}>
                        <label>Fuel Station Register Id: </label>
                            <Input 
                                placeholder="Fuel Station Register Id"
                                value={fuelStationRegisterId}
                                onChange={(e) => setFuelStationRegisterId(e.target.value)}
                                disabled
                            />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Fuel Station Owner Name: </label>
                            <Input 
                                placeholder="Fuel Station Owner Name"
                                value={fuelStationOwnerName}
                                onChange={(e) => setFuelStationOwnerName(e.target.value)}
                                disabled
                            />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label>Email:</label>
                            <Input 
                                placeholder="Email"
                                value={fuelStationEmail}
                                onChange={(e) => setFuelStationEmail(e.target.value)}
                            />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label>Change Password:</label>
                            <Input 
                                placeholder="New Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                </Modal>
            )
        }
        </>
    )
}

export default FuelStationDetail;