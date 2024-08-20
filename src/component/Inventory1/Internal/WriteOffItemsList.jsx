import React, { useState } from 'react'
import './WriteOffItemList.css'
const WriteOffItemsList = () => {

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
    <div className='writeOffList-content'>
       <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch}>🔍</button>
            </div>
            <div className="writeOffList-results">
            <div>
              <span>Showing 0 / 0 results</span>
              <button onClick={handlePrint}>Print</button>
              </div>
            </div>
            <table className="write-off-list-table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Write Off Qty</th>
                  <th>Unit</th>
                  <th>Write Off Date</th>
                  <th>Rate</th>
                  <th>Total Amount</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7">No Rows To Show</td>
                </tr>
              </tbody>
            </table>
            <div className="writeOffList-pagination">
            <div className='writeOffList-pagination-div'>
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

export default WriteOffItemsList
