package com.kln.FuelBackend.service.vehicalService;

import com.kln.FuelBackend.dataTransferObject.request.vehicleRequestDTO.VehicleRequestDTO;
import org.springframework.http.ResponseEntity;

import java.util.UUID;

public interface VehicleServiceRepository {

    public ResponseEntity<?> createVehicle(VehicleRequestDTO vehicleRequestDTO);

    public ResponseEntity<?> findVehicleById(UUID vehicleId);

    public ResponseEntity<?> updateVehicleCurrentFuelCapacity(UUID vehicleId, Double fuelCapacity);

    public ResponseEntity<?> updateVehicle(VehicleRequestDTO vehicleRequestDTO);

    public ResponseEntity<?> deleteVehicle(UUID vehicleId);

    public ResponseEntity<?> getAllVehicle();
}
