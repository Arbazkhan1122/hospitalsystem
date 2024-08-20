import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, FormControl, InputGroup } from 'react-bootstrap';
import './ListVisited.css';

const appointments = [
  // Populate this array with the appointment data shown in the image
  {
    date: '2024-05-15',
    time: '05:35',
    hospitalNo: '2408003810',
    name: 'hamza waheed',
    phone: '3207642',
    age: '21/M',
    department: 'Pathology',
    doctor: 'Dr. VICTOR OCHIENG',
    visitType: 'outpatient',
    appointmentType: 'New',
    day: 1,
    scheme: 'General',
    queue: 1,
  },
  // Add more data here...
];

const ListVisited = () => {
  const [search, setSearch] = useState('');

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
            .filter((appointment) => appointment.name.includes(search) || appointment.hospitalNo.includes(search))
            .map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.hospitalNo}</td>
                <td>{appointment.name}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.age}</td>
                <td>{appointment.department}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.visitType}</td>
                <td>{appointment.appointmentType}</td>
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
