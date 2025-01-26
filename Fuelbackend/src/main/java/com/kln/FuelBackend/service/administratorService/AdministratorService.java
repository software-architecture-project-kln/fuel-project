package com.kln.FuelBackend.service.administratorService;

import com.kln.FuelBackend.config.SecurityConf;
import com.kln.FuelBackend.dataTransferObject.request.administratorRequestDTO.AdministratorRequestDTO;
import com.kln.FuelBackend.dataTransferObject.response.CustomApiResponse;
import com.kln.FuelBackend.dataTransferObject.response.administratorResponseDTO.AdministratorResponseDTO;
import com.kln.FuelBackend.entity.Administrator;
import com.kln.FuelBackend.exception.NotFoundException;
import com.kln.FuelBackend.repositoryDAO.AdministratorRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

// business

@Service
public class AdministratorService implements AdministratorServiceRepository{

    private final AdministratorRepository administratorRepository;

    private final SecurityConf securityConf;

    public AdministratorService(AdministratorRepository administratorRepository, SecurityConf securityConf) {
        this.administratorRepository = administratorRepository;
        this.securityConf = securityConf;
    }

    @Override
    public ResponseEntity<?> createAdministrator(AdministratorRequestDTO administratorRequestDTO) {
        Administrator administrator = new Administrator(
                administratorRequestDTO.getAdministratorUsername(),
                securityConf.passwordEncoder().encode(administratorRequestDTO.getPassword()),
                administratorRequestDTO.getAdministratorEmail()
        );

        Administrator savedAdministrator = administratorRepository.save(administrator);
        AdministratorResponseDTO responseDTO = new AdministratorResponseDTO(
                savedAdministrator.getAdministratorId(),
                savedAdministrator.getAdministratorUsername(),
                savedAdministrator.getAdministratorEmail()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.CREATED.value(),
                        "administrator created successfully",
                        responseDTO
                ),
                HttpStatus.CREATED
        );
    }

    @Override
    @Transactional
    public ResponseEntity<?> updateAdministrator(Integer administratorId, AdministratorRequestDTO administratorRequestDTO) {
        Administrator administrator = administratorRepository.findById(administratorId).orElseThrow(
                () -> new NotFoundException("administrator not found")
        );
        // check username already exits
        Administrator existsAdministrator = administratorRepository.findByAdministratorUsername(
                administratorRequestDTO.getAdministratorUsername()
        ).orElse(null);

        if (existsAdministrator == null){
            administrator.setAdministratorUsername(administratorRequestDTO.getAdministratorUsername());
            administrator.setAdministratorEmail(administratorRequestDTO.getAdministratorEmail());
            administrator.setPassword(securityConf.passwordEncoder().encode(administratorRequestDTO.getPassword()));

        }else{
            throw new RuntimeException("administrator username already taken");
        }

        administratorRepository.save(administrator);

        AdministratorResponseDTO responseDTO = new AdministratorResponseDTO(
                administrator.getAdministratorId(),
                administrator.getAdministratorUsername(),
                administrator.getAdministratorEmail()
        );

        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "update successfully",
                        responseDTO
                ),
                HttpStatus.OK
        ) ;
    }

    @Override
    @Transactional
    public ResponseEntity<?> administratorFindById(Integer administratorId) {
        Administrator administrator = administratorRepository.findById(administratorId).orElseThrow(
                () -> new NotFoundException("administrator not found")
        );
        AdministratorResponseDTO responseDTO = new AdministratorResponseDTO(
                administrator.getAdministratorId(),
                administrator.getAdministratorUsername(),
                administrator.getAdministratorEmail()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        null,
                        responseDTO
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> deleteAdministrator(Integer administratorId) {
        administratorRepository.deleteById(administratorId);

        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "administrator deleted successfully",
                        null
                ),
                HttpStatus.OK
        );
    }

    @Override
    @Transactional
    public ResponseEntity<?> getAllAdministrators() {
        List<Administrator> administrators = administratorRepository.findAll();
        List<AdministratorResponseDTO> responseDTOList = new ArrayList<>();

        administrators.forEach(
                administrator -> {
                    responseDTOList.add(
                            new AdministratorResponseDTO(
                                    administrator.getAdministratorId(),
                                    administrator.getAdministratorUsername(),
                                    administrator.getAdministratorEmail()
                            )
                    );
                }
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        null,
                        responseDTOList
                ),
                HttpStatus.OK
        );
    }
}
