package com.kln.FuelBackend.dataTransferObject.response.vehicleResponseDTO;

import com.kln.FuelBackend.entity.BusinessGovernment;
import com.kln.FuelBackend.entity.User;
import com.kln.FuelBackend.entity.VehicleClasses;
import com.kln.FuelBackend.enums.OwnerType;

import java.util.Date;
import java.util.UUID;

public class VehicleResponseDTO {

    private UUID vehicleId;

    private String vehicleRegisterId;

    private String vehicleEngineNo;

    private String model;

    private Date yearOfManufacture;

    public OwnerType getOwnerType() {
        return ownerType;
    }

    public void setOwnerType(OwnerType ownerType) {
        this.ownerType = ownerType;
    }

    private Double currentFuelCapacity;

    private Integer ownerId;


    private Integer vehicleClassId;

    private Integer fuelId;

    private OwnerType ownerType;

    public VehicleResponseDTO(){}

    public VehicleResponseDTO(
            UUID vehicleId,
            String vehicleRegisterId,
            String vehicleEngineNo,
            String model,
            Date yearOfManufacture,
            Double currentFuelCapacity,
            Integer ownerId,
            Integer vehicleClassId,
            Integer fuelId,
            OwnerType ownerType
    ) {
        this.vehicleId = vehicleId;
        this.vehicleRegisterId = vehicleRegisterId;
        this.vehicleEngineNo = vehicleEngineNo;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.currentFuelCapacity = currentFuelCapacity;
        this.ownerId = ownerId;
        this.vehicleClassId = vehicleClassId;
        this.fuelId = fuelId;
        this.ownerType = ownerType;
    }

    public UUID getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(UUID vehicleId) {
        this.vehicleId = vehicleId;
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

    public Double getCurrentFuelCapacity() {
        return currentFuelCapacity;
    }

    public void setCurrentFuelCapacity(Double currentFuelCapacity) {
        this.currentFuelCapacity = currentFuelCapacity;
    }

    public Integer getUserId() {
        return ownerId;
    }

    public void setUserId(Integer userId) {
        this.ownerId = userId;
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
