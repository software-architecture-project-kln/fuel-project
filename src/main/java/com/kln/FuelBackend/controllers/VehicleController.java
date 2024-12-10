package com.kln.FuelBackend.controllers;

import com.kln.FuelBackend.services.vehicle.VehicleServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    private final VehicleServiceRepository vehicleServiceRepository;
    @Autowired
    public VehicleController(VehicleServiceRepository vehicleServiceRepository){
        this.vehicleServiceRepository = vehicleServiceRepository;
    }

    @GetMapping
    public String welcome(){
        return "HELLO WORLD";
    }
}
