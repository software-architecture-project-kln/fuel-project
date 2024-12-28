package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.BusinessGovLoginRequestDTO;
import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.EmployeeLoginRequestDTO;
import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.FuelStationLoginRequestDTO;
import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.UserLoginRequestDTO;
import com.kln.FuelBackend.service.authenticationService.AuthenticationServiceRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    private final AuthenticationServiceRepository authenticationServiceRepository;

    public AuthenticationController(AuthenticationServiceRepository authenticationServiceRepository) {
        this.authenticationServiceRepository = authenticationServiceRepository;
    }

    @PostMapping("/administratorAuth")
    public ResponseEntity<?> AdministratorLogin(){
        return null;
    }

    @PostMapping("/userAuth")
    public ResponseEntity<?> userLogin(@RequestBody UserLoginRequestDTO userLoginRequestDTO){
        return authenticationServiceRepository.userLogin(userLoginRequestDTO);
    }

    @PostMapping("/employeeAuth")
    public ResponseEntity<?> employeeLogin(@RequestBody EmployeeLoginRequestDTO employeeLoginRequestDTO){
        return authenticationServiceRepository.employeeLogin(employeeLoginRequestDTO);
    }

    @PostMapping("/fuelStationAuth")
    public ResponseEntity<?> fuelStationLogin(@RequestBody FuelStationLoginRequestDTO fuelStationLoginRequestDTO){
        return authenticationServiceRepository.fuelStationLogin(fuelStationLoginRequestDTO);
    }

    @PostMapping("/BusinessGovAuth")
    public ResponseEntity<?> businessLogin(@RequestBody BusinessGovLoginRequestDTO businessGovLoginRequestDTO){
        return authenticationServiceRepository.businessLogin(businessGovLoginRequestDTO);
    }
}
