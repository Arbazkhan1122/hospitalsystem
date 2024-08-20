import React from 'react';
import './OutPatientFav.css';

const OutPatientFollowUp = () => {
  return (
    <div className="patient-list">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
        <span className="results">Showing 0 / 0 results</span>
        <button className="print">Print</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Hospital No.</th>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>VisitType</th>
            <th>Visit Date</th>
            <th>Performer Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="no-data">
            <td colSpan="7">No Rows To Show</td>
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

export default OutPatientFollowUp;
