package com.kln.FuelBackend.service.vehicleClassesService;

import com.kln.FuelBackend.dataTransferObject.request.vehicleClassesRequestDTO.VehicleClassesRequestDTO;
import com.kln.FuelBackend.dataTransferObject.response.CustomApiResponse;
import com.kln.FuelBackend.dataTransferObject.response.vehicleClassesResponseDTO.VehicleClassesResponseDTO;
import com.kln.FuelBackend.entity.Fuel;
import com.kln.FuelBackend.entity.VehicleClasses;
import com.kln.FuelBackend.exception.NotFoundException;
import com.kln.FuelBackend.repositoryDAO.FuelRepository;
import com.kln.FuelBackend.repositoryDAO.VehicleClassesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class VehicleClassesService implements VehicleClassesServiceRepository{

    private final VehicleClassesRepository vehicleClassesRepository;

    private final FuelRepository fuelRepository;

    @Autowired
    public VehicleClassesService(VehicleClassesRepository vehicleClassesRepository, FuelRepository fuelRepository) {
        this.vehicleClassesRepository = vehicleClassesRepository;
        this.fuelRepository = fuelRepository;
    }


    @Override
    public ResponseEntity<?> createVehicleClass(VehicleClassesRequestDTO vehicleClassesRequestDTO) {
        Fuel fuel = fuelRepository.findById(vehicleClassesRequestDTO.getFuelId()).orElseThrow(
                () -> new NotFoundException("fuelId is not found in fuel table")
        );
        VehicleClasses vehicleClass = new VehicleClasses(
                vehicleClassesRequestDTO.getVehicleClassName(),
                vehicleClassesRequestDTO.getMaxFuelCapacityPerWeek(),
                fuel
        );

        VehicleClasses savedVehicleClass = vehicleClassesRepository.save(vehicleClass);

        VehicleClassesResponseDTO responseDTO = new VehicleClassesResponseDTO(
                savedVehicleClass.getVehicleClassId(),
                savedVehicleClass.getVehicleClassName(),
                savedVehicleClass.getMaxFuelCapacityPerWeek(),
                savedVehicleClass.getFuel().getFuelId()
        );

        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.CREATED.value(),
                        "vehicle class create successfully",
                        responseDTO
                ),
                HttpStatus.CREATED

        );
    }

    @Override
    public ResponseEntity<?> updateVehicleClassMaxFuelCapacityPerWeek(Integer vehicleClassId, Double maxFuelCapacityPerWeek) {
        VehicleClasses vehicleClass = vehicleClassesRepository.findById(vehicleClassId).orElseThrow(
                () -> new NotFoundException("vehicle class not found")
        );
        vehicleClass.setMaxFuelCapacityPerWeek(maxFuelCapacityPerWeek);

        vehicleClassesRepository.save(vehicleClass);

        VehicleClassesResponseDTO responseDTO = new VehicleClassesResponseDTO(
                vehicleClass.getVehicleClassId(),
                vehicleClass.getVehicleClassName(),
                vehicleClass.getMaxFuelCapacityPerWeek(),
                vehicleClass.getFuel().getFuelId()
        );

        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "maxFuelCapacityPerWeek",
                        responseDTO
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> vehicleClassFindById(Integer vehicleClassId) {
        VehicleClasses vehicleClass = vehicleClassesRepository.findById(vehicleClassId).orElseThrow(
                () -> new NotFoundException("vehicle class not found")
        );

        vehicleClassesRepository.save(vehicleClass);
        VehicleClassesResponseDTO responseDTO = new VehicleClassesResponseDTO(
                vehicleClass.getVehicleClassId(),
                vehicleClass.getVehicleClassName(),
                vehicleClass.getMaxFuelCapacityPerWeek(),
                vehicleClass.getFuel().getFuelId()
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
    public ResponseEntity<?> getAllVehicleClasses() {
        List<VehicleClasses> allVehicleClasses = vehicleClassesRepository.findAll();
        List<VehicleClassesResponseDTO> responseDTO = new ArrayList<>();

        allVehicleClasses.forEach(
                vehicleClass -> {
                    responseDTO.add(
                            new VehicleClassesResponseDTO(
                                    vehicleClass.getVehicleClassId(),
                                    vehicleClass.getVehicleClassName(),
                                    vehicleClass.getMaxFuelCapacityPerWeek(),
                                    vehicleClass.getFuel().getFuelId()
                            )
                    );
                }
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
}
