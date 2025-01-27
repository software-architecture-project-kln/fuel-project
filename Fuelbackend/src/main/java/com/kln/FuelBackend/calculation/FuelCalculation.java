package com.kln.FuelBackend.calculation;

public class FuelCalculation  {

    public static Double calculateFuel (
            Double maxFuelCapacityPerWeek,
            Double currentFuelCapacity,
            Double fuelingCapacity
    ){
        double fuelCapacity = currentFuelCapacity + fuelingCapacity;
        if(fuelCapacity <= maxFuelCapacityPerWeek){
            return  fuelCapacity;
        }else{
            throw new RuntimeException("fuel capacity is out of range");
        }
    }
}
