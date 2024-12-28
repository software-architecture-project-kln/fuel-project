package com.kln.FuelBackend.dataTransferObject.request.loginRequestDTO;

import jakarta.validation.constraints.NotBlank;

public class AdministratorLoginRequestDTO {
    @NotBlank(message = "administrator username is required")
    private String administratorUsername;

    @NotBlank(message = "password is required")
    private String password;

    public AdministratorLoginRequestDTO(String administratorUsername, String password) {
        this.administratorUsername = administratorUsername;
        this.password = password;
    }

    public String getAdministratorUsername() {
        return administratorUsername;
    }

    public void setAdministratorUsername(String administratorUsername) {
        this.administratorUsername = administratorUsername;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
