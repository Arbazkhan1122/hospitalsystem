import React, { useState } from 'react';
import Barcode from 'react-barcode'; // Import the barcode generator
import "../NavBarSection/addResults.css";
import LabAddResultWorkList from './labAddresultWorkList';

function AddResults() {
  const [dateFrom, setDateFrom] = useState('08/08/2024');
  const [dateTo, setDateTo] = useState('08/08/2024');
  const [category, setCategory] = useState('');
  const [showWorkList, setShowWorkList] = useState(false);
  const [stickerData, setStickerData] = useState(null); // State to hold sticker data

  const toggleWorkList = () => {
    setShowWorkList(!showWorkList);
  };

  const handleStickerClick = (patientDetails) => {
    // Set sticker data to display in a modal/popup
    setStickerData(patientDetails);
  };

  return (
    <div className="addResults-work-list">
      <div className="addResults-header">
       
        <div className="addResults-controls">
        {/* Your date range and button controls */}
          <div className="addResults-date-range">
            <label>
              From:
              <input type="date" defaultValue="2024-08-09" />
            </label>
            <label>
              To:
              <input type="date" defaultValue="2024-08-16" />
            </label>
            <button className="addResults-star-button">☆</button>
            <button className="addResults-ok-button">OK</button>
          </div>
      </div>
        <div className="addResults-category-select">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">--Select Lab Category--</option>
            <option value=""><input type="checkbox" />Select All</option>
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
        <button className="addResults-load-button">Load <i className="fa fa-refresh" /> </button>
        <div className='addResults-worklist'>
          <a href="#" onClick={toggleWorkList}>WorkList</a>
        </div>
      </div>
      <div className="addResults-searchbar-N-showing">
        <div className="addResults-search-bar">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search"
                className="addResults-search-input"
              />
            </div>
        <div className="addResults-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="addResults-print-button"><i class="fa-solid fa-print"></i> Print</button>
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
              <td>HOS53526722</td>
              <td>Arbaz Pathan</td>
              <td>23/Male</td>
              <td>9876367222</td>
              <td>CREATININE</td>
              <td>Biochemistry</td>
              <td>Private Ward</td>
              <td>8/5</td>
              <td>1000059</td>
              <td>
                <p>Add Result</p>
                <p onClick={() => handleStickerClick({
                  hospitalNo: 'HOS53526722',
                  patientName: 'Arbaz Pathan',
                  ageSex: '23/Male',
                  phoneNumber: '9876367222',
                  testName: 'CREATININE',
                  category: 'Biochemistry',
                  requesting: 'Private Ward',
                  runNo: '8/5',
                  barcode: '1000059'
                })}>Sticker</p>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="addResults-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div> */}
      </div>
      {showWorkList && (
        <div className="addResults-popup-overlay">
          <div className="addResults-popup-content">
            <LabAddResultWorkList onClose={toggleWorkList} />
          </div>
        </div>
      )}
      {stickerData && (
        <div className="sticker-popup-overlay">
          <div className="sticker-popup-content">
            <h3>Sticker Details</h3>
            <p>Hospital No: {stickerData.hospitalNo}</p>
            <p>Patient Name: {stickerData.patientName}</p>
            <p>Age/Sex: {stickerData.ageSex}</p>
            <p>Phone Number: {stickerData.phoneNumber}</p>
            <p>Test Name: {stickerData.testName}</p>
            <p>Category: {stickerData.category}</p>
            <p>Requesting: {stickerData.requesting}</p>
            <p>Run No: {stickerData.runNo}</p>
            <p>Bar Code: {stickerData.barcode}</p>
            {/* Barcode display */}
            <Barcode value={stickerData.barcode} />
            <button onClick={() => setStickerData(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddResults;
