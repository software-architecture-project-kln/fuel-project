package com.kln.FuelBackend.repositoryDAO;

import com.kln.FuelBackend.entity.Fuel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuelRepository extends JpaRepository<Fuel, Integer> {
}
