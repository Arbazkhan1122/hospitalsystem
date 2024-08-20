import React, { useState, useRef } from 'react';
import './Patient.css';
import EmergencyPatientRegistration from '../Emergency/Registration';
import { useReactToPrint } from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [showRegistration, setShowRegistration] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null); // State to track the visible dropdown
  const tableRef = useRef();

  const handleNewRegistrationClick = () => {
    setShowRegistration(true);
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  const toggleDropdown = (index) => {
    if (dropdownVisible === index) {
      setDropdownVisible(null); // Close the dropdown if it's already open
    } else {
      setDropdownVisible(index); // Open the dropdown for the clicked icon
    }
  };

  const renderDropdown = () => (
    <div className="dropdown-menu">
      <select className="dropdown-container">
        <option value="Contains">Contains</option>

      </select>
      <input
        type="text"
        placeholder="Filter"
        className="dropdown-textbox"
      />
      {/* Add more dropdown items as needed */}
    </div>
  );

  if (showRegistration) {
    return <EmergencyPatientRegistration />;
  }

  return (
    <div className="patient-list">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Existing Patient Name" 
          className="patient-name-input"
        />
        <div className="filter-container">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="All">All</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button className="new-registration-btn" onClick={handleNewRegistrationClick}>
          + New Registration
        </button>
      </div>

      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-icon">🔍</button>
      </div>

      <div className="results-info">
        <span>Showing 0 / 0 results</span>
        <button className="print-btn" onClick={handlePrint}>Print</button>
      </div>

      <table className="patient-table" ref={tableRef}>
        <thead>
          <tr>
            <th>
              Hospital No.
              <FontAwesomeIcon 
                icon={faBars} 
                className="header-icon" 
                onClick={() => toggleDropdown(0)}
              />
              {dropdownVisible === 0 && renderDropdown()}
            </th>
            <th>
              Name
              <FontAwesomeIcon 
                icon={faBars} 
                className="header-icon" 
                onClick={() => toggleDropdown(1)}
              />
              {dropdownVisible === 1 && renderDropdown()}
            </th>
            <th>
              Age
              <FontAwesomeIcon 
                icon={faBars} 
                className="header-icon" 
                onClick={() => toggleDropdown(2)}
              />
              {dropdownVisible === 2 && renderDropdown()}
            </th>
            <th>
              Gender
              <FontAwesomeIcon 
                icon={faBars} 
                className="header-icon" 
                onClick={() => toggleDropdown(3)}
              />
              {dropdownVisible === 3 && renderDropdown()}
            </th>
            <th>
              Visit Date Time
              <FontAwesomeIcon 
                icon={faBars} 
                className="header-icon" 
                onClick={() => toggleDropdown(4)}
              />
              {dropdownVisible === 4 && renderDropdown()}
            </th>
            <th>
              Actions
              <FontAwesomeIcon 
                icon={faBars} 
                className="header-icon" 
                onClick={() => toggleDropdown(5)}
              />
              {dropdownVisible === 5 && renderDropdown()}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className="no-data">No Rows To Show</td>
          </tr>
        </tbody>
      </table>

      <div className="pagination">
        <span>0 to 0 of 0</span>
        <button className="pagination-btn">First</button>
        <button className="pagination-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="pagination-btn">Next</button>
        <button className="pagination-btn">Last</button>
      </div>
    </div>
  );
};

export default PatientList;
