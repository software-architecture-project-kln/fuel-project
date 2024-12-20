package com.kln.FuelBackend.service.vehicalService;

import com.kln.FuelBackend.dataTransferObject.request.vehicleRequestDTO.VehicleRequestDTO;
import com.kln.FuelBackend.dataTransferObject.response.CustomApiResponse;
import com.kln.FuelBackend.dataTransferObject.response.vehicleResponseDTO.VehicleResponseDTO;
import com.kln.FuelBackend.entity.User;
import com.kln.FuelBackend.entity.Vehicle;
import com.kln.FuelBackend.entity.VehicleClasses;
import com.kln.FuelBackend.exception.NotFoundException;
import com.kln.FuelBackend.repositoryDAO.UserRepository;
import com.kln.FuelBackend.repositoryDAO.VehicleClassesRepository;
import com.kln.FuelBackend.repositoryDAO.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class VehicleService implements VehicleServiceRepository{

    private final VehicleRepository vehicleRepository;

    private final VehicleClassesRepository vehicleClassesRepository;

    private final UserRepository userRepository;

    @Autowired
    public VehicleService(
            VehicleRepository vehicleRepository,
            VehicleClassesRepository vehicleClassesRepository,
            UserRepository userRepository
    ) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleClassesRepository = vehicleClassesRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<?> createVehicle(VehicleRequestDTO vehicleRequestDTO) {
        User user = userRepository.findById(vehicleRequestDTO.getUserId()).orElseThrow(
                () -> new NotFoundException("userId not found")
        );
        VehicleClasses vehicleClass = vehicleClassesRepository.findById(vehicleRequestDTO.getVehicleClassId())
                .orElseThrow(
                        () -> new NotFoundException("vehicleClassId not found")
                );
        Vehicle vehicle = new Vehicle(
                vehicleRequestDTO.getVehicleRegisterId(),
                vehicleRequestDTO.getVehicleEngineNo(),
                vehicleRequestDTO.getModel(),
                vehicleRequestDTO.getYearOfManufacture(),
                user,
                vehicleClass
        );

        Vehicle savedVehicle = vehicleRepository.save(vehicle);

        VehicleResponseDTO responseDTO = new VehicleResponseDTO(
                savedVehicle.getVehicleId(),
                savedVehicle.getVehicleRegisterId(),
                savedVehicle.getVehicleEngineNo(),
                savedVehicle.getModel(),
                savedVehicle.getYearOfManufacture(),
                savedVehicle.getCurrentFuelCapacity(),
                savedVehicle.getUser().getUserId(),
                savedVehicle.getVehicleClasses().getVehicleClassId()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.CREATED.value(),
                        "vehicle created successfully",
                        responseDTO
                ),
                HttpStatus.CREATED
        );
    }

    @Override
    public ResponseEntity<?> findVehicleById(UUID vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElseThrow(
                () -> new NotFoundException("vehicle not found")
        );
        VehicleResponseDTO responseDTO = new VehicleResponseDTO(
                vehicle.getVehicleId(),
                vehicle.getVehicleRegisterId(),
                vehicle.getVehicleEngineNo(),
                vehicle.getModel(),
                vehicle.getYearOfManufacture(),
                vehicle.getCurrentFuelCapacity(),
                vehicle.getUser().getUserId(),
                vehicle.getVehicleClasses().getVehicleClassId()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        null,
                        responseDTO
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> updateVehicleCurrentFuelCapacity(UUID vehicleId, Double fuelCapacity) {
        return new ResponseEntity<>("not implemented", HttpStatus.NOT_IMPLEMENTED);
    }

    @Override
    public ResponseEntity<?> getAllVehicle() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        List<VehicleResponseDTO> responseList = new ArrayList<>();

        vehicles.forEach(
                vehicle -> {
                    responseList.add(
                            new VehicleResponseDTO(
                                    vehicle.getVehicleId(),
                                    vehicle.getVehicleRegisterId(),
                                    vehicle.getVehicleEngineNo(),
                                    vehicle.getModel(),
                                    vehicle.getYearOfManufacture(),
                                    vehicle.getCurrentFuelCapacity(),
                                    vehicle.getUser().getUserId(),
                                    vehicle.getVehicleClasses().getVehicleClassId()
                            )
                    );
                }
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        null,
                        responseList
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> updateVehicle(VehicleRequestDTO vehicleRequestDTO) {
        return new ResponseEntity<>("not implemented", HttpStatus.NOT_IMPLEMENTED);
    }

    @Override
    public ResponseEntity<?> deleteVehicle(UUID vehicleId) {
        return new ResponseEntity<>("not implemented", HttpStatus.NOT_IMPLEMENTED);
    }
}
