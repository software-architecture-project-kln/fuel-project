package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.employeeRequestDTO.EmployeeRequestDTO;
import com.kln.FuelBackend.service.employeeService.EmployeeServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    private final EmployeeServiceRepository employeeServiceRepository;

    @Autowired
    public EmployeeController(EmployeeServiceRepository employeeServiceRepository) {
        this.employeeServiceRepository = employeeServiceRepository;
    }

    @PostMapping
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeRequestDTO employeeRequestDTO){
        return employeeServiceRepository.createEmployee(employeeRequestDTO);
    }

    @PutMapping("/{employeeId}")
    public ResponseEntity<?> updateEmployee(@PathVariable UUID employeeId,@RequestBody Map<String,Object> reqBody){
        String employeeUsername = reqBody.get("employeeUsername").toString();
        String employeeEmail = reqBody.get("employeeEmail").toString();
        return employeeServiceRepository.updateEmployee(employeeId,employeeUsername,employeeEmail);
    }

    @PutMapping("/password/{employeeId}")
    public ResponseEntity<?> changeEmployeePassword(@PathVariable UUID employeeId, @RequestBody Map<String,Object> reqBody){
        String employeePassword = reqBody.get("password").toString();
        return employeeServiceRepository.updateEmployeePassword(employeeId,employeePassword);
    }

    @PatchMapping("/{employeeId}")
    public ResponseEntity<?> changeEmployeeStatus(@PathVariable UUID employeeId){
        return employeeServiceRepository.changeEmployeeStatus(employeeId);
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<?> employeeFindById(@PathVariable UUID employeeId){
        return employeeServiceRepository.employeeFindById(employeeId);
    }

    @GetMapping
    public ResponseEntity<?> getAllEmployees(){
        return employeeServiceRepository.getAllEmployee();
    }

    @GetMapping("/fuelStation/{fuelStationId}")
    public ResponseEntity<?> findEmployeesByFuelStationId(@PathVariable UUID fuelStationId){
        return employeeServiceRepository.findEmployeesByFuelStationId(fuelStationId);
    }

    @PutMapping("/fuel/{employeeId}")
    public ResponseEntity<?> updateFuelPerVehicle(
            @PathVariable UUID employeeId,
            @RequestBody Map<String,Object> requestBody
            ){
        String vehicleIdStr = (String) requestBody.get("vehicleId");
        UUID vehicleId = UUID.fromString(vehicleIdStr);
        Double fuelCapacity = (Double) requestBody.get("fuelCapacity");
        return employeeServiceRepository.updateFuelPerVehicle(employeeId,vehicleId,fuelCapacity);
    }
}
