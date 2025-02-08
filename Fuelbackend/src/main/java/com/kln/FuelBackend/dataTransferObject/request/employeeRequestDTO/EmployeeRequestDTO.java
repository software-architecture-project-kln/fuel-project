package com.kln.FuelBackend.dataTransferObject.request.employeeRequestDTO;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public class EmployeeRequestDTO {

    @NotBlank(message = "employeeUsername is required")
    private String employeeUsername;

    @NotBlank(message = "password is required")
    private String password;

    @NotBlank(message = "employeeEmail is required")
    @Email
    private String employeeEmail;

    @NotBlank(message = "fuelStationId is required")
    private UUID fuelStationId;

    public EmployeeRequestDTO(String employeeUsername,String password, String employeeEmail, UUID fuelStationId) {
        this.employeeUsername = employeeUsername;
        this.password = password;
        this.employeeEmail = employeeEmail;
        this.fuelStationId = fuelStationId;
    }

//    public EmployeeRequestDTO(String employeeUsername, String employeeEmail, UUID fuelStationId) {
//        this.employeeUsername = employeeUsername;
//        this.employeeEmail = employeeEmail;
//        this.fuelStationId = fuelStationId;
//    }

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
