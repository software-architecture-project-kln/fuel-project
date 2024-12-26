package com.kln.FuelBackend.entity;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(
        indexes = {
                @Index(name = "idx_business_gov_reg_no",columnList = "businessGovernmentRegNo")
        }
)
public class BusinessGovernment {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID businessGovernmentId;

    @Column(nullable = false,unique = true)
    private String businessGovernmentRegNo;

    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false,unique = true)
    private String mobile;

    @Column(columnDefinition = "DEFAULT false")
    private Boolean mobileIsVerify;

    public BusinessGovernment() {
    }

    public BusinessGovernment(String businessGovernmentRegNo, String email, String password, String mobile, Boolean mobileIsVerify) {
        this.businessGovernmentRegNo = businessGovernmentRegNo;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.mobileIsVerify = mobileIsVerify;
    }

    public BusinessGovernment(UUID businessGovernmentId, String businessGovernmentRegNo, String email, String password, String mobile, Boolean mobileIsVerify) {
        this.businessGovernmentId = businessGovernmentId;
        this.businessGovernmentRegNo = businessGovernmentRegNo;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.mobileIsVerify = mobileIsVerify;
    }

    public UUID getBusinessGovernmentId() {
        return businessGovernmentId;
    }

    public void setBusinessGovernmentId(UUID businessGovernmentId) {
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

    public Boolean getMobileIsVerify() {
        return mobileIsVerify;
    }

    public void setMobileIsVerify(Boolean mobileIsVerify) {
        this.mobileIsVerify = mobileIsVerify;
    }
}
