
import React, { useState } from 'react';
import './LabOrder.css';

const LabOrder = ({selectedOrders,setActiveSection,patientId,newPatientVisitId}) => {
  const [labTestName, setLabTestName] = useState('');
  const [urgency, setUrgency] = useState('Normal');
  const [note, setNote] = useState('');

  const handleSign = () => {
    // Handle sign logic here
    console.log('Signed:', { labTestName, urgency, note });
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Cancelled');
    setLabTestName('');
    setUrgency('Normal');
    setNote('');
  };

  return (
    <div className="lab-order-container">
      <h2>Lab Order</h2>
      <table className="lab-order-table">
        <thead>
          <tr>
            <th>Lab Test Name</th>
            <th>Urgency</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={labTestName}
                onChange={(e) => setLabTestName(e.target.value)}
                placeholder="CREATININE"
                className="table-input"
              />
            </td>
            <td>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    value="Normal"
                    checked={urgency === 'Normal'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  Normal
                </label>
                <label>
                  <input
                    type="radio"
                    value="Urgent"
                    checked={urgency === 'Urgent'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  Urgent
                </label>
                <label>
                  <input
                    type="radio"
                    value="STAT"
                    checked={urgency === 'STAT'}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  STAT
                </label>
              </div>
            </td>
            <td>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="table-textarea"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="lab-action-container">
        <button className="lab-action-container-btn lab-action-container-btn-sign" onClick={handleSign}>
          Sign
        </button>
        <button className="lab-action-container-btn lab-action-container-btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LabOrder;