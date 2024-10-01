import React, { useState } from 'react';
import ActiveProblems from './ActiveProblems'; // Import your components
import FamilyHistory from '../DashBoards/familyHistory'; // Placeholder components
import SurgicalHistory from '../DashBoards/SurgicalHistory'; // Placeholder components
import SocialHistory from '../DashBoards/SocialHistory'; // Placeholder components
import ReferralSource from '../DashBoards/ReferralSource'; // Placeholder components
import './problem.css' 

function Problems({patientId,newPatientVisitId}) {
  console.log(newPatientVisitId);
  
  const [activeComponent, setActiveComponent] = useState('ActiveProblems'); // State to manage active section

  // Function to render content based on the activeComponent state
  const renderContent = () => {
    switch (activeComponent) {
      case 'ActiveProblems':
        return <ActiveProblems patientId={patientId}  newPatientVisitId={newPatientVisitId} />;
      case 'FamilyHistory':
        return <FamilyHistory patientId={patientId}  newPatientVisitId={newPatientVisitId} />;
      case 'SurgicalHistory':
        return <SurgicalHistory patientId={patientId}  newPatientVisitId={newPatientVisitId} />;
      case 'SocialHistory':
        return <SocialHistory patientId={patientId}  newPatientVisitId={newPatientVisitId} />;
      case 'ReferralSource':
        return <ReferralSource patientId={patientId}  newPatientVisitId={newPatientVisitId} />;
      default:
        return <ActiveProblems patientId={patientId}  newPatientVisitId={newPatientVisitId}  />; 
    }
  };

  return (
    <div>
      
        <nav className="problems-navbar">
          <ul>
            <li>
              <button
                className={activeComponent === 'ActiveProblems' ? 'problems-active' : ''}
                onClick={() => setActiveComponent('ActiveProblems')}
              >
                Active Problems
              </button>
            </li>
            <li>
              <button
                className={activeComponent === 'FamilyHistory' ? 'problems-active' : ''}
                onClick={() => setActiveComponent('FamilyHistory')}
              >
                Family History
              </button>
            </li>
            <li>
              <button
                className={activeComponent === 'SurgicalHistory' ? 'problems-active' : ''}
                onClick={() => setActiveComponent('SurgicalHistory')}
              >
                Surgical History
              </button>
            </li>
            <li>
              <button
                className={activeComponent === 'SocialHistory' ? 'problems-active' : ''}
                onClick={() => setActiveComponent('SocialHistory')}
              >
                Social History
              </button>
            </li>
            <li>
              <button
                className={activeComponent === 'ReferralSource' ? 'problems-active' : ''}
                onClick={() => setActiveComponent('ReferralSource')}
              >
                Referral Source
              </button>
            </li>
          </ul>
        </nav>
      <div className="problems-content">
        {renderContent()} {/* Render the content based on the state */}
      </div>
    </div>
  );
}

export default Problems;
