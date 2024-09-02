import React, { useState, useEffect } from 'react';
import './MaternityList.css';
import NewPatientRegistrationForm from './NewPatientRegistrationForm';

const MaternityList = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patient data from the API
    fetch('http://localhost:1415/api/patients/fetch-all-patient-registration')
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching patient data:', error));
  }, []);

  const handleClearButtonClick = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="maternity-component">
      <div className="maternity-list">
        <div className="matern-content">
          <div className="matern-edit-info">
            <span>Edit Information Of</span>
            <input
              type="text"
              placeholder="Existing Patient Name"
              onClick={handleInputClick}
            />
            <a href="#" className="matern-view-all">View all Maternity Patients</a>
          </div>

          <div className="mater-date-range">
            <label>From:</label>
            <input type="date" value="2024-08-13" />
            <label>To:</label>
            <input type="date" value="2024-08-13" />
            <button className="mater-star-btn">☆</button>
            <button className="mater-clear-button" onClick={handleClearButtonClick}>-</button>
            {isPopupVisible && (
              <div className="mater-popup">
                <ul>
                  <li><button>Today</button></li>
                  <li><button>Last 1 Week</button></li>
                  <li><button>Last 1 Month</button></li>
                  <li><button>Last 3 Months</button></li>
                </ul>
              </div>
            )}
            <button className="mater-ok-btn" style={{ marginLeft: '10px' }}>OK</button>
          </div>

          <div className="mater-search-bar">
            <input type="text" placeholder="Search" />
          </div>

          <div className="mater-results">
            <span className="mater-span">Showing {patients.length} / {patients.length} results</span>
            <button className="mater-print-btn" onClick={handlePrint}>Print</button>
          </div>

          <div className="maternity-table">
            <table className="mater-table">
              <thead>
                <tr>
                  <th className="mater-hosp-col">Hosp No</th>
                  <th className="mater-name-col">Name</th>
                  <th className="mater-age-col">Age/Sex</th>
                  <th className="mater-address-col">Address</th>
                  <th className="mater-phone-col">Phone No</th>
                  <th className="mater-husband-col">Husband's Name</th>
                  <th className="mater-h-col">Ht</th>
                  <th className="mater-w-col">Wt</th>
                  <th className="mater-lmp-col">LMP</th>
                  <th className="mater-edd-col">EDD</th>
                
                </tr>
              </thead>
              <tbody>
                {patients.length > 0 ? (
                  patients.map((patient) => (
                    <tr key={patient.id}>
                      <td className="mater-hosp-col">{patient.id}</td>
                      <td className="mater-name-col">{patient.firstName} {patient.middleName} {patient.lastName}</td>
                      <td className="mater-age-col">{patient.age}</td>
                      <td className="mater-address-col">{patient.address}</td>
                      <td className="mater-phone-col">{patient.contactNumber}</td>
                      <td className="mater-husband-col">{patient.husbandName}</td>
                      <td className="mater-h-col">{patient.patientHeight} cm</td>
                      <td className="mater-w-col">{patient.patientWeight} kg</td>
                      <td className="mater-lmp-col">{patient.lastMenstruationDate}</td>
                      <td className="mater-edd-col">{patient.expectedDeliveryDate}</td>
                      {/* <td className="mater-action-col">
                        <button className="mater-edit-btn">Edit</button>
                        <button className="mater-delete-btn">Delete</button>
                      </td> */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className="mater-no-rows">No Rows To Show</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="maternity-pagination">
              <span>{patients.length} to {patients.length} of {patients.length}</span>
              <button>First</button>
              <button>Previous</button>
              <span>Page 1 of 1</span>
              <button>Next</button>
              <button>Last</button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <NewPatientRegistrationForm onClose={handleCloseModal} />}
    </div>
  );
};

export default MaternityList;
