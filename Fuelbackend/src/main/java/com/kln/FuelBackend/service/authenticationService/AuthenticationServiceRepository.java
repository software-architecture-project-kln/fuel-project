package com.kln.FuelBackend.service.authenticationService;

import com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO.*;
import org.springframework.http.ResponseEntity;

public interface AuthenticationServiceRepository {

    public ResponseEntity<?> userLogin(UserLoginRequestDTO userLoginRequestDTO);

    public ResponseEntity<?> businessLogin(BusinessGovLoginRequestDTO businessGovLoginRequestDTO);

    public ResponseEntity<?> employeeLogin(EmployeeLoginRequestDTO employeeLoginRequestDTO);

    public ResponseEntity<?> fuelStationLogin(FuelStationLoginRequestDTO fuelStationLoginRequestDTO);

    public ResponseEntity<?> administratorLogin(AdministratorLoginRequestDTO administratorLoginRequestDTO);
}
