package com.kln.FuelBackend.dataTransferObject.request;

import jakarta.validation.constraints.NotBlank;

public class FuelRequestDTO {

    @NotBlank(message = "fuelName is Required")
    private String fuelName;

    @NotBlank(message = "price is Required")
    private Double price;

    public FuelRequestDTO() {
    }

    public FuelRequestDTO(String fuelName, Double price) {
        this.fuelName = fuelName;
        this.price = price;
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
