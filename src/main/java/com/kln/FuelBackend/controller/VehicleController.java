package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.vehicleRequestDTO.VehicleRequestDTO;
import com.kln.FuelBackend.service.vehicalService.VehicleServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/vehicle")
public class VehicleController {

    private final VehicleServiceRepository vehicleServiceRepository;

    @Autowired
    public VehicleController(VehicleServiceRepository vehicleServiceRepository) {
        this.vehicleServiceRepository = vehicleServiceRepository;
    }

    @PostMapping
    public ResponseEntity<?> createVehicle(@RequestBody VehicleRequestDTO vehicleRequestDTO){
        return vehicleServiceRepository.createVehicle(vehicleRequestDTO);
    }

    @GetMapping
    public ResponseEntity<?> getAllVehicle(){
        return vehicleServiceRepository.getAllVehicle();
    }

    @GetMapping("/{vehicleId}")
    public ResponseEntity<?> findVehicleById(@PathVariable UUID vehicleId){
        return vehicleServiceRepository.findVehicleById(vehicleId);
    }

    @PutMapping("/{vehicleId}")   // this is are not implemented
    public ResponseEntity<?> updateVehicleCurrentFuelCapacity(
            @PathVariable UUID vehicleId,
            @RequestBody Map<String,Double> requestBody
    ){
        Double fuelCapacity = requestBody.get("fuelCapacity");
        return vehicleServiceRepository.updateVehicleCurrentFuelCapacity(vehicleId,fuelCapacity);
    }



}
