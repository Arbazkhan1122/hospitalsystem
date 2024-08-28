import React, { useState, useRef } from "react";
import "./PatientVaccinationDetail.css";

const PatientVaccinationDetails = ({ patient, onClose }) => {
  const [columnWidths, setColumnWidths] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    vaccineDate: "",
    vaccineTime: "",
    vaccineName: "",
    vaccineDose: "",
    remarks: "",
  });

  const tableRef = useRef(null);

  const startResizing = (index) => (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = tableRef.current
      ? tableRef.current.querySelector(`th:nth-child(${index + 1})`).offsetWidth
      : 0;

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      setColumnWidths((prevWidths) => ({
        ...prevWidths,
        [index]: `${newWidth}px`,
      }));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleEditClick = (vaccine) => {
    setIsEditing(true);
    const dateTime = new Date(vaccine.date); // Convert to Date object
    setFormData({
      vaccineDate: dateTime.toISOString().split("T")[0], // Extract date part
      vaccineTime: dateTime.toISOString().split("T")[1].split(".")[0], // Extract time part without milliseconds
      vaccineName: vaccine.name,
      vaccineDose: vaccine.dose,
      remarks: vaccine.remarks,
    });
  };

  const handleUpdate = () => {
    console.log("Updating form data:", formData); // Debugging line
    // Implement update logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="PatientVaccinationDetail-overlay">
      <div className="PatientVaccinationDetail-popup">
        <button className="PatientVaccinationDetail-closeBtn" onClick={onClose}>
          X
        </button>
        <div className="PatientVaccinationDetail-header">
          <h2>Patient Vaccination Detail</h2>
        </div>

        <div className="PatientVaccinationDetail-patientInfo">
          <span>
            <i className="icon-user"></i> Name: {patient?.babyName}
          </span>
          <span>Hospital #: {patient?.hospitalNo}</span>
          <span>
            <i className="icon-user"></i> Age/Sex: {patient?.ageSex}
          </span>
          <span>Date of Birth: {patient?.dob}</span>
          <span>Address: {patient?.address}</span>
        </div>

        <div className="PatientVaccinationDetail-fiscalYear">
          <label>
            Fiscal Year:
            <select defaultValue="2023">
              <option value="2023">2023</option>
            </select>
          </label>
          <label>
            Vaccine Reg. No:
            <input type="text" value={patient?.vaccRegNo} readOnly />
          </label>
        </div>

        <div className="PatientVaccinationDetail-newVaccine">
          <div className="PatientVaccinationDetail-formGroup">
            <label>Vaccine Date</label>
            <input
              type="date"
              name="vaccineDate"
              value={formData?.vaccineDate}
              onChange={handleChange}
              disabled={!isEditing}
            />
            <input
              type="time"
              name="vaccineTime"
              value={formData?.vaccineTime}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="PatientVaccinationDetail-formGroup">
            <label>Vaccine Name</label>
            <select
              name="vaccineName"
              value={formData?.vaccineName}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">--Vaccine--</option>
              <option value={"BCG"}>BCG</option>
              <option value={"DPT"}>DPT</option>
              <option value={"Rotavirus"}>Rotavirus</option>
              <option value={"HBV"}>HBV</option>
              <option value={"IPV"}>IPV</option>
              <option value={"OPV"}>OPV</option>
              <option value={"PCV"}>PCV</option>
              <option value={"HIV"}>HIV</option>
              <option value={"MMR"}>MMR</option>
              <option value={"Others"}>Others</option>
            </select>
          </div>
          <div className="PatientVaccinationDetail-formGroup">
            <label>Vaccine Dose</label>
            <select
              name="vaccineDose"
              value={formData?.vaccineDose}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">--Dose--</option>
              <option value={"1st"}>1st</option>
              <option value={"2nd"}>2nd</option>
              <option value={"3rd"}>3rd</option>
              <option value={"4th"}>4th</option>
              <option value={"5th"}>5th</option>
            </select>
          </div>
          <div className="PatientVaccinationDetail-formGroup">
            <label>Remarks</label>
            <input
              type="text"
              name="remarks"
              placeholder="Remarks"
              value={formData.remarks}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          {isEditing ? (
            <div>
              <button
                className="PatientVaccinationDetail-updateBtn"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="PatientVaccinationDetail-cancelBtn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="PatientVaccinationDetail-addBtn"
              onClick={() => handleEditClick(patient.vaccines[0])} // Assuming you want to edit the first vaccine
            >
              Add
            </button>
          )}
        </div>

        <div className="PatientVaccinationDetail-vaccinesList">
          <h3>Vaccines list taken by</h3>
          <div className="patientList-search-bar">
            <div className="patientList-search-container">
              <input type="text" placeholder="Search" />
              <i className="fas fa-search"></i>
            </div>
            <div>
              <span className="patientList-results-count">
                Showing {patient?.vaccines?.length} /{" "}
                {patient?.vaccines?.length} results
              </span>
              <button className="patientList-print-btn">Print</button>
            </div>
          </div>
          <table className="patientList-table" ref={tableRef}>
            <thead>
              <tr>
                {[
                  "Vacc Date",
                  "Vacc Name",
                  "Remarks",
                  "Dose",
                  "Entered By",
                  "Actions",
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
                        onMouseDown={startResizing(index)}
                      ></div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {patient?.vaccines?.map((vaccine, index) => (
                <tr key={index}>
                  <td>{vaccine.date}</td>
                  <td>{vaccine.name}</td>
                  <td>{vaccine.remarks}</td>
                  <td>{vaccine.dose}</td>
                  <td>{vaccine.enteredBy}</td>
                  <td>
                    <button
                      className="patientList-table-btn"
                      type="button"
                      onClick={() => handleEditClick(vaccine)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientVaccinationDetails;
