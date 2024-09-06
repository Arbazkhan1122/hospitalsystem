import React from 'react';
// import './AddLabTest.css';
import "../LabSetting/lSLabTestAddNLTest.css"
const LSLabTestAddNLTest = ({ onClose }) => {
  return (
    <div className="lSLabTestAddNLTest-container">
      <div className="lSLabTestAddNLTest-header">
        <h3>Add Lab Test</h3>
        <button className="lSLabTestAddNLTest-close-btn"onClick={onClose}>X</button>
      </div>

      <div className="lSLabTestAddNLTest-form">
        <div className="lSLabTestAddNLTest-form-row">

          <div className="lSLabTestAddNLTest-form-group-1row">
          <div className="lSLabTestAddNLTest-form-group">
            <label>Lab Test Name<span>*</span></label>
            <input type="text" placeholder="Lab Test Name" />
          </div>
          <div className="lSLabTestAddNLTest-form-group">
            <label>Lab Test Code<span>*</span></label>
            <input type="text" placeholder="Lab Test Code" />
          </div>
          </div>
          
          <div className="lSLabTestAddNLTest-form-group-1row">
          <div className="lSLabTestAddNLTest-form-group">
            <label>Reporting Name</label>
            <input type="text" placeholder="Lab Test Reporting Name" />
          </div>
          <div className="lSLabTestAddNLTest-form-group">
            <label>Report Template Name<span>*</span></label>
            <input type="text" placeholder="Select Report Template Short Name" />
          </div>
          </div>
          <div className="lSLabTestAddNLTest-form-group-1row">
          <div className="lSLabTestAddNLTest-form-group">
            <label>Lab Category<span>*</span></label>
            <select>
              <option>Select Lab Category</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="lSLabTestAddNLTest-form-group">
            <label>Service Department<span>*</span></label>
            <input type="text" placeholder="Select Service Department Name" />
          </div>
          </div>
          <div className="lSLabTestAddNLTest-form-group-1row">
          <div className="lSLabTestAddNLTest-form-group">
            <label>Select Specimen(s)<span>*</span></label>
            <select>
              <option>--Select Specimens--</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="lSLabTestAddNLTest-form-group-sub">
          <div className="lSLabTestAddNLTest-form-group">
            <label>Run No. Type</label>
            <select>
              <option>normal</option>
              {/* Add other options here */}
            </select>
          </div>
          
          <div className="lSLabTestAddNLTest-form-group">
            <label>Display Sequence</label>
            <input type="number" defaultValue="1000" />
          </div>
          </div>
          </div>
        </div>
        <div className='lSLabTestAddNLTest-AddNew'>
            <a href="#" className="add-new-specimen">Add New Specimen</a>
        </div>

        <div className="lSLabTestAddNLTest-checkbox-N-form-group">
        <div className="lSLabTestAddNLTest-checkbox-row">
          <label><input type="checkbox" /> Is SMS Applicable?</label>
          <label><input type="checkbox" /> Is LIS Applicable?</label>
          <label><input type="checkbox" /> Is Valid for Reporting</label>
          <label><input type="checkbox" /> Is Outsourced Test?</label>
          <label><input type="checkbox" /> Tax Applicable</label>
          <label><input type="checkbox" /> Has Negative Results</label>
        </div>

        <div className="lSLabTestAddNLTest-form-group lSLabTestAddNLTest-full-width">
          <label>Interpretation</label>
          <textarea></textarea>
        </div>
        </div>
      </div>

      <div className="lSLabTestAddNLTest-select-components-section">
        <h4>Select Components For this Lab Test</h4>
        <table>
          <thead>
            <tr>
              <th>Component Name</th>
              <th>Unit</th>
              <th>Value Type</th>
              <th>Range</th>
              <th>Disp. Sequence</th>
              <th>Indent</th>
              <th>Group Val.</th>
              <th>Sheet</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button className="lSLabTestAddNLTest-add-component-btn">+</button> Select Component</td>
              <td>Unit</td>
              <td>string</td>
              <td>Range</td>
              <td>100</td>
              <td>0</td>
              <td></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
        <a href="#" className="lSLabTestAddNLTest-create-new-component">Create New Component ?</a>
      </div>

      <div className="lSLabTestAddNLTest-form-actions">
        <button className="lSLabTestAddNLTest-add-btn">Add</button>
        <button className="lSLabTestAddNLTest-close-btn">Close</button>
      </div>
    </div>
  );
};

export default LSLabTestAddNLTest;
