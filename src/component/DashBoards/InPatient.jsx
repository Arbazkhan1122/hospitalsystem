import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './InPatient.css';
import PatientDashboard from '../DashBoards/InPatientAction';
import InPatientPage from '../DashBoards/InPatientPage'; // Import the InPatientPage component

const PatientList = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showOrders, setShowOrders] = useState(false); // State to track if orders should be shown
  const tableRef = useRef();

  const patients = [
    { hospitalNo: "2407003799", name: "ANGEL VARGAS M...", ageSex: "32 Y/F", admissionStatus: "admitted", admittedOn: "July 30th 2024, 11:06:00 am", wardBed: "006-02", dept: "Operation Thetre", providerName: "Dr. VICTOR OCHIENG OKECH" },
    { hospitalNo: "2407003800", name: "NORALINE SHIT P...", ageSex: "30 Y/F", admissionStatus: "admitted", admittedOn: "July 30th 2024, 9:37:00 am", wardBed: "MATERNITY-006", dept: "Maternity Ward", providerName: "Dr. Emmanuel Bassy" },

    { hospitalNo: "2407003799", name: "ANGEL VARGAS M...", ageSex: "32 Y/F", admissionStatus: "admitted", admittedOn: "July 30th 2024, 11:06:00 am", wardBed: "006-02", dept: "Operation Thetre", providerName: "Dr. VICTOR OCHIENG OKECH" },
    { hospitalNo: "2407003800", name: "NORALINE SHIT P...", ageSex: "30 Y/F", admissionStatus: "admitted", admittedOn: "July 30th 2024, 9:37:00 am", wardBed: "MATERNITY-006", dept: "Maternity Ward", providerName: "Dr. Emmanuel Bassy" },
    { hospitalNo: "2406003781", name: "Nancy Wahome", ageSex: "78 Y/F", admissionStatus: "admitted", admittedOn: "June 24th 2024, 12:04:00 pm", wardBed: "MATERNITY-0500", dept: "Medicine", providerName: "Mr. COLLINS KIPKEMEI" },
    { hospitalNo: "2406003766", name: "Joseph Gathanga", ageSex: "16 Y/M", admissionStatus: "admitted", admittedOn: "June 18th 2024, 12:50:00 pm", wardBed: "007-09", dept: "Operation Thetre", providerName: "Mrs. BRENDA MWANIA WANJI..." },
    { hospitalNo: "2406003772", name: "Katherine Wanjiku", ageSex: "45 Y/F", admissionStatus: "admitted", admittedOn: "June 18th 2024, 12:18:00 pm", wardBed: "Female Ward-002", dept: "Pathology", providerName: "Dr. VICTOR OCHIENG OKECH" },
    { hospitalNo: "2406003769", name: "Joy Prudence", ageSex: "23 Y/F", admissionStatus: "admitted", admittedOn: "June 18th 2024, 12:16:00 pm", wardBed: "Female Ward-001", dept: "Medicine", providerName: "Dr. VICTOR OCHIENG OKECH" },
    { hospitalNo: "2406003730", name: "Ravi Singh", ageSex: "35 Y/M", admissionStatus: "admitted", admittedOn: "June 16th 2024, 10:39:00 pm", wardBed: "Male Ward-004", dept: "Cardiology", providerName: "Dr. pooja Mishra" },
    { hospitalNo: "2406003720", name: "Yvette Kenaan", ageSex: "56 Y/F", admissionStatus: "admitted", admittedOn: "June 13th 2024, 4:15:00 pm", wardBed: "Female Ward-004", dept: "Operation Thetre", providerName: "Mrs. BRENDA MWANIA WANJI..." },
    { hospitalNo: "2406003723", name: "Taimi Jayde", ageSex: "23 Y/F", admissionStatus: "admitted", admittedOn: "June 13th 2024, 4:14:00 pm", wardBed: "MATERNITY-MAT001", dept: "Medicine", providerName: "Mr. COLLINS KIPKEMEI" },
    { hospitalNo: "2406003726", name: "Maddalen Maimu", ageSex: "65 Y/M", admissionStatus: "admitted", admittedOn: "June 13th 2024, 4:13:00 pm", wardBed: "Male Ward-002", dept: "Medicine", providerName: "Dr. Amit Shah" },
    { hospitalNo: "2406003703", name: "Stocazzo Coidenti", ageSex: "40 Y/F", admissionStatus: "admitted", admittedOn: "June 10th 2024, 2:31:00 pm", wardBed: "Female Ward-005", dept: "Gynaecology", providerName: "Prof. Dr. Hannah Benta" },
    { hospitalNo: "2402003692", name: "LUCY Ndolo", ageSex: "24 Y/F", admissionStatus: "admitted", admittedOn: "May 17th 2024, 9:44:00 pm", wardBed: "Male Ward-003", dept: "Medicine", providerName: "INNOCENT TENGO" },
    { hospitalNo: "2402000028", name: "Joseph Stalin", ageSex: "34 Y/M", admissionStatus: "admitted", admittedOn: "March 1st 2024, 8:19:00 am", wardBed: "Male Ward-005", dept: "Medicine", providerName: "INNOCENT TENGO" },
  ];


  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setShowOrders(false); // Reset the showOrders state
  };

  const handleOrdersClick = (patient) => {
    setSelectedPatient(patient);
    setShowOrders(true); // Set showOrders to true when 📄 is clicked
  };

  if (showOrders && selectedPatient) {
    return <InPatientPage patient={selectedPatient} />; // Show the orders page
  }

  if (selectedPatient && !showOrders) {
    return <PatientDashboard patient={selectedPatient} />;
  }

  return (
    <div className="patient-list">
      {/* Top bar and search bar code... */}
      <table ref={tableRef}>
        <thead>
          <tr>
            {/* Table headers */}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNo}</td>
              <td>{patient.name}</td>
              <td>{patient.ageSex}</td>
              <td>{patient.admissionStatus}</td>
              <td>{patient.admittedOn}</td>
              <td>{patient.wardBed}</td>
              <td>{patient.dept}</td>
              <td>{patient.providerName}</td>
              <td>
                <button onClick={() => handlePatientClick(patient)}>👤</button>
                <button>🔔</button>
                <button>🖼</button>
                <button onClick={() => handleOrdersClick(patient)}>📄</button>
                <button>♥</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination code... */}
    </div>
  );
};

export default PatientList;
