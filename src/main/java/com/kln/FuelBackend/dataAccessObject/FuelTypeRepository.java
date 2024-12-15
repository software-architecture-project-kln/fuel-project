package com.kln.FuelBackend.dataAccessObject;

import com.kln.FuelBackend.models.FuelType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuelTypeRepository extends JpaRepository<FuelType, Integer> {
}
