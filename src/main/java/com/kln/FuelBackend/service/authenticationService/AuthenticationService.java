package com.kln.FuelBackend.service.authenticationService;

import com.kln.FuelBackend.dataTransferObject.request.LoginRequest;
import com.kln.FuelBackend.repositoryDAO.BusinessGovernmentRepository;
import com.kln.FuelBackend.repositoryDAO.EmployeeRepository;
import com.kln.FuelBackend.repositoryDAO.FuelStationRepository;
import com.kln.FuelBackend.repositoryDAO.UserRepository;
import org.springframework.core.SpringVersion;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService implements AuthenticationServiceRepository{

    private final UserRepository userRepository;

    private final EmployeeRepository employeeRepository;

    private final BusinessGovernmentRepository businessGovernmentRepository;

    private final FuelStationRepository fuelStationRepository;


    public AuthenticationService(UserRepository userRepository, EmployeeRepository employeeRepository, BusinessGovernmentRepository businessGovernmentRepository, FuelStationRepository fuelStationRepository) {
        this.userRepository = userRepository;
        this.employeeRepository = employeeRepository;
        this.businessGovernmentRepository = businessGovernmentRepository;
        this.fuelStationRepository = fuelStationRepository;
    }

    @Override
    public ResponseEntity<?> userLogin(LoginRequest loginRequest) {
        return null;
    }

    @Override
    public ResponseEntity<?> employeeLogin(LoginRequest loginRequest) {
        return null;
    }

    @Override
    public ResponseEntity<?> fuelStationLogin(LoginRequest loginRequest) {
        return null;
    }

    @Override
    public ResponseEntity<?> businessLogin(LoginRequest loginRequest) {
        return null;
    }
}
