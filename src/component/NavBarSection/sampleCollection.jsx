import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../NavBarSection/sampleCollection.css';

const SampleCollection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="sam-Coll-list-requisition">
      <div className="sampCollec-header">
        <h4>List Requisition</h4>
        <button className="samples-collected">Samples Collected List</button>
      </div>
      
      <div className="filters">
        <div className="date-range">
          <span>From:</span>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          <span>To:</span>
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
          <button className="ok-button">OK</button>
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
        <div className="results-info">
          <span>Showing 0 / 0 results</span>
          <button className="print-button">Print</button>
        </div>
        </div>
      
      <table className="requisition-table">
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
            <td colSpan="9" className="no-data">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      
      <div className="pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
  );
};

export default SampleCollection;