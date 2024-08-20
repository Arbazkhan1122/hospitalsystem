import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../DisPatientConsumption/dispenPatientConsumption.css"

const DispenPatientConsumption = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="sam-Coll-list-requisition">
      <div className="sampCollec-header">
        <button className="samCollec-samples-collected">New Consumption</button>
      </div>
      
      <div className="sampCollect-filters">
       
        
      
        
        
      </div>
      <div className='sam-Coll-search-N-result'>
      <div className="sam-Coll-search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="samCollect-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="samCollec-print-button">Print</button>
        </div>
        </div>

        <div className='table-N-paginationDiv'>
      
      <table className="samCollec-requisition-table">
        <thead>
          <tr>
            <th>Hospital Number</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Contact No.</th>
            <th>Total Amt.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td colSpan="9" className="no-data">No Rows To Show</td> */}
          </tr>
        </tbody>
      </table>
      
      <div className="sampCollect-pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
      </div>
    </div>
  );
};

export default DispenPatientConsumption;