package com.kln.FuelBackend.service.FuelStationService;

import com.kln.FuelBackend.dataTransferObject.request.fuelStationRequestDTO.FuelStationRequestDTO;
import org.springframework.http.ResponseEntity;

import java.util.UUID;

public interface FuelStationServiceRepository {

    public ResponseEntity<?> createFuelStation(FuelStationRequestDTO fuelStationRequestDTO);

    public ResponseEntity<?> getFuelStationById(UUID fuelStationId);

    public ResponseEntity<?> updateFuelStation(UUID fuelStationId, FuelStationRequestDTO fuelStationRequestDTO);

    public ResponseEntity<?> deleteFuelStation(UUID fuelStationId);

    public ResponseEntity<?> getAllFuelStation();
}
