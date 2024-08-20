import React, { useState } from 'react';
import './TriagedPatient.css';

const TriagedPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  return (
    <div className="triaged-patients">
      

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
            <option value="All">General</option>
            <option value="All">Dog Bite</option>
            <option value="All">Snake Bite</option>
            <option value="All">Animal Bite</option>
            <option value="All">Emergency Labour</option>
            <option value="All">Medico-Legal</option>


          </select>
        </div>

        <table className="patient-table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Triage Status</th>
              <th>Hospital No.</th>
              <th>Patient Name</th>
              <th>Age/Sex</th>
              <th>Phone No.</th>
              <th>Visit Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows would be populated here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TriagedPatients;