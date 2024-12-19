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
    private Fuel fuelId;

    public VehicleClasses() {}

    public VehicleClasses(Integer vehicleClassId, String vehicleClassName, String maxCapacityPerWeek) {
        this.vehicleClassId = vehicleClassId;
        this.vehicleClassName = vehicleClassName;
        this.maxFuelCapacityPerWeek = maxCapacityPerWeek;
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
}
