package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.businessGovernmentRequestDTO.BusinessGovernmentRequestDTO;
import com.kln.FuelBackend.service.businessGovernmentService.BusinessGovernmentServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/businessGov")
public class BusinessGovernmentController {

    private final BusinessGovernmentServiceRepository businessGovernmentServiceRepository;

    @Autowired
    public BusinessGovernmentController(BusinessGovernmentServiceRepository businessGovernmentServiceRepository) {
        this.businessGovernmentServiceRepository = businessGovernmentServiceRepository;
    }

    @PostMapping
    public ResponseEntity<?> createBusinessGovernment(@RequestBody BusinessGovernmentRequestDTO businessGovernmentRequestDTO){
        return businessGovernmentServiceRepository.createBusinessGovernment(businessGovernmentRequestDTO);
    }

    @PutMapping("/{businessGovernmentId}")
    public ResponseEntity<?> verifyBusinessGovernmentMobile(
            @PathVariable UUID businessGovernmentId,
            @RequestBody Integer otp
    ){
        return businessGovernmentServiceRepository.verifyBusinessGovernmentMobile(businessGovernmentId,otp);
    }

    @GetMapping("/{businessGovernmentId}")
    public ResponseEntity<?> businessGovernmentFindById(@PathVariable UUID businessGovernmentId){
        return businessGovernmentServiceRepository.businessGovernmentFindById(businessGovernmentId);
    }

    @GetMapping
    public ResponseEntity<?> businessGovernmentGetAll(){
        return businessGovernmentServiceRepository.businessGovernmentGetAll();
    }
}
