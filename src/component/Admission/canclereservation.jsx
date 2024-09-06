// src/CancelBedReservation.js
import React, { useState } from 'react';
import { Modal, Button,Table } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './canclereservation.css'; 

const CancelReservation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePrint = () => {
    window.print();
  };

  // Dummy data
  const data = [
    { hospitalNo: '001', name: 'John Doe', ageSex: '30/M', phone: '123-456-7890', address: '123 Main St', wardBed: 'Ward 1/Bed 5' },
    { hospitalNo: '002', name: 'Jane Smith', ageSex: '25/F', phone: '987-654-3210', address: '456 Elm St', wardBed: 'Ward 2/Bed 8' },
    // Add more dummy data as needed
  ];

  // Filter data based on search term
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">
      
      {/* <h1>Cancel Bed Reservation</h1> */}
     <div className='canclereservation' style={{display:"flex",justifyContent:"space-between"}}>
     <div>
      <input
          type="text"
        
         
          placeholder="Search ....."
          style={{width:"500px"}}
          className="cancle-reservation-search-input"
        />
          <button className='icon-btn'> <FaSearch style={{ color: 'gray', fontSize: '18px' }} /></button>
        </div>
      
      <button className="print-button" onClick={handlePrint}>Print</button>
     </div>
      <table className='canclereservationtable'>
        <thead>
          <tr className='canclehead'>
            <th className='canclehead'>Hospital No</th>
            <th class="bg-gray">Patient Name</th>
            <th className='canclehead'>Age/Sex</th>
            <th className='canclehead'>Phone</th>
            <th className='canclehead'>Address</th>
            <th className='canclehead'>Ward/Bed</th>
            <th className='canclehead'>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className='cancledata'>{item.hospitalNo}</td>
              <td className='cancledata'>{item.name}</td>
              <td className='cancledata'>{item.ageSex}</td>
              <td className='cancledata'>{item.phone}</td>
              <td className='cancledata'>{item.address}</td>
              <td className='cancledata'>{item.wardBed}</td>
              <td className='cancledata'>
                <button className='cancledatabtn'>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="employee-pagination">
        <Button>First</Button>
        <Button>Previous</Button>
        <span>Page 1 of 4</span>
        <Button>Next</Button>
        <Button>Last</Button>
      </div>
      
    </div>
  );
};

export default CancelReservation;
