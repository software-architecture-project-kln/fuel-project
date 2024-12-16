package com.kln.FuelBackend.dataTransferObject.response.userResponseDTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserResponseDTO {

    private Integer userId;
    private String f_name;

    private String l_name;

    private String email;

    private String mobile;

    public UserResponseDTO(Integer userId, String f_name, String l_name, String email, String mobile) {
        this.userId = userId;
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.mobile = mobile;
    }
}
