import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './FinalizedPatients.css';

// Component for the table that will be printed
const PrintTable = React.forwardRef((props, ref) => (
  <div ref={ref} className="print-table">
    <table className="patient-table">
      <thead>
        <tr>
          <th>Hospital Number</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Finalized DateTime</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="6" className="no-data">No Rows To Show</td>
        </tr>
      </tbody>
    </table>
  </div>
));

const FinalizedPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedTab, setSelectedTab] = useState('LAMA');
  const printRef = useRef();

  return (
    <div className="finalized-patients">
      <nav className="tab-nav">
        <a 
          href="#" 
          className={selectedTab === 'LAMA' ? 'active' : ''} 
          onClick={() => setSelectedTab('LAMA')}
        >
          LAMA
        </a>
        <a 
          href="#" 
          className={selectedTab === 'Transferred' ? 'active' : ''} 
          onClick={() => setSelectedTab('Transferred')}
        >
          Transferred
        </a>
        <a 
          href="#" 
          className={selectedTab === 'Discharged' ? 'active' : ''} 
          onClick={() => setSelectedTab('Discharged')}
        >
          Discharged
        </a>
        <a 
          href="#" 
          className={selectedTab === 'Admitted' ? 'active' : ''} 
          onClick={() => setSelectedTab('Admitted')}
        >
          Admitted
        </a>
        <a 
          href="#" 
          className={selectedTab === 'Death' ? 'active' : ''} 
          onClick={() => setSelectedTab('Death')}
        >
          Death
        </a>
        <a 
          href="#" 
          className={selectedTab === 'DOR' ? 'active' : ''} 
          onClick={() => setSelectedTab('DOR')}
        >
          DOR
        </a>
      </nav>

      <div className="content">
        <div className="search-filter">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-icon">🔍</button>
          </div>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="All">All</option>
            <option value="General">General</option>
            <option value="Dog Bite">Dog Bite</option>
            <option value="Snake Bite">Snake Bite</option>
            <option value="Animal Bite">Animal Bite</option>
            <option value="Emergency Labour">Emergency Labour</option>
            <option value="Medico-Legal">Medico-Legal</option>
          </select>
        </div>

        <div className="results-info">
          <span>Showing 0 / 0 results</span>
          <ReactToPrint
            trigger={() => <button className="print-btn">Print</button>}
            content={() => printRef.current}
          />
        </div>

        <PrintTable ref={printRef} />

        <div className="pagination">
          <span>0 to 0 of 0</span>
          <button className="pagination-btn">First</button>
          <button className="pagination-btn">Previous</button>
          <span>Page 0 of 0</span>
          <button className="pagination-btn">Next</button>
          <button className="pagination-btn">Last</button>
        </div>
      </div>
    </div>
  );
};

export default FinalizedPatients;
