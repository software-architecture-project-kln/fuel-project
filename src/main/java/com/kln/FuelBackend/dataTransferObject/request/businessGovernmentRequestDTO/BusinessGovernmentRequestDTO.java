package com.kln.FuelBackend.dataTransferObject.request.businessGovernmentRequestDTO;

import jakarta.validation.constraints.NotBlank;

public class BusinessGovernmentRequestDTO {

    @NotBlank(message = "business reg No is required")
    private String businessGovernmentRegNo;

    @NotBlank(message = "email is required")
    private String email;

    @NotBlank(message = "password is required")
    private String password;

    @NotBlank(message = "mobile number is required")
    private String mobile;

    public BusinessGovernmentRequestDTO(String businessGovernmentRegNo, String email, String password, String mobile) {
        this.businessGovernmentRegNo = businessGovernmentRegNo;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
    }

    public String getBusinessGovernmentRegNo() {
        return businessGovernmentRegNo;
    }

    public void setBusinessGovernmentRegNo(String businessGovernmentRegNo) {
        this.businessGovernmentRegNo = businessGovernmentRegNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
