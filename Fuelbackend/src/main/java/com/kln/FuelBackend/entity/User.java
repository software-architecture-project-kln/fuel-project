package com.kln.FuelBackend.entity;

import jakarta.persistence.*;


import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        name = "user",
        indexes = {
                @Index(name = "idx_email",columnList = "email"),
                @Index(name = "idx_mobile", columnList = "mobile")
        }
)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(nullable = false)
    private String f_name;

    @Column(nullable = false)
    private String l_name;


    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false,unique = true)
    private String mobile;

    // add verify the mobile number
    @Column(columnDefinition = "boolean DEFAULT false")
    private Boolean verifyMobile = false;



    public User(){

    }

    public User(String f_name, String l_name, String email, String password, String mobile, Boolean verifyMobile) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.verifyMobile = verifyMobile;
    }

    public User(Integer userId, String f_name, String l_name, String email, String password, String mobile,Boolean verifyMobile) {
        this.userId = userId;
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.verifyMobile = verifyMobile;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
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

    public Boolean getVerifyMobile() {
        return verifyMobile;
    }

    public void setVerifyMobile(Boolean verifyMobile) {
        this.verifyMobile = verifyMobile;
    }


}
