package com.kln.FuelBackend.dataTransferObject.response.userResponseDTO;

public class UserResponseDTO {

    private Integer userId;
    private String f_name;

    private String l_name;

    private String email;

    private String mobile;

    public UserResponseDTO() {

    }

    public UserResponseDTO(Integer userId, String f_name, String l_name, String email, String mobile) {
        this.userId = userId;
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.mobile = mobile;
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

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
