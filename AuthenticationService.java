package com.kln.FuelBackend.service.authenticationService;

import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.*;
import com.kln.FuelBackend.dataTransferObject.response.LoginResponseDTO;
import com.kln.FuelBackend.dataTransferObject.response.administratorResponseDTO.AdministratorResponseDTO;
import com.kln.FuelBackend.dataTransferObject.response.businessGovernmentResponseDTO.BusinessGovernmentResponseDTO;
import com.kln.FuelBackend.dataTransferObject.response.employeeResponseDTO.EmployeeResponseDTO;
import com.kln.FuelBackend.dataTransferObject.response.fuelStationResponseDTO.FuelStationResponseDTO;
import com.kln.FuelBackend.dataTransferObject.response.userResponseDTO.UserResponseDTO;
import com.kln.FuelBackend.entity.*;
import com.kln.FuelBackend.exception.UnauthorizedAccessException;
import com.kln.FuelBackend.repositoryDAO.*;
import com.kln.FuelBackend.utility.JwtUtility;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService implements AuthenticationServiceRepository{

    private final UserRepository userRepository;

    private final EmployeeRepository employeeRepository;

    private final BusinessGovernmentRepository businessGovernmentRepository;

    private final FuelStationRepository fuelStationRepository;

    private final JwtUtility jwtUtility;

    private final AuthenticationManager authenticationManager;

    private final AdministratorRepository administratorRepository;


    public AuthenticationService(UserRepository userRepository, EmployeeRepository employeeRepository, BusinessGovernmentRepository businessGovernmentRepository, FuelStationRepository fuelStationRepository, JwtUtility jwtUtility, AuthenticationManager authenticationManager, AdministratorRepository administratorRepository) {
        this.userRepository = userRepository;
        this.employeeRepository = employeeRepository;
        this.businessGovernmentRepository = businessGovernmentRepository;
        this.fuelStationRepository = fuelStationRepository;
        this.jwtUtility = jwtUtility;
        this.authenticationManager = authenticationManager;
        this.administratorRepository = administratorRepository;
    }