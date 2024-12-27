package com.kln.FuelBackend.service.businessGovernmentService;

import com.kln.FuelBackend.dataTransferObject.request.businessGovernmentRequestDTO.BusinessGovernmentRequestDTO;
import org.springframework.http.ResponseEntity;

import java.util.UUID;

public interface BusinessGovernmentServiceRepository {

    public ResponseEntity<?> createBusinessGovernment(BusinessGovernmentRequestDTO businessGovernmentRequestDTO);

    public ResponseEntity<?> verifyBusinessGovernmentMobile(UUID businessGovernmentId, Integer otp);

    public ResponseEntity<?> businessGovernmentFindById(UUID businessGovernmentId);

    public ResponseEntity<?> businessGovernmentGetAll();
}
