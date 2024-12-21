package com.kln.FuelBackend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

import java.util.UUID;

@Entity
@Table(
        name = "fuel_station",
        indexes = {
                @Index(name = "idx_email", columnList = "fuelStationEmail")
        }
)
public class FuelStation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(updatable = false,nullable = false)
    private UUID fuelStationId;

    @Column(nullable = false,unique = true,updatable = false)
    private String fuelStationRegisterId;

    @Column(nullable = false)
    private String fuelStationOwnerName;

    @Column(nullable = false,unique = true)
    @Email
    private String fuelStationEmail;

    @Column(nullable = false)
    private String password;

    public FuelStation(){

    }

    public FuelStation(
            String fuelStationRegisterId,
            String fuelStationOwnerName,
            String fuelStationEmail,
            String password
    ) {
        this.fuelStationRegisterId = fuelStationRegisterId;
        this.fuelStationOwnerName = fuelStationOwnerName;
        this.fuelStationEmail = fuelStationEmail;
        this.password = password;
    }

    public FuelStation(
            UUID fuelStationId,
            String fuelStationRegisterId,
            String fuelStationOwnerName,
            String fuelStationEmail,
            String password
    ) {
        this.fuelStationId = fuelStationId;
        this.fuelStationRegisterId = fuelStationRegisterId;
        this.fuelStationOwnerName = fuelStationOwnerName;
        this.fuelStationEmail = fuelStationEmail;
        this.password = password;
    }

    public UUID getFuelStationId() {
        return fuelStationId;
    }

    public void setFuelStationId(UUID fuelStationId) {
        this.fuelStationId = fuelStationId;
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
