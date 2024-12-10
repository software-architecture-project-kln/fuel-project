package com.kln.FuelBackend.services.vehicle;

import com.kln.FuelBackend.dataAccessObject.VehicleRepository;
import com.kln.FuelBackend.models.Vehicle;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@Log4j
public class VehicleService implements VehicleServiceRepository {

    private VehicleRepository vehicleRepository;


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
