<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchpatient.css";
import { FaSearch } from "react-icons/fa";
import { startResizing } from "../../TableHeadingResizing/ResizableColumns";
import { API_BASE_URL } from "../api/api";
import AdmissionForm from "./AdmissionForm";

const SearchPatient = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchpatient.css';
import { FaSearch } from 'react-icons/fa';
import { startResizing } from '../../TableHeadingResizing/ResizableColumns';
import { API_BASE_URL } from '../api/api';
import AdmissionForm from './AdmissionForm';

const SearchPatient = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);
<<<<<<< HEAD
<<<<<<< HEAD
  const [admitted, setAdmitted] = useState([]);

=======
  const [admitted,setAdmitted] = useState([]);
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
  const [admitted,setAdmitted] = useState([]);
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  const [admittedPatientsMap, setAdmittedPatientsMap] = useState({}); // To store admission status

  // Fetch data from the new API
  useEffect(() => {
    fetch(`${API_BASE_URL}/patients/getAllPatients`, {
<<<<<<< HEAD
<<<<<<< HEAD
      method: "GET",
      headers: {
        "Content-Type": "application/json",
=======
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log("Fetched Patients:", data); // Log the fetched data
        setPatients(data);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);

=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
        console.log('Fetched Patients:', data); // Log the fetched data
        setPatients(data);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
        // alert(`Error fetching patient data: ${error.message}`);
      });
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    fetch(`${API_BASE_URL}/admissions/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAdmitted(data);
        mapAdmittedPatients(data);
      })
      .catch((error) => console.error("failed to fetch"));
  }, [showModal]);
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

  useEffect(()=>{
    fetch(`${API_BASE_URL}/admissions/fetch`,{
      method:'GET',
      headers :
      {
        'Content-Type':"application/json",
      },
    })
    .then((response)=>response.json())
    .then((data)=>{    
      setAdmitted(data);
      mapAdmittedPatients(data);
    })
    .catch((error)=>console.error("failed to fetch")
    )
  },[showModal])
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

  // Pagination logic
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
<<<<<<< HEAD
<<<<<<< HEAD
  const currentPatients = patients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );
=======
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  const filteredPatients = currentPatients.filter((patient) => {
    if (!patient || !patient.firstName) return false; // Ensure patient and firstName exist
    return patient.firstName.toLowerCase().includes(searchTerm.toLowerCase());
  });

<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAdmit = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const mapAdmittedPatients = (admittedPatients) => {
    const admittedMap = {};
    admittedPatients.forEach((admittedPatient) => {
      admittedMap[admittedPatient.patientDTO.patientId] = true; // Mark admitted patients
    });
    setAdmittedPatientsMap(admittedMap); // Store the map
  };

  const handleClose = () => setShowModal(false);

  const submitAdmission = async () => {
    if (!selectedPatient) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("No patient selected");
=======
      console.error('No patient selected');
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
      console.error('No patient selected');
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
      return;
    }

    // Define the admission details
<<<<<<< HEAD
<<<<<<< HEAD

    const admissionDetails = {};

    try {
      const response = await fetch(
        `${API_BASE_URL}/admissions/add-admission-details`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(admissionDetails),
        }
      );

      const text = await response.text(); // Get raw text to debug

      console.log("Raw response:", text); // Log raw response for debugging

      try {
        const data = JSON.parse(text); // Attempt to parse JSON
        console.log("Parsed JSON:", data);
        handleClose(); // Close modal after successful admission
      } catch (error) {
        console.error("Failed to parse JSON:", error);
      }
    } catch (error) {
      console.error("Error adding admission details:", error);
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
    const admissionDetails = {
    };

    try {
      const response = await fetch(`${API_BASE_URL}/admissions/add-admission-details`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admissionDetails),
      });

      const text = await response.text(); // Get raw text to debug

      console.log('Raw response:', text); // Log raw response for debugging

      try {
        const data = JSON.parse(text); // Attempt to parse JSON
        console.log('Parsed JSON:', data);
        handleClose(); // Close modal after successful admission
      } catch (error) {
        console.error('Failed to parse JSON:', error);
      }
    } catch (error) {
      console.error('Error adding admission details:', error);
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
    }
  };

  return (
    <div className="search-patient-container">
      {showModal ? (
        <>
          <AdmissionForm patient={selectedPatient} onClose={handleClose} />
        </>
      ) : (
        <>
          <h5>Search Patient</h5>
          <div>
            <input
              type="text"
              placeholder="Search by patient name..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>

          <div className="table-container">
            <table className="patient-table" ref={tableRef}>
              <thead>
                <tr>
<<<<<<< HEAD
<<<<<<< HEAD
                  {[
                    "Patient Id",
                    "Name",
                    "Age",
                    "Gender",
                    "Phone",
                    "Address",
                    "Visit Type",
                    "Status",
                  ].map((header, index) => (
                    <th
                      key={index}
                      style={{ width: columnWidths[index] }}
                      className="rd-resizable-th"
                    >
                      <div className="rd-header-content">
                        <span>{header}</span>
                        <div
                          className="rd-resizer"
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
                {patients
                  ?.filter((patient) => {
                    const searchLowerCase = searchTerm.toLowerCase();
                    const firstNameMatch = patient.firstName
                      ?.toLowerCase()
                      .includes(searchLowerCase);
                    const lastNameMatch = patient.lastName
                      ?.toLowerCase()
                      .includes(searchLowerCase);
                    const patientIdMatch = patient.patientId == searchTerm;

                    return firstNameMatch || lastNameMatch || patientIdMatch;
                  })
                  .map((patient) => (
                    <tr key={patient.patientId}>
                      <td>{patient.patientId || "N/A"}</td>
                      <td>
                        {`${patient.firstName} ${
                          patient.middleName ? patient.middleName + " " : ""
                        }${patient.lastName}`}
                      </td>
                      <td>{patient.age}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.phoneNumber}</td>
                      <td>{patient.address}</td>
                      <td>{patient.isIPD ? "InPatient" : ""}</td>
                      <td>
                        {admittedPatientsMap[patient.patientId] ? (
                          <span className="Addmitted-btn">Admitted</span> // Display if admitted
                        ) : (
                          <button onClick={() => handleAdmit(patient)}>
                            Admit
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
                  {['Hospital No', 'Name', 'Age', 'Gender', 'Phone', 'Address', 'Visit Type', 'Status'].map(
                    (header, index) => (
                      <th
                        key={index}
                        style={{ width: columnWidths[index] }}
                        className="rd-resizable-th"
                      >
                        <div className="rd-header-content">
                          <span>{header}</span>
                          <div
                            className="rd-resizer"
                            onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                          ></div>
                        </div>
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.patientId}>
                    <td>{patient.patientId || 'N/A'}</td>
                    <td>
                      {`${patient.firstName} ${patient.middleName ? patient.middleName + ' ' : ''}${
                        patient.lastName
                      }`}
                    </td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.phoneNumber}</td>
                    <td>{patient.address}</td>
                    <td>{patient.visitType}</td>
                    <td>
                  {admittedPatientsMap[patient.patientId] ? (
                    <span className='Addmitted-btn'>Admitted</span> // Display if admitted
                  ) : (
                    <button onClick={() => handleAdmit(patient)}>Admit</button>
                  )}
                </td>
                  </tr>
                ))}
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {/* <div className="pagination">
            {Array.from({ length: Math.ceil(patients.length / patientsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div> */}
        </>
      )}
    </div>
  );
};

export default SearchPatient;
