package com.kln.FuelBackend.services.user;

import com.kln.FuelBackend.models.User;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface UserServiceRepository {
    public User createUser(User user);

    public User updateUser(User user, Long userId);

    public Map<String,Object> deleteUser(Long userId);

    public User findUserById(Long userId);
}
