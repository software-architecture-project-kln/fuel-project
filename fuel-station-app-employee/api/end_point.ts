const domain:string  = "http://localhost:8080/api";

// Employee login endpoint

const employee_login:string = `${domain}/v1/auth/employeeAuth`;
const updating_fuel_capacity: string = `${domain}/v1/employee/fuel`;


// Vehicle
const vehicle_uri : string = `${domain}/v1/vehicle`;

// fuel

const fuel_uri : string = `${domain}/v1/fuel`;

//vehicleClass
const vehicle_class_uri : string = `${domain}/v1/vehicleClass`;

export {
    employee_login,
    updating_fuel_capacity,
    vehicle_uri,
    fuel_uri,
    vehicle_class_uri
}