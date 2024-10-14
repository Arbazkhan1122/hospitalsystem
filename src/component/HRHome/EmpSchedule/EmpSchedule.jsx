/* Ravindra_Sanap_EmpSchedule.jsx_04_10_2024_Start */


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmpSchedule.css';

function EmpSchedule() {
    const [schedules, setSchedules] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const schedulesPerPage = 10;

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get('http://localhost:8086/api/employee/getall');
                setSchedules(response.data);
            } catch (error) {
                console.error('Error fetching schedule data:', error);
            }
        };

        fetchSchedules();
    }, []);

    const indexOfLastSchedule = currentPage * schedulesPerPage;
    const indexOfFirstSchedule = indexOfLastSchedule - schedulesPerPage;
    const currentSchedules = schedules.slice(indexOfFirstSchedule, indexOfLastSchedule);
    const totalPages = Math.ceil(schedules.length / schedulesPerPage);

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
        <div className="schedule-container">
            <h2>Employee Schedule</h2>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>EMP. ID</th>
                        <th>EMP Name</th>
                        <th>Mobile No</th>
                        <th>Department</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {currentSchedules.length === 0 ? (
                        <tr>
                            <td className='nodatatoshow' colSpan="6" style={{ textAlign: 'center', color: 'red' }}>No Rows to Show</td>
                        </tr>
                    ) : (
                        currentSchedules.map((schedule) => (
                            <tr key={schedule.empId}>
                                <td>{schedule.empId}</td>
                                <td>{schedule.empName}</td>
                                <td>{schedule.mobile}</td>
                                <td>{schedule.department}</td>
                                <td>{schedule.schedulestart}</td>
                                <td>{schedule.scheduleend}</td>
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

export default EmpSchedule;


/* Ravindra_Sanap_EmpSchedule.jsx_04_10_2024_End */
