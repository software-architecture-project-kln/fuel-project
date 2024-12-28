package com.kln.FuelBackend.service.fuelService;

import com.kln.FuelBackend.dataTransferObject.request.fuelRequestDTO.FuelRequestDTO;
import com.kln.FuelBackend.entity.Fuel;
import com.kln.FuelBackend.repositoryDAO.FuelRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class FuelServiceTests {

    @Mock
    private FuelRepository fuelRepository;

    @InjectMocks
    private FuelService fuelService;

    @BeforeEach
    void setup(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateFuel(){
        FuelRequestDTO fuelRequestDTO = new FuelRequestDTO("petrol",340.89);
        Fuel savedFuel = new Fuel(1,"petrol",340.89);
    }
}
