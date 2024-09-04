import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DispatchTable.css';

const DispatchTable = ({ dispatch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 10; // Adjust as needed

    useEffect(() => {
        // Fetch data logic here if needed
        // For now, we'll just use the props data
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePageChange = (direction) => {
        setCurrentPage(prevPage => {
            if (direction === 'next') {
                return Math.min(prevPage + 1, totalPages);
            }
            if (direction === 'previous') {
                return Math.max(prevPage - 1, 1);
            }
            return prevPage;
        });
    };

    const filteredDispatches = dispatch ? [dispatch] : [];
    const handlePrint = () => {
        window.print(); // Trigger the browser's print dialog
    };
    return (
        <div className="dispatch-table-container">
            <div className="dispatch-table-header">
                <div className="dispatch-table-search">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="dispatch-table-actions">
                <span>Showing {filteredDispatches.length} result</span>

                <button className="dispatch-print-btn" onClick={handlePrint}>Print</button>

                    <button className="dispatch-export-btn">Export</button>
                </div>
            </div>

            <table className="requisition-dispatch-table">
                <thead>
                    <tr>
                        <th>DispatchNo</th>
                        <th>Dispatch Date</th>
                        <th>Req. No</th>
                        <th>Received By</th>
                        <th>Dispatched By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDispatches
                        .filter(dispatch => 
                            dispatch.id.toString().includes(searchTerm) ||
                            dispatch.dispatchDate.includes(searchTerm)
                        )
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map(dispatch => (
                            <tr key={dispatch.id}>
                                <td>{dispatch.id}</td>
                                <td>{dispatch.dispatchDate}</td>
                                <td>{`REQ${dispatch.id}`}</td>
                                <td>{dispatch.receivedBy || 'Mr. admin admin'}</td>
                                <td>{dispatch.dispatchedBy || 'Mr. admin admin'}</td>
                                <td>
                                    <button className='dispatch-view-btn'>View</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <div className="dispatch-table-pagination">

                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange('previous')}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange('next')}
                >
                    Next
                </button>
            </div>

            
        </div>
    );
};

export default DispatchTable;
