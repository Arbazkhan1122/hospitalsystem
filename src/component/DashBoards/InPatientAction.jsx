import React from 'react';
import './InPatientAction.css';

const PatientDashboard = ({ patient }) => {
  return (
    <div className="patient-dashboard">
      <header>
        <div className="logo">HIMS Health</div>
        <button className="home-button">🏠 Home</button>
      </header>
      
      <div className="main-content">
        <aside className="patient-info">
          <div className="avatar"></div>
          <div className="ipd-tag">IPD</div>
          <h2>{patient.name}</h2>
          <p>{patient.ageSex}</p>
          <p>Hospital No: {patient.hospitalNo}</p>
          <p>Ward/Bed: {patient.wardBed}</p>
          <p>Attending: {patient.providerName}</p>
          
          <nav>
            <ul>
              <li>OPD Summary</li>
              <li>Patient Overview</li>
              <li>Problems</li>
              <li>Current Medications</li>
              <li>Encounter History</li>
              <li>Orders</li>
              <li>Clinical Documents</li>
              <li>Clinical</li>
              <li>Notes</li>
              <li>Scanned Images</li>
              <li>Discharge Summary</li>
            </ul>
          </nav>
        </aside>
        
        <main>
          <section className="labs">
            <h3>🧪 Labs</h3>
            <button className="add-button">+ Add</button>
            <div className="no-records">No Records Found</div>
          </section>
          
          <section className="imaging">
            <h3>🖼 Imaging</h3>
            <button className="add-button">+ Add</button>
            <div className="no-records">No Records Found</div>
          </section>
          
          <section className="active-problems">
            <h3>⚠ Active Problems</h3>
            <button className="add-button">+ Add</button>
            <div className="no-records">No Records Found</div>
          </section>
          
          <section className="medications">
            <h3>💊 Medications</h3>
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
        
        <aside className="right-panel">
          <section className="last-vitals">
            <h3>⏱ Last Vitals</h3>
            <button className="show-graph">Show Graph</button>
            <button className="add-vitals">+ Add Vitals</button>
            <div className="no-records">No Records Found</div>
          </section>
          
          <section className="chief-complaints">
            <h3>🗣 Chief Complaints</h3>
            <button className="new-complaint">+ New Complaint</button>
            <div className="complaint">
              Coughing
              <button className="remove-complaint">❌</button>
            </div>
          </section>
          
          <section className="allergies">
            <h3>🚫 Allergies</h3>
            <button className="add-button">+ Add</button>
            <div className="no-records">No Records Found</div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default PatientDashboard;
