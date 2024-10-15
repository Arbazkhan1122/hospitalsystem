/* Ravindra_Sanap_AllEmployee.jsx_03_10_2024_Start */


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllEmployee.css';
import AddEmployeePopup from './AddEmployeePopup';

function AllEmployee() {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const employeesPerPage = 10;

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:8086/api/employee/getall');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employee data:', error);
        }
    };

    const handleAddEmpClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const handleFormSubmit = async (formData) => {
        try {
            const response = await axios.post('http://localhost:8086/api/employee/add', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            handlePopupClose();
            fetchEmployees();

        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const totalPages = Math.ceil(employees.length / employeesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='employee-container'>
            <div className="addemp-header">
                <h2>Employee List</h2>
                <button className="addemp-button" onClick={handleAddEmpClick}>
                    Add Employee
                </button>
            </div>

            {showPopup && (
                <AddEmployeePopup
                    onClose={handlePopupClose}
                    onSubmit={handleFormSubmit}
                />
            )}

            <table className='employee-table'>
                <thead>
                    <tr>
                        <th>EMP. ID</th>
                        <th>EMP Name</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Date of Joining</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.length === 0 ? (
                        <tr>
                            <td className='nodatatoshow' colSpan="8" style={{ textAlign: 'center', color: 'red' }}>No Rows to Show</td>
                        </tr>
                    ) : (
                        currentEmployees.map((employee) => (
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.email}</td>
                                <td>{employee.position}</td>
                                <td>{employee.department}</td>
                                <td>{employee.dateOfJoining}</td>
                                <td>{employee.salary}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <div className='pagination'>
                <button onClick={prevPage} disabled={currentPage === 1} className={currentPage === 1 ? 'disabled' : ''}>
                    Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}

                <button onClick={nextPage} disabled={currentPage === totalPages} className={currentPage === totalPages ? 'disabled' : ''}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default AllEmployee;


/* Ravindra_Sanap_AllEmployee.jsx_03_10_2024_End */
