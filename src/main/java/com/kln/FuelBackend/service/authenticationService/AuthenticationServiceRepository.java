package com.kln.FuelBackend.service.authenticationService;

import com.kln.FuelBackend.dataTransferObject.request.LoginRequest;
import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.BusinessGovLoginRequestDTO;
import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.EmployeeLoginRequestDTO;
import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.FuelStationLoginRequestDTO;
import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.UserLoginRequestDTO;
import org.springframework.http.ResponseEntity;

public interface AuthenticationServiceRepository {

    public ResponseEntity<?> userLogin(UserLoginRequestDTO userLoginRequestDTO);

    public ResponseEntity<?> businessLogin(BusinessGovLoginRequestDTO businessGovLoginRequestDTO);

    public ResponseEntity<?> employeeLogin(EmployeeLoginRequestDTO employeeLoginRequestDTO);

    public ResponseEntity<?> fuelStationLogin(FuelStationLoginRequestDTO fuelStationLoginRequestDTO);
}
