package com.kln.FuelBackend.dataTransferObject.response.businessGovernmentResponseDTO;

import java.util.UUID;

public class BusinessGovernmentResponseDTO {

    private Integer businessGovernmentId;

    private String businessGovernmentRegNo;

    private String email;

    private String mobile;

    private Boolean mobileIsVerify;

    public BusinessGovernmentResponseDTO(Integer businessGovernmentId, String businessGovernmentRegNo, String email, String mobile, Boolean mobileIsVerify) {
        this.businessGovernmentId = businessGovernmentId;
        this.businessGovernmentRegNo = businessGovernmentRegNo;
        this.email = email;
        this.mobile = mobile;
        this.mobileIsVerify = mobileIsVerify;
    }

    public Integer getBusinessGovernmentId() {
        return businessGovernmentId;
    }

    public void setBusinessGovernmentId(Integer businessGovernmentId) {
        this.businessGovernmentId = businessGovernmentId;
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

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Boolean getMobileIsVerify() {
        return mobileIsVerify;
    }

    public void setMobileIsVerify(Boolean mobileIsVerify) {
        this.mobileIsVerify = mobileIsVerify;
    }
}
