<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "../HhQueueInformation/hhQueueInformation.css";
import { API_BASE_URL } from "../../api/api";

function HHQueueInformation() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("");
  const [selectedDepartmentName, setSelectedDepartmentName] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [selectedDoctorName, setSelectedDoctorName] = useState("");
  const [queueData, setQueueData] = useState(null);

  // Fetch departments on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/departments/getAllDepartments`
        );
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  // Fetch doctors when a department is selected (by departmentId)
  useEffect(() => {
    const fetchDoctors = async () => {
      if (selectedDepartmentId) {
        try {
          const response = await fetch(
            `${API_BASE_URL}/employees/department/${selectedDepartmentId}`
          );
          const data = await response.json();
          setDoctors(data);
        } catch (error) {
          console.error("Error fetching doctors:", error);
        }
      }
    };
    fetchDoctors();
  }, [selectedDepartmentId]);

  // Handle when the "Proceed" button is clicked
  const handleProceed = async () => {
    if (selectedDoctorId && selectedDepartmentName) {
      try {
        const response = await fetch(
          `${API_BASE_URL}/patient-queues/summary?employeeId=${selectedDoctorId}&department=${selectedDepartmentName}`
        );
        const data = await response.json();
        setQueueData(data);
      } catch (error) {
        console.error("Error fetching queue data:", error);
      }
    } else {
      alert("Please select both a department and a doctor.");
    }
  };

  const handleDepartmentChange = (e) => {
    const departmentId = e.target.value;
    const departmentName = e.target.options[e.target.selectedIndex].text;
    setSelectedDepartmentId(departmentId);
    setSelectedDepartmentName(departmentName);
    setDoctors([]);
    setQueueData(null);
  };

  const handleDoctorChange = (e) => {
    const doctorId = e.target.value;
    const doctorName = e.target.options[e.target.selectedIndex].text;
    setSelectedDoctorId(doctorId);
    setSelectedDoctorName(doctorName);
    setQueueData(null);
  };

  return (
    <div className="queueInformation">
      <header className="queueInformation-header">
        <div className="queueInformation-doctor-select">
          <div>
            <span>Department:</span>
            <select
              value={selectedDepartmentId}
              onChange={handleDepartmentChange}
            >
              <option value="" disabled>
                --select--
              </option>
              {departments.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.departmentName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span>Doctor:</span>
            <select
              value={selectedDoctorId}
              onChange={handleDoctorChange}
              disabled={!selectedDepartmentId}
            >
              <option value="" disabled>
                --select--
              </option>
              {doctors.map((doc) => (
                <option key={doc.employeeId} value={doc.employeeId}>
                  {doc.salutation} {doc.firstName} {doc.lastName}
                </option>
              ))}
            </select>
          </div>
          <button
            className="queueInformation-proceed-btn"
            onClick={handleProceed}
          >
            Proceed
          </button>
        </div>
      </header>

      <main>
        <div className="queueInformation-main-div">
          <div className="queueInformation-banner">
            <div className="queueInformation-logo">
              <img src="path-to-logo.png" alt="HIMS" />
              <span>HIMS </span>
            </div>
            <div className="queueInformation-title">Queue Management</div>
          </div>

          <div className="queueInformation-tbl-div">
            <table className="queueInformation-table">
              <thead>
                <tr className="queueInformation-tr">
                  <th>Doctor Name</th>
                  <th>Current Serving</th>
                  <th>Next Patients</th>
                  <th>Upcoming Patients</th>
                </tr>
              </thead>
              <tbody>
                {queueData != null && queueData ? (
                  <>
                    <tr>
                      <td>{selectedDoctorName}</td>
                      <td>
                        {queueData.currentServing?.queueNumber} |{" "}
                        {queueData.currentServing?.name}
                      </td>
                      <td>
                        {queueData.nextPatient
                          ? queueData.nextPatient.queueNumber +
                            " | " +
                            queueData.nextPatient.name
                          : "N/A"}
                      </td>
                      <td>
                        {queueData.upcomingPatients.length > 0
                          ? queueData.upcomingPatients.map((patient, index) => (
                              <div key={index}>{patient.queueNumber}</div>
                            ))
                          : "N/A"}
                      </td>
                    </tr>
                  </>
                ) : (
                  <tr>
                    <td colSpan="4">No data available. Please proceed.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="queueInformation-footer">
        <div className="queueInformation-notice">Notice</div>
        <marquee>• □</marquee>
=======

import React from 'react';
import "../HhQueueInformation/hhQueueInformation.css"

function HHQueueInformation() {
  return (
    <div className="queueInformation">
      <header className="queueInformation-header" >
        <div className="queueInformation-doctor-select">
          <span>Doctor:</span>
          <select defaultValue="">
            <option value="" disabled>--select--</option>
            <option value="" disabled>Dr. Sandeep Vaishya</option>
            <option value="" disabled>Dr Nidhi Rawal</option>
            <option value="" disabled>Dr Atul Mishra</option>
            <option value="" disabled>Dr. Veenu Kaul</option>
            <option value="" disabled>Dr Anand Misra</option>
            <option value="" disabled>Dr jayshree Sharad</option>
            <option value="" disabled>Dr Vinay Samuel Gaikwad</option>
            <option value="" disabled>Dr. Narmada Prasad Gupta</option>
            <option value="" disabled>Dr. Ashok Rajgopal</option>
            <option value="" disabled>Dr Naresh Trehan</option>
            <option value="" disabled>Dr Hitesh Garg</option>
            <option value="" disabled>Dr Ajay Swaroop</option>
            <option value="" disabled>Dr. Arun Saroha</option>
            <option value="" disabled>Dr. Manjinder Sandhu</option>
            <option value="" disabled>Dr. Vivek Vij </option>
            <option value="" disabled>Dr Rahul Bhargava</option>
            <option value="" disabled>Dr. Vinod Raina</option>
            <option value="" disabled>Dr As Bath</option>
            <option value="" disabled>Dr.Rakesh Mahajan</option>
          </select>
          <button className="queueInformation-proceed-btn">Proceed</button>
        </div>
      </header>
      
      <main>
        
        <div className="queueInformation-main-div">
        <div className="queueInformation-banner">
          <div className="queueInformation-logo">
            <img src="path-to-logo.png" alt="HIMS" />
            <span>HIMS </span>
          </div>
          <div className="queueInformation-title">Queue Management</div>
        </div>
        
          <div  className='queueInformation-tbl-div'>
        <table className="queueInformation-table">
          <thead>
            <tr className='queueInformation-tr'>
              <th>Doctor Name</th>
              <th>Current Serving</th>
              <th>Next Patients |</th>
              <th>Upcoming Patients |</th>
            </tr>
          </thead>
          <tbody>
            {/* Table content would go here */}
          </tbody>
        </table>
        </div>
        </div>
      </main>
      
      <footer className="queueInformation-footer">
        <div className="queueInformation-notice">Notice </div>
        {/* <div className="queueInformation-footer-icons"> */}
          <marquee > •   □</marquee>
        {/* </div> */}
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
      </footer>
    </div>
  );
}

export default HHQueueInformation;
<<<<<<< HEAD
=======



>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
