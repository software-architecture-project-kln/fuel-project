package com.kln.FuelBackend.repositoryDAO;

import com.kln.FuelBackend.entity.Administrator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministratorRepository extends JpaRepository<Administrator,Integer> {
}
