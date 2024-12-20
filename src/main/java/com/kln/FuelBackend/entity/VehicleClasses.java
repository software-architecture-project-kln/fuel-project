package com.kln.FuelBackend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;

@Entity
@Table(
        name = "vehicle_classes"
)
public class VehicleClasses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Integer vehicleClassId;

    @Column(unique = true,nullable = false)
    private String vehicleClassName;

    @Column
    @Min(0)
    private String maxFuelCapacityPerWeek;

    @ManyToOne
    @JoinColumn
    private Fuel fuel;

    public VehicleClasses() {}

    public VehicleClasses(Integer vehicleClassId, String vehicleClassName, String maxFuelCapacityPerWeek, Fuel fuel) {
        this.vehicleClassId = vehicleClassId;
        this.vehicleClassName = vehicleClassName;
        this.maxFuelCapacityPerWeek = maxFuelCapacityPerWeek;
        this.fuel = fuel;
    }

    public Integer getVehicleClassId() {
        return vehicleClassId;
    }

    public void setVehicleClassId(Integer vehicleClassId) {
        this.vehicleClassId = vehicleClassId;
    }

    public String getVehicleClassName() {
        return vehicleClassName;
    }

    public void setVehicleClassName(String vehicleClassName) {
        this.vehicleClassName = vehicleClassName;
    }

    public String getMaxCapacityPerWeek() {
        return maxFuelCapacityPerWeek;
    }

    public void setMaxCapacityPerWeek(String maxCapacityPerWeek) {
        this.maxFuelCapacityPerWeek = maxCapacityPerWeek;
    }

    public String getMaxFuelCapacityPerWeek() {
        return maxFuelCapacityPerWeek;
    }

    public void setMaxFuelCapacityPerWeek(String maxFuelCapacityPerWeek) {
        this.maxFuelCapacityPerWeek = maxFuelCapacityPerWeek;
    }

    public Fuel getFuel() {
        return fuel;
    }

    public void setFuel(Fuel fuel) {
        this.fuel = fuel;
    }
}
