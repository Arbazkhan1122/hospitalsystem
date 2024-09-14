// SwapnilRokade_MedicationOrder_Adding_New_MedicationOrder_13/09
import React, { useState } from "react";
import axios from "axios";
import "./MedicationOrder.css";

const MedicationOrder = ({ selectedOrders, patientId, newPatientVisitId }) => {
  const [medicationList, setMedicationList] = useState(
    selectedOrders.map(order => ({
      type: order?.genericNameDTO?.genericName || "", // Pre-fill generic name from selected order
      medicationName: order?.itemName || "",
      dose: "",
      route: "mouth",
      frequency: 0,
      lastTaken: "",
      comments: "",
    }))
  );

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMedications = medicationList.map((medication, i) => 
      i === index ? { ...medication, [name]: value } : medication
    );
    setMedicationList(updatedMedications);
  };

  const handleSubmit = async () => {
    // Loop through each medication and make individual API calls
    for (let i = 0; i < medicationList.length; i++) {
      const medication = medicationList[i];
      const formData =
        patientId > 0
          ? { ...medication, patientDTO: { patientId } }
          : { ...medication, newPatientVisitDTO: { newPatientVisitId } };

      try {
        const response = await axios.post(
          "http://192.168.1.39:1415/api/medications/save-medication-details",
          formData
        );
        console.log(`Success for medication ${i + 1}:`, response.data);
      } catch (error) {
        console.error(`Error submitting medication ${i + 1}:`, error);
      }
    }
  };

  return (
    <div className="MedicationOrder-form">
      <h3>Medication Order</h3>
      <table className="MedicationOrder-table">
        <thead>
          <tr>
            <th></th>
            <th>Generic</th>
            <th>Brand Name</th>
            <th>Dose</th>
            <th>Route</th>
            <th>Frequency</th>
            <th>Duration (days)</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {medicationList.map((medication, index) => (
            <tr key={index}>
              <td>
                <button
                  className="MedicationOrder-deleteBtn"
                  onClick={() => console.log("Delete Row", index)}
                >
                  X
                </button>
              </td>
              <td>
                <input
                  type="text"
                  name="type"
                  value={medication.type}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Generic Name"
                  className="MedicationOrder-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="medicationName"
                  value={medication.medicationName}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Brand Name"
                  className="MedicationOrder-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="dose"
                  value={medication.dose}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Dose"
                  className="MedicationOrder-input"
                />
              </td>
              <td>
                <select
                  name="route"
                  value={medication.route}
                  onChange={(e) => handleInputChange(index, e)}
                  className="MedicationOrder-select"
                >
                  <option value="mouth">Mouth</option>
                  <option value="iv">IV</option>
                  <option value="injection">Injection</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="frequency"
                  value={medication.frequency}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Frequency"
                  className="MedicationOrder-input"
                />
              </td>
              <td>
                <input
                  type="date"
                  name="lastTaken"
                  value={medication.lastTaken}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Duration"
                  className="MedicationOrder-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="comments"
                  value={medication.comments}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Remarks"
                  className="MedicationOrder-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="MedicationOrder-submitBtn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default MedicationOrder;
