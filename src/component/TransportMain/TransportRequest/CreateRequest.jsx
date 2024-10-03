/* Kshitija_Purvat_TransportRequest_24_09_starting_line_2 */


import React, { useState } from 'react';
import './CreateRequest.css';

const CreateRequest = ({ onClose, onSubmit }) => {
  const [patient_id, setpatient_id] = useState('');
  const [transportType, settransportType] = useState('');
  const [priority, setpriority] = useState('');
  const [pickupLocation, setpickupLocation] = useState('');
  const [dropLocation, setdropLocation] = useState('');

  const onSave = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Create an object with the form data
    const requestData = {
      patient_id,
      transportType,
      priority,
      pickupLocation,
      dropLocation,
    };

    // Call the onSubmit function passed as a prop
    onSubmit(requestData);
    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className='modal-content-heading-text'>Create Transport Request</span>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={onSave}>
          <div className="form-group">
            <label>Patient ID:</label>
            <input
              type="number"
              value={patient_id}
              onChange={(e) => setpatient_id(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Transport Type:</label>
            <select
              value={transportType}
              onChange={(e) => settransportType(e.target.value)}
              required
            >
              <option value="">Select Transport Type</option>
              <option value="Patient Transfer">Patient Transfer</option>
              <option value="Equipment Transport">Equipment Transport</option>
              <option value="Lab Sample Transfer">Lab Sample Transfer</option>
            </select>
          </div>
          <div className="form-group">
            <label>priority:</label>
            <select
              value={priority}
              onChange={(e) => setpriority(e.target.value)}
              required
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div className="form-group">
            <label>Pickup Location:</label>
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setpickupLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Drop-off Location:</label>
            <input
              type="text"
              value={dropLocation}
              onChange={(e) => setdropLocation(e.target.value)}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="submit">Submit Request</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRequest;


/* Kshitija_Purvat_TransportRequest_24_09_starting_line_2 */
