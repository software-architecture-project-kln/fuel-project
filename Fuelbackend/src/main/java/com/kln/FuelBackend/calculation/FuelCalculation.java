package com.kln.FuelBackend.calculation;

import java.math.BigDecimal;
import java.math.RoundingMode;

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

    public static Double round(Double value, int place){
        if(value == null){
            return null;
        }
        return BigDecimal.valueOf(value).setScale(place, RoundingMode.HALF_UP).doubleValue();
    }
}
