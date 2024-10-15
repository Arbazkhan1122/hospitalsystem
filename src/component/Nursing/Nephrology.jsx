import React, { useState } from 'react';
import './Nephrology.css'; // Update to match the new CSS file

const Nephrology = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1; // Update this according to your data

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="Nephrology-tableContainer">
        <div className='Nephrology-Header'>
            <input type='text' placeholder='Search' className='Nephrology-searchInput'/>
            <div className="Nephrology-actions">
                <span className="Nephrology-results">Showing 0/0 results</span>
                <button className="Nephrology-button">Export</button>
                <button className="Nephrology-button">Print</button>
            </div>
       </div>
        <table className="Nephrology-patientsTable">
          <thead>
            <tr>
              <th>Request Date</th>
              <th>Hospital Number</th>
              <th>DialysisCode</th>
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
            <tr className="Nephrology-tableRow">
              
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Nephrology-pagination">
        <button 
          className="Nephrology-pagination-btn" 
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button 
          className="Nephrology-pagination-btn" 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="Nephrology-pagination-info">
          {`Page ${currentPage} of ${totalPages}`}
        </span>
        <button 
          className="Nephrology-pagination-btn" 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button 
          className="Nephrology-pagination-btn" 
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </>
  );
};

export default Nephrology;
