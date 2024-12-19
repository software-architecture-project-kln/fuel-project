package com.kln.FuelBackend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;

import java.util.Date;
import java.util.UUID;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID vehicleId;

    @Column(updatable = false,unique = true,nullable = false)
    private String vehicleRegisterId;

    @Column(updatable = false,unique = true,nullable = false)
    private String vehicleEngineNo;

    @Column(nullable = false)
    private String model;

    @Column(nullable = false)
    private Date yearOfManufacture;

    @Column(nullable = false, columnDefinition = "double default 0")
    @Min(0)
    private Double currentFuelCapacity;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User userId;

    @ManyToOne
    @JoinColumn(name = "vehicle_class_id", referencedColumnName = "vehicleClassId")
    private VehicleClasses vehicleClassId;

    public Vehicle(){}

    public Vehicle(UUID vehicleId,
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
