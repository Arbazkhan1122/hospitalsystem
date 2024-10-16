<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./PatientQueue.css";
import { API_BASE_URL } from "../api/api";
import { startResizing } from "../../TableHeadingResizing/ResizableColumns";
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
/* PatientQueue_Mohini_4/9/2024/ */
import React, { useState,useEffect, useRef } from 'react';
import axios from 'axios';
import './PatientQueue.css';
import { API_BASE_URL } from '../api/api';
import { startResizing } from '../../TableHeadingResizing/ResizableColumns';
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

const PatientQueue = () => {
  const [data, setData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [doctors, setDoctors] = useState([]);
<<<<<<< HEAD
<<<<<<< HEAD
  const [showTable, setShowTable] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all"); // Default status is set to "All"
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [active, isActive] = useState(false);

  // Fetch all doctors
  useEffect(() => {
    fetch(`${API_BASE_URL}/employees/findAllDoctors`)
      .then((response) => response.json())
      .then((data) => {
        const formattedDoctors = data.map((item) => ({
          id: item.employeeId, // Employee ID
          name: `${item.salutation || ""} ${item.firstName || ""} ${
            item.middleName ? item.middleName + " " : ""
          }${item.lastName || ""}`,
        }));
        setDoctors(formattedDoctors);
      })
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  // Fetch queue data for selected doctor
  const handleLoadData = () => {
    if (selectedDoctor) {
      fetch(`${API_BASE_URL}/patient-queues/employee/${selectedDoctor}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setShowTable(true);
        })
        .catch((error) => console.error("Error fetching patient data:", error));
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  const[doctorid,setDoctorid] = useState([])
  const [showTable, setShowTable] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isActive, setIsActive] = useState(false);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/patient-queues`)
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

        fetch(`${API_BASE_URL}/queues/employee/${selectedDoctorId}`)

          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            
            setData(data);
            setShowTable(true);
          })
          .catch((error) => console.error('Error fetching patient data:', error));
      }
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
    } else {
      setShowTable(false);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  // Handle status change (completed, skipped, attend)
  const handleStatusChange = (patientData, newStatus) => {
    let endpoint = "";
    if (newStatus === "completed") {
      endpoint = `${API_BASE_URL}/patient-queues/patient/completed?patientQueueId=${patientData.patientQueueId}`;
    } else if (newStatus === "skipped") {
      endpoint = `${API_BASE_URL}/patient-queues/patient/quit?patientQueueId=${patientData.patientQueueId}`;
    } else if (newStatus === "attend") {
      endpoint = `${API_BASE_URL}/patient-queues/patient/attend?patientQueueId=${patientData.patientQueueId}`;
    }

    axios
      .put(endpoint)
      .then((response) => {
        console.log("API Response:", response.data); // Log response data to verify
        setData((prevData) =>
          prevData.map((item) => {
            if (item.patientQueueId === patientData.patientQueueId) {
              // return updated status, keep the rest intact
              return { ...item, status: newStatus };
            }
            return item; // No change for other items
          })
        );
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  // Filter patients based on the selected status
  const filteredPatients = data.filter((row) => {
    if (selectedStatus === "pending") {
      return row.status === "pending" || row.status === "services";
    } else if (selectedStatus === "completed") {
      return row.status === "completed";
    } else if (selectedStatus === "skipped") {
      return row.status === "quit";
    }
    return true; // Return all patients for "All"
  });
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
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
    axios.put(`${API_BASE_URL}/queues/update/${patientData.patientQueueId}`, updatedData)

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

<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  const handleClick = () => {
    setIsActive(!isActive); // Toggle the active state
  };

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div className="patient-queue-management-container">
      <div className="patient-queue-management-header">
        <header className="queue-management-header">
          <button
            className={`queue-management-header-button ${
              isActive ? "active" : ""
            }`}
            onClick={handleClick}
          >
            OPD
          </button>
        </header>
      </div>

      <div className="queue-management-content">
        <h2 className="queue-management-title">👤 Patient Queue List</h2>

        <div className="queue-management-form-container">
          <div className="queue-management-form-group">
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb


  return (
    <div className="patient-queue-management-container">
      <div className='patient-queue-management-header'>
        <header className="queue-management-header">
        <button
      className={`queue-management-header-button ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      OPD
    </button>
        </header>
      </div>
      <div className="queue-management-content">
        <h2 className="queue-management-title">
          <span role="img" aria-label="user">👤</span> Patient Queue List
        </h2>
        <div className="queue-management-form-container">
        <div className="queue-management-form-group">
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
            <label>Doctor :</label>
            <select
              className="queue-management-select-doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              <option value="">Select Doctor</option>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              {/* Populate doctors list dynamically */}
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
              {/* Populate doctors list dynamically */}
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

          <div className="queue-status-filter">
            <label>
              <input
                type="radio"
                value="all"
                checked={selectedStatus === "all"}
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                value="pending"
                checked={selectedStatus === "pending"}
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
              Pending
            </label>
            <label>
              <input
                type="radio"
                value="completed"
                checked={selectedStatus === "completed"}
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
              Completed
            </label>
            <label>
              <input
                type="radio"
                value="skipped"
                checked={selectedStatus === "skipped"}
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
              Skipped
            </label>
          </div>

=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
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
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
          <button
            className="queue-management-load-data-button"
            onClick={handleLoadData}
          >
            Load Data
          </button>
        </div>

        {showTable && (
          <div className="queue-management-table-section">
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="queue-management-tables-head">
              {selectedStatus} Patients
            </h3>
            <div className="table-container">
              <table className="patientList-table" ref={tableRef}>
                <thead>
                  <tr>
                    {[
                      "Date",
                      "Name",
                      "Phone",
                      "Age",
                      "Department",
                      "Doctor",
                      "Visit Type",
                      "Appt.Type",
                      "Queue.No",
                      "Status",
                      "Actions",
                    ].map((header, index) => (
                      <th
                        key={index}
                        style={{ width: columnWidths[index] }}
                        className="resizable-th"
                      >
                        <div className="header-content">
                          <span>{header}</span>
                          <div
                            className="resizer"
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
                  {filteredPatients.length === 0 ? (
                    <tr>
                      <td colSpan="11" className="queue-management-no-data">
                        No Patients Found
                      </td>
                    </tr>
                  ) : (
                    filteredPatients.map((row, index) => (
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
            <div className="queue-management-search-container">
              <input type="text" placeholder="Search" />
              <button className="queue-management-search-button">🔍</button>
            </div>
            <div className="queue-management-results-info">Showing 0/ 0 results</div>
              
            <div className='table-container'>
            <table className="patientList-table" ref={tableRef}>
        <thead>
          <tr>
            {[
              "Date",
              "Name",
              "Phone",
              "Age",
              "Department",
              "Doctor",
              "Visit Type",
              "Appt.Type",
              "Queue.No",
              "Status",
              "Actions",
            ].map((header, index) => (
              <th
                key={index}
                style={{ width: columnWidths[index] }}
                className="resizable-th"
              >
                <div className="header-content">
                  <span>{header}</span>
                  <div
                    className="resizer"
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
                {filteredData.length === 0? (
                    <tr>
                      <td colSpan="12" className="queue-management-no-data">No Rows To Show</td>
                    </tr>
                  ) : (
                    filteredData.map((row, index) => (
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
                      <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.name}</td>
                        <td>{row.phone}</td>
                        <td>{row.ageSex}</td>
                        <td>{row.department}</td>
<<<<<<< HEAD
<<<<<<< HEAD
                        <td>
                          {row.newPatientVisitDTO?.employeeDTO?.salutation +
                            " " +
                            row.newPatientVisitDTO?.employeeDTO?.firstName +
                            " " +
                            row.newPatientVisitDTO?.employeeDTO?.lastName}
                        </td>
                        <td>{row.visitType}</td>
                        <td>{row.appointmentType}</td>
                        <td>{row.queueNumber}</td>
                        <td>{row.status}</td>
                        <td>
                          {row.status === "pending" && (
                            <>
                              <button
                                className="que-attend-button"
                                onClick={() =>
                                  handleStatusChange(row, "attend")
                                }
                              >
                                Attend
                              </button>
                              <button
                                className="que-skipped-button"
                                onClick={() =>
                                  handleStatusChange(row, "skipped")
                                }
                              >
                                Skipped
                              </button>
                            </>
                          )}
                          {row.status === "serving" && (
                            <button
                              className="que-complete-button"
                              onClick={() =>
                                handleStatusChange(row, "completed")
                              }
                            >
                              Complete
                            </button>
                          )}
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
                        <td>{row.newPatientVisitDTO?.employeeDTO?.salutation+" "+row.newPatientVisitDTO?.employeeDTO?.firstName +" "+ row.newPatientVisitDTO?.employeeDTO?.lastName}</td>
                        <td>{row.visitType}</td>
                        <td>{row.appointmentType}</td>
                        {/* <td>{row.day}</td> */}
                        <td>{row.queueNumber}</td>
                        <td>{row.status}</td>
                        <td>
                        <button  className="que-complete-button" onClick={() => handleStatusChange(row, 'completed')}>Complete</button>
                        <button  className="que-skipped-button" onClick={() => handleStatusChange(row, 'skipped')}>Skipped</button>
<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
<<<<<<< HEAD
<<<<<<< HEAD
            </div>
=======
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
              {/* <div className="queue-management-pagination">
                <span>0 to 0 of 0</span>
                <button className="queue-management-pagination-button">First</button>
                <button className="queue-management-pagination-button">Previous</button>
                <span>Page 0 of 0</span>
                <button className="queue-management-pagination-button">Next</button>
                <button className="queue-management-pagination-button">Last</button>
              </div> */}
            </div>

<<<<<<< HEAD
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientQueue;
<<<<<<< HEAD
<<<<<<< HEAD
=======
/* PatientQueue_Mohini_4/9/2024/css*/
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
=======
/* PatientQueue_Mohini_4/9/2024/css*/
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
