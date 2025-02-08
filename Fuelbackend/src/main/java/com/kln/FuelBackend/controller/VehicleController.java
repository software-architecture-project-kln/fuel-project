package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.vehicleRequestDTO.VehicleRequestDTO;
import com.kln.FuelBackend.service.vehicalService.VehicleServiceRepository;
import jakarta.validation.constraints.NotNull;
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
    @PostMapping("/businessGov")
    public ResponseEntity<?> createBusinessGovVehicle(@RequestBody VehicleRequestDTO vehicleRequestDTO){
        return vehicleServiceRepository.createBusinessGovVehicle(vehicleRequestDTO);
    }

    @GetMapping
    public ResponseEntity<?> getAllVehicle(){
        return vehicleServiceRepository.getAllVehicle();
    }

    @GetMapping("/{vehicleId}")
    public ResponseEntity<?> findVehicleById(@PathVariable UUID vehicleId){
        return vehicleServiceRepository.findVehicleById(vehicleId);
    }

    @PutMapping("/{vehicleId}")   // this is not implemented
    public ResponseEntity<?> updateVehicleCurrentFuelCapacity(
            @PathVariable UUID vehicleId,
            @RequestBody Map<String,Double> requestBody
    ){
        Double fuelCapacity = requestBody.get("fuelCapacity");
        return vehicleServiceRepository.updateVehicleCurrentFuelCapacity(vehicleId,fuelCapacity);
    }

    @GetMapping("/businessGovVehicle/{ownerId}")
    public ResponseEntity<?> findVehicleByBusinessId(@PathVariable Integer ownerId){
        return vehicleServiceRepository.findVehicleByBusinessID(ownerId);
    }

    @GetMapping("/userVehicle/{ownerId}")
    public ResponseEntity<?> findVehicleByUserId(@PathVariable Integer ownerId){
        return vehicleServiceRepository.findVehicleByUserId(ownerId);
    }

    @PatchMapping("{administratorId}")
    public ResponseEntity<?> resetAllVehicleCurrentFuelCapacity(@PathVariable Integer administratorId){
        return vehicleServiceRepository.resetAllVehicleCurrentFuelCapacity(administratorId);
    }


}
