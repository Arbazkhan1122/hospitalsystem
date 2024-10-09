/* Ravindra_Sanap_Attendance.jsx_03_10_2024_Start */


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Attendance.css';

function Attendance() {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 10;
    const [attendanceStatus, setAttendanceStatus] = useState({});

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:8086/api/employee/getall');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };

        fetchEmployees();
    }, []);

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

    async function markAttendancePresent(employeeId) {
        try {
            await axios.post(`http://localhost:8086/api/attendance/add/${employeeId}`);
            setAttendanceStatus((prevStatus) => ({
                ...prevStatus,
                [employeeId]: true,
            }));
        } catch (error) {
            console.error('Error marking attendance:', error);
        }
    }

    return (
        <div className="attendance-container">
            <h2>Employee Attendance</h2>
            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>EMP. ID</th>
                        <th>EMP Name</th>
                        <th>Mobile No</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.length === 0 ? (
                        <tr>
                            <td className='nodatatoshow' colSpan="6" style={{ textAlign: 'center', color: 'red', padding: '10px' }}>No Rows to Show</td>
                        </tr>
                    ) : (
                        currentEmployees.map((employee) => (
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.position}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <button
                                        className="attendance-btn"
                                        onClick={() => markAttendancePresent(employee.empId)}
                                        disabled={attendanceStatus[employee.empId]}
                                    >
                                        {attendanceStatus[employee.empId] ? 'Marked' : 'Present'}
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={prevPage} className={currentPage === 1 ? 'disabled' : ''} disabled={currentPage === 1}>
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={nextPage} className={currentPage === totalPages ? 'disabled' : ''} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Attendance;


/* Ravindra_Sanap_Attendance.jsx_03_10_2024_End */
