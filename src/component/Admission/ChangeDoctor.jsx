import React, { useEffect, useState } from "react";
import "./changeDoctor.css";
import { API_BASE_URL } from "../api/api";
import axios from "axios";
function ChangeDoctor({ patient, setShowOptionWindow }) {
  const [formData, setFormData] = useState({
    requestingDepartment: "-ALL-",
    admittedDoctor: 0,
  });
  const [departments, setDepartments] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const fetchDepartments = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/departments/getAllDepartments`
      );
      const data = await response.json();
      setDepartments(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };
  useEffect(() => {
    fetchDepartments();
    fetchAllDoctorList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value == "-ALL-") {
      setDoctors([]);
      fetchAllDoctorList();
    }
    if (name == "requestingDepartment" && value != "-ALL-") {
      setSelectedDepartment(value);
    }
  };

  const fetchAllDoctorList = () => {
    fetch(`${API_BASE_URL}/employees/findAllDoctors`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((items) => {
        setDoctorList(items);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      if (selectedDepartment) {
        try {
          const response = await fetch(
            `${API_BASE_URL}/employees/department/${selectedDepartment}`
          );
          const data = await response.json();
          setDoctors(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching admitting doctors:", error);
        }
      }
    };
    fetchDoctors();
  }, [selectedDepartment]);

  const handleSubmit = async () => {
    if (formData.admittedDoctor == 0) {
      return;
    }
    try {
      let baseUrl = `${API_BASE_URL}/admissions/${patient.admissionId}/update-doctor/${formData.admittedDoctor}`;
      if (formData.requestingDepartment != "-ALL-") {
        baseUrl = `${API_BASE_URL}/admissions/${patient.admissionId}/update-doctor/${formData.admittedDoctor}?requestingDepartment=${formData.requestingDepartment}`;
      }
      const response = await axios.put(baseUrl);
      if (response.status === 200) {
        console.log("Doctor Changed Successfully");
        setShowOptionWindow(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="changeDoctorContainer">
      <h2>Change Doctor</h2>
      <hr />
      <div className="changeDoctorPatientData">
        <p>
          {patient.patientDTO?.firstName} {patient.patientDTO?.middleName}{" "}
          {patient.patientDTO?.lastName} ({patient.patientDTO?.patientId})
        </p>
      </div>
      <div className="changeDoctorPreviousDoctorData">
        <p>
          <span>Department : </span>{" "}
          <span>{patient?.requestingDepartment}</span>
        </p>
        <p>
          <span>Current Doctor : </span>{" "}
          <span>
            {patient.admittedDoctorDTO?.salutation}{" "}
            {patient.admittedDoctorDTO?.firstName}{" "}
            {patient.admittedDoctorDTO?.lastName}
          </span>
        </p>
      </div>
      <div className="changeDoctorNewDataUpdate">
        <label>
          Department
          <select name="requestingDepartment" onChange={handleChange}>
            <option value="-ALL-">--ALL--</option>
            {departments != null &&
              departments.map((department) => (
                <option
                  key={department.departmentId}
                  value={department.departmentId}
                >
                  {department.departmentName}
                </option>
              ))}
          </select>
        </label>
        <label>
          Doctor
          <select name="admittedDoctor" onChange={handleChange}>
            <option value="">Select Doctor</option>
            {(doctors.length > 0 ? doctors : doctorList).map((doctor) => (
              <option key={doctor.employeeId} value={doctor.employeeId}>
                {doctor.salutation} {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleSubmit} className="changeDoctorBTN">
        Change
      </button>
    </div>
  );
}

export default ChangeDoctor;
