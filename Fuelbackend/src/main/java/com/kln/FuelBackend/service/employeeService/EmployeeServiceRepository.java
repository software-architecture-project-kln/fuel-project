package com.kln.FuelBackend.service.employeeService;

import com.kln.FuelBackend.dataTransferObject.request.employeeRequestDTO.EmployeeRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

public interface EmployeeServiceRepository {

    public ResponseEntity<?> createEmployee(EmployeeRequestDTO employeeRequestDTO);

    public ResponseEntity<?> updateEmployeePassword(UUID employeeId, String password);

    public ResponseEntity<?> updateFuelPerVehicle(UUID employeeId,UUID vehicleId,Double fuelCapacity);

    @Transactional
    ResponseEntity<?> updateEmployee(UUID employeeId,
                                     String employeeUsername,
                                     String employeeEmail);

    public ResponseEntity<?> changeEmployeeStatus(UUID employeeId);

    public  ResponseEntity<?> employeeFindById(UUID employeeId);

    public ResponseEntity<?> getAllEmployee();

    public ResponseEntity<?> findEmployeesByFuelStationId(UUID fuelStationId);
}
