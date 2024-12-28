package com.kln.FuelBackend.repositoryDAO;

import com.kln.FuelBackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, UUID> {

    @Query
    Optional<Employee> findByEmployeeUsername(String username);
}
