import React, { useState } from 'react'
import "./Requisition.css"

const Requisition = () => {
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
    <div className="Requisition-content">
        <button className="direct-dispatch">Direct Dispatch ➚</button>
            <div className="status-filter">
              <span>List by Requisition Status:</span>
              {['Pending', 'Complete', 'Cancelled', 'All'].map(s => (
                <label key={s}>
                  <input 
                    type="radio" 
                    name="status" 
                    checked={status === s} 
                    onChange={() => setStatus(s)}
                  /> {s}
                </label>
              ))}
            </div>
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
            <table className='requisition-table'>
              <thead>
                <tr>
                  <th>Req.No</th>
                  <th>StoreName</th>
                  <th>Req.Date</th>
                  <th>Requested By</th>
                  <th>Received By</th>
                  <th>Status</th>
                  <th>Verification Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8">No Rows To Show</td>
                </tr>
              </tbody>
            </table>
            <div className="requisition-pagination">
            <div className="requisition-pagination-div">
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

export default Requisition
