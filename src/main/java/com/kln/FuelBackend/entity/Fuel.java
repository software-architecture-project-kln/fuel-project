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
    private String price;

    public Fuel(){}

    public Fuel(Integer fuelId, String fuelName, String price) {
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
