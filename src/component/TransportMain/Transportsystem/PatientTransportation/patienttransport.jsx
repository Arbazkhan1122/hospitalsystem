import React, { useState } from 'react';
import './patienttransport.css';

const PatientTransportForm = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    patientName: '',
    transportDate: '',
    transportTime: '',
    fromLocation: '',
    toLocation: '',
    transportReason: '',
    modeOfTransport: '',
    transportStaff: '',
    ambulanceDetails: {
      ambulanceNumber: '',
      driverName: '',
    },
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("ambulance")) {
      setFormData({
        ...formData,
        ambulanceDetails: {
          ...formData.ambulanceDetails,
          [name]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    try {
      const response = await fetch('http://localhost:9093/api/transport/save', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
  
      const result = await response.json(); 
      console.log(result);
  
      
      setFormData({
        patientId: '',
        patientName: '',
        transportDate: '',
        transportTime: '',
        fromLocation: '',
        toLocation: '',
        transportReason: '',
        modeOfTransport: '',
        transportStaff: '',
        ambulanceDetails: {
          ambulanceNumber: '',
          driverName: '',
        },
        additionalNotes: ''
      });
    } catch (error) {
      console.error('Error while saving data:', error);
      alert('An error occurred: ' + error.message); 
    } finally {
      setIsSubmitting(false); 
    }
  };
  

  return (
    <div className="patient-transport-container">
      <form className="patient-transport-form" onSubmit={handleSubmit}>
        <div className='patient-transport-header-h2'>
          <h2 className="patient-transport-header">Patient Transportation Form</h2>
        </div>

        <div className='patient-transport-form-maindiv'>
          <div className='patient-transport-form-group-subdiv'>
            <div className="patient-transport-form-group">
              <label htmlFor="patientId">Patient ID:</label>
              <input 
                type="text" 
                id="patientId" 
                name="patientId" 
                value={formData.patientId} 
                onChange={handleChange} 
                required 
                className="patient-transport-input"
              />
            </div>

            <div className="patient-transport-form-group">
              <label htmlFor="patientName">Patient Name:</label>
              <input 
                type="text" 
                id="patientName" 
                name="patientName" 
                value={formData.patientName} 
                onChange={handleChange} 
                required 
                className="patient-transport-input"
              />
            </div>

            <div className="patient-transport-form-group">
              <label htmlFor="transportDate">Transport Date:</label>
              <input 
                type="date" 
                id="transportDate" 
                name="transportDate" 
                value={formData.transportDate} 
                onChange={handleChange} 
                required 
                className="patient-transport-input"
              />
            </div>

            <div className="patient-transport-form-group">
              <label htmlFor="transportTime">Transport Time:</label>
              <input 
                type="time" 
                id="transportTime" 
                name="transportTime" 
                value={formData.transportTime} 
                onChange={handleChange} 
                required 
                className="patient-transport-input"
              />
            </div>

            <div className="patient-transport-form-group">
              <label htmlFor="fromLocation">From Location:</label>
              <input 
                type="text" 
                id="fromLocation" 
                name="fromLocation" 
                value={formData.fromLocation} 
                onChange={handleChange} 
                required 
                className="patient-transport-input"
              />
            </div>

            <div className="patient-transport-form-group">
              <label htmlFor="toLocation">To Location:</label>
              <input 
                type="text" 
                id="toLocation" 
                name="toLocation" 
                value={formData.toLocation} 
                onChange={handleChange} 
                required 
                className="patient-transport-input"
              />
            </div>

            <div className="patient-transport-form-group">
              <label htmlFor="transportReason">Reason for Transport:</label>
              <textarea 
                id="transportReason" 
                name="transportReason" 
                value={formData.transportReason} 
                onChange={handleChange} 
                required 
                className="patient-transport-textarea"
              ></textarea>
            </div>
          </div>

          <div className='patient-transport-form-group-subdiv'>
            <div className="patient-transport-form-group">
              <label htmlFor="modeOfTransport">Mode of Transport:</label>
              <select 
                id="modeOfTransport" 
                name="modeOfTransport" 
                value={formData.modeOfTransport} 
                onChange={handleChange} 
                required 
                className="patient-transport-select"
              >
                <option value="">Select Mode of Transport</option>
                <option value="Ambulance">Ambulance</option>
                <option value="Wheelchair">Wheelchair</option>
                <option value="Stretcher">Stretcher</option>
              </select>
            </div>

            {formData.modeOfTransport === 'Ambulance' && (
              <div className="ambulance-details-section">
                <center><h6>Ambulance Details</h6></center>
                <div className="patient-transport-form-group">
                  <label htmlFor="ambulanceNumber">Ambulance Number:</label>
                  <input 
                    type="text" 
                    id="ambulanceNumber" 
                    name="ambulanceNumber" 
                    value={formData.ambulanceDetails.ambulanceNumber} 
                    onChange={handleChange} 
                    required 
                    className="patient-transport-input"
                  />
                </div>

                <div className="patient-transport-form-group">
                  <label htmlFor="driverName">Driver's Name:</label>
                  <input 
                    type="text" 
                    id="driverName" 
                    name="driverName" 
                    value={formData.ambulanceDetails.driverName} 
                    onChange={handleChange} 
                    className="patient-transport-input"
                  />
                </div>
              </div>
            )}

            <div className="patient-transport-form-group">
              <label htmlFor="transportStaff">Transport Staff Assigned:</label>
              <input 
                type="text" 
                id="transportStaff" 
                name="transportStaff" 
                value={formData.transportStaff} 
                onChange={handleChange} 
                required 
                className="patient-transport-input"
              />
            </div>

            <div className="patient-transport-form-group">
              <label htmlFor="additionalNotes">Additional Notes:</label>
              <textarea 
                id="additionalNotes" 
                name="additionalNotes" 
                value={formData.additionalNotes} 
                onChange={handleChange} 
                className="patient-transport-textarea"
              ></textarea>
            </div>
          </div>
        </div>
        
        <button type="submit" className="patient-transport-submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default PatientTransportForm;
