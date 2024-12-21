package com.kln.FuelBackend.entity;

import jakarta.persistence.*;

@Entity
@Table(
        name = "fuel"
)
public class Fuel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Integer fuelId;

    @Column(nullable = false)
    private String fuelName;

    @Column(nullable = false)
    private Double price;

    public Fuel(){}

    public Fuel(String fuelName, Double price) {
        this.fuelName = fuelName;
        this.price = price;
    }

    public Fuel(Integer fuelId, String fuelName, Double price) {
        this.fuelId = fuelId;
        this.fuelName = fuelName;
        this.price = price;
    }

    public Integer getFuelId() {
        return fuelId;
    }

    public void setFuelId(Integer fuelId) {
        this.fuelId = fuelId;
    }

    public String getFuelName() {
        return fuelName;
    }

    public void setFuelName(String fuelName) {
        this.fuelName = fuelName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
