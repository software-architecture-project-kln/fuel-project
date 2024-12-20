package com.kln.FuelBackend.dataTransferObject.response.vehicleClassesResponseDTO;

import com.kln.FuelBackend.enums.VehicleClassName;

public class VehicleClassesResponseDTO {

    private Integer vehicleClassId;
    private VehicleClassName vehicleClassName;

    private Double maxFuelCapacityPerWeek;

    private Integer fuelId;


    public VehicleClassesResponseDTO() {
    }

    public VehicleClassesResponseDTO(Integer vehicleClassId, VehicleClassName vehicleClassName, Double maxFuelCapacityPerWeek, Integer fuelId) {
        this.vehicleClassId = vehicleClassId;
        this.vehicleClassName = vehicleClassName;
        this.maxFuelCapacityPerWeek = maxFuelCapacityPerWeek;
        this.fuelId = fuelId;
    }

    public Integer getVehicleClassId() {
        return vehicleClassId;
    }

    public void setVehicleClassId(Integer vehicleClassId) {
        this.vehicleClassId = vehicleClassId;
    }

    public VehicleClassName getVehicleClassName() {
        return vehicleClassName;
    }

    public void setVehicleClassName(VehicleClassName vehicleClassName) {
        this.vehicleClassName = vehicleClassName;
    }

    public Double getMaxFuelCapacityPerWeek() {
        return maxFuelCapacityPerWeek;
    }

    public void setMaxFuelCapacityPerWeek(Double maxFuelCapacityPerWeek) {
        this.maxFuelCapacityPerWeek = maxFuelCapacityPerWeek;
    }

    public Integer getFuelId() {
        return fuelId;
    }

    public void setFuelId(Integer fuelId) {
        this.fuelId = fuelId;
    }
}
