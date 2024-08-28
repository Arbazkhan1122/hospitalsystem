import React, { useState, useEffect } from 'react';
import './OpdTriagePage.css';
import { Modal } from 'react-bootstrap';
import axios from "axios";

function OPDTriagePage({ onClose }) {
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(true); // Set to true for demo purposes
  const [vitals, setVitals] = useState([]);
  const [newVitals, setNewVitals] = useState({
    addedOn: '',
    height: '',
    weight: '',
    bmi: '',
    temperature: '',
    pulse: '',
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    respiratoryRate: '',
    spo2: '',
    painScale: '',
    bodyPart: ''
  });
  const [allergy, setAllergy] = useState({});
  const [chiefComplaint, setChiefComplaint] = useState({});

  // Function to open/close the triage modal
  const openTriAgeModal = () => setIsTriageModalOpen(true);
  const closeTriAgeModal = () => {
    setIsTriageModalOpen(false);
    onClose();
  };

  const handleAllergyChange = (e) => {
    const { name, value } = e.target;
    setAllergy((prevAllergy) => ({
      ...prevAllergy,
      [name]: value
    }));
  };

  const handleAllergyCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAllergy((prevAllergy) => ({
      ...prevAllergy,
      [name]: checked
    }));
  };

  const handleChiefComplaintChange = (e) => {
    const { name, value } = e.target;
    setChiefComplaint((prevComplaint) => ({
      ...prevComplaint,
      [name]: value
    }));
  };

  const handleVitalsChange = (e) => {
    const { name, value } = e.target;
    setNewVitals((prevVitals) => ({
      ...prevVitals,
      [name]: value
    }));
  };

  const handleVitalsSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8989/api/patient-visits", newVitals);
      fetchData(); // Refresh data after saving
    } catch (error) {
      console.error('Error saving vitals:', error);
    }
  };

  const handleAllergySave = async () => {
    try {
      const response = await axios.post("http://localhost:8989/api/patients/add", {
        allergen: allergy.allergen,
        severity: allergy.severity,
        reaction: allergy.reaction,
        verified: allergy.verified,
        comments: allergy.comments,
      });

      if (response.status === 200) {
        console.log('Allergy saved successfully');
        // Add logic here to update the UI or inform the user of success
      } else {
        console.error('Failed to save Allergy:', response.status);
      }
    } catch (error) {
      console.error('Error saving Allergy:', error);
    }
  };

  const handleChiefComplaintSave = async () => {
    try {
      const response = await axios.post("http://localhost:8989/api/patients/add", {
        description: chiefComplaint.description,
        comments: chiefComplaint.comments,
      });

      if (response.status === 200) {
        console.log('Chief Complaint saved successfully');
        // Add logic here to update the UI or inform the user of success
      } else {
        console.error('Failed to save Chief Complaint:', response.status);
      }
    } catch (error) {
      console.error('Error saving Chief Complaint:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8989/api/patient-visits/8");
      if (response.data) {
        // Assuming your API response has properties like 'vitals', 'allergy', 'chiefComplaint'
        setVitals([response.data]);  // if the data is not an array, wrap it in an array
        setAllergy({
          recordedOn: response.data.recordedOn,
          allergen: response.data.allergen,
          severity: response.data.severity,
          reaction: response.data.reaction,
          verified: response.data.verified,
          comments: response.data.allergyComments
        });
        setChiefComplaint({
          description: response.data.chiefComplaint,
          comments: response.data.chiefComments
        });
      } else {
        console.error("Data not found:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Modal show={isTriageModalOpen} onHide={closeTriAgeModal} size="lg" className="custom-modal">
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>OPD Triage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="triage-container">
            <header>
              <h2>OPD Triage of {vitals.length > 0 && vitals[0].patientName}</h2>
              <p>Doctor Name: {vitals.length > 0 && vitals[0].doctor}</p>
            </header>
            <main>
              <section className="vitals-list">
                <div>
                  <h2>Vitals List</h2>
                  {vitals.length > 0 ? (
                    vitals.map((vital) => (
                      <table key={vital.id} className="vertical-table">
                        <tbody>
                          <tr>
                            <th>Date</th>
                            <td>{vital.addedOn}</td>
                          </tr>
                          <tr>
                            <th>Height (cm)</th>
                            <td>{vital.height}</td>
                          </tr>
                          <tr>
                            <th>Weight (kg)</th>
                            <td>{vital.weight}</td>
                          </tr>
                          <tr>
                            <th>BMI</th>
                            <td>{vital.bmi}</td>
                          </tr>
                          <tr>
                            <th>Temperature (F)</th>
                            <td>{vital.temperature}</td>
                          </tr>
                          <tr>
                            <th>Pulse</th>
                            <td>{vital.pulse}</td>
                          </tr>
                          <tr>
                            <th>BP (Systolic/Diastolic)</th>
                            <td>{vital.bloodPressureSystolic}/{vital.bloodPressureDiastolic}</td>
                          </tr>
                          <tr>
                            <th>Respiratory Rate</th>
                            <td>{vital.respiratoryRate}</td>
                          </tr>
                          <tr>
                            <th>SpO2</th>
                            <td>{vital.spo2}</td>
                          </tr>
                          <tr>
                            <th>Pain Scale</th>
                            <td>{vital.painScale}</td>
                          </tr>
                        </tbody>
                      </table>
                    ))
                  ) : (
                    <p>No vitals data available.</p>
                  )}
                </div>
                <div className="vitals-actions">
                  <button>Edit</button>
                  <button>Print</button>
                </div>
              </section>

              <section className="add-new-vitals">
                <h3>Add New Vitals</h3>
                <input type="date" name="addedOn" placeholder="Added On" value={newVitals.addedOn} onChange={handleVitalsChange} />
                <input type="number" name="height" placeholder="Height (cm)" value={newVitals.height} onChange={handleVitalsChange} />
                <input type="number" name="weight" placeholder="Weight (kg)" value={newVitals.weight} onChange={handleVitalsChange} />
                <input type="number" name="bmi" placeholder="BMI" value={newVitals.bmi} onChange={handleVitalsChange} />
                <input type="number" name="temperature" placeholder="Temperature (F)" value={newVitals.temperature} onChange={handleVitalsChange} />
                <input type="number" name="pulse" placeholder="Pulse" value={newVitals.pulse} onChange={handleVitalsChange} />
                <div className="blood-pressure">
                  <input type="number" name="bloodPressureSystolic" placeholder="BP Systolic" value={newVitals.bloodPressureSystolic} onChange={handleVitalsChange} />
                  <input type="number" name="bloodPressureDiastolic" placeholder="BP Diastolic" value={newVitals.bloodPressureDiastolic} onChange={handleVitalsChange} />
                </div>
                <input type="number" name="respiratoryRate" placeholder="Respiratory Rate" value={newVitals.respiratoryRate} onChange={handleVitalsChange} />
                <input type="number" name="spo2" placeholder="SpO2" value={newVitals.spo2} onChange={handleVitalsChange} />
                <input type="number" name="painScale" placeholder="Pain Scale" value={newVitals.painScale} onChange={handleVitalsChange} />
                <input type="text" name="bodyPart" placeholder="Body Part" value={newVitals.bodyPart} onChange={handleVitalsChange} />
                <button type="button" onClick={handleVitalsSubmit}>Save Vitals</button>
              </section>

              <section className="AllergyComponent">
                <h3>Add Allergy</h3>
                <div className="allergy-form">
                  <select name="allergen" value={allergy.allergen || ''} onChange={handleAllergyChange}>
                    <option value="">Select Allergen</option>
                    <option value="food">Food</option>
                    <option value="medication">Medication</option>
                    <option value="environmental">Environmental</option>
                  </select>
                  <input type="text" name="severity" placeholder="Severity" value={allergy.severity || ''} onChange={handleAllergyChange} />
                  <input type="text" name="reaction" placeholder="Reaction" value={allergy.reaction || ''} onChange={handleAllergyChange} />
                  <input type="text" name="comments" placeholder="Comments" value={allergy.comments || ''} onChange={handleAllergyChange} />
                  <label>
                    Verified
                    <input type="checkbox" name="verified" checked={allergy.verified || false} onChange={handleAllergyCheckboxChange} />
                  </label>
                  <button type="button" onClick={handleAllergySave}>Save Allergy</button>
                </div>
              </section>

              <section className="ComplaintComponent">
                <h3>Add Chief Complaint</h3>
                <div className="complaint-form">
                  <input type="text" name="description" placeholder="Description" value={chiefComplaint.description || ''} onChange={handleChiefComplaintChange} />
                  <textarea name="comments" placeholder="Comments" value={chiefComplaint.comments || ''} onChange={handleChiefComplaintChange} />
                  <button type="button" onClick={handleChiefComplaintSave}>Save Complaint</button>
                </div>
              </section>
            </main>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OPDTriagePage;
