package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.administratorRequestDTO.AdministratorRequestDTO;
import com.kln.FuelBackend.service.administratorService.AdministratorServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/administrator")
public class AdministratorController {

    private final AdministratorServiceRepository administratorServiceRepository;


    @Autowired
    public AdministratorController(AdministratorServiceRepository administratorServiceRepository) {
        this.administratorServiceRepository = administratorServiceRepository;
    }

    @PostMapping
    public ResponseEntity<?> createAdministrator(@RequestBody AdministratorRequestDTO administratorRequestDTO){
        return administratorServiceRepository.createAdministrator(administratorRequestDTO);
    }

    @GetMapping
    public ResponseEntity<?> getAllAdministrators(){
        return administratorServiceRepository.getAllAdministrators();
    }

    @GetMapping("/{administratorId}")
    public ResponseEntity<?> administratorFindById(@PathVariable Integer administratorId){
        return administratorServiceRepository.administratorFindById(administratorId);
    }

    @PutMapping("/{administratorId}")
    public ResponseEntity<?> updateAdministrator(
            @PathVariable Integer administratorId,
            @RequestBody AdministratorRequestDTO administratorRequestDTO
    ){
        return administratorServiceRepository.updateAdministrator(administratorId,administratorRequestDTO);
    }

    @DeleteMapping("/{administratorId}")
    public ResponseEntity<?> deleteAdministrator(@PathVariable Integer administratorId){
        return administratorServiceRepository.deleteAdministrator(administratorId);
    }
}
