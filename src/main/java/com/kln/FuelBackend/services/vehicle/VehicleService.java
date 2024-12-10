package com.kln.FuelBackend.services.vehicle;

import com.kln.FuelBackend.dataAccessObject.VehicleRepository;
import com.kln.FuelBackend.models.Vehicle;
import lombok.extern.log4j.Log4j2;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@Log4j2
public class VehicleService implements VehicleServiceRepository {

    private VehicleRepository vehicleRepository;

    public static Logger getLog() {
        return log;
    }


    @Autowired
    public VehicleService(VehicleRepository vehicleRepository){
        this.vehicleRepository = vehicleRepository;
    }

    @Override
    public Vehicle findVehicleByEngineNo(String engineNo) {
        return vehicleRepository.findByEngineNo(engineNo).orElseThrow(
                () -> new RuntimeException("Vehicle Not Found " + engineNo)
        );
    }

    @Override
    public Vehicle findVehicleByRegId(UUID regID) {
        return vehicleRepository.findById(regID).orElseThrow(
                () -> new RuntimeException("Vehicle Not Found " + regID)
        );
    }

    @Override

    public Vehicle createVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);

    }
}
