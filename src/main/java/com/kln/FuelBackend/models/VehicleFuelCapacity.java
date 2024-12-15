package com.kln.FuelBackend.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Data
@Table(
        name = "vehicle_fuel_capacity",
        indexes = {
                @Index(name = "idx_red_id",columnList = "regId")
        }
)
public class VehicleFuelCapacity {

    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "reg_id", nullable = false, unique = true, referencedColumnName = "regId")
    private Vehicle regId;

    @OneToOne
    @JoinColumn(name = "fuel_type_id", nullable = false, unique = true,referencedColumnName = "fuelTypeId")
    private FuelType fuelTypeId;

    @Getter
    @Setter
    @Column(columnDefinition = "DECIMAL(10,2) DEFAULT 0.00")
    private Double fuelCapacityPerWeek;

    @Setter
    @Getter
    @Column(columnDefinition = "DECIMAL(10,2) DEFAULT 0.00")
    private Double currentCapacityInWeek;

    public VehicleFuelCapacity(){

    }

    public VehicleFuelCapacity(Integer id, Double fuelCapacityPerWeek, Double currentCapacityInWeek) {
        this.id = id;
        this.fuelCapacityPerWeek = fuelCapacityPerWeek;
        this.currentCapacityInWeek = currentCapacityInWeek;
    }

    public VehicleFuelCapacity(Integer id, Double currentCapacityInWeek){
        this.id = id;
        this.currentCapacityInWeek = currentCapacityInWeek;
    }

}
