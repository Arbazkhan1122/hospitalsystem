import React, { useState } from 'react';
import "../LabSetting/looksUps.css"
// import LSLabTestAddNLTest from './lSLabTestAddNLTest';
import LabLookUpAddNewLUp from './labLookUpAddNewLUp';
const labTests = [
  // { vendorCode:'INTERNAL',vendorName: "Lab Internal", address: "", contactNo: "normal",  isExternal: "false", isActive:'true', isDefault:'true' },
  { moduleName: 'Lab', lookUpName: 'Seen-NotSeen', lookUpData: '["Seen","Not Seen"]', description: '' },

  // Add more rows as needed
  

];

const LookUps = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddNewLabTestClick = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div className="looksUps-container">
    <div className="looksUps-firstRow">
    <div className="looksUps-addBtn">
      <button className="looksUps-add-button" onClick={handleAddNewLabTestClick}>+Add New Look-Up</button>
      </div>
        
      </div>
      <div className='looksUps-search-N-result'>
      <div className="looksUps-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Search..." 
            
          />
        </div>
        <div className="looksUps-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="looksUps-print-button">Print</button>
        </div>
        </div>
      <table >
        <thead>
          <tr>
            <th>Module Name</th>
            <th>Look-up Name</th>
            <th>Look-up Data</th>
            <th>Description </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labTests.map((test, index) => (
            <tr key={index}>
              <td>{test.moduleName}</td>
              <td>{test.lookUpName}</td>
              <td>{test.lookUpData}</td>
              <td>{test.description}</td>
              
              <td>
                <button className="looksUps-edit-button"onClick={handleAddNewLabTestClick}>Edit</button>
                {/* <button className="looksUps-deactivate-button">Deactivate</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="looksUps-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      {/* Modal Popup */}
      {showPopup && (
        <div className="looksUps-modal">
          <div className="looksUps-modal-content">
            <LabLookUpAddNewLUp onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LookUps;
