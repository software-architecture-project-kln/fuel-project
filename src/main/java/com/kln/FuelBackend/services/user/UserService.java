package com.kln.FuelBackend.services.user;

import com.kln.FuelBackend.dataAccessObject.UserRepository;
import com.kln.FuelBackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
@Service
public class UserService implements UserServiceRepository {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user, Long userId){
        // first check user is existing
        User exisingUser = userRepository.findById(userId).orElseThrow(
                () -> new RuntimeException("User not found for updating")
        );

        exisingUser.setF_name(user.getF_name());
        exisingUser.setL_name(user.getL_name());
        exisingUser.setEmail(user.getEmail());
        exisingUser.setMobile(user.getMobile());

        return userRepository.save(exisingUser);
    }

    @Override
    public Map<String, Object> deleteUser(Long userId) {

        userRepository.deleteById(userId);
        Map<String,Object> response = new HashMap<>();
        response.put("status","success");
        response.put("message", "user delete successfully");
        return response;

    }

    @Override
    public User findUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(
                () -> new RuntimeException("User not found")
        );
    }
}
