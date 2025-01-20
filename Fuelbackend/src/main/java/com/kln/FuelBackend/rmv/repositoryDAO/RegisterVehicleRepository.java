package com.kln.FuelBackend.rmv.repositoryDAO;

import com.kln.FuelBackend.rmv.entity.RegisteredVehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegisterVehicleRepository extends JpaRepository<RegisteredVehicle, String> {
    Optional<RegisteredVehicle> findByVehicleRegisterIdAndVehicleEngineNo(String vehicleRegisterId, String vehicleEngineNo);
}
