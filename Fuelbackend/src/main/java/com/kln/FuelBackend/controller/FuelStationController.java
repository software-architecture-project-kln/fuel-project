package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.fuelStationRequestDTO.FuelStationRequestDTO;
import com.kln.FuelBackend.service.FuelStationService.FuelStationServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

//controller class for fuel station
@RestController
@RequestMapping("/api/v1/fuelStation")
public class FuelStationController {

     // Service repository
    private final FuelStationServiceRepository fuelStationServiceRepository;

    //Constructor for injecting the FuelStationServiceRepository dependency
    @Autowired
    public FuelStationController(FuelStationServiceRepository fuelStationServiceRepository) {
        this.fuelStationServiceRepository = fuelStationServiceRepository;
    }

    //Endpoint to create a new fuel station
    @PostMapping
    public ResponseEntity<?> createFuelStation(@RequestBody FuelStationRequestDTO fuelStationRequestDTO){
        return fuelStationServiceRepository.createFuelStation(fuelStationRequestDTO);
    }

    //Endpoint to retrieve a fuel station
    @GetMapping("/{fuelStationId}")
    public ResponseEntity<?> getFuelStationById(@PathVariable UUID fuelStationId){
        return fuelStationServiceRepository.getFuelStationById(fuelStationId);
    }
    
    //Endpoint to update an existing fuel station
    @PutMapping("/{fuelStationId}")
    public ResponseEntity<?> updateFuelStation(@PathVariable UUID fuelStationId,@RequestBody FuelStationRequestDTO fuelStationRequestDTO){
        return fuelStationServiceRepository.updateFuelStation(fuelStationId,fuelStationRequestDTO);
    }

    //Endpoint to retrieve all available fuel stations
    @GetMapping
    public ResponseEntity<?> getAllFuelStation(){
        return fuelStationServiceRepository.getAllFuelStation();
    }

    //Endpoint to delete a fuel station by its ID
    @DeleteMapping("/{fuelStationId}")
    public ResponseEntity<?> deleteFuelStation(@PathVariable UUID fuelStationId){
        return fuelStationServiceRepository.deleteFuelStation(fuelStationId);
    }
}
