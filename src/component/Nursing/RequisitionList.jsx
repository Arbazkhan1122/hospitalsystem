import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RequisitionList.css'; // Update to match the new CSS file

const RequisitionList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); // Assuming you may want to calculate this based on API response
    const [requisitions, setRequisitions] = useState([]);
    const itemsPerPage = 10; // Adjust this as needed

    useEffect(() => {
        const fetchRequisitions = async () => {
            try {
                const response = await axios.get('http://192.168.1.37:1415/api/medications');
                const data = response.data;
                // Assuming you have pagination data in API response
                // Update this logic based on actual API response
                setRequisitions(data); 
                setTotalPages(Math.ceil(data.length / itemsPerPage)); // Example logic for total pages
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchRequisitions();
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Calculate the data to show on current page
    const currentItems = requisitions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <div className="RequisitionList-tableContainer">
                <h2>Drugs Requisition List</h2>
                <div className='RequisitionList-Header'>
                    <input type='text' placeholder='Search' className='RequisitionList-searchInput'/>
                    <div className="RequisitionList-actions">
                        <span className="RequisitionList-results">Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, requisitions.length)} of {requisitions.length} results</span>
                        <button className="RequisitionList-button">Export</button>
                        <button className="RequisitionList-button">Print</button>
                    </div>
                </div>
                <table className="RequisitionList-patientsTable">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            {/* <th>Hospital Number</th> */}
                            <th>Contact No</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                           
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className="RequisitionList-tableRow">
                                
                                 <td>{item.patientDTO?.firstName} {item.patientDTO?.lastName}</td>
                                 <td>{item.patientDTO?.phoneNumber || '7239876658'}</td>

                                <td>{item.lastTaken || 'N/A'}</td>
                                <td>pending</td>
                                <td>{item.medicationName || 'N/A'}</td>
                                <td>1</td>
                                {/* <td>{item.comments || 'N/A'}</td> */}
                                <td>
                                    {/* <button className="RequisitionList-btn RequisitionList-consumption">View</button> */}
                                </td>
                            </tr>
                        ))}
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
