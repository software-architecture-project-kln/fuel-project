package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.employeeRequestDTO.EmployeeRequestDTO;
import com.kln.FuelBackend.service.employeeService.EmployeeServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<?> updateEmployee(@PathVariable UUID employeeId,@RequestBody EmployeeRequestDTO employeeRequestDTO){
        return employeeServiceRepository.updateEmployee(employeeId,employeeRequestDTO);
    }

    @PatchMapping("/{employeeId}")
    public ResponseEntity<?> changeEmployeeStatus(@PathVariable UUID employeeId){
        return employeeServiceRepository.changeEmployeeStatus(employeeId);
    }
}
