package com.kln.FuelBackend.entity;

import com.kln.FuelBackend.enums.VehicleClassName;
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

    @Enumerated(EnumType.STRING)
    @Column(unique = true,nullable = false)
    private VehicleClassName vehicleClassName;

    @Column
    @Min(0)
    private Double maxFuelCapacityPerWeek;

    @Column
    @Min(0)
    private Double maxFuelCapacityPerWeekForBusinessGov;



//    @ManyToOne
//    @JoinColumn(name = "fuel_id", referencedColumnName = "fuelId")
//    private Fuel fuel;

    public VehicleClasses() {}

    public VehicleClasses(
            VehicleClassName vehicleClassName,
            Double maxFuelCapacityPerWeek,
            Double maxFuelCapacityPerWeekForBusinessGov
    ) {
        this.vehicleClassName = vehicleClassName;
        this.maxFuelCapacityPerWeek = maxFuelCapacityPerWeek;
        this.maxFuelCapacityPerWeekForBusinessGov = maxFuelCapacityPerWeekForBusinessGov;
//        this.fuel = fuel;
    }

    public VehicleClasses(
            Integer vehicleClassId,
            VehicleClassName vehicleClassName,
            Double maxFuelCapacityPerWeek,
            Double maxFuelCapacityPerWeekForBusinessGov
    ) {
        this.vehicleClassId = vehicleClassId;
        this.vehicleClassName = vehicleClassName;
        this.maxFuelCapacityPerWeek = maxFuelCapacityPerWeek;
        this.maxFuelCapacityPerWeekForBusinessGov = maxFuelCapacityPerWeekForBusinessGov;
//        this.fuel = fuel;
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

    public Double getMaxFuelCapacityPerWeekForBusinessGov() {
        return maxFuelCapacityPerWeekForBusinessGov;
    }

    public void setMaxFuelCapacityPerWeekForBusinessGov(Double maxFuelCapacityPerWeekForBusinessGov) {
        this.maxFuelCapacityPerWeekForBusinessGov = maxFuelCapacityPerWeekForBusinessGov;
    }

    //    public Fuel getFuel() {
//        return fuel;
//    }
//
//    public void setFuel(Fuel fuel) {
//        this.fuel = fuel;
//    }
}
