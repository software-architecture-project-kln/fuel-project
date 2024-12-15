package com.kln.FuelBackend.dataTransferObject.response;

import lombok.Data;

import java.time.LocalDateTime;


public class ExceptionResponseDTO {
    private boolean status;

    private LocalDateTime date;

    private String message;

    public ExceptionResponseDTO(boolean status, String message) {
        this.status = status;
        this.message = message;
        this.date = LocalDateTime.now();
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
