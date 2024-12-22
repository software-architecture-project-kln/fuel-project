package com.kln.FuelBackend.dataTransferObject.response.employeeResponseDTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public class EmployeeResponseDTO {

    private UUID employeeId;
    private String employeeUsername;


    private String employeeEmail;


    private UUID fuelStationId;

    private Boolean employeeStatus;

    public EmployeeResponseDTO(UUID employeeId, String employeeUsername, String employeeEmail, UUID fuelStationId,Boolean employeeStatus) {
        this.employeeId = employeeId;
        this.employeeUsername = employeeUsername;
        this.employeeEmail = employeeEmail;
        this.fuelStationId = fuelStationId;
        this.employeeStatus = employeeStatus;
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

    public Boolean getEmployeeStatus() {
        return employeeStatus;
    }

    public void setEmployeeStatus(Boolean employeeStatus) {
        this.employeeStatus = employeeStatus;
    }
}
