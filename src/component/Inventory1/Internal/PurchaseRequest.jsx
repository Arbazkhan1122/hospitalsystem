import React, { useState } from 'react'
import './PurchaseRequest.css'
const PurchaseRequest = () => {
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

    <div className='perchase-content'>
       <button className="create-purchase-request">Create Purchase Request</button>
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
            <div className="purchase-results">
                <div>
              <span>Showing 2 / 2 results</span>
              <button onClick={handlePrint}>Print</button>
              </div>
            </div>
            <table className='purchase-request-table'>
              <thead>
                <tr>
                  <th>P...</th>
                  <th>Request Date</th>
                  <th>Vendor</th>
                  <th>Status</th>
                  <th>Verification Status</th>
                  <th>RequestedBy</th>
                  <th>PO Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>2024-08-02 00:00</td>
                  <td>MEDS</td>
                  <td>active</td>
                  <td>0 verified out of 2</td>
                  <td>Mr. admin admin</td>
                  <td>No</td>
                  <td>View</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2024-08-02 00:00</td>
                  <td>MEDS</td>
                  <td>active</td>
                  <td>0 verified out of 2</td>
                  <td>Mr. admin admin</td>
                  <td>No</td>
                  <td>View</td>
                </tr>
              </tbody>
            </table>
            <div className="perchase-pagination">
            <div className="perchase-pagination-div">
              <span>1 to 2 of 2</span>
              <button>First</button>
              <button>Previous</button>
              <span>Page 1 of 1</span>
              <button>Next</button>
              <button>Last</button>
              </div>
            </div>
    </div>
  )
}

export default PurchaseRequest
