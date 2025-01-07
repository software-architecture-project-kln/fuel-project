package com.kln.FuelBackend.dataTransferObject.request.vehicleRequestDTO;

import jakarta.validation.constraints.NotBlank;

import java.util.Date;

public class VehicleRequestDTO {

    @NotBlank(message = "vehicleRegisterId is required")
    private String vehicleRegisterId;

    @NotBlank(message = "vehicleEngineNo is required")
    private String vehicleEngineNo;

    @NotBlank(message = "model is required")
    private String model;

    @NotBlank(message = "yearOfManufacture is required")
    private Date yearOfManufacture;

    @NotBlank(message = "ownerId is required")
    private Integer ownerId;

    @NotBlank(message = "vehicleClassId is required")
    private Integer vehicleClassId;

    @NotBlank(message = "vehicleClassId is required")
    private Integer fuelId;

    public VehicleRequestDTO(){}

    public VehicleRequestDTO(
            String vehicleRegisterId,
            String vehicleEngineNo,
            String model,
            Date yearOfManufacture,
            Integer ownerId,
            Integer vehicleClassId,
            Integer fuelId
    ) {
        this.vehicleRegisterId = vehicleRegisterId;
        this.vehicleEngineNo = vehicleEngineNo;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.ownerId = ownerId;
        this.vehicleClassId = vehicleClassId;
        this.fuelId = fuelId;
    }

    public String getVehicleRegisterId() {
        return vehicleRegisterId;
    }

    public void setVehicleRegisterId(String vehicleRegisterId) {
        this.vehicleRegisterId = vehicleRegisterId;
    }

    public String getVehicleEngineNo() {
        return vehicleEngineNo;
    }

    public void setVehicleEngineNo(String vehicleEngineNo) {
        this.vehicleEngineNo = vehicleEngineNo;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Date getYearOfManufacture() {
        return yearOfManufacture;
    }

    public void setYearOfManufacture(Date yearOfManufacture) {
        this.yearOfManufacture = yearOfManufacture;
    }


    public Integer getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Integer ownerId) {
        this.ownerId = ownerId;
    }

    public Integer getVehicleClassId() {
        return vehicleClassId;
    }

    public void setVehicleClassId(Integer vehicleClassId) {
        this.vehicleClassId = vehicleClassId;
    }

    public Integer getFuelId() {
        return fuelId;
    }

    public void setFuelId(Integer fuelId) {
        this.fuelId = fuelId;
    }
}
