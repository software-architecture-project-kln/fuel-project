package com.kln.FuelBackend.service.userService;

import com.kln.FuelBackend.dataTransferObject.request.userRequestDTO.UserRequestDTO;
import com.kln.FuelBackend.dataTransferObject.response.CustomApiResponse;
import com.kln.FuelBackend.dataTransferObject.response.userResponseDTO.UserResponseDTO;
import com.kln.FuelBackend.entity.User;
import com.kln.FuelBackend.exception.NotFoundException;
import com.kln.FuelBackend.repositoryDAO.UserRepository;
import com.kln.FuelBackend.service.otpService.OtpServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService implements UserServiceRepository{

    private final UserRepository userRepository;

    private final OtpServiceRepository otpServiceRepository;

    @Autowired
    public UserService (UserRepository userRepository, OtpServiceRepository otpServiceRepository){
        this.userRepository= userRepository;
        this.otpServiceRepository = otpServiceRepository;
    }

    @Override
    public ResponseEntity<?> createUser(UserRequestDTO userRequestDTO) {
        User user = new User(
                userRequestDTO.getF_name(),
                userRequestDTO.getL_name(),
                userRequestDTO.getEmail(),
                userRequestDTO.getPassword(),
                userRequestDTO.getMobile(),
                false
        );

        User savedUser = userRepository.save(user);
        otpServiceRepository.sendOTP(savedUser.getMobile());
        UserResponseDTO responseData = new UserResponseDTO(
                savedUser.getUserId(),
                savedUser.getF_name(),
                savedUser.getL_name(),
                savedUser.getEmail(),
                savedUser.getMobile(),
                savedUser.getVerifyMobile()
        );
        CustomApiResponse response =new CustomApiResponse(
                HttpStatus.CREATED.value(),
                "user created successfully",
                responseData
        );
        return new ResponseEntity<>(response,HttpStatus.CREATED);

    }

    @Override
    @Transactional
    public ResponseEntity<?> updateUser(UserRequestDTO userRequestDTO, Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new RuntimeException("user not found")
        );
        user.setF_name(userRequestDTO.getF_name());
        user.setL_name(userRequestDTO.getL_name());
        user.setEmail(userRequestDTO.getEmail());
        user.setMobile(userRequestDTO.getMobile());

        User updatedUser = userRepository.save(user);
        UserResponseDTO responseData = new UserResponseDTO(
                updatedUser.getUserId(),
                updatedUser.getF_name(),
                updatedUser.getL_name(),
                updatedUser.getEmail(),
                updatedUser.getMobile(),
                updatedUser.getVerifyMobile()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "user updated successfully",
                        responseData
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> deleteUser(Integer userId) {
        userRepository.deleteById(userId);
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "user deleted successfully",
                        ""
                ),
                HttpStatus.OK

        );
    }

    @Override
    public ResponseEntity<?> findUserByID(Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new RuntimeException("user not found")
        );

        UserResponseDTO response = new UserResponseDTO(
                user.getUserId(),
                user.getF_name(),
                user.getL_name(),
                user.getEmail(),
                user.getMobile(),
                user.getVerifyMobile()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "user founded",
                        response
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> verifyUserMobile(Integer userId, Integer otp) {
        // check user is existing
        User user = userRepository.findById(userId).orElseThrow(
                () -> new NotFoundException("user Not found")
        );

        // check otp is valid otp
        if(!otpServiceRepository.verifyOTP(user.getMobile(), otp)){
            throw new RuntimeException("otp is not valid");
        }
        // update db
        user.setVerifyMobile(true);
        userRepository.save(user);

        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "user is verified successfully",
                        new UserResponseDTO(
                                user.getUserId(),
                                user.getF_name(),
                                user.getL_name(),
                                user.getEmail(),
                                user.getMobile(),
                                user.getVerifyMobile()
                        )
                ),
                HttpStatus.OK
        );
    }
}
