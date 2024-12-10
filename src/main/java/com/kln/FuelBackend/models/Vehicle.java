package com.kln.FuelBackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
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
@NoArgsConstructor
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(nullable = false, unique = true)
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
}
