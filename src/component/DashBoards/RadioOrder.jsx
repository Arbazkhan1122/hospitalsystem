import React, { useState } from 'react'

const RadioOrder = ({selectedOrders,setActiveSection,patientId,newPatientVisitId}) => {
  console.log(selectedOrders);
  console.log(setActiveSection);
  console.log(patientId);
  console.log(newPatientVisitId);
  
  
  
  
    const [labTestName, setLabTestName] = useState('');
    const [urgency, setUrgency] = useState('Normal');
    const [note, setNote] = useState('');
  
    const handleSign = () => {
      // Handle sign logic here
      console.log('Signed:', { labTestName, urgency, note });
    };
  
    const handleCancel = () => {
      setActiveSection(true)
      // Handle cancel logic here
      console.log('Cancelled');
      setLabTestName('');
      setUrgency('Normal');
      setNote('');
    };
  return (
    <div className="RadioOrder-container">
      <h2>Image Order</h2>
      <table className="RadioOrder-table">
        <thead>
          <tr>
            <th>Imaging Name</th>
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
                className="RadioOrder-input"
              />
            </td>
            <td>
              <div className="RadioOrder-radio-group">
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
      <div className="RadioOrder-action-container">
        <button className="RadioOrder-action-container-btn RadioOrder-action-container-btn-sign" onClick={handleSign}>
          Sign
        </button>
        <button className="RadioOrder-action-container-btn RadioOrder-action-container-btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default RadioOrder
