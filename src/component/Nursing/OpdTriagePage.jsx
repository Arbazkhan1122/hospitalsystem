import React, { useState, useEffect } from 'react';
import './OpdTriagePage.css';
import { Modal } from 'react-bootstrap';
import axios from "axios";

function OPDTriagePage({ onClose, data }) {
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(true);
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
      await axios.post("http://192.168.1.34:1415/api/vitals", newVitals);
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
      } else {
        console.error('Failed to save Chief Complaint:', response.status);
      }
    } catch (error) {
      console.error('Error saving Chief Complaint:', error);
    }
  };

  useEffect(() => {
    // Populate modal with data if available
    if (data) {
      setVitals(data || {});
      console.log(data+'tttttttttttttt')
      // setAllergy(data.allergy || {});
      // setChiefComplaint(data.chiefComplaint || {});
    }
  }, [data]);

  return (
    <>
      <Modal show={isTriageModalOpen} onHide={closeTriAgeModal} size="lg" className="custom-modal">
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>OPD Triage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="triage-container">
            <header>
              <h2>OPD Triage of {vitals.length > 0 && vitals[0].patientDTO.firstName}</h2>
              <p>Doctor Name: {vitals.length > 0 && vitals[0].doctor}</p>
            </header>
            <main>
              <section className="vitals-list">
                <div>
                  <h2>Vitals List</h2>
                  {vitals.length > 0 ? (
                    vitals.map((vital) => (
                      <table key={vital.vitalId} className="vertical-table">
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
                            <th>Temperature (C)</th>
                            <td>{vital.temperature}</td>
                          </tr>
                          <tr>
                            <th>Pulse</th>
                            <td>{vital.pulse}</td>
                          </tr>
                          <tr>
                            <th>BP (Systolic/Diastolic)</th>
                            <td>{vital.bpSystolic}/{vital.bpDiastolic}</td>
                          </tr>
                          <tr>
                            <th>Respiratory Rate</th>
                            <td>{vital.respiratoryRate}</td>
                          </tr>
                          <tr>
                            <th>SpO2</th>
                            <td>{vital.spO2}</td>
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
                <input type="number" name="temperature" placeholder="Temperature (C)" value={newVitals.temperature} onChange={handleVitalsChange} />
                <input type="number" name="pulse" placeholder="Pulse" value={newVitals.pulse} onChange={handleVitalsChange} />
                <input type="number" name="bloodPressureSystolic" placeholder="BP Systolic" value={newVitals.bloodPressureSystolic} onChange={handleVitalsChange} />
                <input type="number" name="bloodPressureDiastolic" placeholder="BP Diastolic" value={newVitals.bloodPressureDiastolic} onChange={handleVitalsChange} />
                <input type="number" name="respiratoryRate" placeholder="Respiratory Rate" value={newVitals.respiratoryRate} onChange={handleVitalsChange} />
                <input type="number" name="spo2" placeholder="SpO2" value={newVitals.spo2} onChange={handleVitalsChange} />
                <input type="number" name="painScale" placeholder="Pain Scale" value={newVitals.painScale} onChange={handleVitalsChange} />
                <input type="text" name="bodyPart" placeholder="Body Part" value={newVitals.bodyPart} onChange={handleVitalsChange} />
                <button onClick={handleVitalsSubmit}>Save Vitals</button>
              </section>

              <section className="allergy-section">
                <h3>Allergy</h3>
                <input type="text" name="allergen" placeholder="Allergen" value={allergy.allergen} onChange={handleAllergyChange} />
                <input type="text" name="severity" placeholder="Severity" value={allergy.severity} onChange={handleAllergyChange} />
                <input type="text" name="reaction" placeholder="Reaction" value={allergy.reaction} onChange={handleAllergyChange} />
                <input type="text" name="comments" placeholder="Comments" value={allergy.comments} onChange={handleAllergyChange} />
                <label>
                  <input type="checkbox" name="verified" checked={allergy.verified || false} onChange={handleAllergyCheckboxChange} />
                  Verified
                </label>
                <button onClick={handleAllergySave}>Save Allergy</button>
              </section>

              <section className="chief-complaint-section">
                <h3>Chief Complaint</h3>
                <input type="text" name="description" placeholder="Description" value={chiefComplaint.description} onChange={handleChiefComplaintChange} />
                <input type="text" name="comments" placeholder="Comments" value={chiefComplaint.comments} onChange={handleChiefComplaintChange} />
                <button onClick={handleChiefComplaintSave}>Save Chief Complaint</button>
              </section>
            </main>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={closeTriAgeModal}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OPDTriagePage;
