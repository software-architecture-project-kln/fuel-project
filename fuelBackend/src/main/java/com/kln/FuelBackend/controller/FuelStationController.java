package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.fuelStationRequestDTO.FuelStationRequestDTO;
import com.kln.FuelBackend.service.FuelStationService.FuelStationServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/fuelStation")
public class FuelStationController {

    private final FuelStationServiceRepository fuelStationServiceRepository;

    @Autowired
    public FuelStationController(FuelStationServiceRepository fuelStationServiceRepository) {
        this.fuelStationServiceRepository = fuelStationServiceRepository;
    }

    @PostMapping
    public ResponseEntity<?> createFuelStation(@RequestBody FuelStationRequestDTO fuelStationRequestDTO){
        return fuelStationServiceRepository.createFuelStation(fuelStationRequestDTO);
    }

    @GetMapping("/{fuelStationId}")
    public ResponseEntity<?> getFuelStationById(@PathVariable UUID fuelStationId){
        return fuelStationServiceRepository.getFuelStationById(fuelStationId);
    }

    @PutMapping("/{fuelStationId}")
    public ResponseEntity<?> updateFuelStation(@PathVariable UUID fuelStationId,@RequestBody FuelStationRequestDTO fuelStationRequestDTO){
        return fuelStationServiceRepository.updateFuelStation(fuelStationId,fuelStationRequestDTO);
    }

    @GetMapping
    public ResponseEntity<?> getAllFuelStation(){
        return fuelStationServiceRepository.getAllFuelStation();
    }

    @DeleteMapping("/{fuelStationId}")
    public ResponseEntity<?> deleteFuelStation(@PathVariable UUID fuelStationId){
        return fuelStationServiceRepository.deleteFuelStation(fuelStationId);
    }
}
