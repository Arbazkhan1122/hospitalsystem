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
  const [formData, setFormData] = useState({
    admissionDate: '',
    admissionNotes: '',
    careOfPersonName: '',
    careOfPersonPhone: '',
    depositAmount: '',
    paymentOption: '',
    membership: '',
    priceCategory: '',
    caseType: '',
    requestingDepartment: '',
    price: '',
    depositBalance: '',
    depositRemarks: '',
    careOfPersonRelation: '',
    admissionStatus: '',
    wardDepartmentId: '',
    wardBedFeatureId: '',
    bedId: '',
    admittedDoctorId: '',
    allocatedNurseId: '',
    newPatientVisitId: '',
  });

  // Fetch data from API
  useEffect(() => {
    fetch('http://localhost:1415/api/patients/getAllPatients', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched Patients:', data); // Log the fetched data
        setPatients(data);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
        alert(`Error fetching patient data: ${error.message}`);
      });
  }, []);

  // Pagination logic
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = currentPatients.filter(
    (patient) =>
      patient &&
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAdmit = (patient) => {
    setSelectedPatient(patient);
    setFormData({
      ...formData,
      admissionDate: patient.admissionDate || '',
      admissionNotes: patient.admissionNotes || '',
      careOfPersonName: patient.careOfPersonName || '',
      careOfPersonPhone: patient.careOfPersonPhone || '',
      depositAmount: patient.depositAmount || '',
      paymentOption: patient.paymentOption || '',
      admissionStatus: 'Reserved', // Default status can be adjusted as needed
      patientId: patient.patientId, // Ensure patientId is passed for the admission
    });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const admissionData = {
      ...formData,
      patient: {
        patientId: selectedPatient.patientId,
      },
      // Additional nested objects can be updated based on actual form data needs
    };

    fetch('http://localhost:1415/api/admissions/add-admission-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admissionData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setShowModal(false);
        // Refresh the list after successful admission
        fetch('http://localhost:1415/api/patients/getAllPatients') // Re-fetch data
          .then((response) => response.json())
          .then((data) => setPatients(data))
          .catch((error) => console.error('Error fetching patient data after admission:', error));
      })
      .catch((error) => console.error('Error:', error));
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
            <th className="search-patient-tablehead">Name</th>
            <th className="search-patient-tablehead">Age</th>
            <th className="search-patient-tablehead">Phone</th>
            <th className="search-patient-tablehead">Address</th>
            <th className="search-patient-tablehead">Hospital No</th>
            <th className="search-patient-tablehead">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.length === 0 ? (
            <tr>
              <td colSpan="6">No patients found.</td>
            </tr>
          ) : (
            filteredPatients.map((patient) => (
              <tr key={patient.patientId}>
                <td>{`${patient.firstName} ${patient.middleName || ''} ${patient.lastName}`}</td>
                <td>{patient.age}</td>
                <td>{patient.phoneNumber}</td>
                <td>{patient.address}</td>
                <td>{patient.hospitalNo}</td>
                <td>
                  <button className="admit-button" onClick={() => handleAdmit(patient)}>
                    Admit
                  </button>
                </td>
              </tr>
            ))
          )}
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
          <form>
            <div className="form-group">
              <label>Admission Date:</label>
              <input
                type="date"
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Admission Notes:</label>
              <textarea
                name="admissionNotes"
                value={formData.admissionNotes}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Care Of Person Name:</label>
              <input
                type="text"
                name="careOfPersonName"
                value={formData.careOfPersonName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Care Of Person Phone:</label>
              <input
                type="text"
                name="careOfPersonPhone"
                value={formData.careOfPersonPhone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Deposit Amount:</label>
              <input
                type="number"
                name="depositAmount"
                value={formData.depositAmount}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Payment Option:</label>
              <input
                type="text"
                name="paymentOption"
                value={formData.paymentOption}
                onChange={handleChange}
              />
            </div>
            {/* Additional fields for admission can be added similarly */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Admit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchPatient;
