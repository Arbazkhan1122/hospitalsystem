import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../MedicalRec/MRInpatientList.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'

function RecordMedical() {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [loadPatient, setloadPatient] = useState(false);
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [modalMROpen, setModalMROpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    all: true,
    diagnosisAdded: false,
    diagnosisPending: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const [filterOption, setFilterOption] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Fetch patients data from API
  useEffect(() => {
    axios.get('http://localhost:8989/api/mrinpatients/getAllMRInpatients')
      .then(response => {
        setPatients(response.data);
        setFilteredPatients(response.data);
        setTotalPages(Math.ceil(response.data.length / 10)); // Adjust pagination as needed
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFilters((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const openMRModal = (patient) => {
    setSelectedPatient(patient);
    setModalMROpen(true);
  };

  const closeMRModal = () => {
    setModalMROpen(false);
  };

  // Filter data based on date and MR status
  const handleFilterData = () => {
    let filtered = patients;

    if (fromDate && toDate) {
      filtered = filtered.filter(patient =>
        new Date(patient.dischargeDate) >= new Date(fromDate) &&
        new Date(patient.dischargeDate) <= new Date(toDate)
      );
    }

    if (selectedFilters.diagnosisAdded) {
      filtered = filtered.filter(patient => patient.mrStatus === 'Added');
    }

    if (selectedFilters.diagnosisPending) {
      filtered = filtered.filter(patient => patient.mrStatus === 'Pending');
    }

    if (selectedFilters.all) {
      filtered = patients;
    }

    setFilteredPatients(filtered);
    setloadPatient(true);
  };

  const toggleMenu = () => {
    setisMenuVisible(!isMenuVisible);
  };

  // Pagination
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const updatePatientRecord = () => {
    if (!selectedPatient) return;

    axios.put(`http://localhost:8989/api/mrinpatients/${selectedPatient.id}`, {
      icdCode: document.querySelector('.WardTransferModal__input').value,
      isOperationConducted: document.querySelector('#operationConducted').checked ? 'Yes' : 'No',
      // Include other updated patient details here
    })
    .then(response => {
      console.log('Record updated successfully:', response.data);
      closeMRModal();
      // Optionally, refresh patient data or update state here
    })
    .catch(error => console.error('Error updating record:', error));
  };

  return (
    <div className='outer-medical-record'>
      <div className="MRInPatient-tableContainer">
        <h3>Filter by Discharged Date:</h3>
        <div className="MROInPatient-date-filter">
          <label>
            From:
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </label>
          <label>
            To:
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          </label>

          <button style={{ marginLeft: '5px' }}>★</button>
          <button style={{ marginLeft: '5px' }} onClick={toggleMenu}> - </button>
          {isMenuVisible && (
            <ul style={{ marginLeft: '5px', listStyleType: 'none', padding: '5px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
              <li>Last 1 Week</li>
              <li>Last 1 Month</li>
              <li>Last 3 Months</li>
            </ul>
          )}
          <button onClick={handleFilterData} style={{ backgroundColor: '#32c5d2' }}>Load Patients</button>
          {/* <div className='MRIN-diagnosis-filter'>
            <label>
              <input
                type="checkbox"
                name="all"
                checked={selectedFilters.all}
                onChange={handleCheckboxChange}
              />
              All
            </label>
            <label>
              <input
                type="checkbox"
                name="diagnosisAdded"
                checked={selectedFilters.diagnosisAdded}
                onChange={handleCheckboxChange}
              />
              MR Added
            </label>
            <label>
              <input
                type="checkbox"
                name="diagnosisPending"
                checked={selectedFilters.diagnosisPending}
                onChange={handleCheckboxChange}
              />
              MR Pending
            </label>
          </div> */}
        </div>

        {loadPatient && (
          <>
            <div className='MRIn-Patient-Header'>
              <input type='text' placeholder='Search' className='MRIn-Patient-searchInput' />
              <div className="MRIn-Patient-actions">
                <span className="MRIn-Patient-results">{`Showing ${filteredPatients.length} results`}</span>
              </div>
            </div>

            <table className="MRIn-patientsTable">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Adm.Date</th>
                  <th>Dis. Date</th>
                  <th>Patient No.</th>
                  <th>InPatient No.</th>
                  <th>Patient Name</th>
                  <th>Age/Gender</th>
                  <th>Ward</th>
                  <th>Department</th>
                  <th>ICD Code</th>
                  <th>Doctor</th>
                  <th>MR</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (
                  <tr key={index} className="MROut-tableRow">
                    <td>{patient.id}</td>
                    <td>{patient.admissionDate}</td>
                    <td>{patient.dischargeDate}</td>
                    <td>{patient.patientNo}</td>
                    <td>{patient.inpatientNo}</td>
                    <td>{patient.patientName}</td>
                    <td>{`${patient.age} Y/${patient.gender}`}</td>
                    <td>{patient.ward}</td>
                    <td>{patient.department}</td>
                    <td>{patient.icdCode}</td>
                    <td>{patient.doctorName}</td>
                    <td>{patient.mrStatus}</td>
                    <td>
                      <button className="edit-final-diaggnosois" onClick={() => openMRModal(patient)}>Add MR</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="MROut-pagination">
              <button 
                className="MROut-pagination-btn" 
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                First
              </button>
              <button 
                className="MROut-pagination-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="MROut-pagination-info">
                {`Page ${currentPage} of ${totalPages}`}
              </span>
              <button 
                className="MROut-pagination-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
              <button 
                className="MROut-pagination-btn" 
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal for updating medical records */}
      {modalMROpen && selectedPatient && (
        <Modal
          isOpen={modalMROpen}
          onRequestClose={closeMRModal}
          contentLabel="Update Medical Records"
          className="WardTransferModal__content"
          overlayClassName="WardTransferModal__overlay"
        >
          {/* Modal header */}
          <div className="WardTransferModal__header">
            <h2>Update Medical Records</h2>
            <button className="WardTransferModal__closeButton" onClick={closeMRModal}>X</button>
          </div>

          {/* Modal body with form fields */}
          <div className="WardTransferModal__body">
            <form>
              {/* Top information */}
              <div className="WardTransferModal__info">
                <div className="WardTransferModal__infoItem"><strong>Name:</strong> {selectedPatient.patientName}</div>
                <div className="WardTransferModal__infoItem"><strong>Hospital No.:</strong> {selectedPatient.hospitalNo}</div>
                <div className="WardTransferModal__infoItem"><strong>File No.:</strong> <input type="text" value={selectedPatient.fileNo} /></div>
                <div className="WardTransferModal__infoItem"><strong>Age/Sex:</strong> {selectedPatient.age} Y/{selectedPatient.gender}</div>
                <div className="WardTransferModal__infoItem"><strong>InPatient No.:</strong> {selectedPatient.inpatientNo}</div>
                <div className="WardTransferModal__infoItem"><strong>Department:</strong> {selectedPatient.department}</div>
                <div className="WardTransferModal__infoItem"><strong>Doctor Name:</strong> {selectedPatient.doctorName}</div>
                <div className="WardTransferModal__infoItem"><strong>Ward:</strong> {selectedPatient.ward}</div>
                <div className="WardTransferModal__infoItem"><strong>Room Type:</strong> {selectedPatient.roomType}</div>
                <div className="WardTransferModal__infoItem"><strong>Bed No.:</strong> {selectedPatient.bedNo}</div>
                <div className="WardTransferModal__infoItem"><strong>Is Discharge:</strong> {selectedPatient.isDischarge}</div>
              </div>

              {/* Main Form Fields */}
              <div className="WardTransferModal__form">
                <div className="WardTransferModal__formGroup">
                  <label>Diagnosis (ICD-11):</label>
                  <input type="text" className="WardTransferModal__input" placeholder="ICD-11 Codes" defaultValue={selectedPatient.icdCode} />
                </div>
                <div className="WardTransferModal__formGroup">
                  <input type="checkbox" style={{width:'auto'}} id="operationConducted" defaultChecked={selectedPatient.isOperationConducted === 'Yes'} />
                  <label htmlFor="operationConducted">Is Operation Conducted</label>
                </div>
              </div>
            </form>
          </div>

          {/* Modal footer with action buttons */}
          <div className="WardTransferModal__footer">
            <button className="WardTransferModal__cancelButton" onClick={closeMRModal}>Cancel</button>
            <button className="WardTransferModal__updateButton" onClick={updatePatientRecord} type="button">Update Record</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default RecordMedical;
