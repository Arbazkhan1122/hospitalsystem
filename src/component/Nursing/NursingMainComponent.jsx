import React, { useState, useEffect } from 'react';
import './NursingMainComponent.css';
import OpdTriagePage from './OpdTriagePage';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OutPatientComponent = () => {
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Discharged Patients');
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1; // Update this according to your data
  const [filterOption, setFilterOption] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Fetch patient data from API
  useEffect(() => {
    fetch('http://localhost:8989/api/patient-visits')
      .then(response => response.json())
      .then(data => setPatients(data))
     
      .catch(error => console.error('Error fetching patient data:', error));
  }, []);
  // console.log(patients);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const openTriAgeModal = () => setIsTriageModalOpen(true);
  const closeTriAgeModal = () => setIsTriageModalOpen(false);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleFilterData = () => {
    // Implement filter logic here
    console.log(`Filtering data from ${fromDate} to ${toDate} with option ${filterOption}`);
  };

  return (
    <>
      <div className="out-patient-container">
        <button 
          className={`inpatient-component-tab ${activeTab === 'Today' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Today')}
        >
          Today
        </button>
        <button 
          className={`inpatient-component-tab ${activeTab === 'Past Days' ? 'active' : ''}`} 
          onClick={() => handleTabClick('Past Days')}
        >
          Past Days
        </button>

        {activeTab === 'Today' && (
          <>               
            <div className="search-and-filter">
              <input
                type="text"
                className="search-input"
                placeholder="Hospital No/Patient Name/Department Name"
              />
              
              <input type="text" className="department-input" placeholder="Department Name" />
            </div>
            <div className="nurse-action-buttons">
            <button className="Actions-btn Actions-consumption" onClick={openTriAgeModal}>Triage</button>
              <button className="nurse-action-button">Check In</button>
              <button className="nurse-action-button">Refer</button>
              <button className="nurse-action-button">Exchange Doc/Dept</button>
              <button className="nurse-action-button">Conclude</button>
            </div>
            <table className="patients-table">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Time</th>
                  <th>Hospital No.</th>
                  <th>Patient Name</th>
                  <th>Age/Sex</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Doctor</th>
                  <th>Scheme</th>
                  <th>Visit Status</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" id="triageCheckbox" />
                    </td>
                    <td>{patient.time}</td>
                    <td>{patient.hospitalNo}</td>
                    <td>{patient.patientName}</td>
                    <td>{patient.ageSex}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.department}</td>
                    <td>{patient.doctor}</td>
                    <td>{patient.scheme}</td>
                    <td>{patient.visitStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeTab === 'Past Days' && (
          <>
            <div className="OutPatient_PastDays-tableContainer">
              <div className="filter-options">
                <label>
                  <input
                    type="radio"
                    value="All"
                    checked={filterOption === 'All'}
                    onChange={handleFilterChange}
                  />
                  All
                </label>
                <label>
                  <input
                    type="radio"
                    value="Triage Done"
                    checked={filterOption === 'Triage Done'}
                    onChange={handleFilterChange}
                  />
                  Triage Done
                </label>
                <label>
                  <input
                    type="radio"
                    value="Triage Pending"
                    checked={filterOption === 'Triage Pending'}
                    onChange={handleFilterChange}
                  />
                  Triage Pending
                </label>
              </div>

              <div className="date-filter">
                <label>
                  From:
                  <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label>
                  To:
                  <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </label>
                <button onClick={handleFilterData}>OK</button>
              </div>
              <div className='OutPatient_PastDays-Header'>
                <input type='text' placeholder='Search' className='OutPatient_PastDays-searchInput'/>
                <div className="OutPatient_PastDays-actions">
                  <span className="OutPatient_PastDays-results">Showing 0/0 results</span>
                  <button className="OutPatient_PastDays-button">Export</button>
                  <button className="OutPatient_PastDays-button">Print</button>
                </div>
              </div>
              <table className="OutPatient_PastDays-patientsTable">
                <thead>
                  <tr>
                    <th>Date &#x2193;</th>
                    <th>Time</th>
                    <th>Hospital Number</th>
                    <th>Patient Name</th>
                    <th>Age/Sex</th>
                    <th>Phone Number</th>
                    <th>Doctor Name</th>
                    <th>Appointment Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index} className="OutPatient_PastDays-tableRow">
                      <td>{patient.date}</td>
                      <td>{patient.time}</td>
                      <td>{patient.hospitalNo}</td>
                      <td>{patient.patientName}</td>
                      <td>{patient.ageSex}</td>
                      <td>{patient.phone}</td>
                      <td>{patient.doctor}</td>
                      <td>{patient.scheme}</td>
                      <td>
                        <div className="Actions-actions">
                          <button className="Actions-btn Actions-consumption" onClick={openTriAgeModal}>Add Triage</button>
                          <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                          <button className="Actions-btn Actions-transfer">Clinical</button>
                          <button className="Actions-btn Actions-vitals">&#x21E7;</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="OutPatient_PastDays-pagination">
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                First
              </button>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="OutPatient_PastDays-pagination-info">
                {`Page ${currentPage} of ${totalPages}`}
              </span>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
              <button 
                className="OutPatient_PastDays-pagination-btn" 
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
            </div>
          </>
        )}

        {showPopup && (
          <div className="popup">
            <div className="popup-inner">
              <h2>Triage Options</h2>
              <button className="close-btn" onClick={() => setShowPopup(false)}>X</button>
              <div className="action-buttons">
                <button className="popup-button">Vitals</button>
                <button className="popup-button">Doctor Handover</button>
                <button className="popup-button">Clinical Notes</button>
                <button className="popup-button">Conclude</button>
              </div>
            </div>
          </div>
        )}

        {isTriageModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <OpdTriagePage closeModal={closeTriAgeModal} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OutPatientComponent;
