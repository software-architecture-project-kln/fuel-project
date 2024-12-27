package com.kln.FuelBackend.dataTransferObject.response;

public class LoginResponseDTO {

    private Integer statusCode;

    private String message;

    private String accessToken;

    private Object data;

    public LoginResponseDTO(Integer statusCode, String message, String accessToken, Object data) {
        this.statusCode = statusCode;
        this.message = message;
        this.accessToken = accessToken;
        this.data = data;
    }

    public Integer getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
