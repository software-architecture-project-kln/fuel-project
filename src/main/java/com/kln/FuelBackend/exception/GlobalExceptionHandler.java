package com.kln.FuelBackend.exception;

import com.kln.FuelBackend.dataTransferObject.response.ExceptionResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ExceptionResponseDTO> handleRunTimeException(RuntimeException runtimeException){
        ExceptionResponseDTO exceptionResponseDTO = new ExceptionResponseDTO(false,runtimeException.getMessage());
        return new ResponseEntity<>(exceptionResponseDTO, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ExceptionResponseDTO> handleNotFoundException(NotFoundException notFoundException){
        ExceptionResponseDTO exceptionResponseDTO = new ExceptionResponseDTO(false, notFoundException.getMessage());
        return new ResponseEntity<>(exceptionResponseDTO,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public  ResponseEntity<ExceptionResponseDTO> handleAnyException(Exception exception){
        ExceptionResponseDTO exceptionResponseDTO = new ExceptionResponseDTO(false,exception.getMessage());
        return new ResponseEntity<>(exceptionResponseDTO,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
