package com.kln.FuelBackend.exception;

import com.kln.FuelBackend.dataTransferObject.response.ExceptionResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.naming.AuthenticationException;

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

    @ExceptionHandler(ForbiddenException.class)
    public ResponseEntity<ExceptionResponseDTO> handleForbiddenException(ForbiddenException forbiddenException){
        ExceptionResponseDTO exceptionResponseDTO = new ExceptionResponseDTO(false, forbiddenException.getMessage());
        return new ResponseEntity<>(exceptionResponseDTO,HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UnauthorizedAccessException.class)
    public ResponseEntity<ExceptionResponseDTO> handleUnauthorizedAccessException(UnauthorizedAccessException unauthorizedAccessException){
        ExceptionResponseDTO exceptionResponseDTO = new ExceptionResponseDTO(false, unauthorizedAccessException.getMessage());
        return new ResponseEntity<>(exceptionResponseDTO,HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ExceptionResponseDTO> handleAuthException( AuthenticationException authenticationException){
        ExceptionResponseDTO exceptionResponseDTO = new ExceptionResponseDTO(false,authenticationException.getMessage());
        return new ResponseEntity<>(exceptionResponseDTO,HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(JwtValidationException.class)
    public ResponseEntity<ExceptionResponseDTO> handleJwtValidationException(JwtValidationException jwtValidationException){
        ExceptionResponseDTO exceptionResponseDTO = new ExceptionResponseDTO(false, jwtValidationException.getMessage());
        return new ResponseEntity<>(exceptionResponseDTO,HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(Exception.class)
    public  ResponseEntity<ExceptionResponseDTO> handleAnyException(Exception exception){
        ExceptionResponseDTO exceptionResponseDTO = new ExceptionResponseDTO(false,exception.getMessage());
        return new ResponseEntity<>(exceptionResponseDTO,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
