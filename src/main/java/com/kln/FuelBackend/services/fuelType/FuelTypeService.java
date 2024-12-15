package com.kln.FuelBackend.services.fuelType;

import com.kln.FuelBackend.dataAccessObject.FuelTypeRepository;
import com.kln.FuelBackend.models.FuelType;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FuelTypeService implements FuelTypeServiceRepository{

    public final FuelTypeRepository fuelTypeRepository;

    @Autowired
    public FuelTypeService(FuelTypeRepository fuelTypeRepository){
        this.fuelTypeRepository = fuelTypeRepository;
    }

    @Override
    public List<Object> getAllFuelType() {
        List<FuelType> fuelTypes = fuelTypeRepository.findAll();
        List<Object> response = new ArrayList<>();

        for(FuelType fuelType: fuelTypes){
            response.add(fuelType.toString());
        }
        return response;
    }

    @Override
    public FuelType createFuelType(FuelType fuelType) {
        return fuelTypeRepository.save(fuelType);
    }

    @Override
    public FuelType updateFuelType(FuelType fuelType, Integer fuelTypeId) {
        FuelType existingFuelType = fuelTypeRepository.findById(fuelTypeId).orElseThrow(
                () -> new RuntimeException("FuelType not found.")
        );
        existingFuelType.setFuelType(fuelType.getFuelType());
        existingFuelType.setDescription(fuelType.getDescription());
        return fuelTypeRepository.save(existingFuelType);
    }

    @Override
    public Map<String, Object> deleteFuelType(Integer fuelTypeId) {
        fuelTypeRepository.deleteById(fuelTypeId);
        Map<String,Object> response = new HashMap<>();
        response.put("status","success");
        response.put("message","delete successfully");
        return response;
    }
}
