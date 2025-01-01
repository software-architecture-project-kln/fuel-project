package com.kln.FuelBackend.calculation;

public class FuelCalculation {

    public static Double calculateFuel (
            Double maxFuelCapacityPerWeek,
            Double currentFuelCapacity,
            Double fuelingCapacity
    ){
        Double fuelCapacity = currentFuelCapacity + fuelingCapacity;
        if(!fuelCapacity.equals(maxFuelCapacityPerWeek)){
            return fuelingCapacity;
        }else{
            throw new RuntimeException("fuel capacity is out of range");
        }
    }
}
