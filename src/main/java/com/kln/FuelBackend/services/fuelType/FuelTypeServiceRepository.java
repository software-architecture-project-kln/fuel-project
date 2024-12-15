package com.kln.FuelBackend.services.fuelType;

import com.kln.FuelBackend.models.FuelType;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface FuelTypeServiceRepository {

    public List<Object> getAllFuelType();
    public FuelType createFuelType(FuelType fuelType);

    public FuelType updateFuelType(FuelType fuelType, Integer fuelTypeId);

    public Map<String, Object> deleteFuelType(Integer fuelTypeId);
}
