import React, { useState } from 'react'
import "./ReturnFromSubstore.css"
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
    <div className="return-content">
      <div className="date-range">
              <label>From: <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} /></label>
              <label>To: <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} /></label>
              <button className="star">☆</button>
              <button className="minus">-</button>
              <button className="ok">✓ OK</button>
            </div>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch}>🔍</button>
            </div>
            <div className="results">
              <span>Showing 0 / 0 results</span>
              <button onClick={handlePrint}>Print</button>
            </div>
            <table className='return-from-substore-table'>
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
                  <td colSpan="8">No Rows To Show</td>
                </tr>
              </tbody>
            </table>
            <div className="return-pagination">
            <div className='return-pagination-div'>
              <span>0 to 0 of 0</span>
              <button>First</button>
              <button>Previous</button>
              <span>Page 0 of 0</span>
              <button>Next</button>
              <button>Last</button>
              </div>
            </div>
    </div>
  )
}

export default ReturnFromSubstore
