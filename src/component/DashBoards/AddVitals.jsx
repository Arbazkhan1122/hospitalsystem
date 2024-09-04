import React, { useState } from 'react';
import './AddVitals.css';

const AddVitalsForm = () => {
  const [vitals, setVitals] = useState({
    addedOn: '',
    time: '',
    height: '',
    weight: '',
    bmi: '',
    temperature: '',
    pulse: '',
    bpSystolic: '',
    bpDiastolic: '',
    respiratoryRate: '',
    spo2: '',
    o2DeliveryPlan: '',
    painScale: '',
    bodyPart: ''
  });

  const handleChange = (e) => {
    setVitals({ ...vitals, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vitals);
  };

  return (
    <div className="AddVitalsForm-container">
      <div className="AddVitalsForm-header">
        <h2>Add New Vitals</h2>
        <button className="AddVitalsForm-close-btn">×</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="AddVitalsForm-group">
          <label>Added On:</label>
          <input type="date" name="addedOn" value={vitals.addedOn} onChange={handleChange} />
          <input type="time" name="time" value={vitals.time} onChange={handleChange} />
        </div>
        <div className="AddVitalsForm-group">
          <label>Height:</label>
          <input type="text" name="height" value={vitals.height} onChange={handleChange} />
          <select name="heightUnit" onChange={handleChange}>
            <option value="cm">cm</option>
            <option value="in">in</option>
          </select>
        </div>
        <div className="AddVitalsForm-group">
          <label>Weight:</label>
          <input type="text" name="weight" value={vitals.weight} onChange={handleChange} />
          <select name="weightUnit" onChange={handleChange}>
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>
        <div className="AddVitalsForm-group">
          <label>BMI:</label>
          <input type="text" name="bmi" value={vitals.bmi} onChange={handleChange} readOnly />
        </div>
        <div className="AddVitalsForm-group">
          <label>Temperature:</label>
          <input type="text" name="temperature" value={vitals.temperature} onChange={handleChange} />
          <select name="temperatureUnit" onChange={handleChange}>
            <option value="F">F</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="AddVitalsForm-group">
          <label>Pulse:</label>
          <input type="text" name="pulse" value={vitals.pulse} onChange={handleChange} />
        </div>
        <div className="AddVitalsForm-group">
          <label>Blood Pressure:</label>
          <input type="text" name="bpSystolic" placeholder="BPSystolic" value={vitals.bpSystolic} onChange={handleChange} />
          <input type="text" name="bpDiastolic" placeholder="BPDiastolic" value={vitals.bpDiastolic} onChange={handleChange} />
        </div>
        <div className="AddVitalsForm-group">
          <label>Respiratory Rate:</label>
          <input type="text" name="respiratoryRate" value={vitals.respiratoryRate} onChange={handleChange} />
        </div>
        <div className="AddVitalsForm-group">
          <label>SpO2:</label>
          <input type="text" name="spo2" value={vitals.spo2} onChange={handleChange} />
        </div>
        <div className="AddVitalsForm-group">
          <label>O2 Delivery Plan:</label>
          <select name="o2DeliveryPlan" onChange={handleChange}>
            <option value="Plan1">Plan1</option>
            <option value="Plan2">Plan2</option>
          </select>
        </div>
        <div className="AddVitalsForm-group">
          <label>Pain Scale (/10):</label>
          <input type="text" name="painScale" value={vitals.painScale} onChange={handleChange} />
          <select name="bodyPart" onChange={handleChange}>
            <option value="Head">Head</option>
            <option value="Chest">Chest</option>
          </select>
        </div>
        <div className="AddVitalsForm-footer">
          <button type="submit" className="AddVitalsForm-save-btn">Save</button>
          <button type="button" className="AddVitalsForm-add-more-btn">+</button>
        </div>
      </form>
    </div>
  );
};

export default AddVitalsForm;
