package com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO;

import jakarta.validation.constraints.NotBlank;

public class UserLoginRequestDTO {

    @NotBlank(message = "mobile number is required")
    private String mobile;

    @NotBlank(message = "password is required")
    private String password;

    public UserLoginRequestDTO(String mobile, String password) {
        this.mobile = mobile;
        this.password = password;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
