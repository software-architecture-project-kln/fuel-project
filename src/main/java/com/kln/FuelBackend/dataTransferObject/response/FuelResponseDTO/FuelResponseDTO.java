package com.kln.FuelBackend.dataTransferObject.response.FuelResponseDTO;

public class FuelResponseDTO {

    private Integer fuelId;

    private String fuelName;

    private Double price;

    public FuelResponseDTO() {
    }

    public FuelResponseDTO(Integer fuelId, String fuelName, Double price) {
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
