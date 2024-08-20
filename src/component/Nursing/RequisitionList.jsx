import React, { useState } from 'react';
import './RequisitionList.css'; // Update to match the new CSS file

const RequisitionList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 1; // Update this according to your data

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <div className="RequisitionList-tableContainer">
            <h2>Drugs Requisition List</h2>
                <div className='RequisitionList-Header'>
                   
                    <input type='text' placeholder='Search' className='RequisitionList-searchInput'/>
                    <div className="RequisitionList-actions">
                        <span className="RequisitionList-results">Showing 1-10 of 10 results</span>
                        <button className="RequisitionList-button">Export</button>
                        <button className="RequisitionList-button">Print</button>
                    </div>
                </div>
                <table className="RequisitionList-patientsTable">
                    <thead>
                        <tr>
                            <th>Request Date</th>
                            <th>Hospital Number</th>
                            <th>Dialysis Code</th>
                            <th>Patient Name</th>
                            <th>Phone Number</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Service Name</th>
                            <th>Performer Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="RequisitionList-tableRow">
                            <td>2024-08-10</td>
                            <td>123456789</td>
                            <td>DC12345</td>
                            <td>John Doe</td>
                            <td>+1234567890</td>
                            <td>45</td>
                            <td>M</td>
                            <td>Hemodialysis</td>
                            <td>Dr. Smith</td>
                            <td>
                                <button className="RequisitionList-btn RequisitionList-consumption">View</button>
                              
                            </td>
                        </tr>
                        <tr className="RequisitionList-tableRow">
                            <td>2024-08-11</td>
                            <td>987654321</td>
                            <td>DC67890</td>
                            <td>Jane Smith</td>
                            <td>+1987654321</td>
                            <td>30</td>
                            <td>F</td>
                            <td>Peritoneal Dialysis</td>
                            <td>Dr. Johnson</td>
                            <td>
                                <button className="RequisitionList-btn RequisitionList-consumption">View</button>
                               
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
            <div className="RequisitionList-pagination">
                <button 
                    className="RequisitionList-pagination-btn" 
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                <button 
                    className="RequisitionList-pagination-btn" 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="RequisitionList-pagination-info">
                    {`Page ${currentPage} of ${totalPages}`}
                </span>
                <button 
                    className="RequisitionList-pagination-btn" 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
                <button 
                    className="RequisitionList-pagination-btn" 
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    Last
                </button>
            </div>
        </>
    );
};

export default RequisitionList;
