package com.kln.FuelBackend.service.authenticationService;

import com.kln.FuelBackend.dataTransferObject.request.LoginRequest;
import org.springframework.http.ResponseEntity;

public interface AuthenticationServiceRepository {

    public ResponseEntity<?> userLogin(LoginRequest loginRequest);

    public ResponseEntity<?> businessLogin(LoginRequest loginRequest);

    public ResponseEntity<?> employeeLogin(LoginRequest loginRequest);

    public ResponseEntity<?> fuelStationLogin(LoginRequest loginRequest);
}
