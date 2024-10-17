import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../api/api';
import "./NursingInpatientVital.css"
import axios from 'axios';

const NursingInpatientVital = (patient) => {
    console.log(patient?.patient);
    
    const [showForm, setShowForm] = useState(false);
    const [latestVitals, setLatestVitals] = useState(null);
  
    const [vitalData, setVitalData] = useState({
      addedOn: "",
      height: "",
      weight: "",
      bmi: "",
      temperature: "",
      pulse: "",
      bpSystolic: "",
      bpDiastolic: "",
      respiratoryRate: "",
      spO2: "",
      o2DeliveryPlan: "",
      painScale: "",
    });
    useEffect(() => {
        const fetchVitals = () => {
          let endpoint = "";
        
            endpoint = `${API_BASE_URL}/vitals/get-by-in-patient-id/${patient?.patient}`;
    
          // If an endpoint is determined, make the API call
          if (endpoint) {
            axios
              .get(endpoint)
              .then((response) => {
                if (response.data.length > 0) {
                  // Set the latest vitals
                  setLatestVitals(response.data[response.data.length - 1]);
                  console.log(response.data[response.data.length - 1]);
                }
              })
              .catch((error) => {
                console.error("Error fetching vitals:", error);
              });
          }
        };
    
        fetchVitals();
      }, [patient?.patient,showForm]);
    
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
    
        if (name === "height" || name === "weight") {
          const newBMI = calculateBMI(
            name === "height" ? value : vitalData.height,
            name === "weight" ? value : vitalData.weight
          );
          setVitalData((prevState) => ({
            ...prevState,
            bmi: newBMI,
          }));
        }
      };
      const calculateBMI = (height, weight) => {
        const heightInMeters = height / 100;
        if (heightInMeters > 0 && weight > 0) {
          return (weight / (heightInMeters * heightInMeters)).toFixed(1);
        }
        return "";
      };
      const handleSave = async () => {
        console.log(patient?.patient);
        
        const formData =
        patient?.patient > 0 &&{ ...vitalData, patientDTO:{patientId: patient?.patient} }
        try {
          console.log(formData);
          
          const response = await fetch(`${API_BASE_URL}/vitals/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log("Vitals saved successfully");
            setShowForm(false);
            // Clear the form after successful submission
            setVitalData({
              addedOn: "",
              height: "",
              weight: "",
              bmi: "",
              temperature: "",
              pulse: "",
              bpSystolic: "",
              bpDiastolic: "",
              respiratoryRate: "",
              spO2: "",
              o2DeliveryPlan: "",
              painScale: "",
            });
          } else {
            alert("Failed to save vitals");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
  return (
    <main className="nursing-triage-container-main">
         <section className="nursing-main-upperSeection">
              <div className="nursing-triage-vital-table">
                <div className="triage-vital-table-subDiv">
                  <h1>Vital List</h1>
                  <button onClick={handleAddVitals} className="triage-allergy-add-new-button">Add New</button>
                </div>
                {latestVitals && (
                  <div className="triage-Patient-Dashboard-tableRecord">
                    <table className="triage-Patient-Dashboard-patient-table">
                      <tr>
                        <td className="triage-Patient-Dashboard-td">
                          Recoreded On
                        </td>
                        <td className="triage-Patient-Dashboard-td">
                          {new Date(latestVitals?.addedOn).toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">Height</td>
                        <td className="triage-Patient-Dashboard-td">
                          {" "}
                          {latestVitals?.height} cm
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">Weight</td>
                        <td className="triage-Patient-Dashboard-td">
                          {latestVitals?.weight}kg
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">BMI</td>
                        <td className="triage-Patient-Dashboard-td">
                          {latestVitals?.bmi}
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">
                          Temprature
                        </td>
                        <td className="triage-Patient-Dashboard-td">
                          {latestVitals?.temperature} °C
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">Pulse</td>
                        <td className="triage-Patient-Dashboard-td">
                          {latestVitals?.pulse} bpm
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">
                          Blood Pressure
                        </td>
                        <td className="triage-Patient-Dashboard-td">
                          {" "}
                          {latestVitals?.bpSystolic}/{latestVitals?.bpDiastolic}{" "}
                          mmHg
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">
                          Respiratory Rate
                        </td>
                        <td className="triage-Patient-Dashboard-td">
                          {latestVitals?.respiratoryRate} breaths/min
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">SpO2</td>
                        <td className="triage-Patient-Dashboard-td">
                          {" "}
                          {latestVitals?.spO2} %
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">
                          O2 Deliver Method
                        </td>
                        <td className="triage-Patient-Dashboard-td">
                          {" "}
                          {latestVitals?.o2DeliveryPlan}
                        </td>
                      </tr>
                      <tr>
                        <td className="triage-Patient-Dashboard-td">
                          Pain Scale
                        </td>
                        <td className="triage-Patient-Dashboard-td">
                          {latestVitals?.painScale}
                        </td>
                      </tr>
                    </table>
                  </div>
                )}
              </div>
              <div className="nursing-triage-vital-Form">
                {showForm && (
                  <div className="triage-vitals-form">
                    <div className="triage-vitals-form-header">
                      <h3>Add New Vitals</h3>
                      <button
                        className="vitals-form-header-close"
                        onClick={() => setShowForm(!showForm)}
                      >
                        X
                      </button>
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
                        <div className="vitals-form-form-row-input">
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
                        className="triage-vitals-form-save-button"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </form>
                  </div>
                )}
              </div>
              </section>
              </main>
  )
}

export default NursingInpatientVital
