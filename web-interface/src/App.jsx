
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/UserRegister';
import UserRegister from './pages/UserRegister';
import VehicleRegister from './pages/VehicleRegister';
import UserLogin from './pages/UserLogin';
import RegVehicle from './pages/RegVehicle';
import UserProfile from './pages/UserProfile';
import Error from './pages/Error';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userRegister" element={<UserRegister/>} />
          <Route path="/vehicleRegister" element={<VehicleRegister/>} />
          <Route path="/userLogin" element={<UserLogin/>} />
          <Route path="/regVehicle/:vehicleId" element={<RegVehicle/>} />
          <Route path="/userProfile" element={<UserProfile/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
