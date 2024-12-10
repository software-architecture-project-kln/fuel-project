package com.kln.FuelBackend.services.user;

import com.kln.FuelBackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
@Service
public class UserService implements UserServiceRepository {

    @Override
    public User createUser(User user) {
        System.out.println("User ID: " + user.getUserId());
        return null;
    }

    @Override
    public User updateUser(User user) {
        return null;
    }

    @Override
    public Map<String, Object> deleteUser(Long userId) {
        return null;
    }

    @Override
    public User findUserById(Long userId) {

        return null;
    }
}
