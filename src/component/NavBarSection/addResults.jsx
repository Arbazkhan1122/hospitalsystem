import React, { useState } from 'react';
import "../NavBarSection/addResults.css"
import LabAddResultWorkList from './labAddresultWorkList';

function AddResults() {
  const [dateFrom, setDateFrom] = useState('08/08/2024');
  const [dateTo, setDateTo] = useState('08/08/2024');
  const [category, setCategory] = useState('');
  const [showWorkList, setShowWorkList] = useState(false);


  const toggleWorkList = () => {
    setShowWorkList(!showWorkList);
  };

  return (
    <div className="addResults-work-list">
      <div className="addResults-header">
        <div className="addResults-date-range">
          <label>From:</label>
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
          <label>To:</label>
          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </div>
        <div className="addResults-category-select">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">--Select Lab Category--</option>
            
            <option value=""><input type="checkbox" />Sellect All</option>
            <option value=""><input type="checkbox" />Search</option>
            <option value=""><input type="checkbox" />Biochemistry</option>
            <option value="">Hematology</option>
            <option value="">Microbiology</option>
            <option value="">Parasitology</option>
            <option value="">Serology</option>
            <option value="">Immunoassay</option>
            <option value="">DEFAULT</option>
            <option value="">HISTOCYTOLOGY</option>
            <option value="">OUT SOURCE</option>
            <option value="">MOLECULAR BIOCHEMISTRY</option>
            <option value="">PATHOLOGY</option>
            <option value="">TUMOR MARKER</option>
            <option value="">VIROLOGY</option>
            <option value="">Blood Transfusion</option>
      {/* Add more options here */}
          </select>
        </div>
        <button className="addResults-load-button">Load <i class="fa-brands fa-instalod"></i></button>
        <div className='addResults-worklist '> 
          <a href="#"  onClick={toggleWorkList}>WorkList</a>
        </div>
      </div>
      <div className="addResults-searchbar-N-showing">
      <div className="addResults-search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="addResults-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="addResults-print-button">Print</button>
        </div>
      </div>
      <div className="addResults-work-table">
      <table className="addResults-work-table">
        <thead>
          <tr>
            <th>Hospital No.</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Phone Number</th>
            <th>Test Name</th>
            <th>Category</th>
            <th>Requesting</th>
            <th>Run No.</th>
            <th>Bar Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="10">Loading...</td>
          </tr>
        </tbody>
      </table>
      <div className="addResults-pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
      </div>
      {showWorkList && (
        <div className="addResults-popup-overlay">
          <div className="addResults-popup-content">
            <LabAddResultWorkList onClose={toggleWorkList} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddResults;

