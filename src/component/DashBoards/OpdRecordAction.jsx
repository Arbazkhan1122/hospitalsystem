import React from 'react';
import './OpdRecordAction.css';

function OpdRecordApp({ patient }) {
  return (
    <div className="app">
      <header>
        <div className="logo">Sasa Health</div>
        <button className="home-button">Home</button>
      </header>
      <div className="main-content">
        <Sidebar patient={patient} />
        <PatientDashboard />
      </div>
    </div>
  );
}

function Sidebar({ patient }) {
  return (
    <aside className="sidebar">
      <div className="patient-info">
        <div className="avatar"></div>
        <h2>{patient.name}</h2>
        <p>{patient.ageSex}</p>
        <p>Hospital No: {patient.hospitalNo}</p>
        <p>Attending: {patient.performerName}</p>
      </div>
      <nav>
        <ul>
          <li>OPD Summary</li>
          <li>Patient Overview</li>
          <li>Problems</li>
          {/* Add more menu items */}
        </ul>
      </nav>
    </aside>
  );
}

function PatientDashboard() {
  return (
    <main className="dashboard">
      <section className="labs">
        <h3>Labs</h3>
        <button className="add-button">Add</button>
        <p>No Records Found</p>
      </section>
      <section className="imaging">
        <h3>Imaging</h3>
        <button className="add-button">Add</button>
        <p>No Records Found</p>
      </section>
      <section className="active-problems">
        <h3>Active Problems</h3>
        <button className="add-button">Add</button>
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Onset Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Malaria, unspecified</td>
              <td>2024-08-13</td>
              <td><a href="#">Add Note</a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="medications">
        <h3>Medications</h3>
        <button className="add-button">Add</button>
        <table>
          <tbody>
            <tr>
              <td>ACECLOFENAC + PARACETAMOL TABS</td>
              <td>3 times a day</td>
              <td>Start Date: 13.08.2024</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default OpdRecordApp;
