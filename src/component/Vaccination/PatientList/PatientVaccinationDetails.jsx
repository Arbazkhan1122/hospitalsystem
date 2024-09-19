import React, { useState, useRef, useEffect } from "react";
import "./PatientVaccinationDetail.css";
import { startResizing } from "../../../TableHeadingResizing/ResizableColumns";

const vaccineOptions = [
  "BCG",
  "DPT",
  "Rotavirus",
  "HBV",
  "IPV",
  "OPV",
  "PCV",
  "HIV",
  "MMR",
  "Others",
];

const vaccineDoses = {
  BCG: ["1st", "2nd", "3rd"],
  DPT: ["1st", "2nd", "3rd", "4th"],
  Rotavirus: ["1st", "2nd", "3rd"],
  HBV: ["1st", "2nd", "3rd", "4th", "5th"],
  IPV: ["1st", "2nd"],
  OPV: ["1st", "2nd", "3rd", "4th", "5th"],
  PCV: ["1st", "2nd", "3rd", "4th"],
};

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
  const [doses, setDoses] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const response = await fetch(
          `http://localhost:8888/api/vaccinations/get-all-vaccination/doses/${patient?.vaccinationId}`
        );
        if (response.ok) {
          const data = await response.json();
          setVaccines(data);
        } else {
          console.error("Failed to fetch vaccination doses.");
        }
      } catch (error) {
        console.error("Error fetching vaccination doses:", error);
      }
    };

    fetchVaccines();
  }, [patient]);

  useEffect(() => {
    if (formData.vaccineName) {
      setDoses(vaccineDoses[formData.vaccineName] || []);
    }
  }, [formData.vaccineName]);

  const handleEditClick = (vaccine) => {
    setIsEditing(true);
    const dateTime = new Date(vaccine.vaccinationDate);
    setFormData({
      vaccineDate: dateTime.toISOString().split("T")[0],
      vaccineTime: dateTime.toISOString().split("T")[1].split(".")[0],
      vaccineName: vaccine.vaccineName,
      vaccineDose: vaccine.vaccineDose,
      remarks: vaccine.remarks,
    });
  };

  const handleSubmit = async () => {
    const newVaccine = {
      vaccinationDate: formData.vaccineDate,
      vaccinationTime: formData.vaccineTime,
      vaccineName: formData.vaccineName,
      vaccinationDose: formData.vaccineDose,
      remark: formData.remarks,
      enteredBy: "admin",
      vaccinationPatientId: patient?.id,
    };

    try {
      const response = await fetch(
        `http://localhost:8888/api/vaccinations/${patient?.vaccinationId}/doses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newVaccine),
        }
      );
      if (response.ok) {
        console.log("Vaccination record added successfully.");
        setIsEditing(false);
        // Optionally, you can refresh the vaccine list here
      } else {
        console.error("Failed to add vaccination record.");
      }
    } catch (error) {
      console.error("Error adding vaccination record:", error);
    }
  };

  const handleUpdate = async () => {
    const updatedVaccine = {
      vaccinationDate: formData.vaccineDate,
      vaccinationTime: formData.vaccineTime,
      vaccineName: formData.vaccineName,
      vaccinationDose: formData.vaccineDose,
      remark: formData.remarks,
      enteredBy: "admin",
      vaccinationPatientId: patient?.id,
    };

    try {
      const response = await fetch(
        `http://localhost:8888/api/vaccinations/${patient?.vaccinationId}/doses/${vaccines?.doseId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedVaccine),
        }
      );
      if (response.ok) {
        console.log("Vaccination record updated successfully.");
        setIsEditing(false);
        // Optionally, you can refresh the vaccine list here
      } else {
        console.error("Failed to update vaccination record.");
      }
    } catch (error) {
      console.error("Error updating vaccination record:", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      vaccineDate: "",
      vaccineDose: "",
      vaccineTime: "",
      vaccineName: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredVaccines = vaccines.filter((vaccine) =>
    vaccine.vaccineName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <i className="icon-user"></i> Age/Sex: {patient?.age}{" "}
            {patient?.ageUnit} / {patient?.gender}
          </span>
          <span>Date of Birth: {patient?.dateOfBirth}</span>
          <span>Address: {patient?.address}</span>
        </div>

        {/* <div className="PatientVaccinationDetail-fiscalYear">
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
        </div> */}

        <div className="PatientVaccinationDetail-newVaccine">
          <div className="PatientVaccinationDetail-formGroup">
            <label>Vaccine Date</label>
            <input
              type="date"
              name="vaccineDate"
              value={formData?.vaccineDate}
              onChange={handleChange}
            />
            <input
              type="time"
              name="vaccineTime"
              value={formData?.vaccineTime}
              onChange={handleChange}
            />
          </div>
          <div className="PatientVaccinationDetail-formGroup">
            <label>Vaccine Name</label>
            <select
              name="vaccineName"
              value={formData?.vaccineName}
              onChange={handleChange}
            >
              <option value="">--Vaccine--</option>
              {vaccineOptions.map((vaccine) => (
                <option key={vaccine} value={vaccine}>
                  {vaccine}
                </option>
              ))}
            </select>
          </div>
          <div className="PatientVaccinationDetail-formGroup">
            <label>Vaccine Dose</label>
            <select
              name="vaccineDose"
              value={formData?.vaccineDose}
              onChange={handleChange}
            >
              <option value="">--Dose--</option>
              {doses.map((dose) => (
                <option key={dose} value={dose}>
                  {dose}
                </option>
              ))}
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
              className="PatientVaccinationDetail-submitBtn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>

        <div className="PatientVaccinationDetail-vaccinesList">
          <h3>Vaccines list taken by</h3>
          <div className="patientList-search-bar">
            <div className="patientList-search-container">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <i className="fas fa-search"></i>
            </div>
            <div>
              <span className="patientList-results-count">
                Showing {filteredVaccines.length} / {vaccines.length} results{" "}
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
              {filteredVaccines.map((vaccine, index) => (
                <tr key={index}>
                  <td>{vaccine.vaccinationDate}</td>
                  <td>{vaccine.vaccineName}</td>
                  <td>{vaccine.remarks}</td>
                  <td>{vaccine.vaccinationDose}</td>
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
