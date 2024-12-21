package com.kln.FuelBackend.repositoryDAO;

import com.kln.FuelBackend.entity.FuelStation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FuelStationRepository extends JpaRepository<FuelStation, UUID> {
}
