package com.kln.FuelBackend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

@Entity
@Table(
        name = "administrator",
        indexes = {
                @Index(name = "idx_administrator_username", columnList = "administratorId"),
                @Index(name = "idx_administrator_email", columnList = "administratorEmail")
        }
)
public class Administrator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer administratorId;

    @Column(nullable = false,unique = true)
    private String administratorUsername;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    @Email
    private String administratorEmail;

    public Administrator() {
    }

    public Administrator(String administratorUsername, String password, String administratorEmail) {
        this.administratorUsername = administratorUsername;
        this.password = password;
        this.administratorEmail = administratorEmail;
    }

    public Integer getAdministratorId() {
        return administratorId;
    }

    public void setAdministratorId(Integer administratorId) {
        this.administratorId = administratorId;
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
