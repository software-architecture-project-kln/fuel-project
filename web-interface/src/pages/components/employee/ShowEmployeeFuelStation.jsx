import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { employeeFindByFuelStation, employeeChangeStatus } from "../../api/Employee";
import { toast } from "react-toastify";

const ShowEmployeeFuelStation = ({ token: propToken, fuelstationId: propFuelstationId }) => {
    const [token, setToken] = useState(propToken || "");
    const [fuelstationId, setFuelstationId] = useState(propFuelstationId || "");
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        if (propToken) setToken(propToken);
        if (propFuelstationId) setFuelstationId(propFuelstationId);
    }, [propToken, propFuelstationId]); 

    const fetchEmployees = async () => {
        if (!token || !fuelstationId) {
            console.log("Token or FuelstationId is empty");
            return;
        }

        try {
            const response = await employeeFindByFuelStation(fuelstationId, token);
            if (response?.data) {
                const updatedResponse = response.data.map((employee) => ({
                    ...employee,
                    key: employee.employeeId,
                }));
                setEmployees(updatedResponse);
            }
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const handleEmployeeStatus = async (employeeId) => {
        if (!token || !fuelstationId) {
            console.log("Token or FuelstationId is empty");
            return;
        }
    
        try {
            const response = await employeeChangeStatus(employeeId, token);
            if (response) {
                const updatedEmployees = employees.map((employee) =>
                    employee.employeeId === employeeId
                        ? { ...employee, employeeStatus: !employee.employeeStatus } 
                        : employee
                );
                setEmployees(updatedEmployees);
                toast.success("Employee status updated successfully!");
            }
        } catch (error) {
            console.error("Error updating employee status:", error);
            toast.error("Failed to update employee status");
        }
    };
    

    useEffect(() => {
        fetchEmployees();
    }, [token, fuelstationId]); 

    return (
        <>
            {token && fuelstationId ? (
                <div>
                    <Table dataSource={employees} pagination={false} rowKey="employeeId">
                        <Table.Column title="Employee Id" dataIndex="employeeId" key="employeeId" />
                        <Table.Column title="Username" dataIndex="employeeUsername" key="employeeUsername" />
                        <Table.Column title="Email" dataIndex="employeeEmail" key="employeeEmail" />
                        <Table.Column
                            title="Status"
                            key="action"
                            render={(text, record) => (
                                record.employeeStatus ? (
                                    <Button color="cyan" onClick={() => handleEmployeeStatus(record.employeeId)} variant="outlined">Active</Button>
                                ) : (
                                    <Button color="danger" onClick={() => handleEmployeeStatus(record.employeeId)} variant="outlined" >Deactive  </Button>
                                )
                                    
                            )}
                        />
                    </Table>
                </div>
            ) : (
                <p>Loading employees...</p>
            )}
        </>
    );
};

export default ShowEmployeeFuelStation;
