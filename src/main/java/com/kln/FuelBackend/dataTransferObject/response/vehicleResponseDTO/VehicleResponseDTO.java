package com.kln.FuelBackend.dataTransferObject.response.vehicleResponseDTO;

import com.kln.FuelBackend.entity.User;
import com.kln.FuelBackend.entity.VehicleClasses;
import java.util.Date;
import java.util.UUID;

public class VehicleResponseDTO {

    private UUID vehicleId;

    private String vehicleRegisterId;

    private String vehicleEngineNo;

    private String model;

    private Date yearOfManufacture;

    private Double currentFuelCapacity;

    private User userId;

    private VehicleClasses vehicleClassId;

    public VehicleResponseDTO(){}

    public VehicleResponseDTO(
            UUID vehicleId,
            String vehicleRegisterId,
            String vehicleEngineNo,
            String model,
            Date yearOfManufacture,
            Double currentFuelCapacity,
            User userId,
            VehicleClasses vehicleClassId
    ) {
        this.vehicleId = vehicleId;
        this.vehicleRegisterId = vehicleRegisterId;
        this.vehicleEngineNo = vehicleEngineNo;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.currentFuelCapacity = currentFuelCapacity;
        this.userId = userId;
        this.vehicleClassId = vehicleClassId;
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

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public VehicleClasses getVehicleClassId() {
        return vehicleClassId;
    }

    public void setVehicleClassId(VehicleClasses vehicleClassId) {
        this.vehicleClassId = vehicleClassId;
    }
}
