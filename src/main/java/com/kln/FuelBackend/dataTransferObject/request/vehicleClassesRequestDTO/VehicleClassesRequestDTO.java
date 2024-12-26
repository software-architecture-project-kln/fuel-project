package com.kln.FuelBackend.dataTransferObject.request.vehicleClassesRequestDTO;

import com.kln.FuelBackend.entity.Fuel;
import com.kln.FuelBackend.enums.VehicleClassName;
import jakarta.validation.constraints.NotBlank;


public class VehicleClassesRequestDTO {

    @NotBlank(message = "vehicleClassName is required")
    private VehicleClassName vehicleClassName;

    @NotBlank(message = "maxFuelCapacityPerWeek is required")
    private Double maxFuelCapacityPerWeek;

//    @NotBlank(message = "fuelId is required")
//    private Integer fuelId;

    public VehicleClassesRequestDTO() {
    }

    public VehicleClassesRequestDTO(VehicleClassName vehicleClassName, Double maxFuelCapacityPerWeek, Integer fuelId) {
        this.vehicleClassName = vehicleClassName;
        this.maxFuelCapacityPerWeek = maxFuelCapacityPerWeek;
//        this.fuelId = fuelId;
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

//    public Integer getFuelId() {
//        return fuelId;
//    }
//
//    public void setFuelId(Integer fuelId) {
//        this.fuelId = fuelId;
//    }
}
