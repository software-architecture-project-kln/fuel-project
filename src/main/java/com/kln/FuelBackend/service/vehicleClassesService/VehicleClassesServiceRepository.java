package com.kln.FuelBackend.service.vehicleClassesService;


import com.kln.FuelBackend.dataTransferObject.request.vehicleClassesRequestDTO.VehicleClassesRequestDTO;
import org.springframework.http.ResponseEntity;

public interface VehicleClassesServiceRepository {

    public ResponseEntity<?> createVehicleClass(VehicleClassesRequestDTO vehicleClassesRequestDTO);

    public ResponseEntity<?> updateVehicleClassMaxFuelCapacityPerWeek(
            Integer vehicleClassId, Double maxFuelCapacityPerWeek
    );

    public ResponseEntity<?> vehicleClassFindById(Integer vehicleClassId);

    public ResponseEntity<?> getAllVehicleClasses();
}
