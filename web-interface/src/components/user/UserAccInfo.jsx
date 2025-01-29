import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import { UserUpdate } from "../../api/UserApi";
import { toast } from "react-toastify";

const UserAccInfo = ({token: prefToken, userData: prefUserData}) =>{

    const [token, setToken] = useState(prefToken || null);
    const [userData, setUserData] = useState(prefUserData || null);

    const [userId, setUserId] = useState();
    const [f_name, setF_name] = useState("");
    const [l_name, setL_name] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const [showModal, setShowModel] = useState(false);

    const handleModal = () => {
        setShowModel(!showModal);
    }

    const onOk = async() =>{
        if(f_name === "" || l_name === "" || email === "" || mobile ===""){
            toast.error("All fields are required");
            return
        }

        if(userId && token){
            const response = await UserUpdate(userId,f_name,l_name,email,mobile,token);
            console.log(response);
            if(response){
                setUserData(response.data);
                const data = JSON.stringify(response.data)
                localStorage.setItem("userData",data);
                toast.success("Update successfully");
                setShowModel(false);
            }
        }
        
    }

    const onCancel =() => {
        setUserId(userData.userId);
        setF_name(userData.f_name);
        setL_name(userData.l_name);
        setEmail(userData.email);
        setMobile(userData.mobile);
        setShowModel(false);
    }


    useEffect(()=> {
        setUserId(userData.userId);
        setF_name(userData.f_name);
        setL_name(userData.l_name);
        setEmail(userData.email);
        setMobile(userData.mobile);
    },[token,userData])
    return (
        <>
            <a onClick={handleModal}>
                {
                    userData && token && (
                        f_name + " " + l_name
                    )
                }
            </a>


            {
                userData && token && (
                    <Modal
                        title="User Details"
                        open={showModal}
                        onCancel={onCancel}
                        onClose={onCancel}
                        onOk={onOk}
                    >
                        <div style={{ marginBottom: 16 }}>
                            <label>First Name: </label>
                                <Input 
                                    placeholder="First Name"
                                    value={f_name}
                                    onChange={(e) => setF_name(e.target.value)}
                                />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label>Last Name: </label>
                                <Input 
                                    placeholder="Last Name"
                                    value={l_name}
                                    onChange={(e) => setL_name(e.target.value)}
                                />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label>Email: </label>
                                <Input 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label>Mobile: </label>
                                <Input 
                                    placeholder="Mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                        </div>
                    </Modal>
                )
            }
            
        </>
    )
}

export default UserAccInfo;