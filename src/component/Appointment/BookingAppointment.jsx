import React, { useState, useEffect, useRef } from 'react';
import './BookingAppointment.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios if you are using it
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const BookingAppointment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:1415/api/appointments/fetch-all-appointment');
        setPatients(response.data);
      } catch (error) {
        setError('Failed to fetch patient data.');
        console.error('Error fetching patient data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter(patient =>
    Object.values(patient).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleNewPatient = () => {
    navigate('/add-new-appointment');
  };

  return (
    <div className="bookAppointment-container">
      <button className="bookAppointment-new-patient-btn" onClick={handleNewPatient}>+ New Patient</button><br></br>

      <div className="bookAppointment-search-bar">
        <input
          type="text"
          placeholder="Search (Minimum 3 Characters)"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="bookAppointment-search-btn">🔍</button>
      </div>
      <div className="bookAppointment-results-info">
        <span>Showing {filteredPatients.length} / {patients.length} results</span>
        <button className="bookAppointment-print-btn">Print</button>
      </div>

      <table className="bookAppointment-patientList-table" ref={tableRef}>
        <thead>
          <tr>
            {[
              "Patient Name",
              "Age/Sex",
              "Address",
              "Phone",
              "Actions"
            ].map((header, index) => (
              <th
                key={index}
                style={{ width: columnWidths[index] }}
                className="bookAppointment-resizable-th"
              >
                <div className="bookAppointment-header-content">
                  <span>{header}</span>
                  <div
                    className="bookAppointment-resizer"
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
          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.firstName}</td>
              <td>{patient.age}</td>
              <td>{patient.address}</td>
              <td>{patient.contactNumber}</td>
              <td>
                <button className="bookAppointment-create-appointment-btn" onClick={handleNewPatient}>Create Appointment</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default BookingAppointment;
