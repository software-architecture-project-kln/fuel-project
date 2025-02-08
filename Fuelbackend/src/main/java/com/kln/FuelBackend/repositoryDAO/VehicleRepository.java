package com.kln.FuelBackend.repositoryDAO;

import com.kln.FuelBackend.entity.Vehicle;
import com.kln.FuelBackend.enums.OwnerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle , UUID> {

    @Query("SELECT v FROM Vehicle v WHERE v.ownerId = :ownerId AND v.ownerType = :ownerType ")
    Optional<List<Vehicle>> findVehicleByOwnerId(
            @Param("ownerId") Integer ownerId,
            @Param("ownerType")OwnerType ownerType
    );

    @Modifying
    @Transactional
    @Query("UPDATE Vehicle SET currentFuelCapacity = 0")
    void resetCurrentCapacityAllVehicle();
}
