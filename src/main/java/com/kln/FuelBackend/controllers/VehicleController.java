package com.kln.FuelBackend.controllers;

import com.kln.FuelBackend.models.Vehicle;
import com.kln.FuelBackend.services.vehicle.VehicleServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/vehicle")
public class VehicleController {

    private final VehicleServiceRepository vehicleServiceRepository;
    @Autowired
    public VehicleController(VehicleServiceRepository vehicleServiceRepository){
        this.vehicleServiceRepository = vehicleServiceRepository;
    }

    @GetMapping("/{regID}")
    public Vehicle findVehicleById(@PathVariable UUID regID){
        return vehicleServiceRepository.findVehicleByRegId(regID);
    }

    @PostMapping
    public Vehicle createVehicle(@RequestBody Vehicle vehicle){
        return vehicleServiceRepository.createVehicle(vehicle);
    }
}
