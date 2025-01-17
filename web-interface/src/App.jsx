import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {

  const[values, setValues] = useState({
    fuelStationName:'',
    fuelStationRegisterId:'',
    fuelStationOwnerName:'',
    email:'',
    password:'',
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('url',values)
    .then((response) => {
      console.log('Form submitted successfully:', response.data);
      alert('Registration successful!');
    })
    .catch((error) => {
      console.error('Error during form submission:', error);
      alert('Failed to register. Please try again.');
    });
  };

  const ResetFun = () => {
   setValues({fuelStationName:'', fuelStationRegisterId:'',fuelStationOwnerName:'',email:'', password:''})
  }

  return (
    <div className="container">
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="stationName">Station Name<span className="required">*</span></label>
        <input type="text" id="stationName" name="fuelStationName" placeholder='Enter Station Name' 
        onChange={(e) => handleChanges(e)} required value={values.fuelStationName}/>

        <label htmlFor="stationId">Station ID<span className="required">*</span></label>
        <input type="text" id="stationId" name="fuelStationRegisterId" placeholder='Enter Station ID'
        onChange={(e) => handleChanges(e)} required value={values.fuelStationRegisterId}/>

        <label htmlFor="ownerName">Owner Name<span className="required">*</span></label>
        <input type="text" id="ownerName" name="fuelStationOwnerName" placeholder='Enter Owner Name'
        onChange={(e) => handleChanges(e)} required value={values.fuelStationOwnerName}/>

        <label htmlFor="email">Email<span className="required">*</span></label>
        <input type="email" id="email" name="email" placeholder='Enter Email'
        onChange={(e) => handleChanges(e)} required value={values.email}/>

        <label htmlFor="password">Password<span className="required">*</span></label>
        <input type="password" id="password" name="password" placeholder='Enter Password'
        onChange={(e) => handleChanges(e)} required value={values.password}/>    

        <button type='button' onClick={ResetFun} disabled={
              !values.fuelStationName &&
              !values.fuelStationRegisterId &&
              !values.fuelStationOwnerName &&
              !values.email &&
              !values.password}>Reset</button> 
        <button type='submit'>Submit</button> 

      
      </form>
    </div>
 
  )
}

export default App
