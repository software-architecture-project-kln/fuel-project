package com.kln.FuelBackend.controllers;

import com.kln.FuelBackend.models.FuelType;
import com.kln.FuelBackend.services.fuelType.FuelTypeServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/fuelType")
public class FuelTypeController {

    public final FuelTypeServiceRepository fuelTypeServiceRepository;

    @Autowired
    public FuelTypeController(FuelTypeServiceRepository fuelTypeServiceRepository){
        this.fuelTypeServiceRepository = fuelTypeServiceRepository;
    }

    @GetMapping
    public List<Object> getAllFuelType(){
        return fuelTypeServiceRepository.getAllFuelType();
    }

    @PostMapping
    public FuelType createFuelType(@RequestBody FuelType fuelType){
        return fuelTypeServiceRepository.createFuelType(fuelType);
    }

    @PutMapping
    public FuelType updateFuelType(@RequestBody FuelType fuelType, @PathVariable Integer fuelTypeId){
        return fuelTypeServiceRepository.updateFuelType(fuelType,fuelTypeId);
    }

    @DeleteMapping
    public Map<String,Object> deleteFuelType(@PathVariable Integer fuelTypeId){
        return fuelTypeServiceRepository.deleteFuelType(fuelTypeId);
    }

}
