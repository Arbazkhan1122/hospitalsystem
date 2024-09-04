import React, { useState } from 'react';
import "./Requisition.css"; // Updated to match the provided file

const ReturnFromSubstore = () => {
  const [dateFrom, setDateFrom] = useState('2024-08-07');
  const [dateTo, setDateTo] = useState('2024-08-07');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement search logic here
  };

  const handlePrint = () => {
    console.log('Printing...');
    // Implement print logic here
  };

  return (
    <div className="requisition-inventory-content"> {/* Updated class name */}
      <div className="requisition-inventory-date-range"> {/* Updated class name */}
        <label>From: <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} /></label>
        <label>To: <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} /></label>
        <button className="requisition-inventory-star">☆</button> {/* Updated class name */}
        <button className="requisition-inventory-minus">-</button> {/* Updated class name */}
        <button className="requisition-inventory-ok">✓ OK</button> {/* Updated class name */}
        <div className="substore-select-container">
      <label >Substore:</label>
      <select
       
      >
        <option value="">Select Substore</option>
       
      </select>
    </div>
      </div>
      
      <div className="requisition-inventory-search-bar"> {/* Updated class name */}
        <input 
          type="text" 
          placeholder="Search" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>
   
      <div className="requisition-inventory-results"> {/* Updated class name */}
        <span>Showing 0 / 0 results</span>
        <button onClick={handlePrint}>Print</button>
      </div>
      <div className="requisition-ta">
      <table className="requisition-inventory-requisition-table"> {/* Updated class name */}
        <thead>
          <tr>
            <th>Returned Date</th>
            <th>Returned By</th>
            <th>Substore From</th>
            <th>Status</th>
            <th>Received By</th>
            <th>Received Date</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  className='return-from-substore-no-row' colSpan="8">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      <div className="requisition-inventory-requisition-pagination"> {/* Updated class name */}
        <div className="requisition-inventory-requisition-pagination-div"> {/* Updated class name */}
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ReturnFromSubstore;
