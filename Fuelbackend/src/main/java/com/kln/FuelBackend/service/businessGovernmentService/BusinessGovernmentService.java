package com.kln.FuelBackend.service.businessGovernmentService;

import com.kln.FuelBackend.dataTransferObject.request.businessGovernmentRequestDTO.BusinessGovernmentRequestDTO;
import com.kln.FuelBackend.dataTransferObject.response.CustomApiResponse;
import com.kln.FuelBackend.dataTransferObject.response.businessGovernmentResponseDTO.BusinessGovernmentResponseDTO;
import com.kln.FuelBackend.entity.BusinessGovernment;
import com.kln.FuelBackend.exception.NotFoundException;
import com.kln.FuelBackend.repositoryDAO.BusinessGovernmentRepository;
import com.kln.FuelBackend.service.otpService.OtpServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class BusinessGovernmentService implements BusinessGovernmentServiceRepository{

    private final BusinessGovernmentRepository businessGovernmentRepository;

    private final OtpServiceRepository otpServiceRepository;

    @Autowired
    public BusinessGovernmentService(BusinessGovernmentRepository businessGovernmentRepository, OtpServiceRepository otpServiceRepository) {
        this.businessGovernmentRepository = businessGovernmentRepository;
        this.otpServiceRepository = otpServiceRepository;
    }


    @Override
    public ResponseEntity<?> createBusinessGovernment(BusinessGovernmentRequestDTO businessGovernmentRequestDTO) {
        BusinessGovernment businessGovernment = new BusinessGovernment(
                businessGovernmentRequestDTO.getBusinessGovernmentRegNo(),
                businessGovernmentRequestDTO.getEmail(),
                businessGovernmentRequestDTO.getPassword(),
                businessGovernmentRequestDTO.getMobile(),
                false
        );
        BusinessGovernment savedBusinessGov = businessGovernmentRepository.save(businessGovernment);
        // send to the otp code
        otpServiceRepository.sendOTP(savedBusinessGov.getMobile());

        BusinessGovernmentResponseDTO responseDTO = new BusinessGovernmentResponseDTO(
                savedBusinessGov.getBusinessGovernmentId(),
                savedBusinessGov.getBusinessGovernmentRegNo(),
                savedBusinessGov.getEmail(),
                savedBusinessGov.getMobile(),
                savedBusinessGov.getMobileIsVerify()
        );

        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.CREATED.value(),
                        "businessGov object created successfully",
                        responseDTO
                ),
                HttpStatus.CREATED
        );
    }

    @Override
    @Transactional
    public ResponseEntity<?> verifyBusinessGovernmentMobile(Integer businessGovernmentId, Integer otp) {
        // find the object
        BusinessGovernment businessGovernment = businessGovernmentRepository.findById(businessGovernmentId)
                .orElseThrow(
                        () -> new NotFoundException("object not found")
                );
        // check the otp is correct
        if(!otpServiceRepository.verifyOTP(businessGovernment.getMobile(), otp)){
            throw new RuntimeException("otp is not valid");
        }

        businessGovernment.setMobileIsVerify(true);
        BusinessGovernmentResponseDTO responseDTO = new BusinessGovernmentResponseDTO(
                businessGovernment.getBusinessGovernmentId(),
                businessGovernment.getBusinessGovernmentRegNo(),
                businessGovernment.getEmail(),
                businessGovernment.getMobile(),
                businessGovernment.getMobileIsVerify()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "account is verified",
                        responseDTO
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> businessGovernmentFindById(Integer businessGovernmentId) {
        BusinessGovernment businessGovernment = businessGovernmentRepository.findById(businessGovernmentId)
                .orElseThrow(
                        () -> new NotFoundException("object not found")
                );
        BusinessGovernmentResponseDTO responseDTO = new BusinessGovernmentResponseDTO(
                businessGovernment.getBusinessGovernmentId(),
                businessGovernment.getBusinessGovernmentRegNo(),
                businessGovernment.getEmail(),
                businessGovernment.getMobile(),
                businessGovernment.getMobileIsVerify()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "account is verified",
                        responseDTO
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> businessGovernmentGetAll() {
        List<BusinessGovernment> businessGovernmentList = businessGovernmentRepository.findAll();
        List<BusinessGovernmentResponseDTO> responseDTOList = new ArrayList<>();

        businessGovernmentList.forEach(
                businessGovernment -> {
                    responseDTOList.add(
                            new BusinessGovernmentResponseDTO(
                                    businessGovernment.getBusinessGovernmentId(),
                                    businessGovernment.getBusinessGovernmentRegNo(),
                                    businessGovernment.getEmail(),
                                    businessGovernment.getMobile(),
                                    businessGovernment.getMobileIsVerify()
                            )
                    );
                }
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "account is verified",
                        responseDTOList
                ),
                HttpStatus.OK
        );
    }
}
