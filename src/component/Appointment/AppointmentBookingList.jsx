import React, { useEffect, useState,useRef } from 'react';
import './AppointmentBookingList.css';
import { Link } from 'react-router-dom';
import { startResizing } from '../TableHeadingResizing/resizableColumns';
import { API_BASE_URL } from '../api/api';

const AppointmentBookingList = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [newPatientVisit,setnewPatientVisit]=useState([]);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);


  useEffect(() => {
    fetch(`${API_BASE_URL}/appointments/fetch-all-appointment`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');

        }
        
        return response.json();
        
      })
      .then(data => setAppointments(data))
     
      .catch(error => setError(error.message));

      
  }, []);

  useEffect(()=>{
    fetch(`${API_BASE_URL}/new-patient-visits`)
    .then(response=>{
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(items=>{
     
      setnewPatientVisit(items)
      console.log(items[0].employeeDTO.firstName);
      

    })
    .catch(error => setError(error.message));
  },[]);



  const renderAppointments = () => {
    if (appointments.length === 0) {
      return (
        <tr>
          <td colSpan="9">No appointments found</td>
        </tr>
      );
    }

    return appointments.map((appointment, index) => (
      <tr key={index}>
        <td className={`appointments__status--${appointment.status}`}>Initiated</td>
        <td>{appointment.appointmentDate}</td>
        <td>{appointment.appointmentTime}</td>
        <td>{appointment.appointmentId}</td>
        <td>{`${appointment.firstName} ${appointment.middleName} ${appointment.lastName}`}</td>
        <td>{appointment.contactNumber}</td>
        <td>{`${newPatientVisit[index]?.employeeDTO?.salutation}${newPatientVisit[index]?.employeeDTO?.firstName}${newPatientVisit[index]?.employeeDTO?.lastName}`}</td>
        <td>{appointment.visitType}</td>
        <td>
          <button className="appointments__action-btn">
            <Link to="/checkIn">Check-In</Link>
          </button>
          <button className="appointments__action-btn">Cancel</button>
          <button className="appointments__action-btn">Edit</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="appointments__container">
      {error && <p className="appointments__error">Error: {error}</p>}

      <div className="appointments__filter-section">
        <div className="appointments__filter-group">
          <label>Doctor <span className="appointments__required">*</span></label>
          <select className="appointments__dropdown">
            <option>All Doctors</option>
          </select>
        </div>
        <div className="appointments__filter-group">
          <label>Visit Type <span className="appointments__required">*</span></label>
          <select className="appointments__dropdown">
            <option>All</option>
          </select>
        </div>
        <div className="appointments__filter-group">
          <label>From Date <span className="appointments__required">*</span></label>
          <input className="appointments__date-picker" type="date" />
        </div>
        <div className="appointments__filter-group">
          <label>To Date <span className="appointments__required">*</span></label>
          <input className="appointments__date-picker" type="date" />
        </div>
        <button className="appointments__show-patient-btn">Show Patient</button>
      </div>

      <div className="appointments__upcoming-appointments">
        <h3 className="appointments__title">Upcoming Appointments</h3>
        <div className="appointments__search-bar">
          <input className="appointments__search-input" type="text" placeholder="Search" />
          <button className="appointments__search-btn">🔍</button>
        </div>

        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Status",
                "Date",
                "Time",
                "Appointment ID",
                "Name",
                "Phone",
                "Doctor",
                "Visit Type",
                "Actions"
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
            {renderAppointments()}
          </tbody>
        </table>

        {/* <div className="appointments__pagination-section">
          <p>Showing {appointments.length} / {appointments.length} results</p>
          <div className="appointments__pagination-buttons">
            <button>First</button>
            <button>Previous</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div> */}

        <div className="appointments__summary-report">
          <h3 className="appointments__summary-title">Summary Report</h3>
          <table className="appointments__summary-table">
            <tbody>
              <tr>
                <td>Total Patients</td>
                <td>{appointments.length}</td>
              </tr>
              <tr>
                <td>New Patients</td>
                <td>{appointments.filter(app => app.visitType === 'New Patient').length}</td>
              </tr>
              <tr>
                <td>Follow-Up Patients</td>
                <td>{appointments.filter(app => app.visitType === 'Follow-Up').length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookingList;
