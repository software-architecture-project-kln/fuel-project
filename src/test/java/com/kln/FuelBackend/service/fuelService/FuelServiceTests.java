//package com.kln.FuelBackend.service.fuelService;
//
//import com.kln.FuelBackend.dataTransferObject.request.fuelRequestDTO.FuelRequestDTO;
//import com.kln.FuelBackend.dataTransferObject.response.CustomApiResponse;
//import com.kln.FuelBackend.dataTransferObject.response.fuelResponseDTO.FuelResponseDTO;
//import com.kln.FuelBackend.entity.Fuel;
//import com.kln.FuelBackend.repositoryDAO.FuelRepository;
//import com.kln.FuelBackend.service.fuelService.FuelService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import org.junit.jupiter.api.*;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.when;
//
//@ExtendWith(MockitoExtension.class)
//public class FuelServiceTests {
//
//    @Mock
//    private FuelRepository fuelRepository;
//
//    @InjectMocks
//    private FuelService fuelService;
//
//    @Test
//    public void testCreateFuel() {
//        // Mock the save operation
//        Fuel mockFuel = new Fuel(1, "Diesel", 120.5);
//        when(fuelRepository.save(any(Fuel.class))).thenReturn(mockFuel);
//
//        FuelRequestDTO requestDTO = new FuelRequestDTO("Diesel", 120.5);
//        ResponseEntity<?> response = fuelService.createFuel(requestDTO);
//
//        assertEquals(HttpStatus.CREATED, response.getStatusCode());
//
//        CustomApiResponse apiResponse = (CustomApiResponse) response.getBody();
//        assertNotNull(apiResponse);
//        assertEquals("fuel created successfully", apiResponse.getMessage());
//
//        FuelResponseDTO actualResponse = (FuelResponseDTO) apiResponse.getData();
//        assertEquals(mockFuel.getFuelName(), actualResponse.getFuelName());
//        assertEquals(mockFuel.getPrice(), actualResponse.getPrice());
//    }
//}
