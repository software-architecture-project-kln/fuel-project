package com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO;

import jakarta.validation.constraints.NotBlank;

public class FuelStationLoginRequestDTO {

    @NotBlank(message = "fuelStationRegisterId is required")
    private String fuelStationRegisterId;

    @NotBlank(message = "password is required")
    private String password;

    public FuelStationLoginRequestDTO(String fuelStationRegisterId, String password) {
        this.fuelStationRegisterId = fuelStationRegisterId;
        this.password = password;
    }

    public String getFuelStationRegisterId() {
        return fuelStationRegisterId;
    }

    public void setFuelStationRegisterId(String fuelStationRegisterId) {
        this.fuelStationRegisterId = fuelStationRegisterId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
