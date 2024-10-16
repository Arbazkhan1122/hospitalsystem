import React, { useState } from 'react';
import './patienttransferstatus.css'

function Patienttrasferstatus() {

    const [patients, setPatients] = useState([
        {
          id: 1,
          patientName: 'John Doe',
          transportMode: 'Ambulance',
          driverName: 'Mark Smith',
          status: 'Pending',
        },
        {
          id: 2,
          patientName: 'Jane Doe',
          transportMode: 'Wheelchair',
          driverName: 'N/A',
          status: 'Pending',
        },
      ]);
    
      const [selectedPatient, setSelectedPatient] = useState(null);
    
      const handleStatusChange = (patient) => {
        setSelectedPatient(patient);
      };
    
      const handleConfirmTransport = () => {
        setPatients(
          patients.map((patient) =>
            patient.id === selectedPatient.id
              ? { ...patient, status: 'Transported' }
              : patient
          )
        );
        setSelectedPatient(null); 
      };
  return (
    <div className="patient-transport-status-container" style={{background:"#e3fffe"}}>
  
    <table className="patient-transport-table">
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Transport Mode</th>
          <th>Ambulance Driver</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.patientName}</td>
            <td>{patient.transportMode}</td>
            <td>{patient.transportMode === 'Ambulance' ? patient.driverName : 'N/A'}</td>
            <td>{patient.status}</td>
            <td>
                                {patient.status === 'Pending' ? (
                                    <button
                                        className="patienttransport-action-btn"
                                        onClick={() => handleStatusChange(patient)}
                                    >
                                        Change Status
                                    </button>
                                ) : (
                                    <span className="patienttransport-successful">Successful</span>
                                )}
                            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Modal Popup */}
    {selectedPatient && (
      <div className="patienttransport-modal">
        <div className="patienttransport-modal-content">
          <h3>Confirm Transport Status</h3>
          <p>
            Are you sure you want to mark {selectedPatient.patientName} as{' '}
            "Transported"?
          </p>
          <button className="patienttransport-confirm-btn" onClick={handleConfirmTransport}>
            Yes
          </button>
          <button className="patienttransport-cancel-btn" onClick={() => setSelectedPatient(null)}>
            No
          </button>
        </div>
      </div>
    )}
  </div>
);
};

export default Patienttrasferstatus
