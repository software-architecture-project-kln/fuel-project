package com.kln.FuelBackend.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException (String message){
        super(message);
    }
}
