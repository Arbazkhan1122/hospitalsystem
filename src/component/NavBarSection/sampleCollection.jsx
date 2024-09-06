

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../NavBarSection/sampleCollection.css';

const SampleCollection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  const handlePrint = () => {
    const printContents = document.getElementById('printable-table').outerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload to restore the original content
  };

  return (
    <div className="sam-Coll-list-requisition">
      <div className="sampCollec-header">
        <h5>List Requisition</h5>
        <button className="samCollec-samples-collected">Samples Collected List</button>
      </div>
      
      <div className="sampCollect-filters">
        <div className="sampCollect-date-range">
          <span>From:</span>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          <span>To:</span>
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
          <button className="samCollec-ok-button"><i className="fa-regular fa-square-check"></i> OK</button>
        </div>
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
          <button className="samCollec-print-button" onClick={handlePrint}>Print</button>
        </div>
      </div>

      <div className='samCollec-table-N-paginationDiv'>
        <table id="printable-table" className="samCollec-requisition-table">
          <thead>
            <tr>
              <th>Requisition Date</th>
              <th>Hospital Number</th>
              <th>Patient Name</th>
              <th>Age/Sex</th>
              <th>Phone Number</th>
              <th>Requesting Dept.</th>
              <th>Visit Type</th>
              <th>Run Number Type</th>
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

export default SampleCollection;
