package com.kln.FuelBackend.repositoryDAO;

import com.kln.FuelBackend.entity.Administrator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AdministratorRepository extends JpaRepository<Administrator,Integer> {

    Optional<Administrator> findByAdministratorUsername(String administratorUsername);
}
