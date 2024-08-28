import React, { useState } from 'react'; // Import useState from React
import './MaternityList.css';

const MaternityList = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClearButtonClick = () => {
    setPopupVisible(!isPopupVisible);
    console.log("Popup visibility toggled:", !isPopupVisible); // Debug log
  };
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='maternity-component'>
      <div className="maternity-list">
      {/* <div className="tabs">
        <button className="tab active">Maternity List</button>
        <button className="tab">Payments</button>
        <button className="tab">Reports</button>
      </div> */}
      
      <div className="matern-content">
        <div className="matern-edit-info">
          <span>Edit Information Of</span>
          <input type="text" placeholder="Existing Patient Name" />
          
          <a href="#" className="matern-view-all">View all Maternity Patient</a>
        </div>
        
        <div className="mater-date-range">
          <label>From:</label>
          <input type="date" value="2024-08-13" />
          <label>To:</label>
          <input type="date" value="2024-08-13" />
          <button className="mater-star-btn">☆</button>
          <button className="mater-clear-button" onClick={handleClearButtonClick}>-</button>
          {isPopupVisible && (
              <div className="mater-popup">
                <ul>
                  <li><button>Today</button></li>
                  <li><button>Last 1 Week</button></li>
                  <li><button>Last 1 Month</button></li>
                  <li><button>Last 3 Months</button></li>
                </ul>
              </div>
            )}
          <button className="mater-ok-btn" style={{marginLeft:'10px'}}>OK</button>
        </div>
        
       <div className="mater-search-bar">
          <input type="text" placeholder="Search"
          
          />
          
        </div> 
        
        <div className="mater-results">
          <span className='mater-span'>Showing 0 / 0 results</span>
          <button className="mater-print-btn" onClick={handlePrint}>Print</button>
        </div>
        <div className='maternity-table'>
        <table className='mater-table'>
          <thead>
            <tr>
              <th className="mater-hosp-col">Hosp ...</th>
              <th className="mater-name-col">Name</th>
              <th className="mater-age-col">Age...</th>
              <th className="mater-address-col">Address</th>
              <th className="mater-phone-col">Phone ...</th>
              <th className="mater-husband-col">Husband's ...</th>
              <th className="mater-h-col">H</th>
              <th className="mater-w-col">W</th>
              <th className="mater-lmp-col">LMP</th>
              <th className="mater-edd-col">EDD</th>
              <th className="mater-action-col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="11" className="mater-no-rows">No Rows To Show</td>
            </tr>
          </tbody>
         
        </table>
        
        
        <div className="maternity-pagination">
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
    </div>
  );
};

export default MaternityList;