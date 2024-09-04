import React, { useState } from 'react';
import './ClinicalVitals.css';
import AllergyList from '../DashBoards/ClinicalAllergy';
import ClinicalInputOutput from '../DashBoards/ClinicalInput';
import ClinicalMedication from '../DashBoards/ClinicalMedication';
import ClinicalBloodSugarMonitoring from '../DashBoards/ClinicalBloodSugarMonitoring';
import AddVitalsForm from '../DashBoards/AddVitals'; // Import the AddVitalsForm component

const VitalsPage = () => {
  const [activeTab, setActiveTab] = useState('vitals');
  const [showAddVitalsForm, setShowAddVitalsForm] = useState(false); // State to manage form visibility

  const renderContent = () => {
    if (showAddVitalsForm) {
      return <AddVitalsForm />;
    }
    if (activeTab === 'allergy') {
      return <AllergyList />;
    }
    if (activeTab === 'inputoutput') {
      return <ClinicalInputOutput />;
    }
    if (activeTab === 'medication') {
      return <ClinicalMedication />;
    }
    if (activeTab === 'bloodsugar') {
      return <ClinicalBloodSugarMonitoring />;
    }
    return (
      <div className="vitals-list">
        <h2>Vitals List</h2>
        <button className="new-vitals-btn" onClick={() => setShowAddVitalsForm(true)}>
          + New Vitals
        </button>
        <ul>
          <li>Recorded On</li>
          <li>Taken On</li>
          <li>Height</li>
          <li>Weight</li>
          <li>BMI</li>
          <li>Temperature</li>
          <li>Pulse</li>
          <li>Blood Pressure</li>
          <li>Respiratory Rate</li>
          <li>SpO2</li>
          <li>O₂ Delivery Method</li>
          <li>Body Pain Data</li>
          <li>Action</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="vitals-page">
      <nav className="tab-navigation">
        <button className={`tab ${activeTab === 'vitals' ? 'active' : ''}`} onClick={() => setActiveTab('vitals')}>
          Vitals
        </button>
        <button className={`tab ${activeTab === 'allergy' ? 'active' : ''}`} onClick={() => setActiveTab('allergy')}>
          Allergy
        </button>
        <button className={`tab ${activeTab === 'inputoutput' ? 'active' : ''}`} onClick={() => setActiveTab('inputoutput')}>
          Input/Output
        </button>
        <button className={`tab ${activeTab === 'medication' ? 'active' : ''}`} onClick={() => setActiveTab('medication')}>
          Medication
        </button>
        <button className={`tab ${activeTab === 'bloodsugar' ? 'active' : ''}`} onClick={() => setActiveTab('bloodsugar')}>
          Blood Sugar Monitoring
        </button>
      </nav>

      <div className="content-area">
        {renderContent()}
      </div>

      {showAddVitalsForm && (
        <button className="close-btn" onClick={() => setShowAddVitalsForm(false)}>×</button>
      )}
    </div>
  );
};

export default VitalsPage;
