package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.fuelRequestDTO.FuelRequestDTO;
import com.kln.FuelBackend.service.fuelService.FuelServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/fuel")
public class FuelController {

    private final FuelServiceRepository fuelServiceRepository;

    @Autowired
    public FuelController(FuelServiceRepository fuelServiceRepository) {
        this.fuelServiceRepository = fuelServiceRepository;
    }

    @PostMapping
    public ResponseEntity<?> createFuel(@RequestBody FuelRequestDTO fuelRequestDTO){
        return fuelServiceRepository.createFuel(fuelRequestDTO);
    }

    @GetMapping
    public ResponseEntity<?> getAllFuel(){
        return fuelServiceRepository.getAllFuel();
    }

    @GetMapping("/{fuelId}")
    public ResponseEntity<?> findFuelById(@PathVariable Integer fuelId){
        return fuelServiceRepository.findFuelById(fuelId);
    }

    @PutMapping("/{fuelId}")
    public ResponseEntity<?> updateFuelPrice(@PathVariable Integer fuelId,@RequestBody Map<String, Double> requestBody){
        Double price = requestBody.get("price");
        return fuelServiceRepository.updateFuelPrice(fuelId,price);
    }

    @DeleteMapping("/{fuelId}")
    public ResponseEntity<?> DeleteFuelById(@PathVariable Integer fuelId){
        return fuelServiceRepository.DeleteFuelById(fuelId);
    }


}
