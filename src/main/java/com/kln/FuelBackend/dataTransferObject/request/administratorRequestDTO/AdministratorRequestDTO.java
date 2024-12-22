package com.kln.FuelBackend.dataTransferObject.request.administratorRequestDTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class AdministratorRequestDTO {

    @NotBlank(message = "administrator username is required")
    private String administratorUsername;

    @NotBlank(message = "password is required")
    private String password;

    @NotBlank(message = "email is required")
    @Email
    private String administratorEmail;

    public AdministratorRequestDTO(String administratorUsername, String password, String administratorEmail) {
        this.administratorUsername = administratorUsername;
        this.password = password;
        this.administratorEmail = administratorEmail;
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

    public String getAdministratorEmail() {
        return administratorEmail;
    }

    public void setAdministratorEmail(String administratorEmail) {
        this.administratorEmail = administratorEmail;
    }
}
