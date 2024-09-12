

import React from 'react';
import "../LabSetting/labTestComponentsAddNewLTC.css"
// import './AddComponents.css';

const LabTestComponentsAddNewLTC = ({ onClose }) => {
  return (
    <div className="labTestComponentsAddNewLTC-container">
           
          <div className="labTestComponentsAddNewLTC-header">
        <h3>Add Components</h3>
        <button className="labTestComponentsAddNewLTC-close-btn"onClick={onClose}>x</button>
      </div>

      <div className="labTestComponentsAddNewLTC-table">
        <div className='labTestComponentsAddNewLTC-fsttable'>
        <table >
        <thead>
          <tr>
            <th>Component Name</th>
            <th>Unit</th>
            <th>Value Type</th>
            <th>Controle Type</th>
            <th>Range Description</th>
            <th>Method</th>
            <th>Value LookUp</th>
            <th>Display Name</th>
            <th>Value Precision</th>
          </tr>
        </thead>
        </table>
        </div>
        <div className="labTestComponentsAddNewLTC-row">
          <div className="labTestComponentsAddNewLTC-cell labTestComponentsAddNewLTC-component-name">
            <button className="labTestComponentsAddNewLTC-add-button"><i class="fa-solid fa-plus"></i></button>
            <input type="text" placeholder="Component Name" />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input type="text" placeholder="Unit" />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <select>
              <option>text</option>
              <option>number</option>
              <option>date</option>
            </select>
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <select>
              <option>TextBox</option>
              <option>Dropdown</option>
              <option>Checkbox</option>
            </select>
          </div>
          <div className="labTestComponentsAddNewLTC-cell labTestComponentsAddNewLTC-description">
            <textarea placeholder="Description"></textarea>
          </div>
          <div className="labTestComponentsAddNewLTC-cell labTestComponentsAddNewLTC-range-buttons">
            <button>Gen. Range</button>
            <button>Male Range</button>
            <button>Female Range</button>
            <button>Child Range</button>
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input type="text" placeholder="Method" />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input type="text" placeholder="Enter LookUp Name" />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input type="text" placeholder="Component Display Name" />
          </div>
          <div className="labTestComponentsAddNewLTC-cell">
            <input type="number" placeholder="0" />
          </div>
        </div>
        <div className="labTestComponentsAddNewLTC-footer">
          <button className="labTestComponentsAddNewLTC-add-button labTestComponentsAddNewLTC-add-footer-button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default LabTestComponentsAddNewLTC;
