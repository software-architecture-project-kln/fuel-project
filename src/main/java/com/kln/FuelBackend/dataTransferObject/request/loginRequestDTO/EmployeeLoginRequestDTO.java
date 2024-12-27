package com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO;

import jakarta.validation.constraints.NotBlank;

public class EmployeeLoginRequestDTO {
    @NotBlank(message = "mobile number is required")
    private String username;

    @NotBlank(message = "password is required")
    private String password;


    public EmployeeLoginRequestDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
