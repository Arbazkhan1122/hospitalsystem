import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { FaStar, FaListAlt, FaSearch } from 'react-icons/fa';
import './InPatient.css';
import PatientDashboard from './PatientDashboard';
import InPatientPage from './InPatientPage';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showOrders, setShowOrders] = useState(false);
  const [selectedDept, setSelectedDept] = useState('');
  const [filterFavourite, setFilterFavourite] = useState(false);
  const [filterPending, setFilterPending] = useState(false);
  const tableRef = useRef();

  // Fetch patients from the API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:1415/api/new-patient-visits');
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatients();
  }, []);

  // Filtered patients based on selected department and filters
  const filteredPatients = patients
    .filter(patient => (selectedDept ? patient.dept === selectedDept : true))
    .filter(patient => (filterFavourite ? patient.isFavourite : true)) // Add condition for favourites
    .filter(patient => (filterPending ? patient.isPending : true)); // Add condition for pending list

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setShowOrders(false);
  };

  const handleOrdersClick = (patient) => {
    setSelectedPatient(patient);
    setShowOrders(true);
  };

  // Toggle favourite filter
  const toggleFavouriteFilter = () => {
    setFilterFavourite(!filterFavourite);
    setFilterPending(false); // Reset pending filter if needed
  };

  // Toggle pending filter
  const togglePendingFilter = () => {
    setFilterPending(!filterPending);
    setFilterFavourite(false); // Reset favourite filter if needed
  };

  if (showOrders && selectedPatient) {
    return <InPatientPage patient={selectedPatient} />;
  }

  if (selectedPatient && !showOrders) {
    return <PatientDashboard patient={selectedPatient} />;
  }

  return (
    <div className="PatientList">
      <div className="PatientContainer">
        <div className="PatientLeftSection">
          <div className="PatientFilterSection">
            <div className="PatientFilterItem" onClick={toggleFavouriteFilter}>
              <FaStar className={`PatientIcon ${filterFavourite ? 'active' : ''}`} />
              <label>★ My Favourite</label>
            </div>
            <div className="PatientFilterItem" onClick={togglePendingFilter}>
              <FaListAlt className={`PatientIcon ${filterPending ? 'active' : ''}`} />
              <label>Pending List</label>
            </div>
          </div>
        </div>
        <div className="PatientRightSection">
          <div className="PatientSearchBar">
            <select
              className="PatientDepartmentFilter"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="Operation Theatre">Operation Theatre</option>
              <option value="Maternity Ward">Maternity Ward</option>
              <option value="Medicine">Medicine</option>
              <option value="Pathology">Pathology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Gynaecology">Gynaecology</option>
            </select>

            <input type="text" placeholder="Search..." />
            <FaSearch className="PatientSearchIcon" />
          </div>
        </div>
      </div>

      <table ref={tableRef} className="PatientTable">
        <thead>
          <tr>
            <th>Hospital No</th>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Admission Status</th>
            <th>Admitted On</th>
            <th>Ward/Bed</th>
            <th>Department</th>
            <th>Provider Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNo}</td>
              <td>{`${patient.firstName} ${patient.lastName}`}</td>
              <td>{patient.age}/{patient.sex}</td>
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
    </div>
  );
};

export default PatientList;
