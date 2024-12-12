package com.kln.FuelBackend.controllers;

import com.kln.FuelBackend.models.User;
import com.kln.FuelBackend.services.user.UserServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
     public User createUser(@RequestBody User user){
         return userServiceRepository.createUser(user);
     }

     @GetMapping("/{userId}")
     public User findUserByID(@PathVariable Long userId){

         return userServiceRepository.findUserById(userId);
     }

     @PutMapping("/{userId}")
     public User updateUserById(@PathVariable Long userId, @RequestBody User user){
         return userServiceRepository.updateUser(user, userId);
     }

     @DeleteMapping("/{userId}")
     public Map<String, Object> deleteUser(@PathVariable Long userId){
         return userServiceRepository.deleteUser(userId);
     }

}
