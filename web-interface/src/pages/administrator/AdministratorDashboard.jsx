import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import ShowFuel from '../../components/fuel/ShowFuel';
import ShowVehicleClasses from '../../components/vehicleClasses/ShowVehicleClasses';
import CreateVehicleClass from '../../components/vehicleClasses/CreateVehicleClass';
import ShowFuelStation from '../../components/fuelStation/ShowFuelStation';
<<<<<<< HEAD
=======
import AdmnistratorLogOut from './AdministratorLogOut';
>>>>>>> 987e58b103fd17e11d60df8a7f81cc15c7203335

const { Header } = Layout;

const itemName = {
  1: "Fuel",
  2: "Vehicle Classes",
  3: "Fuel Station",
};

const items1 = [1, 2, 3].map((key) => ({
  key: `${key}`, 
  label: itemName[key],
}));

const AdministratorDashboard = () => {
  const [headerSelectedKey, setHeaderSelectedKey] = useState(1); 

  useEffect(() => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const selectedKey = urlParams.get('key');
    
    
    if (selectedKey && !isNaN(selectedKey)) {
      setHeaderSelectedKey(parseInt(selectedKey));
    }
  }, []); 

  useEffect(() => {
    console.log("Selected Key:", headerSelectedKey);
  }, [headerSelectedKey]);

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[`${headerSelectedKey}`]} 
          items={items1}
          onClick={(e) => setHeaderSelectedKey(parseInt(e.key))} 
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
<<<<<<< HEAD
=======
        <AdmnistratorLogOut />
>>>>>>> 987e58b103fd17e11d60df8a7f81cc15c7203335
      </Header>

      
      {headerSelectedKey === 1 && <ShowFuel />}
      {headerSelectedKey === 2 && (
        <>
          <ShowVehicleClasses />
          <CreateVehicleClass />
        </>
      )}

      {
        headerSelectedKey === 3 && <ShowFuelStation />
      }
    </Layout>
  );
};

export default AdministratorDashboard;
