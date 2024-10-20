import React, { useEffect, useState } from 'react';
import './DoctorDashBoard.css'; // Make sure to create and include the CSS file
import PatientRecord from './OutPatient'; // Import the PatientRecord component
import InPatient from '../DashBoards/InPatient'; // Import the InPatient component
import Records from '../DashBoards/PatientsRecord'; // Import the Records component

const DrDashboard = () => {
  // State to manage which content to display
  const [activeSection, setActiveSection] = useState('outPatient');

  useEffect(() => {
    // Add any necessary side effects here
  }, [activeSection]);

  // Function to handle button clicks
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="doctor-dashboard-container">
      <div className="doctor-dashboard-button-group">
        <button
          className={`dashboard-button ${activeSection === 'outPatient' ? 'active' : ''}`}
          onClick={() => handleButtonClick('outPatient')}
        >
          Out Patient
        </button>
        <button
          className={`dashboard-button ${activeSection === 'inPatient' ? 'active' : ''}`}
          onClick={() => handleButtonClick('inPatient')}
        >
          In Patient Department
        </button>
        <button
          className={`dashboard-button ${activeSection === 'patientRecord' ? 'active' : ''}`}
          onClick={() => handleButtonClick('patientRecord')}
        >
          Patient Record
        </button>
      </div>

      {/* Conditionally render content based on activeSection */}
      {activeSection === 'outPatient' && <PatientRecord />}
      {activeSection === 'inPatient' && <InPatient />}
      {activeSection === 'patientRecord' && <Records />}
    </div>
  );
}

export default DrDashboard;

