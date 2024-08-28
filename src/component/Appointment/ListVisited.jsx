import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, FormControl, InputGroup } from 'react-bootstrap';
import './ListVisited.css';

const ListVisited = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://192.168.1.40:1415/api/appointments');
        setAppointments(response.data); // Assume the data is in response.data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="appointment-list">
      <div className='d-flex' style={{alignItems:"center", justifyContent:"space-between"}}>
        <div>
          <h3>Patient Visit List</h3>
          <p>* Followup is valid up to 10 days of last visit with same doctor</p>
          <p>* Refer is valid up to 7 days of last visit</p>
        </div>
        <div>
          <Button variant="primary">Reload</Button>
        </div>
      </div>
      <div className='d-flex' style={{alignItems:"center", justifyContent:"space-between"}} >
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search (Minimum 3 Character)"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FormControl
            placeholder="Enter Hospital No"
            aria-label="Hospital No"
          />
        </InputGroup>
        <Button variant="primary">Print</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Hospital No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Department</th>
            <th>Doctor</th>
            <th>Visit Type</th>
            <th>Appointment Type</th>
            <th>Day</th>
            <th>Scheme</th>
            <th>Queue</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {appointments
    .filter((appointment) => 
      (appointment.firstName && appointment.firstName.includes(search)) || 
      (appointment.hospitalNo && appointment.hospitalNo.includes(search))
    )
    .map((appointment, index) => (
      <tr key={index}>
        <td>{appointment.appointmentDate}</td>
        <td>{appointment.appointmentTime}</td>
        <td>{appointment.hospitalNo}</td>
        <td>{appointment.firstName}</td>
        <td>{appointment.contactNumber}</td>
        <td>{appointment.age}</td>
        <td>{appointment.department}</td>
        <td>{appointment.doctor}</td>
        <td>{appointment.visitType}</td>
        <td>{appointment.reason}</td>
        <td>{appointment.day}</td>
        <td>{appointment.scheme}</td>
        <td>{appointment.queue}</td>
        <td>
          <Button variant="primary" size="sm">refer</Button>{' '}
          <Button variant="primary" size="sm">followup</Button>{' '}
          <Button variant="primary" size="sm">sticker</Button>
        </td>
      </tr>
    ))}
</tbody>

      </Table>
    </div>
  );
};

export default ListVisited;
