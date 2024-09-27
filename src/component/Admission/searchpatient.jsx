/* // neha-ADT-search-patient-19/09/24 */
import React, { useState, useEffect,useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchpatient.css';
import { FaSearch } from 'react-icons/fa';
import { startResizing } from '../../TableHeadingResizing/ResizableColumns';

const SearchPatient = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);

  // Fetch data from the new API
  useEffect(() => {

    fetch('http://localhost:1415/api/new-patient-visits', {
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


  const filteredPatients = currentPatients.filter((patient) => {
    if (!patient || !patient.firstName) return false; // Ensure patient and firstName exist
    return patient.firstName.toLowerCase().includes(searchTerm.toLowerCase());
  });


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
      <h5>Search Patient</h5>
      <div >
        <input
          type="text"
          placeholder="Search by patient name..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        
      </div>

      <div className='table-container'>
      <table className="patient-table" ref={tableRef}>
        <thead>
          <tr>
         { [
                'Hospital No', 
                'Name', 
                'Age', 
                'Gender', 
                'Phone', 
                'Address', 
                'Visit Type', 
                'Status'
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
                    onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                  ></div>
                </div>
              </th>
            ))}
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
      </div>

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
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
  <Modal.Header closeButton className="adt-septn-admission-header">
    <Modal.Title>Create Admission</Modal.Title>
  </Modal.Header>
  <Modal.Body className="adt-septn-admission-body">
    <div className="adt-septn-admission-form-section" style={{border:"1px solid gray", padding:"10px"}}>
      <div className="adt-septn-admission-row">
        <label>Membership:</label>
        <select className="adt-septn-admission-select">
          <option>General</option>
          <option>Premium</option>
        </select>
      </div>
      <div className="adt-septn-admission-row">
        <label>Price Category:</label>
        <select className="adt-septn-admission-select">
          <option>Normal</option>
          <option>VIP</option>
        </select>
      </div>
    </div>

    {/* Existing Fields */}
    <div className="adt-septn-admission-form-section">
      <div className="adt-septn-admission-row">
        <label>Case:</label>
        <select className="adt-septn-admission-select">
          <option>Select</option>
          <option>Case 1</option>
          <option>Case 2</option>
        </select>
      </div>
      <div className="adt-septn-admission-row">
        <label>Requesting Department:</label>
        <input type="text" className="adt-septn-admission-input" placeholder="Enter Department Name" />
      </div>
    </div>

    <div className="adt-septn-admission-form-section">
      <div className="adt-septn-admission-row">
        <label>Admitting Doctor:</label>
        <input type="text" className="adt-septn-admission-input" placeholder="Enter Doctor Name" />
      </div>
      <div className="adt-septn-admission-row">
        <label>Ward:</label>
        <select className="adt-septn-admission-select">
          <option>Select Ward</option>
        </select>
      </div>
    </div>

    <div className="adt-septn-admission-form-section">
      <div className="adt-septn-admission-row">
        <label>Bed Feature:</label>
        <select className="adt-septn-admission-select">
          <option>Price-0</option>
        </select>
      </div>
      <div className="adt-septn-admission-row">
        <label>Bed:</label>
        <select className="adt-septn-admission-select">
          <option>Select Bed</option>
        </select>
      </div>
    </div>

    {/* New Fields */}
    <div className="adt-septn-admission-form-section">
      <div className="adt-septn-admission-row">
        <label>Admission Date:</label>
        <input type="datetime-local" className="adt-septn-admission-input" />
      </div>
      <div className="adt-septn-admission-row">
        <label>Admission Notes:</label>
        <textarea className="adt-septn-admission-input" placeholder="Admission Notes"></textarea>
      </div>
    </div>

    <div className="adt-septn-admission-form-section">
      <div className="adt-septn-admission-row">
        <label>Care Of Person Name:</label>
        <input type="text" className="adt-septn-admission-input" placeholder="Care Of Person Name" />
      </div>
      <div className="adt-septn-admission-row">
        <label>Care Of Person Phone:</label>
        <input type="text" className="adt-septn-admission-input" placeholder="Care Of Person Phone" />
      </div>
      </div>
      <div className="adt-septn-admission-form-section">
      <div className="adt-septn-admission-row">
        <label>Care Of Person Relation:</label>
        <select className="adt-septn-admission-select">
          <option>Select Relation</option>
          <option>Parent</option>
          <option>Sibling</option>
        </select>
      </div>
      <div className="adt-septn-admission-row">
        <label>Deposit Balance:</label>
        <span className="adt-septn-admission-deposit">Kshs. 0</span>
      </div>
    </div>

    <div className="adt-septn-admission-form-section">
      
      <div className="adt-septn-admission-row">
        <label>Deposit Amount:</label>
        <input type="number" className="adt-septn-admission-input" placeholder="0" />
      </div>
      <div className="adt-septn-admission-row">
        <label>Deposit Remarks:</label>
        <input type="text" className="adt-septn-admission-input" placeholder="Deposit Remark" />
      </div>
    </div>

    <div className="adt-septn-admission-form-section">
      <div className="adt-septn-admission-row">
        <label>Payment Options:</label>
        <select className="adt-septn-admission-select">
          <option>Cash</option>
          <option>Credit</option>
        </select>
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer className="adt-septn-admission-footer">
   
    <Button variant="primary" onClick={handleClose} className='adt-septn-admission-footer-btn'>
      Save Admission
    </Button>
  </Modal.Footer>
</Modal>
    </div>
  );
};

export default SearchPatient;
