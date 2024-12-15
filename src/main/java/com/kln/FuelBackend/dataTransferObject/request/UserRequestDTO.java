package com.kln.FuelBackend.dataTransferObject.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserRequestDTO {
//    private Integer userId;
    @NotBlank(message = "first name is required")
    private String f_name;

    @NotBlank(message = "last name is required")
    private String l_name;

    @NotBlank(message = "email is required")
    @Email(message = "email is not valid")
    private String email;
    @NotBlank(message = "password is required")
    @Size(min = 6, message = "password must be at least 6 chars")
    private String password;

    @NotBlank(message = "mobile number is required")
    private String mobile;

    public UserRequestDTO(String f_name, String l_name, String email, String password, String mobile) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
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
}
