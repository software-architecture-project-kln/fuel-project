package com.kln.FuelBackend.dataTransferObject.response.employeeResponseDTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public class EmployeeResponseDTO {

    private UUID employeeId;
    private String employeeUsername;

    private String password;

    private String employeeEmail;


    private UUID fuelStationId;

    public EmployeeResponseDTO(UUID employeeId, String employeeUsername, String password, String employeeEmail, UUID fuelStationId) {
        this.employeeId = employeeId;
        this.employeeUsername = employeeUsername;
        this.password = password;
        this.employeeEmail = employeeEmail;
        this.fuelStationId = fuelStationId;
    }

    public UUID getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(UUID employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeUsername() {
        return employeeUsername;
    }

    public void setEmployeeUsername(String employeeUsername) {
        this.employeeUsername = employeeUsername;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmployeeEmail() {
        return employeeEmail;
    }

    public void setEmployeeEmail(String employeeEmail) {
        this.employeeEmail = employeeEmail;
    }

    public UUID getFuelStationId() {
        return fuelStationId;
    }

    public void setFuelStationId(UUID fuelStationId) {
        this.fuelStationId = fuelStationId;
    }
}
