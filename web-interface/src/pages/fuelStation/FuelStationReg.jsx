import React from "react";
import { Button, Input } from 'antd';

const FuelStationReg = () => {
    return (
                
            <div className="container">
              <h1>REGISTRATION</h1>
              <form onSubmit={handleSubmit}>
                
        
                <label htmlFor="stationId">Station ID<span className="required">*</span></label>
                <input type="text" id="stationId" name="fuelStationRegisterId" placeholder='Enter Station ID'
                onChange={(e) => handleChanges(e)} required value={values.fuelStationRegisterId}/>
        
                <label htmlFor="ownerName">Owner Name<span className="required">*</span></label>
                <input type="text" id="ownerName" name="fuelStationOwnerName" placeholder='Enter Owner Name'
                onChange={(e) => handleChanges(e)} required value={values.fuelStationOwnerName}/>
        
                <label htmlFor="email">Email<span className="required">*</span></label>
                <input type="email" id="email" name="fuelStationEmail" placeholder='Enter Email'
                onChange={(e) => handleChanges(e)} required value={values.email}/>
        
                <label htmlFor="password">Password<span className="required">*</span></label>
                <input type="password" id="password" name="password" placeholder='Enter Password'
                onChange={(e) => handleChanges(e)} required value={values.password}/>    
        
                <button type='button' onClick={ResetFun} disabled={
                      //!values.fuelStationName &&
                      !values.fuelStationRegisterId &&
                      !values.fuelStationOwnerName &&
                      !values.fuelStationEmail &&
                      !values.password}>Reset</button> 
                <button type='submit'>Submit</button> 
        
              
              </form>
            </div>
         
          
       
    )
}

export default FuelStationReg;