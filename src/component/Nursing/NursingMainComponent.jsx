import React, { useState } from 'react';
import './NursingMainComponent.css';
import OpdTriagePage from './OpdTriagePage';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OutPatientComponent = () => {
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Discharged Patients');
  const navigate = useNavigate();
  const handleTabClick = (tabName) => {
      setActiveTab(tabName);
     
  };
  const [showPopup, setShowPopup] = useState(false);

  const openTriAgeModal = () => setIsTriageModalOpen(true);
  const closeTriAgeModal = () => setIsTriageModalOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1; // Update this according to your data

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [filterOption, setFilterOption] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');



  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleFilterData = () => {
    // Implement filter logic here
    console.log(`Filtering data from ${fromDate} to ${toDate} with option ${filterOption}`);
  };

  const [patients, setPatients] = useState([
    {
      sn: 1,
      time: '12:55 PM',
      hospitalNo: '2406003742',
      patientName: 'Norah Wambui',
      ageSex: '34Y/F',
      phone: '0783462752',
      department: 'Pathology',
      doctor: 'Dr. VICTOR OCHIENG OKECH',
      scheme: 'General',
      visitStatus: 'checkedin',
    },
    {
      sn: 2,
      time: '01:48 PM',
      hospitalNo: '2408003811',
      patientName: 'Sasi Rajavu',
      ageSex: '42Y/M',
      phone: '8745965215',
      department: 'Cardiology',
      doctor: 'Dr. Pooja Mishra',
      scheme: 'General',
      visitStatus: 'initiated',
    },
    {
      sn: 3,
      time: '01:55 PM',
      hospitalNo: '2408003810',
      patientName: 'Hamza Waheed',
      ageSex: '21Y/M',
      phone: '3207642712',
      department: 'Pathology',
      doctor: 'Dr. VICTOR OCHIENG OKECH',
      scheme: 'General',
      visitStatus: 'initiated',
    },
  ]);

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

            {
              activeTab==='Today' && (
                <>               
                 <div className="search-and-filter">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Hospital No/Patient Name/Department Name"
                />
                <button className="search-button">🔍</button>
                <input type="text" className="department-input" placeholder="Department Name" />
              </div>
              <div className="action-buttons">
                <button className="action-button" onClick={()=>setShowPopup(true)}>Triage</button>
                <button className="action-button">Check In</button>
                <button className="action-button">Refer</button>
                <button className="action-button">Exchange Doc/Dept</button>
                <button className="action-button">Conclude</button>
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
            {patients.map((patient) => (
              <tr key={patient.sn}>
                <td>
                  <input
                    type="checkbox"
                    id="triageCheckbox"
                  />
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

              )
            }      
            {/* Today Completed */}

  {
    activeTab==='Past Days'  && (

                <>
  <div className="OutPatient_PastDays-tableContainer">

     {/* Filter Options */}
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

              {/* Date Range Filter */}
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
          <th> Date &#x2193;</th>
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
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
        <tr className="OutPatient_PastDays-tableRow">
          <td>2024-08-13T00:00:00</td>
          <td>10:31 AM</td>
          <td>2408003819</td>
          <td>S Suresh</td>
          <td>45Y/M</td>
          <td>3456789021</td>
          <td>Mrs Prachi</td>
          <td>New</td>
          <div className="Actions-actions">
                      <button className="Actions-btn Actions-consumption">Add Triage</button>
                      <button className="Actions-btn Actions-wardRequest">&#x1F5A5;</button>
                      <button className="Actions-btn Actions-transfer">Clinical</button>
                      <button className="Actions-btn Actions-vitals">&#x21E7;</button>
          </div>
        </tr>
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

                
              )
            }

       

{showPopup && <OpdTriagePage onClose={() => setShowPopup(false)} />}

       
      </div>
      {/* {isTriageModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeTriAgeModal}>
              Close
            </button>
            <OpdTriagePage />
          </div>
        </div>
      )} */}
    </>
  );
};

export default OutPatientComponent;
