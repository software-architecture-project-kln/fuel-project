package com.kln.FuelBackend.service.userService;

import com.kln.FuelBackend.dataTransferObject.request.userRequestDTO.UserRequestDTO;
import org.springframework.http.ResponseEntity;

public interface UserServiceRepository {
    public ResponseEntity<?> createUser(UserRequestDTO userRequestDTO);

    public ResponseEntity<?> updateUser(UserRequestDTO userRequestDTO,Integer userId);

    public ResponseEntity<?> findUserByID(Integer userId);

    public ResponseEntity<?> deleteUser(Integer userId);
}
