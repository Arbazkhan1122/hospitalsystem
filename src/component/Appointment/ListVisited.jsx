import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, FormControl, InputGroup } from 'react-bootstrap';
import './ListVisited.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const ListVisited = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState('');
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://192.168.42.16:1415/api/new-patient-visits');
        setAppointments(response.data); // Assume the data is in response.data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="appointment-list">
      <div className='d-flex' style={{alignItems:"center", justifyContent:"space-between"}}>
        <div>
          <h5>Patient Visit List</h5>
          <p>* Followup is valid up to 10 days of last visit with same doctor</p>
          <p>* Refer is valid up to 7 days of last visit</p>
        </div>
        
         
       
      </div>

      
      <div className='appointment-visited-d-flex'  >
      
      <div className="appointment-visited-search-bar">
        <input 
          type="text" 
          placeholder="Search (Atleast 3 characters)" 
          value={search}
          onChange={handleSearchChange} 
        />
         <Button className='reload-button'>Reload</Button>
      </div>
        <Button variant="primary">Print</Button>
       
      </div><br></br>
      <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Date",
                "Time",
                "Patient No",
                "Name",
                "Phone",
                "Age",
                "Department",
                "Doctor",
                "Visit Type",
                "Day",
                "Scheme",
                "Queue",
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
  {appointments
    .filter((appointment) => 
    
      (appointment.firstName.toLowerCase().includes(search.toLowerCase())) || 
      (appointment.newPatientVisitId.toString().includes(search))
    )
    .map((appointment, index) => (
      <tr key={index}>
        <td>{appointment.visitDate}</td>
        <td>{appointment.visitTime}</td>
        <td>{appointment.newPatientVisitId}</td>
        <td>{appointment.firstName} {appointment.middleName} {appointment.lastName}</td>
        <td>{appointment.phoneNumber}</td>
        <td>{appointment.age} / {appointment.gender}</td>
        <td>{appointment?.patientQueue?.department}</td>
        <td>{appointment?.employeeDTO?.salutation} {appointment?.employeeDTO?.firstName} {appointment?.employeeDTO?.lastName}</td>
        <td>{appointment.visitType}</td>
       
        <td>{appointment.day}</td>
        <td>{appointment.scheme}</td>
        <td>{appointment?.patientQueue?.patientQueueId}</td>
        <td>
          <Button variant="primary" size="sm">refer</Button>{' '}
          <Button variant="primary" size="sm">followup</Button>{' '}
          <Button variant="primary" size="sm">sticker</Button>
        </td>
      </tr>
    ))}
</tbody>

      </table>
    </div>
  );
};

export default ListVisited;
