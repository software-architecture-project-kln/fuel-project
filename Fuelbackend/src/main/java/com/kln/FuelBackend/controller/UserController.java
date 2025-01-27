package com.kln.FuelBackend.controller;

import com.kln.FuelBackend.dataTransferObject.request.userRequestDTO.UserRequestDTO;
import com.kln.FuelBackend.service.userService.UserServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserServiceRepository userServiceRepository;

    @Autowired
    public UserController(UserServiceRepository userServiceRepository){
        this.userServiceRepository = userServiceRepository;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserRequestDTO userRequestDTO){
        return userServiceRepository.createUser(userRequestDTO);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> updateUser(@RequestBody UserRequestDTO userRequestDTO, @PathVariable Integer userId){
        return userServiceRepository.updateUser(userRequestDTO,userId);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> findUserById(@PathVariable Integer userId){
        return userServiceRepository.findUserByID(userId);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer userId){
        return userServiceRepository.deleteUser(userId);
    }

    @PostMapping("/otp/{userId}")
    public ResponseEntity<?> verifyUser(@PathVariable Integer userId, @RequestBody Map<String,Object> requestBody){
        Object data = requestBody.get("otp");
        Integer otp = (Integer) data;
        return userServiceRepository.verifyUserMobile(userId,otp);
    }
}
