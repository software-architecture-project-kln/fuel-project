package com.kln.FuelBackend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

import java.util.UUID;

@Entity
@Table(
        name = "employee"
)
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID employeeId;

    @Column(nullable = false,unique = true)
    private String employeeUsername;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false,unique = true)
    @Email
    private String employeeEmail;

    @Column(nullable = false)
    private Boolean employeeStatus;  // active -> true deactivate -> false

    @ManyToOne
    @JoinColumn(name = "fuel_station_id", referencedColumnName = "fuelStationId")
    private FuelStation fuelStation;

    public Employee(){}

    public Employee(String employeeUsername, String password, String employeeEmail, FuelStation fuelStation, Boolean employeeStatus) {
        this.employeeUsername = employeeUsername;
        this.password = password;
        this.employeeEmail = employeeEmail;
        this.fuelStation = fuelStation;
        this.employeeStatus = employeeStatus;
    }

    public Boolean getEmployeeStatus() {
        return employeeStatus;
    }

    public void setEmployeeStatus(Boolean employeeStatus) {
        this.employeeStatus = employeeStatus;
    }

    public FuelStation getFuelStation() {
        return fuelStation;
    }

    public void setFuelStation(FuelStation fuelStation) {
        this.fuelStation = fuelStation;
    }

    public Employee(
            UUID employeeId,
            String employeeUsername,
            String password,
            String employeeEmail,
            FuelStation fuelStation
    ) {
        this.employeeId = employeeId;
        this.employeeUsername = employeeUsername;
        this.password = password;
        this.employeeEmail = employeeEmail;
        this.fuelStation = fuelStation;
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

    public FuelStation getFuelStationId() {
        return fuelStation;
    }

    public void setFuelStationId(FuelStation fuelStationId) {
        this.fuelStation = fuelStationId;
    }
}
