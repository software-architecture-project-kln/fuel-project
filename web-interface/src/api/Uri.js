const url = "http://localhost:8080/api";

// user

const createUserUri = `${url}/v1/user`
const userOtpUri = `${url}/v1/user/otp`

// fuel

const getAllFuellUri = `${url}/v1/fuel`
const updateFuelPriceUri = `${url}/v1/fuel`

// vehicleClasses

const getAllVehicleClassesUri = `${url}/v1/vehicleClass`
const createVehicleClassUri = `${url}/v1/vehicleClass`
const updateMaxFuelCapacityPerWeekUri = `${url}/v1/vehicleClass`
const updatemaxFuelBusinessGovUri = `${url}/v1/vehicleClass/updateBusinessGovMaxFuel`


// authentication

const userAuthUri = `${url}/v1/auth/userAuth`
const administratorAuthUri = `${url}/v1/auth/administratorAuth`
const businessGovAuthUri = `${url}/v1/auth/businessGovAuth`
const fuelStationAuthUri = `${url}/v1/auth/fuelStationAuth`

// vehicle

const createvehicleUri = `${url}/v1/vehicle`

// business government

const createBusinessGovUri = `${url}/v1/businessGov`
const otpBusinessGovUri = `${url}/v1/businessGov/otp`

// fuel station
const fuelStationUri = `${url}/v1/fuelStation`


// employee

const employeeUri = `${url}/v1/employee`
const employeeFindFuelstationId = `${url}/v1/employee/fuelStation`

export {
    createUserUri,
    userAuthUri,
    getAllFuellUri,
    getAllVehicleClassesUri,
    createvehicleUri,
    createBusinessGovUri,
    otpBusinessGovUri,
    userOtpUri,
    administratorAuthUri,
    businessGovAuthUri,
    updateFuelPriceUri,
    createVehicleClassUri,
    updateMaxFuelCapacityPerWeekUri,
    updatemaxFuelBusinessGovUri,
    fuelStationUri,
    fuelStationAuthUri,
    employeeUri,
    employeeFindFuelstationId
}