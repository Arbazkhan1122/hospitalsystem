import React, { useState } from 'react';
import './InPatientAction.css';
import VitalsPage from './ClinicalVitals'; 
import ActionRecordPage from './ActionRecordPage';
import { useNavigate } from 'react-router-dom';
import Problems from './Problems';

const Section = ({ title, handleAddClick, children }) => (
  <section className="patientDash-section">
    <h3 className='patientDash-h3'>{title}</h3>
    <button className="add-button" onClick={handleAddClick}>+ Add</button>
    {children || <div className="no-records">No Records Found</div>}
  </section>
);

const PatientDashboard = ({ isPatientOPEN,patient,setIsPatientOPEN }) => {
  const [activeSection, setActiveSection] = useState('dashboard'); 
  const [prevaction,setPrevAction] = useState('dashboard')
  const navigate=useNavigate()

  const renderContent = () => {
    switch (activeSection) {
      case 'clinical':
        return <VitalsPage />;
      case 'actionRecord':
        return <ActionRecordPage />;
      case 'problems':
        return <Problems />;
      default:
        return renderDashboard();
    }
  };

  const renderDashboard = () => (
    <div className="patientDash-main-content">
      <aside className='patientDash-sidebar'>
        <div className="patientDash-patient-info">

        <div className="patientDash-avatar"></div>  
        <div className="patientDash-ipd-tag">IPD</div>
        <h2 className='patientDash-h2'>{`${patient.firstName} ${patient.lastName}`}</h2>
        <p>{`${patient.age}/${patient.gender}`}</p>
        <p>{`Attending: ${patient.employeeDTO.salutation} ${patient.employeeDTO.firstName} ${patient.employeeDTO.lastName}`}</p>
        </div>

          <ul>
            <li>Patient Overview</li>
            <li onClick={() => {
              setActiveSection('problems')
              setPrevAction(...activeSection)
              }}>Problems</li>
            <li>Encounter History</li>
            <li>Clinical Documents</li>
            <li onClick={() => {
              setActiveSection('clinical')
              setPrevAction(...activeSection)
            }}>Clinical</li>
            <li>Notes</li>
            <li>Scanned Images</li>
            <li>Scanned Images</li>
            <li>Scanned Images</li>
            <li>Scanned Images</li>
            <li>Scanned Images</li>
          </ul>
        
      </aside>
      
      <main className='patientDash-main'>
        <Section title="🧪 Labs" handleAddClick={() =>{ setActiveSection('actionRecord'); setPrevAction(activeSection)}} />
        <Section title="🖼 Imaging" handleAddClick={() => setActiveSection('actionRecord')} />
        <Section title="⚠ Active Problems" handleAddClick={() => setActiveSection('problems')} />
        
        <section className="patientDash-medications">
          <h3 className='patientDash-h3'>💊 Medications</h3>
          <button className="add-button">+ Add</button>
          <table>
            <tbody>
              <tr><td>.OSMOLAX</td><td>0 times a day</td><td>Start Date- 02.08.2024</td></tr>
              <tr><td>ACECLOFENAC + PARACETAMOL TABS</td><td>0 times a day</td><td>Start Date- 12.08.2024</td></tr>
              <tr><td>ACECLOFENAC + PARACETAMOL TABS</td><td>3 times a day</td><td>Start Date- 13.08.2024</td></tr>
              <tr><td>ACETAZOLAMIDE 250MG</td><td>2 times a day</td><td>Start Date- 13.08.2024</td></tr>
              <tr><td>ACETAZOLAMIDE 250MG</td><td>3 times a day</td><td>Start Date- 13.08.2024</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      
      <aside className="patientDash-right-panel"> 
        <Section title="⏱ Last Vitals" handleAddClick={() => console.log('Add Vitals Clicked')} />
        <Section title="🗣 Chief Complaints" handleAddClick={() => console.log('New Complaint Clicked')} />
        <Section title="🚫 Allergies" handleAddClick={() => console.log('Add Allergies Clicked')} />
      </aside>
    </div>
  );

  return (
    <div className={`patient-dashboard ${isPatientOPEN ? 'isPatientDetailsActive' : 'isPatientDetailsInActive'}`}>
      <div className='patient-dashboard-header'>
        <button
        onClick={() => setActiveSection(prevaction)}  
          className="patientDash-home-button"
        >
          🔙 Back
        </button>
        <button 
          onClick={() => setIsPatientOPEN(false)} 
          className="patientDash-home-button"
        >
          🏠 Home
        </button>
      </div>
      
      {renderContent()} 
    </div>
  );
};

export default PatientDashboard;
