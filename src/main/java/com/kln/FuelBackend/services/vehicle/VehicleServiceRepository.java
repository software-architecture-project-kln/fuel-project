package com.kln.FuelBackend.services.vehicle;

import com.kln.FuelBackend.models.Vehicle;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface VehicleServiceRepository {
    public Vehicle findVehicleByRegId (UUID regID);
    public Vehicle findVehicleByEngineNo (String engineNo);

    public Vehicle createVehicle(Vehicle vehicle);
}
