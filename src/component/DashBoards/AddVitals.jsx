import React, { useEffect, useState } from 'react';
import './AddVitals.css'; // Separate CSS file
import { API_BASE_URL } from '../api/api';
import axios from 'axios';

const Vitals = ({patientId,newPatientVisitId}) => {
  console.log(patientId+""+newPatientVisitId);
  
  const [showForm, setShowForm] = useState(false);
  const [vitalsData, setVitalsData] = useState([]);
  const [latestVitals, setLatestVitals] = useState(null);
  const [vitalData, setVitalData] = useState({
    addedOn: '',
    height: '',
    weight: '',
    bmi: '',
    temperature: '',
    pulse: '',
    bpSystolic: '',
    bpDiastolic: '',
    respiratoryRate: '',
    spO2: '',
    o2DeliveryPlan: '',
    painScale: ''
  });

  useEffect(() => {
    // Fetch vitals from API
    axios
      .get(`${API_BASE_URL}/vitals/get-by-opd-patient-id/${newPatientVisitId}`)
      .then((response) => {
        if (response.data.lgth > 0) {
          setLatestVitals(response.data[response.data.length-1]); 
          console.log(response.data[response.data.length-1]);
        }
      })
      .catch((error) => {
        console.error("Error fetching vitals:", error);
      });
  }, []);


  const handleAddVitals = () => {
    setShowForm(true); // Show form when "Add Vitals" button is clicked
  };
  const handleInputChange = (e) => {
   const { name, value } = e.target;

    // Update the form state
    setVitalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // If height or weight changes, calculate BMI
    if (name === 'height' || name === 'weight') {
      const newBMI = calculateBMI(
        name === 'height' ? value : vitalData.height,
        name === 'weight' ? value : vitalData.weight
      );

      // Set the calculated BMI value
      setVitalData((prevState) => ({
        ...prevState,
        bmi: newBMI,
      }));
    }
  };


   const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100; // Convert height from cm to meters
    if (heightInMeters > 0 && weight > 0) {
      return (weight / (heightInMeters * heightInMeters)).toFixed(1); // BMI formula
    }
    return '';
  };

  const handleSave = async() => {
    const formData =
        patientId > 0
          ? { ...vitalData, patientDTO: { patientId } }
          : { ...vitalData, newPatientVisitDTO: { newPatientVisitId } };
    try {
      const response = await fetch(`${API_BASE_URL}/vitals/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log
        ('Vitals saved successfully');
        setShowForm(false);
        // Clear the form after successful submission
        setVitalData({
          addedOn: '',
          height: '',
          weight: '',
          bmi: '',
          temperature: '',
          pulse: '',
          bpSystolic: '',
          bpDiastolic: '',
          respiratoryRate: '',
          spO2: '',
          o2DeliveryPlan: '',
          painScale: ''
        });
      } else {
        alert('Failed to save vitals');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit=(selectedVital)=>{
    

  }

  return (
    <div className="vitals-container">
      <div className="vitals-list">
        <div className='vital-sub-div'>
        <h3>Vitals List</h3>
        <button className="add-vitals-button" onClick={handleAddVitals}>
          + New Vitals
        </button>
        </div>
        {latestVitals ? (
        <ul>
          <li><strong>Recorded On:</strong> {new Date(latestVitals.addedOn).toLocaleString()}</li>
          <li><strong>Taken On:</strong> {new Date(latestVitals.addedOn).toLocaleString()}</li>
          <li><strong>Height:</strong> {latestVitals.height} cm</li>
          <li><strong>Weight:</strong> {latestVitals.weight} kg</li>
          <li><strong>BMI:</strong> {latestVitals.bmi}</li>
          <li><strong>Temperature:</strong> {latestVitals.temperature} °C</li>
          <li><strong>Pulse:</strong> {latestVitals.pulse} bpm</li>
          <li><strong>Blood Pressure:</strong> {latestVitals.bpSystolic}/{latestVitals.bpDiastolic} mmHg</li>
          <li><strong>Respiratory Rate:</strong> {latestVitals.respiratoryRate} breaths/min</li>
          <li><strong>SpO₂:</strong> {latestVitals.spO2} %</li>
          <li><strong>O₂ Delivery Method:</strong> {latestVitals.o2DeliveryPlan}</li>
          <li><strong>Pain Scale (/10):</strong> {latestVitals.painScale}</li>
        </ul>
      ) : (
        <ul>
          {/* Empty ul to show no data */}
        </ul>
      )}
        <div className="vital-action-buttons">
          {/* <button className="vital-edit-button" onClick={handleEdit(latestVitals)} >Edit</button> */}
          {/* <button className="vital-print-button">Print</button> */}
        </div>
      </div>
      
      <div className="add-vitals-section">
        
        {showForm && (
           <div className="vitals-form">
            <div className='vitals-form-header'>
           <h3>Add New Vitals</h3>
           <button className='vitals-form-header-close' onClick={()=>setShowForm(!showForm)}>X</button>
           </div>
         <form>
      <div className="vitals-form-form-row">
        <label>Added On:</label>
        <input
          className="vitals-form-form-row-input"
          type="date"
          name="addedOn"
          value={vitalData.addedOn}
          onChange={handleInputChange}
        />
      </div>

      <div className="vitals-form-form-row">
        <label>Height (cm):</label>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="height"
          placeholder="cm"
          value={vitalData.height}
          onChange={handleInputChange}
        />
      </div>

      <div className="vitals-form-form-row">
        <label>Weight (kg):</label>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="weight"
          placeholder="Kg"
          value={vitalData.weight}
          onChange={handleInputChange}
        />
      </div>

      <div className="vitals-form-form-row">
        <label>BMI:</label>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="bmi"
          value={vitalData.bmi}
          readOnly
        />
      </div>

      <div className="vitals-form-form-row">
        <label>Temperature:</label>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="temperature"
          value={vitalData.temperature}
          onChange={handleInputChange}
        />
      </div>

      <div className="vitals-form-form-row">
        <label>Pulse:</label>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="pulse"
          value={vitalData.pulse}
          onChange={handleInputChange}
        />
      </div>

      <div className="vitals-form-form-row">
        <label>Blood Pressure:</label>
        <div className='vitals-form-form-row-input'>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="bpSystolic"
          placeholder="BP Systolic"
          value={vitalData.bpSystolic}
          onChange={handleInputChange}
        />
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="bpDiastolic"
          placeholder="BP Diastolic"
          value={vitalData.bpDiastolic}
          onChange={handleInputChange}
        />
        </div>
      </div>

      <div className="vitals-form-form-row">
        <label>Respiratory Rate:</label>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="respiratoryRate"
          value={vitalData.respiratoryRate}
          onChange={handleInputChange}
        />
      </div>

      <div className="vitals-form-form-row">
        <label>SpO₂:</label>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="spO2"
          value={vitalData.spO2}
          onChange={handleInputChange}
        />
      </div>

      <div className="vitals-form-form-row">
        <label>O₂ Delivery Plan:</label>
        <input
          className="vitals-form-form-row-input"
          type="text"
          name="o2DeliveryPlan"
          value={vitalData.o2DeliveryPlan}
          onChange={handleInputChange}
        />
      </div>

      <div className="vitals-form-form-row">
        <label>Pain Scale (/10):</label>
        <input
          className="vitals-form-form-row-input"
          type="number"
          name="painScale"
          value={vitalData.painScale}
          onChange={handleInputChange}
        />
      </div>

      <button
        type="button"
        className="vitals-form-save-button"
        onClick={handleSave}
      >
        Save
      </button>
    </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vitals;
