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
    hospitalNumber: '',
    name: '',
    admissionDate: '',
    admissionNotes: '',
    careOfPersonName: '',
    careOfPersonPhone: '',
    depositAmount: '',
    paymentOption: '',
  });

  // Fetch data from API
  useEffect(() => {
    fetch('http://localhost:1415/api/patients/getAllPatients')
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
    (patient) => patient && patient.patientDTO && patient.patientDTO.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAdmit = (patient) => {
    setSelectedPatient(patient);
    setFormData({
      hospitalNumber: patient.patientDTO.hospitalNo || '',
      name: `${patient.patientDTO.firstName} ${patient.patientDTO.middleName || ''} ${patient.patientDTO.lastName}`.trim(),
      admissionDate: patient.admissionDate || '',
      admissionNotes: patient.admissionNotes || '',
      careOfPersonName: patient.careOfPersonName || '',
      careOfPersonPhone: patient.careOfPersonPhone || '',
      depositAmount: patient.depositAmount || '',
      paymentOption: patient.paymentOption || '',
    });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Replace with your backend endpoint for saving/updating data
    const endpoint = selectedPatient ? `/update-endpoint/${selectedPatient.admissionId}` : '/add-endpoint';
    const method = selectedPatient ? 'PUT' : 'POST';

    fetch(`http://localhost:1415/api/admissions${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setShowModal(false);
        // Refresh the list
        fetch('http://localhost:1415/api/admissions/fetch')
          .then((response) => response.json())
          .then((data) => setPatients(data))
          .catch((error) => console.error('Error fetching patient data:', error));
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
            <th className="search-patient-tablehead">Hospital No</th>
            <th className="search-patient-tablehead">Name</th>
            <th className="search-patient-tablehead">Age</th>
            <th className="search-patient-tablehead">Phone</th>
            <th className="search-patient-tablehead">Address</th>
            <th className="search-patient-tablehead">NHIF No</th>
            <th className="search-patient-tablehead">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.admissionId}>
              <td>{patient.patientDTO.hospitalNo}</td>
              <td>{`${patient.patientDTO.firstName} ${patient.patientDTO.middleName || ''} ${patient.patientDTO.lastName}`}</td>
              <td>{patient.patientDTO.age}</td>
              <td>{patient.patientDTO.phoneNumber}</td>
              <td>{patient.patientDTO.address}</td>
              <td>{patient.nhifno}</td>
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
          <form>
            <div className="form-group">
              <label>Hospital Number:</label>
              <input
                type="text"
                name="hospitalNumber"
                value={formData.hospitalNumber}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Patient Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} readOnly />
            </div>
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
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
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
