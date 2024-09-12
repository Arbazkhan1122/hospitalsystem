import React, { useState } from 'react';
import './OpdRecordMyFavourite.css';
import PatientDashboard from '../DashBoards/InPatientAction'; 

const OpdRecordMyFavourites = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    { hospitalNo: "2408003819", name: "S Suresh", ageSex: "45 Y/M", visitType: "OUTPATIENT", admittedOn: "today 05:50 AM", performerName: "Mrs. BRENDA MWANIA WANJIRU" },
    { hospitalNo: "2408003819", name: "S Suresh", ageSex: "45 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-13 10:53 AM", performerName: "Mrs. BRENDA MWANIA WANJIRU" },
    { hospitalNo: "2408003819", name: "S Suresh", ageSex: "45 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-13 10:31 AM", performerName: "Mr. KEPHA OPIYO ODINDO" },
    { hospitalNo: "2408003817", name: "Sachin Ramesh", ageSex: "50 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-12 12:00 PM", performerName: "Dr. Pooja Mishra" },
    { hospitalNo: "2408003816", name: "????? ????", ageSex: "33 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-12 01:51 AM", performerName: "Mr. KEPHA OPIYO ODINDO" },
    { hospitalNo: "2408003819", name: "S Suresh", ageSex: "45 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-12 12:47 PM", performerName: "Dr. Pooja Mishra" },
    { hospitalNo: "2408003819", name: "S Suresh", ageSex: "45 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-12 12:45 PM", performerName: "Mr. KEPHA OPIYO ODINDO" },
    { hospitalNo: "2408003818", name: "Datta Badhe", ageSex: "1 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-12 12:07 PM", performerName: "Mrs. BEATRICE WANGAI MUKOLWE" },
    { hospitalNo: "2408003819", name: "S Suresh", ageSex: "45 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-12 09:46 AM", performerName: "Mrs. BRENDA MWANIA WANJIRU" },
    { hospitalNo: "2408003817", name: "Sachin Ramesh", ageSex: "50 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-11 11:40 AM", performerName: "Dr. Pooja Mishra" },
    { hospitalNo: "2408003816", name: "????? ????", ageSex: "33 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-11 11:10 AM", performerName: "Dr. VICTOR OCHIENG OKECH" },
    { hospitalNo: "2408003813", name: "Shankar Patil", ageSex: "4 Y/M", visitType: "OUTPATIENT", admittedOn: "2024-08-11 08:29 AM", performerName: "Mr. COLLINS GIKUNGU MAINA" },
  ];

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient); // Set the selected patient
  };

  const printTable = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 8px; text-align: left; } th { background-color: #f2f2f2; }</style>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(document.querySelector('.patient-list').innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  if (selectedPatient) {
    return <PatientDashboard patient={selectedPatient} />; // Render the PatientDashboard component with selected patient
  }

  return (
    <div className="OpdRec-patient-list">
      <div className="OpdRec-top-buttons">
        <button className="OpdRec-favorites">★ My Favorites</button>
        <button className="OpdRec-follow-up">Follow Up List</button>
      </div>

      <div className="OpdRec-filters">
        <select defaultValue="This Month">
          <option>This Month</option>
        </select>
        <div className="OpdRec-search-bar">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <span className="OpdRec-results">Showing 32 / 32 results</span>
        <button className="OpdRec-print" onClick={printTable}>Print</button>
      </div>

      <table className='opd-record-my-favourite'>
        <thead>
          <tr>
            <th>Hospital No.</th>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>VisitType</th>
            <th>Admitted On</th>
            <th>Performer Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNo}</td>
              <td>{patient.name}</td>
              <td>{patient.ageSex}</td>
              <td>{patient.visitType}</td>
              <td>{patient.admittedOn}</td>
              <td>{patient.performerName}</td>
              <td>
                <button onClick={() => handlePatientClick(patient)}>👤</button>
                <button>📄</button>
                <button>♡</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="OpdRec-paginat">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}
    </div>
  );
};

export default OpdRecordMyFavourites;
