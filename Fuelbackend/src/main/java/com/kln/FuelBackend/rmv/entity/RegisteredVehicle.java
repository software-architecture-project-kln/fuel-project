package com.kln.FuelBackend.rmv.entity;

import jakarta.persistence.*;

@Entity
@Table(
        name = "registered_vehicle",
        indexes = {
                @Index(name = "idx_vehicle_register_id", columnList = "vehicleRegisterId"),
                @Index(name = "idx_vehicle_engine_no", columnList = "vehicleEngineNo")
        }
)
public class RegisteredVehicle {

    @Id
    @Column(nullable = false,unique = true,updatable = false)
    private String vehicleRegisterId;

    @Column(nullable = false,unique = true)
    private String vehicleEngineNo;

    public RegisteredVehicle() {
    }

    public RegisteredVehicle(String vehicleRegisterId, String vehicleEngineNo) {
        this.vehicleRegisterId = vehicleRegisterId;
        this.vehicleEngineNo = vehicleEngineNo;
    }

    public String getVehicleRegisterId() {
        return vehicleRegisterId;
    }

    public void setVehicleRegisterId(String vehicleRegisterId) {
        this.vehicleRegisterId = vehicleRegisterId;
    }

    public String getVehicleEngineNo() {
        return vehicleEngineNo;
    }

    public void setVehicleEngineNo(String vehicleEngineNo) {
        this.vehicleEngineNo = vehicleEngineNo;
    }
}
