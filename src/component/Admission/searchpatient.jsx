import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchpatient.css';
import { FaSearch } from 'react-icons/fa';

const SearchPatient = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Fetch data from the new API
  useEffect(() => {
    fetch('http://192.168.1.39:1415/api/new-patient-visits')
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error('Error fetching patient data:', error));
  }, []);

  // Pagination logic
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = currentPatients.filter(
    (patient) => patient && patient.firstName && patient.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAdmit = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const submitAdmission = async () => {
    if (!selectedPatient) {
      console.error('No patient selected');
      return;
    }

    // Define the admission details
    const admissionDetails = {
      membership: "Premium",
      priceCategory: "Category A",
      caseType: "Emergency",
      requestingDepartment: "Cardiology",
      price: 5000.00,
      admissionDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
      admissionNotes: "Urgent care required",
      careOfPersonName: selectedPatient.careOfPerson,
      careOfPersonPhone: selectedPatient.careOfPersonContact,
      careOfPersonRelation: selectedPatient.relationWithPatient,
      depositBalance: 2000.00,
      depositAmount: 1000.00,
      depositRemarks: "Initial deposit",
      paymentOption: "Cash",
      nhifno: selectedPatient.nhifno || 'N/A',
      admissionStatus: "Reserved",
      address: selectedPatient.address,
      wardDepatment: {
        wardDepartmentId: 2 // Replace with actual ID if needed
      },
      wardBedFeature: {
        wardBedFeatureId: 1 // Replace with actual ID if needed
      },
      manageBed: {
        bedId: 1 // Replace with actual ID if needed
      },
      admittedDoctor: {
        employeeId: 1 // Replace with actual ID if needed
      },
      allocatedNurse: {
        employeeId: 2 // Replace with actual ID if needed
      },
      newPatientVisit: {
        newPatientVisitId: selectedPatient.newPatientVisitId
      },
      patient: {
        patientId: selectedPatient.patientId
      }
    };

    try {
      const response = await fetch('http://localhost:1415/api/admissions/add-admission-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admissionDetails)
      });

      const text = await response.text(); // Get raw text to debug

      console.log('Raw response:', text); // Log raw response for debugging

      try {
        const data = JSON.parse(text); // Attempt to parse JSON
        console.log('Parsed JSON:', data);
        handleClose(); // Close modal after successful admission
      } catch (error) {
        console.error('Failed to parse JSON:', error);
        // Optionally display a user-friendly error message
      }
    } catch (error) {
      console.error('Error adding admission details:', error);
      // Optionally display a user-friendly error message
    }
  };


  return (
    <div className="search-patient-container">
      <h2>Search Patient</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by patient name..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      <table className="patient-table">
        <thead>
          <tr>
            <th className='search-patient-tablehead'>Hospital No</th>
            <th className='search-patient-tablehead'>Name</th>
            <th className='search-patient-tablehead'>Age</th>
            <th className='search-patient-tablehead'>Gender</th>
            <th className='search-patient-tablehead'>Phone</th>
            <th className='search-patient-tablehead'>Address</th>
            <th className='search-patient-tablehead'>Visit Type</th>
            <th className='search-patient-tablehead'>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.newPatientVisitId}>
              <td>{patient.patientQueue?.hospitalNumber || 'N/A'}</td>
              <td>{`${patient.firstName} ${patient.middleName ? patient.middleName + ' ' : ''}${patient.lastName}`}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.phoneNumber}</td>
              <td>{patient.address}</td>
              <td>{patient.visitType}</td>
              <td>
                <button className="admit-button" onClick={() => handleAdmit(patient)}>
                  Admit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(patients.length / patientsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Admit Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admit Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPatient && (
            <form>

              <div className="form-group">
                <label>Patient Name:</label>
                <input type="text" value={`${selectedPatient.firstName} ${selectedPatient.middleName || ''} ${selectedPatient.lastName}`} readOnly />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input type="text" value={selectedPatient.age} readOnly />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <input type="text" value={selectedPatient.gender} readOnly />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input type="text" value={selectedPatient.phoneNumber} readOnly />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input type="text" value={selectedPatient.address} readOnly />
              </div>
              <div className="form-group">
                <label>Visit Type:</label>
                <input type="text" value={selectedPatient.visitType} readOnly />
              </div>
              {/* Add more fields as needed */}
              <Button variant="primary" onClick={submitAdmission}>
                Submit Admission
              </Button>
            </form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchPatient;
