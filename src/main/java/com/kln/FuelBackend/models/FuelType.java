package com.kln.FuelBackend.models;

import jakarta.persistence.*;

@Entity
@Table(
        name = "fuel_type"
)
public class FuelType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer fuelTypeId;

    @Column(nullable = false,unique = true)
    private String fuelType;

    @Column(nullable = true)
    private String description;

    public FuelType(){}

    public FuelType(String fuelType, String description){
        this.description = description;
        this.fuelType = fuelType;
    }

    public FuelType(Integer fuelTypeId ,String fuelType, String description){
        this.fuelTypeId = fuelTypeId;
        this.description = description;
        this.fuelType = fuelType;
    }

    public Integer getFuelTypeId() {
        return fuelTypeId;
    }

    public void setFuelTypeId(Integer fuelTypeId) {
        this.fuelTypeId = fuelTypeId;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "FuelType{" +
                "fuelTypeId=" + fuelTypeId +
                ", fuelType='" + fuelType + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
