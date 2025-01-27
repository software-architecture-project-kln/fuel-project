package com.kln.FuelBackend.service.employeeService;

import com.kln.FuelBackend.calculation.FuelCalculation;
import com.kln.FuelBackend.dataTransferObject.request.employeeRequestDTO.EmployeeRequestDTO;
import com.kln.FuelBackend.dataTransferObject.response.CustomApiResponse;
import com.kln.FuelBackend.dataTransferObject.response.employeeResponseDTO.EmployeeResponseDTO;
import com.kln.FuelBackend.dataTransferObject.response.vehicleResponseDTO.VehicleResponseDTO;
import com.kln.FuelBackend.entity.Employee;
import com.kln.FuelBackend.entity.FuelStation;
import com.kln.FuelBackend.entity.Vehicle;
import com.kln.FuelBackend.enums.OwnerType;
import com.kln.FuelBackend.exception.NotFoundException;
import com.kln.FuelBackend.repositoryDAO.EmployeeRepository;
import com.kln.FuelBackend.repositoryDAO.FuelStationRepository;
import com.kln.FuelBackend.repositoryDAO.VehicleRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService implements EmployeeServiceRepository{

    private final EmployeeRepository employeeRepository;

    private final VehicleRepository vehicleRepository;

    private final FuelStationRepository fuelStationRepository;


    public EmployeeService(EmployeeRepository employeeRepository, VehicleRepository vehicleRepository, FuelStationRepository fuelStationRepository) {
        this.employeeRepository = employeeRepository;
        this.vehicleRepository = vehicleRepository;
        this.fuelStationRepository = fuelStationRepository;
    }

    @Override
    public ResponseEntity<?> createEmployee(EmployeeRequestDTO employeeRequestDTO) {
        FuelStation fuelStation = fuelStationRepository.findById(employeeRequestDTO.getFuelStationId()).orElseThrow(
                () -> new NotFoundException("fuel Station not found")
        );
        Employee employee = new Employee(
                employeeRequestDTO.getEmployeeUsername(),
                employeeRequestDTO.getPassword(),
                employeeRequestDTO.getEmployeeEmail(),
                fuelStation,
                true
        );

        Employee savedEmployee = employeeRepository.save(employee);
        EmployeeResponseDTO responseDTO = new EmployeeResponseDTO(
                savedEmployee.getEmployeeId(),
                savedEmployee.getEmployeeUsername(),
                savedEmployee.getEmployeeEmail(),
                savedEmployee.getFuelStation().getFuelStationId(),
                savedEmployee.getEmployeeStatus()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.CREATED.value(),
                        "employee created successfully",
                        responseDTO
                ),
                HttpStatus.CREATED
        );
    }

    @Override
    @Transactional
    public ResponseEntity<?> updateEmployee(UUID employeeId, EmployeeRequestDTO employeeRequestDTO) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new NotFoundException("employee not found")
        );
        employee.setEmployeeUsername(employeeRequestDTO.getEmployeeUsername());
        employee.setEmployeeEmail(employeeRequestDTO.getEmployeeEmail());
        employee.setPassword(employeeRequestDTO.getPassword());
        employeeRepository.save(employee);

        EmployeeResponseDTO responseDTO = new EmployeeResponseDTO(
                employee.getEmployeeId(),
                employee.getEmployeeUsername(),
                employee.getEmployeeEmail(),
                employee.getFuelStation().getFuelStationId(),
                employee.getEmployeeStatus()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "employee updated successfully",
                        responseDTO
                ),
                HttpStatus.OK
        );
    }

    @Override
    @Transactional
    public ResponseEntity<?> changeEmployeeStatus(UUID employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new NotFoundException("employee not found")
        );
        employee.setEmployeeStatus(!employee.getEmployeeStatus());

        EmployeeResponseDTO responseDTO = new EmployeeResponseDTO(
                employee.getEmployeeId(),
                employee.getEmployeeUsername(),
                employee.getEmployeeEmail(),
                employee.getFuelStation().getFuelStationId(),
                employee.getEmployeeStatus()
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "change employee status successfully",
                        responseDTO
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> employeeFindById(UUID employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new NotFoundException("employee id not found")
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        null,
                        new EmployeeResponseDTO(
                                employee.getEmployeeId(),
                                employee.getEmployeeUsername(),
                                employee.getEmployeeEmail(),
                                employee.getFuelStation().getFuelStationId(),
                                employee.getEmployeeStatus()
                        )
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> getAllEmployee() {
        List<Employee> employeeList = employeeRepository.findAll();
        List<EmployeeResponseDTO> employeeResponseDTOList = new ArrayList<>();

        employeeList.forEach(
                employee -> {
                    employeeResponseDTOList.add(
                            new EmployeeResponseDTO(
                                    employee.getEmployeeId(),
                                    employee.getEmployeeUsername(),
                                    employee.getEmployeeEmail(),
                                    employee.getFuelStation().getFuelStationId(),
                                    employee.getEmployeeStatus()
                            )
                    );
                }
        );
        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        null,
                        employeeResponseDTOList
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> findEmployeesByFuelStationId(UUID fuelStationId) {
        List<Employee> employeeList = employeeRepository.findByFuelStationId(fuelStationId).orElseThrow(
                () -> new NotFoundException("employees not found")
        );

        List<EmployeeResponseDTO> employeeResponseDTOList = new ArrayList<>();

        employeeList.forEach(
                employee -> {
                    employeeResponseDTOList.add(
                            new EmployeeResponseDTO(
                                    employee.getEmployeeId(),
                                    employee.getEmployeeUsername(),
                                    employee.getEmployeeEmail(),
                                    employee.getFuelStation().getFuelStationId(),
                                    employee.getEmployeeStatus()
                            )
                    );
                }
        );

        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        null,
                        employeeResponseDTOList
                ),
                HttpStatus.OK
        );
    }

    @Override
    public ResponseEntity<?> updateFuelPerVehicle(UUID employeeId, UUID vehicleId, Double fuelCapacity) {
        // extract the vehicle details
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElseThrow(
                () -> new NotFoundException("vehicle id not found")
        );

        Double maxFuelCapacityPerWeek;
        // check the vehicle owner type and get max capacity
        if(vehicle.getOwnerType() == OwnerType.User){
             maxFuelCapacityPerWeek = vehicle.getVehicleClasses().getMaxFuelCapacityPerWeek();
        }else{
            maxFuelCapacityPerWeek = vehicle.getVehicleClasses().getMaxFuelCapacityPerWeekForBusinessGov();
        }
        //System.out.println(maxFuelCapacityPerWeek);

        Double currentFuelCapacity = vehicle.getCurrentFuelCapacity();
        //System.out.println(currentFuelCapacity);

        Double newFuelCap = FuelCalculation.calculateFuel(
                maxFuelCapacityPerWeek,
                currentFuelCapacity,
                fuelCapacity
        );
        // update currentFuelCapacity
        //System.out.println(newFuelCap);
        vehicle.setCurrentFuelCapacity(newFuelCap);
        vehicleRepository.save(vehicle);

        return new ResponseEntity<>(
                new CustomApiResponse(
                        HttpStatus.OK.value(),
                        "vehicle fuel capacity updated sucessfully",
                        new VehicleResponseDTO(
                                vehicle.getVehicleId(),
                                vehicle.getVehicleRegisterId(),
                                vehicle.getVehicleEngineNo(),
                                vehicle.getModel(),
                                vehicle.getYearOfManufacture(),
                                vehicle.getCurrentFuelCapacity(),
                                vehicle.getOwnerId(),
                                vehicle.getVehicleClasses().getVehicleClassId(),
                                vehicle.getFuel().getFuelId()
                        )

                ),
                HttpStatus.OK
        );
    }
}
