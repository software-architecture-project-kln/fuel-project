package com.kln.FuelBackend.exception;

public class JwtValidationException extends RuntimeException{
    public JwtValidationException(String message){
        super(message);
    }
}
