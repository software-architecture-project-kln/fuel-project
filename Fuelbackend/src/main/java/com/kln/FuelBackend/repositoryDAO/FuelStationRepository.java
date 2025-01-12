package com.kln.FuelBackend.repositoryDAO;

import com.kln.FuelBackend.entity.FuelStation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface FuelStationRepository extends JpaRepository<FuelStation, UUID> {

    @Query
    Optional<FuelStation> findByFuelStationRegisterId(String fuelStationRegisterId);
}
