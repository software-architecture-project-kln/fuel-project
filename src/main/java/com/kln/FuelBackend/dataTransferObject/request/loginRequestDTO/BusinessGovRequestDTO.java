package com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO;

import jakarta.validation.constraints.NotBlank;

public class BusinessGovRequestDTO {
    @NotBlank(message = "businessGovernmentRegNo is required")
    private String businessGovernmentRegNo;

    @NotBlank(message = "password is required")
    private String password;

    public BusinessGovRequestDTO(String businessGovernmentRegNo, String password) {
        this.businessGovernmentRegNo = businessGovernmentRegNo;
        this.password = password;
    }

    public String getBusinessGovernmentRegNo() {
        return businessGovernmentRegNo;
    }

    public void setBusinessGovernmentRegNo(String businessGovernmentRegNo) {
        this.businessGovernmentRegNo = businessGovernmentRegNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
