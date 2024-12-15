package com.kln.FuelBackend.repository;

import com.kln.FuelBackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
