package com.kln.FuelBackend.services.vehicle;

import com.kln.FuelBackend.models.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class VehicleService implements VehicleServiceRepository {


    @Override
    public Vehicle findVehicleByEngineNo(String engineNo) {
        return null;
    }

    @Override
    public Vehicle findVehicleByRegId(UUID regID) {
        return null;
    }
}
