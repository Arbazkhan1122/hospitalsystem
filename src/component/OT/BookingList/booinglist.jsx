import React, { useState, useEffect } from 'react';
import './bookinglist.css';
import { FaSearch, FaPlus, FaRedo } from 'react-icons/fa';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import moment from 'moment';

function BookingList() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [otDate, setOtDate] = useState('');
  const [otTime, setOtTime] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [procedure, setProcedure] = useState('');
  const [useAnaesthesia, setUseAnaesthesia] = useState(false);
  const [machineName, setMachineName] = useState('');
  const [remarks, setRemarks] = useState('');
  const [otPatientList, setOtPatientList] = useState([]);
  const [patientList, setPatientList] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    const fetchOtBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8888/api/operation-bookings/operation-bookings');
        setOtPatientList(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching OT bookings:', error);
      }
    };
    fetchOtBookings();
  }, []);

  const fetchPatientList = async () => {
    try {
      const response = await axios.get('http://localhost:8888/api/patient-visits');
      setPatientList(Array.isArray(response.data) ? response.data : []);
      setFilteredPatients(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  useEffect(() => {
    fetchPatientList();
  }, []);

  const handleSearchInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setPatientName(searchValue);
    const filtered = patientList.filter((patient) =>
      patient.name.toLowerCase().includes(searchValue)
    );
    setFilteredPatients(filtered);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      patient: { id: filteredPatients.find(p => p.name.toLowerCase() === patientName)?.id || null },
      otDateTime: `${otDate}T${otTime}`,
      diagnosis,
      procedure,
      useAnaesthesia,
      machineName,
      remarks,
      status: 'Scheduled',
    };

    try {
      await axios.post('http://localhost:8888/api/operation-bookings', bookingData);
      alert('Booking added successfully!');
      setPatientName('');
      setOtDate('');
      setOtTime('');
      setDiagnosis('');
      setProcedure('');
      setUseAnaesthesia(false);
      setMachineName('');
      setRemarks('');
      fetchOtBookings(); // Refresh the OT bookings list after adding a new booking
    } catch (error) {
      console.error('Error adding booking:', error);
    }
  };

  return (
    <div className="booking-list">
      <div className="booking-header">
        <button className="btn btn-success" onClick={() => setIsPopupOpen(true)}>
          <FaPlus /> New OT Booking
        </button>
      </div>

      <div className="patient-search-dropdown">
        <input
          type="text"
          placeholder="Search Patient"
          value={patientName}
          onChange={handleSearchInputChange}
          className="search-input"
        />
        <ul className="dropdown-list">
          {filteredPatients.map((patient) => (
            <li key={patient.id} onClick={() => setPatientName(patient.name)}>
              {patient.name}
            </li>
          ))}
        </ul>
      </div>

      <table className="ot-patient-table">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Booked For Date and Time</th>
            <th>Diagnosis</th>
            <th>Anesthesia</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {otPatientList.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.hospitalNo}</td>
              <td>{patient.patient.name}</td>
              <td>{patient.patient.ageSex}</td>
              <td>{moment(patient.otDateTime).format('YYYY-MM-DD HH:mm')}</td>
              <td>{patient.diagnosis}</td>
              <td>{patient.useAnesthesia ? 'Yes' : 'No'}</td>
              <td>{patient.status}</td>
              <td>
                <Button onClick={() => console.log(`Print receipt ${patient.id}`)}>
                  Print
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isPopupOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsPopupOpen(false)}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <div className="patient-search-dropdown">
                <input
                  type="text"
                  placeholder="Search Patient"
                  value={patientName}
                  onChange={handleSearchInputChange}
                  className="search-input"
                />
                <ul className="dropdown-list">
                  {filteredPatients.map((patient) => (
                    <li key={patient.id} onClick={() => setPatientName(patient.name)}>
                      {patient.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <label>OT Date:</label>
                <input type="date" value={otDate} onChange={(e) => setOtDate(e.target.value)} required />
              </div>
              <div>
                <label>OT Time:</label>
                <input type="time" value={otTime} onChange={(e) => setOtTime(e.target.value)} required />
              </div>
              <div>
                <label>Diagnosis:</label>
                <input type="text" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} required />
              </div>
              <div>
                <label>Procedure:</label>
                <input type="text" value={procedure} onChange={(e) => setProcedure(e.target.value)} required />
              </div>
              <div>
                <label>Use Anaesthesia:</label>
                <input
                  type="checkbox"
                  checked={useAnaesthesia}
                  onChange={(e) => setUseAnaesthesia(e.target.checked)}
                />
              </div>
              <div>
                <label>Machine Name:</label>
                <input
                  type="text"
                  value={machineName}
                  onChange={(e) => setMachineName(e.target.value)}
                />
              </div>
              <div>
                <label>Remarks:</label>
                <input
                  type="text"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingList;
