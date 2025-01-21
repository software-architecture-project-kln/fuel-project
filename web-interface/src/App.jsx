
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/UserRegister';
import UserRegister from './pages/UserRegister';
import VehicleRegister from './pages/VehicleRegister';
import UserLogin from './pages/UserLogin';
import RegVehicle from './pages/RegVehicle';
import UserProfile from './pages/UserProfile';
import Error from './pages/Error';
import BusinessGovReg from './pages/businessGov/BusinessGovReg';
import BusinessLogin from './pages/businessGov/businessLogin';
import AdministratorLogin from './pages/administrator/AdministratorLogin';
import AdministratorDashboard from './pages/administrator/AdministratorDashboard';
import AdminProtectedPage from './components/AdminProtectPage';
import VehicleProtectedPage from './components/VehicleProtectPage';
import DashboardBusinessGov from './pages/businessGov/DashboardBusinessGov';
import BusinessProtectedPage from './components/BusinessProtectPage';
import FuelStationLogin from './pages/fuelStation/FuelStationLogin';
import FuelStationDashboard from './pages/fuelStation/FuelStationDashboard';
import FuelStationProtectPage from './components/FuelStationProtectPage';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userRegister" element={<UserRegister/>} />
          <Route path="/vehicleRegister" element={<VehicleRegister/>} />
          <Route path="/userLogin" element={<UserLogin/>} />

          <Route path="/regVehicle/:vehicleId" element={
            <VehicleProtectedPage>
                <RegVehicle/>
            </VehicleProtectedPage>   
          } />

          <Route path="/userProfile" element={
            <VehicleProtectedPage>
                <UserProfile/>
            </VehicleProtectedPage>  
          } />

          <Route path="/error" element={<Error/>} />

          <Route path='/businessGovReg' element={<BusinessGovReg/>} />
          <Route path='/businessLogin' element={<BusinessLogin/>} />
          <Route path='/businessGov/dashboard' element={
            <BusinessProtectedPage>
              <DashboardBusinessGov/>
            </BusinessProtectedPage>
            
          } />


          <Route path='/administrator' element={<AdministratorLogin/>} />

          <Route path='/administrator/dashboard' element={
            <AdminProtectedPage>
              <AdministratorDashboard/>
            </AdminProtectedPage>
          } />

          <Route path='/fuelStation' element={<FuelStationLogin />} />
          <Route path='/fuelStation/dashboard' element={
            <FuelStationProtectPage>
              <FuelStationDashboard/>
            </FuelStationProtectPage>
            
          } />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
