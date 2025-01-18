const url = "http://localhost:8080/api";

// user

const createUserUri = `${url}/v1/user`

// fuel

const getAllFuellUri = `${url}/v1/fuel`

// vehicleClasses

const getAllVehicleClassesUri = `${url}/v1/vehicleClass`


// authentication

const userAuthUri = `${url}/v1/auth/userAuth`

// vehicle

const createvehicleUri = `${url}/v1/vehicle`

// business government

const createBusinessGovUri = `${url}/v1/businessGov`

export {
    createUserUri,
    userAuthUri,
    getAllFuellUri,
    getAllVehicleClassesUri,
    createvehicleUri,
    createBusinessGovUri
}