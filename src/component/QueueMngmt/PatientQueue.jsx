/* PatientQueue_Mohini_4/9/2024/ */
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './PatientQueue.css';

const PatientQueue = () => {
  const [data, setData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [doctors, setDoctors] = useState([]);
  const[doctorid,setDoctorid] = useState([])
  const [showTable, setShowTable] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    fetch('http://localhost:1415/api/patient-queues')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        // Assuming the API returns an array of doctors with 'salutation', 'firstname', and 'lastname' fields
       const formattedDoctors = data.map((item) => ({
  id: item.newPatientVisitDTO?.employeeDTO?.employeeId, // Employee ID
  name: `${item.newPatientVisitDTO?.employeeDTO?.salutation || ''} ${item.newPatientVisitDTO?.employeeDTO?.firstName || ''} ${item.newPatientVisitDTO?.employeeDTO?.middleName ? item.newPatientVisitDTO?.employeeDTO?.middleName + ' ' : ''}${item.newPatientVisitDTO?.employeeDTO?.lastName || ''}`,
}));

        setDoctors(formattedDoctors);
      })
      .catch((error) => console.error('Error fetching doctors:', error));
  }, []);
console.log(selectedDoctor);

  const handleLoadData = () => {
    if (selectedDoctor) {
      const selectedDoctorId = selectedDoctor; // Now this is the employeeId

      if (selectedDoctorId) {
        fetch(`http://localhost:1415/api/queues/employee/${selectedDoctorId}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            
            setData(data);
            setShowTable(true);
          })
          .catch((error) => console.error('Error fetching patient data:', error));
      }
    } else {
      setShowTable(false);
    }
  };

  const filteredData = data
  .filter((row) => 
    (selectedStatus === 'all' || row.status === selectedStatus) 
  );

  const handleStatusChange = (patientData, newStatus) => {
    const updatedData = {
      ...patientData,
      status: newStatus, // Set the new status
    };

    // Make a PUT request to update the status
    axios.put(`http://localhost:1415/api/queues/update/${patientData.patientQueueId}`, updatedData)
      .then((response) => {
        console.log('Data updated successfully', response.data);
        // Update the local state to reflect the changes
        setData((prevData) =>
          prevData.map((item) =>
            item.patientQueueId === patientData.patientQueueId ? { ...item, status: newStatus } : item
          )
        );
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };



  return (
    <div className="patient-queue-management-container">
      <div className='patient-queue-management-header'>
        <header className="queue-management-header">
          <button className="queue-management-header-button">OPD</button>
        </header>
      </div>
      <div className="queue-management-content">
        <h2 className="queue-management-title">
          <span role="img" aria-label="user">👤</span> Patient Queue List
        </h2>
        <div className="queue-management-form-container">
        <div className="queue-management-form-group">
            <label>Doctor :</label>
            <select
              className="queue-management-select-doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              <option value="">Select Doctor</option>
              {/* Populate doctors list dynamically */}
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
           <div className="queue-management-form-group status-group">
            <label>Status :</label>
            <div className="queue-management-status-options">
              <input 
                type="radio" 
                id="all" 
                name="status" 
                checked={selectedStatus === 'all'}
                onChange={() => setSelectedStatus('all')}
              />
              <label htmlFor="all">All</label>
              <input 
                type="radio" 
                id="pending" 
                name="status" 
                checked={selectedStatus === 'pending'}
                onChange={() => setSelectedStatus('pending')}
              />
              <label htmlFor="pending">Pending</label>
              <input 
                type="radio" 
                id="completed" 
                name="status" 
                checked={selectedStatus === 'completed'}
                onChange={() => setSelectedStatus('completed')}
              />
              <label htmlFor="completed">Completed</label>
              <input 
                type="radio" 
                id="skipped" 
                name="status" 
                checked={selectedStatus === 'skipped'}
                onChange={() => setSelectedStatus('skipped')}
              />
              <label htmlFor="skipped">Skipped</label>
            </div>
          </div>
          <button
            className="queue-management-load-data-button"
            onClick={handleLoadData}
          >
            Load Data
          </button>
        </div>

        {showTable && (
          <div className="queue-management-table-section">
            <div className="queue-management-search-container">
              <input type="text" placeholder="Search" />
              <button className="queue-management-search-button">🔍</button>
            </div>
            <div className="queue-management-results-info">Showing 0/ 0 results</div>
              
            <div className='queue-management-table-wrapper'>
              <table className='queue-managemnt-table'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Doctor</th>
                    <th>Visit Type</th>
                    <th>Appt. Type</th>
                    {/* <th>Day</th> */}
                    <th>Queue No.</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {filteredData.length === 0? (
                    <tr>
                      <td colSpan="12" className="queue-management-no-data">No Rows To Show</td>
                    </tr>
                  ) : (
                    filteredData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.name}</td>
                        <td>{row.phone}</td>
                        <td>{row.ageSex}</td>
                        <td>{row.department}</td>
                        <td>{row.newPatientVisitDTO?.employeeDTO?.salutation+" "+row.newPatientVisitDTO?.employeeDTO?.firstName +" "+ row.newPatientVisitDTO?.employeeDTO?.lastName}</td>
                        <td>{row.visitType}</td>
                        <td>{row.appointmentType}</td>
                        {/* <td>{row.day}</td> */}
                        <td>{row.queueNumber}</td>
                        <td>{row.status}</td>
                        <td>
                        <button  className="que-complete-button" onClick={() => handleStatusChange(row, 'completed')}>Complete</button>
                        <button  className="que-skipped-button" onClick={() => handleStatusChange(row, 'skipped')}>Skipped</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {/* <div className="queue-management-pagination">
                <span>0 to 0 of 0</span>
                <button className="queue-management-pagination-button">First</button>
                <button className="queue-management-pagination-button">Previous</button>
                <span>Page 0 of 0</span>
                <button className="queue-management-pagination-button">Next</button>
                <button className="queue-management-pagination-button">Last</button>
              </div> */}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default PatientQueue;
/* PatientQueue_Mohini_4/9/2024/css*/
