import React, { useState } from 'react';
import './OutPatient.css';
import OpdList from '../DashBoards/Opd'; // Import the OpdList component
import OutPatientFav from '../DashBoards/OutPatientFav'; // Import the OutPatientFav component
import OutPatientFollowUp from '../DashBoards/OutPatientFollowUp'; // Import the OutPatientFollowUp component
import TableComponent from '../DashBoards/NewPatientsMyFavourite'; // Import the My Favorites component
import NewPatientFollowUpList from '../DashBoards/NewPatientFollowUpList'; // Import the Follow Up List component

const OutPatient = () => {
  const [view, setView] = useState('newPatient'); // Initialize state for main view
  const [showFavorites, setShowFavorites] = useState(false); // State to control visibility of My Favorites
  const [showFollowUp, setShowFollowUp] = useState(false); // State to control visibility of Follow Up List

  const handleViewChange = (newView) => {
    setView(newView); // Update the view based on the button clicked
    if (newView !== 'favorite') setShowFavorites(false); // Hide My Favorites if not selected
    if (newView !== 'followUp') setShowFollowUp(false); // Hide Follow Up List if not selected
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites); // Toggle the visibility of My Favorites
  };

  const toggleFollowUp = () => {
    setShowFollowUp(!showFollowUp); // Toggle the visibility of Follow Up List
  };

  return (
    <div className="OutPatient-out-patient">
      <div className="OutPatient-sub-nav">
        <button
          className={view === 'newPatient' ? 'OutPatient-active' : ''}
          onClick={() => handleViewChange('newPatient')}
        >
          New Patient
        </button>
        <button
          className={view === 'opdRecord' ? 'OutPatient-active' : ''}
          onClick={() => handleViewChange('opdRecord')}
        >
          OPD Record
        </button>
      </div>

      {view === 'newPatient' && (
        <div>
          <div className="OutPatient-actions">
            <button className="OutPatient-favorite" onClick={toggleFavorites}>
              ★ My Favorites
            </button>
            <button className="OutPatient-follow-up" onClick={toggleFollowUp}>
              Follow Up List
            </button>
            <label className="OutPatient-doctor-wise">
              <input type="checkbox" /> Show Doctor Wise Patient List
            </label>
          </div>

          <div className="OutPatient-filters">
            <div className="OutPatient-date-picker">
              <label>Date:</label>
              <input type="date" value="2024-08-18" />
            </div>
            <select>
              <option>Today</option>
              <option>Last Week</option>
              <option>This Month</option>
              <option>Custom</option>
            </select>
            <div className="OutPatient-search">
              <input type="text" placeholder="Search" />
              <button>🔍</button>
            </div>
          </div>

          <table className="OutPatient-table">
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
                <td colSpan="7" className="OutPatient-no-data">
                  No Rows To Show
                </td>
              </tr>
            </tbody>
          </table>

          <div className="OutPatient-pagination">
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
      
      {showFavorites && <TableComponent />} {/* Renders My Favorites when toggled */}
      
      {showFollowUp && <NewPatientFollowUpList />} {/* Renders Follow Up List when toggled */}
    </div>
  );
};

export default OutPatient;
