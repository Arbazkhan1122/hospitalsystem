import React, { useEffect, useRef, useState } from "react";
import "./ClinicalAllergy.css"; // Separate CSS file
import { startResizing } from "../TableHeadingResizing/resizableColumns";
import { API_BASE_URL } from "../api/api";
import axios from "axios";

const Allergy = ({ patientId, newPatientVisitId }) => {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [allergies, setAllergies] = useState(null);
  const [formData, setFormData] = useState({
    recordedDate: new Date().toLocaleDateString(),
    typeOfAllergy: "",
    severity: "",
    verified: null,
    reaction: "",
    comments: "",
  });

  const handleAddNew = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  // Handle radio input for type of allergy
  const handleTypeOfAllergyChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      typeOfAllergy: value,
    }));
  };

  useEffect(() => {
    // Fetch vitals from API
    axios
      .get(
        `${API_BASE_URL}/allergies/by-newVisitPatientId/${newPatientVisitId}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          setAllergies(response.data);
          // console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching vitals:", error);
      });
  }, []);

  // Handle radio input for severity
  const handleSeverityChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      severity: value,
    }));
  };

  // Handle verified radio buttons
  const handleVerifiedChange = (e) => {
    const value = e.target.value === "true";
    setFormData((prevData) => ({
      ...prevData,
      verified: value,
    }));
  };

  // Handle text input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allergy =
      patientId > 0
        ? { ...formData, patientDTO: { patientId } }
        : { ...formData, newPatientVisitDTO: { newPatientVisitId } };
    console.log(allergy);

    try {
      const response = await fetch(`${API_BASE_URL}/allergies/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allergy),
      });

      if (response.ok) {
        alert("Allergy added successfully!");
        setFormData({
          typeOfAllergy: "",
          severity: "",
          verified: null,
          reaction: "",
          comments: "",
        });
      } else {
        alert("Failed to add allergy");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="allergy-container">
      <div className="allergy-list">
        <div className="allergy-list-subdiv">
          <h3>Allergy List</h3>
          <button className="allergy-add-new-button" onClick={handleAddNew}>
            + Add New
          </button>
        </div>
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Recorded On",
                "Allergen",
                "Severity",
                "Reaction",
                "Verified",
                "Comments",
                "Edit",
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allergies && allergies.length > 0 ? (
              allergies.map((allergy) => (
                <tr key={allergy.allergiesId}>
                  <td>{allergy.recordedDate}</td>
                  <td>{allergy.typeOfAllergy}</td>
                  <td>{allergy.severity}</td>
                  <td>{allergy.verified ? "Yes" : "No"}</td>
                  <td>{allergy.reaction}</td>
                  <td>{allergy.comments}</td>
                  <td>
                    {/* You can add an edit button here */}
                    <button>Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No allergies found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="allergy-add-new-section">
        {showForm && (
          <div className="add-allergy-form">
            <div className="allergy-form-header">
              <h3>Add Allergy</h3>
              <button
                className="allergy-close-button"
                onClick={handleCloseForm}
              >
                ✖
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="allergy-form-row">
                <label>Type Of Allergy*:</label>
                <div className="allergy-form-row-subdiv">
                  <input
                    type="radio"
                    value="Medication"
                    name="typeOfAllergy"
                    onChange={handleTypeOfAllergyChange}
                  />{" "}
                  Medication
                  <input
                    type="radio"
                    value="Non Medication"
                    name="typeOfAllergy"
                    onChange={handleTypeOfAllergyChange}
                  />{" "}
                  Non Medication
                  <input
                    type="radio"
                    value="Food"
                    name="typeOfAllergy"
                    onChange={handleTypeOfAllergyChange}
                  />{" "}
                  Food
                  <input
                    type="radio"
                    value="AdvRec"
                    name="typeOfAllergy"
                    onChange={handleTypeOfAllergyChange}
                  />{" "}
                  AdvRec
                </div>
              </div>

              <div className="allergy-form-row">
                <label>Severity:</label>
                <div className="allergy-form-row-subdiv">
                  <input
                    type="radio"
                    value="Mild"
                    name="severity"
                    onChange={handleSeverityChange}
                  />{" "}
                  Mild
                  <input
                    type="radio"
                    value="Moderate"
                    name="severity"
                    onChange={handleSeverityChange}
                  />{" "}
                  Moderate
                  <input
                    type="radio"
                    value="Severe"
                    name="severity"
                    onChange={handleSeverityChange}
                  />{" "}
                  Severe
                </div>
              </div>

              <div className="allergy-form-row">
                <label>Verified:</label>
                <div className="allergy-form-row-subdiv">
                  <input
                    type="radio"
                    name="verified"
                    value="unknown"
                    onChange={handleVerifiedChange}
                  />{" "}
                  Unknown
                  <input
                    type="radio"
                    name="verified"
                    value="true"
                    onChange={handleVerifiedChange}
                  />{" "}
                  Yes
                  <input
                    type="radio"
                    name="verified"
                    value="false"
                    onChange={handleVerifiedChange}
                    defaultChecked
                  />{" "}
                  No
                </div>
              </div>

              <div className="allergy-form-row">
                <label>Reaction*:</label>
                <input
                  type="text"
                  name="reaction"
                  placeholder="Reaction"
                  value={formData.reaction}
                  onChange={handleInputChange}
                />
              </div>

              <div className="allergy-form-row">
                <label>Comments:</label>
                <textarea
                  name="comments"
                  placeholder="Comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="allergy-add-button">
                Add
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allergy;
