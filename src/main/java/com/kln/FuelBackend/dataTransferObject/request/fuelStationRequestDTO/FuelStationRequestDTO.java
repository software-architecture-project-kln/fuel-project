package com.kln.FuelBackend.dataTransferObject.request.fuelStationRequestDTO;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public class FuelStationRequestDTO {

    @NotBlank(message = "fuelStationRegisterId is required")
    private String fuelStationRegisterId;

    @NotBlank(message = "fuelStationOwnerName is required")
    private String fuelStationOwnerName;

    @NotBlank(message = "fuelStationEmail is required")
    @Email
    private String fuelStationEmail;

    @NotBlank(message = "password is required")
    private String password;

    public FuelStationRequestDTO(String fuelStationRegisterId, String fuelStationOwnerName, String fuelStationEmail, String password) {
        this.fuelStationRegisterId = fuelStationRegisterId;
        this.fuelStationOwnerName = fuelStationOwnerName;
        this.fuelStationEmail = fuelStationEmail;
        this.password = password;
    }

    public String getFuelStationRegisterId() {
        return fuelStationRegisterId;
    }

    public void setFuelStationRegisterId(String fuelStationRegisterId) {
        this.fuelStationRegisterId = fuelStationRegisterId;
    }

    public String getFuelStationOwnerName() {
        return fuelStationOwnerName;
    }

    public void setFuelStationOwnerName(String fuelStationOwnerName) {
        this.fuelStationOwnerName = fuelStationOwnerName;
    }

    public String getFuelStationEmail() {
        return fuelStationEmail;
    }

    public void setFuelStationEmail(String fuelStationEmail) {
        this.fuelStationEmail = fuelStationEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
