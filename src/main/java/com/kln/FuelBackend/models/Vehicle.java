package com.kln.FuelBackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenericGenerator;


import java.util.Date;
import java.util.UUID;


@Entity
@Table(
        name = "vehicle",
        indexes = {
                @Index(name = "idx_engineNo",columnList = "engineNo")
        }
)
@Getter @Setter
public class Vehicle {
    @Id
    @Column(nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID regId;
    @Column(unique = true,nullable = false,updatable = false)
    private String engineNo;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private VehicleClass vehicleClass;
    @Column(nullable = false)
    private String model;
    @Column(nullable = false)
    private Date yearOfManufacture;

    public Vehicle(String engineNo, VehicleClass vehicleClass, String model, Date yearOfManufacture){

        this.engineNo = engineNo;
        this.vehicleClass = vehicleClass;
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
    }

    public String getEngineNo() {
        return engineNo;
    }

    public void setEngineNo(String engineNo) {
        this.engineNo = engineNo;
    }

    public UUID getRegId() {
        return regId;
    }

    public void setRegId(UUID regId) {
        this.regId = regId;
    }

    public String getModel() {
        return model;
    }

    public VehicleClass getVehicleClass() {
        return vehicleClass;
    }

    public void setVehicleClass(VehicleClass vehicleClass) {
        this.vehicleClass = vehicleClass;
    }

    public Date getYearOfManufacture() {
        return yearOfManufacture;
    }

    public void setYearOfManufacture(Date yearOfManufacture) {
        this.yearOfManufacture = yearOfManufacture;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Vehicle() {
    }
}
