import React, { useState } from 'react';
import './OutPatient.css';
import OpdList from '../DashBoards/Opd'; // Correctly imported component
import OutPatientFav from '../DashBoards/OutPatientFav'; // Import the OutPatientFav component
import OutPatientFollowUp from '../DashBoards/OutPatientFollowUp'; // Import the OutPatientFollowUp component

const OutPatient = () => {
  const [view, setView] = useState('newPatient'); // Initialize state

  const handleViewChange = (newView) => {
    setView(newView); // Update the view based on the button clicked
  };

  return (
    <div className="out-patient">
      <div className="sub-nav">
        <button
          className={view === 'newPatient' ? 'active' : ''}
          onClick={() => handleViewChange('newPatient')}
        >
          New Patient
        </button>
        <button
          className={view === 'opdRecord' ? 'active' : ''}
          onClick={() => handleViewChange('opdRecord')}
        >
          OPD Record
        </button>
      </div>

      {view === 'newPatient' && (
        <div>
          <div className="actions">
            <button
              className="favorite"
              onClick={() => handleViewChange('favorite')}
            >
              ★ My Favorites
            </button>
            <button
              className="follow-up"
              onClick={() => handleViewChange('followUp')}
            >
              Follow Up List
            </button>
            <label className="doctor-wise">
              <input type="checkbox" /> Show Doctor Wise Patient List
            </label>
          </div>

          <div className="filters">
            <div className="date-picker">
              <label>Date:</label>
              <input type="date" value="2024-08-18" />
            </div>
            <select>
              <option>Today</option>
              <option>Last Week</option>
              <option>This Month</option>
              <option>Custom</option>
            </select>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button>🔍</button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Hospital No.</th>
                <th>Name</th>
                <th>Age/Sex</th>
                <th>VisitType</th>
                <th>Admitted On</th>
                <th>Performer Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="no-data">No Rows To Show</td>
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
      )}

      {view === 'opdRecord' && <OpdList />} {/* Renders OpdList if "OPD Record" is selected */}
      {view === 'favorite' && <OutPatientFav />} {/* Renders OutPatientFav if "My Favorites" is selected */}
      {view === 'followUp' && <OutPatientFollowUp />} {/* Renders OutPatientFollowUp if "Follow Up List" is selected */}
    </div>
  );
};

export default OutPatient;
