package com.kln.FuelBackend.service.fuelService;


import com.kln.FuelBackend.dataTransferObject.request.fuelRequestDTO.FuelRequestDTO;
import com.kln.FuelBackend.dataTransferObject.response.CustomApiResponse;
import com.kln.FuelBackend.dataTransferObject.response.FuelResponseDTO.FuelResponseDTO;
import com.kln.FuelBackend.entity.Fuel;
import com.kln.FuelBackend.exception.NotFoundException;
import com.kln.FuelBackend.repositoryDAO.FuelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class FuelService implements FuelServiceRepository{

    private FuelRepository fuelRepository;

    @Autowired
    public FuelService(FuelRepository fuelRepository){
        this.fuelRepository = fuelRepository;
    }

    @Override
    public ResponseEntity<?> createFuel(FuelRequestDTO fuelRequestDTO) {
        Fuel fuel = new Fuel(fuelRequestDTO.getFuelName(),fuelRequestDTO.getPrice());

        Fuel savedFuel = fuelRepository.save(fuel);
        FuelResponseDTO fuelResponse = new FuelResponseDTO(
                savedFuel.getFuelId(),
                savedFuel.getFuelName(),
                savedFuel.getPrice()
        );

        CustomApiResponse response = new CustomApiResponse(
                HttpStatus.OK.value(),
                "fuel created successfully",
                fuelResponse
        );

        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> findFuelById(Integer fuelId){
        Fuel fuel = fuelRepository.findById(fuelId).orElseThrow(
                () -> new NotFoundException("fuel not found")
        );

        CustomApiResponse response = new CustomApiResponse(
                HttpStatus.OK.value(),
                null,
                fuel
        );
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> updateFuelPrice(Integer fuelId, Double price) {
        Fuel fuel = fuelRepository.findById(fuelId).orElseThrow(
                () -> new NotFoundException("fuel not found")
        );

        fuel.setPrice(price);
        Fuel updateFuel = fuelRepository.save(fuel);

        CustomApiResponse response = new CustomApiResponse(
                HttpStatus.OK.value(),
                "fuel price updated successfully",
                updateFuel
        );
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> DeleteFuelById(Integer fuelId) {
        return null;
    }
}
