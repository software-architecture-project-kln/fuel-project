package com.kln.FuelBackend.repositoryDAO;

import com.kln.FuelBackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, UUID> {

    Optional<Employee> findByEmployeeUsername(String username);

    @Query("SELECT e FROM Employee e WHERE e.fuelStation.id = :fuelStationId")
    Optional<List<Employee>> findByFuelStationId(@Param("fuelStationId") UUID fuelStationId);

}
