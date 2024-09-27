import React, { useState } from 'react';
import './labResult.css';
import { useNavigate } from 'react-router-dom';

const Lab2 = () => {
  const [selectedSignatory, setSelectedSignatory] = useState('');
  const navigate = useNavigate();

  const handleSignatoryChange = (event) => {
    setSelectedSignatory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected signatory: ${selectedSignatory}`);
  };

  const handleBackClick = () => {
    navigate('/addResultForm'); 
  };

  return ( 
    <div className="lab-page2">
     <button className="back-button" onClick={handleBackClick}>← Back To Grid</button>
     <div className="lab-container2">
     <header className="lab-header">
        <div className="lab-logo">
          <div className="lab-circle"><span className="lab-plus">+</span></div>
          <span className="lab-text">Hims Health</span>
        </div>
        <div className="lab-hospital">
          <span>Hims Health Hospital</span>
        </div>
        <div className="lab-contact">
          <p>P.O Box xxxx-xxxx</p>
          <p>info@himshealth.demo</p>
          <p>+2547xxxxxxxxx</p>
        </div>
      </header>
      <div className="lab-patient-details">
        <div>
          <p>Name: Sample Sdf Gh</p>
          <p>Address: Juja sub county</p>
          <p>Prescriber Name: Dr. pooja Mishra</p>
          <p>Lab No: 1/4</p>
        </div>
        <div>
          <p>Patient No.: 2407003796 (OP)</p>
          <p>Age/Sex: 2/Female</p>
          <p>Collection Date: 2024-07-27 02:49 PM</p>
          <p>Reporting Date: 2024-09-11 11:44 AM</p>
        </div>
      </div>
      <div className="lab-table-container">
        <table>
          <thead>
            <tr>
              <th>Tests</th>
              <th>Findings</th>
              <th>Unit</th>
              <th colSpan="2">BIOCHEMISTRY REPORT</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>Reference</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>✔ Sugar Pasting</td>
              <td>wwww</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>✔ MP SMEAR</td>
              <td>www</td>
              <td>www</td>
              <td>77</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
    </div>
    
    <div className="lab-comments">
        <p>Comments:</p>
        <textarea placeholder="Enter comments here..." />
        <p className="lab-disclaimer">
          This laboratory report must be integrated in conjunction with clinical history of the patient by a clinician test
        </p>
      </div>
</div>

<div className="lab-signatory-section">
        <div className="lab-signatory">
          <input type="text" placeholder="Not found" />
          </div>
          <div className="lab-signatory">
        <input type="text" placeholder='BMUTHONI'  />
        </div>
        <div className="lab-signatory">
          <input type="text" placeholder="Not found" />
          </div>
      </div>
      <div className="lab-signatories">
        <p>Select Signatories:</p>
        <select value={selectedSignatory} onChange={handleSignatoryChange}>
          <option value="">Select a signatory</option>
          <option value="Dr. VICTOR OCHIENG OKECH">Dr. VICTOR OCHIENG OKECH</option>
          {/* Add more options for other signatories */}
        </select>
      </div>
      <div className="lab-update">
      <button className="lab-print-button">
        Update Signatories and Print
      </button></div>

    </div>
   );
  }

export default Lab2;