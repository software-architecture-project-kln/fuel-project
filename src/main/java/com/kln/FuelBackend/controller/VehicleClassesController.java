package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.vehicleClassesRequestDTO.VehicleClassesRequestDTO;
import com.kln.FuelBackend.service.vehicleClassesService.VehicleClassesServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/vehicleClass")
public class VehicleClassesController {

    private final VehicleClassesServiceRepository vehicleClassesServiceRepository;

    @Autowired
    public VehicleClassesController(VehicleClassesServiceRepository vehicleClassesServiceRepository) {
        this.vehicleClassesServiceRepository = vehicleClassesServiceRepository;
    }

    @PostMapping
    public ResponseEntity<?> createVehicleClass(@RequestBody VehicleClassesRequestDTO vehicleClassesRequestDTO){
        return vehicleClassesServiceRepository.createVehicleClass(vehicleClassesRequestDTO);
    }

    @PutMapping("/{vehicleClassId}")
    public ResponseEntity<?> updateVehicleClassMaxFuelCapacityPerWeek(
            @PathVariable Integer vehicleClassId,
            @RequestBody Map<String,Double> requestBody
    ){
        Double maxFuelCapacityPerWeek = requestBody.get("maxFuelCapacityPerWeek");
        return vehicleClassesServiceRepository.updateVehicleClassMaxFuelCapacityPerWeek(
                vehicleClassId,
                maxFuelCapacityPerWeek
        );
    }

    @GetMapping
    public ResponseEntity<?> getAllVehicleClasses(){
        return vehicleClassesServiceRepository.getAllVehicleClasses();
    }

    @GetMapping("/{vehicleClassId}")
    public ResponseEntity<?> vehicleClassFindById(@PathVariable Integer vehicleClassId){
        return vehicleClassesServiceRepository.vehicleClassFindById(vehicleClassId);
    }
}
