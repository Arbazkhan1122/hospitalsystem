import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../DashBoards/PatientRecordAction.css';
import VitalsPage from '../DashBoards/ClinicalVitals';
import ImagingAdd from '../DashBoards/ImagingAdd';

import ClinicalDocument from '../DashBoards/ClinicalDocuments';
import NotesTable from '../DashBoards/Notes';
import VisitTable from '../DashBoards/EncounterHistory';
import OrdersPage from '../DashBoards/LabsActiveOrder';
import PatientDischargeForm from '../DashBoards/DischargeSummary'; 
import ActiveProblems from './activeProblems';

const PatientRecordAction = ({ patient }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showImagingAdd, setShowImagingAdd] = useState(false);
  const [showNotesTable, setShowNotesTable] = useState(false);
  const [showOrdersPage, setShowOrdersPage] = useState(false);
  const [showActiveProblems, setShowActiveProblems] = useState(false);
  const [showDischargeSummary, setShowDischargeSummary] = useState(false); 

  const renderContent = () => {
    if (showDischargeSummary) {
      return <PatientDischargeForm />;  
    }

    switch (activeSection) {
      case 'clinical':
        return <VitalsPage />;
      case 'documents':
        return <ClinicalDocument />;
      case 'problems':
        return <ActiveProblems onClose={() => setShowActiveProblems(false)} />;
      case 'encounterHistory':
        return <VisitTable />;
      default:
        if (showImagingAdd) {
          return <ImagingAdd onClose={() => setShowImagingAdd(false)} />;
        }
        if (showNotesTable) {
          return <NotesTable />;
        }
        if (showOrdersPage) {
          return <OrdersPage onClose={() => setShowOrdersPage(false)} />;
        }
        if (showActiveProblems) {
          return <ActiveProblems onClose={() => setShowActiveProblems(false)} />;
        }
        return renderMainContent();
    }
  };

  const renderMainContent = () => (
    <div className="main-content">
      <aside className="patient-info">
        <div className="avatar"></div>
        
        <div className="ipd-tag">IPD</div>
        <h2>{patient?.name || 'No Patient Data'}</h2>
        <p>{patient?.ageSex || 'N/A'}</p>
        <p>Hospital No: {patient?.hospitalNo || 'N/A'}</p>
        <p>Ward/Bed: {patient?.wardBed || 'N/A'}</p>
        <p>Attending: {patient?.providerName || 'N/A'}</p>

        <nav>
          <ul>
            <li>Patient Overview</li>
            <li onClick={() => { setActiveSection('problems'); setShowActiveProblems(true); }}>Problems</li>
            <li onClick={() => setActiveSection('encounterHistory')}>Encounter History</li>
            <li onClick={() => setShowOrdersPage(true)}>Orders</li>
            <li onClick={() => setActiveSection('documents')}>Clinical Documents</li>
            <li onClick={() => setActiveSection('clinical')}>Clinical</li>
            <li onClick={() => setShowNotesTable(true)}>Notes</li>
            <li onClick={() => setShowDischargeSummary(true)}>Discharge Summary</li> {/* Add click handler */}
          </ul>
        </nav>
      </aside>

      <main>
        <section className="labs">
          <h3>🧪 Labs</h3>
          <button className="add-button" onClick={() => setShowOrdersPage(true)}>+ Add</button>
          <div className="no-records">No Records Found</div>
        </section>

        <section className="imaging">
          <h3>🖼 Imaging</h3>
          <button className="add-button" onClick={() => setShowImagingAdd(true)}>+ Add</button>
          <div className="no-records">No Records Found</div>
        </section>

        <section className="active-problems">
          <h3>⚠ Active Problems</h3>
          <button className="add-button" onClick={() => setShowActiveProblems(true)}>+ Add</button>
          <div className="no-records">No Records Found</div>
        </section>

        <section className="medications">
          <h3>💊 Medications</h3>
          <button className="add-button">+ Add</button>
          <table>
            <tbody>
              <tr><td>OSMOLAX</td><td>0 times a day</td><td>Start Date- 02.08.2024</td></tr>
              <tr><td>ACECLOFENAC + PARACETAMOL TABS</td><td>0 times a day</td><td>Start Date- 12.08.2024</td></tr>
              <tr><td>ACECLOFENAC + PARACETAMOL TABS</td><td>3 times a day</td><td>Start Date- 13.08.2024</td></tr>
              <tr><td>ACETAZOLAMIDE 250MG</td><td>2 times a day</td><td>Start Date- 13.08.2024</td></tr>
              <tr><td>ACETAZOLAMIDE 500MG</td><td>3 times a day</td><td>Start Date- 13.08.2024</td></tr>
            </tbody>
          </table>
        </section>

        <section className="notes">
          <h3>📝 Notes</h3>
          <button className="add-button" onClick={() => setShowNotesTable(true)}>+ Add</button>
          <div className="no-records">No Records Found</div>
        </section>

        <section className="discharge-summary">
          <h3>📄 Discharge Summary</h3>
          <button className="add-button" onClick={() => setShowDischargeSummary(true)}>+ Add</button>
          <div className="no-records">No Records Found</div>
        </section>
      </main>
    </div>
  );

  return (
    <div className="patient-record-action">
      <header>
        <button className="home-button">🏠 Home</button>
      </header>
      {renderContent()}
    </div>
  );
};

PatientRecordAction.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string,
    ageSex: PropTypes.string,
    hospitalNo: PropTypes.string,
    wardBed: PropTypes.string,
    providerName: PropTypes.string,
  }),
};

export default PatientRecordAction;
