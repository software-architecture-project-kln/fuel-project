package com.kln.FuelBackend.dataTransferObject.response.fuelStationResponseDTO;


import java.util.UUID;

public class FuelStationResponseDTO {

    private UUID fuelStationId;

    private String fuelStationRegisterId;

    private String fuelStationOwnerName;

    private String fuelStationEmail;

    public FuelStationResponseDTO(UUID fuelStationId, String fuelStationRegisterId, String fuelStationOwnerName, String fuelStationEmail) {
        this.fuelStationId = fuelStationId;
        this.fuelStationRegisterId = fuelStationRegisterId;
        this.fuelStationOwnerName = fuelStationOwnerName;
        this.fuelStationEmail = fuelStationEmail;
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
}
