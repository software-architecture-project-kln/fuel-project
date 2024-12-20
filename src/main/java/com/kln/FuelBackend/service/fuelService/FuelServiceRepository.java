package com.kln.FuelBackend.service.fuelService;

import com.kln.FuelBackend.dataTransferObject.request.fuelRequestDTO.FuelRequestDTO;
import com.kln.FuelBackend.exception.NotFoundException;
import org.springframework.http.ResponseEntity;

public interface FuelServiceRepository {

    public ResponseEntity<?> createFuel(FuelRequestDTO fuelRequestDTO);

    public ResponseEntity<?> findFuelById(Integer fuelId) throws NotFoundException;

    public ResponseEntity<?> updateFuelPrice(Integer fuelId, Double price);

    public ResponseEntity<?> DeleteFuelById(Integer fuelId);

}
