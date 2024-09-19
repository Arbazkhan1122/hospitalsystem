import React, { useState, useEffect } from 'react';
import "../HhWardInformation/hhWardInformation.css";

function HHWardInformation() {
  const [wardData, setWardData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("http://192.168.1.34:1415/api/ward-department/getAllWardDepartment")
      .then(response => response.json())
      .then(data => setWardData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const calculateTotals = () => {
    return wardData.reduce((totals, ward) => {
      totals.occupied += ward.occupied;
      totals.vacant += ward.vacant;
      totals.reserved += ward.reserved;
      totals.total += ward.numberOfBeds;
      return totals;
    }, { occupied: 0, vacant: 0, reserved: 0, total: 0 });
  };

  const totals = calculateTotals();

  return (
    <div className="wardInformation-container">
      <div className="wardInformation-heading-N-print-btn">
      <div className="wardInformation-heading">
        <h3>List Of Wards:</h3>
      </div>
      
      <div className="wardInformation-button-container">
        <button className="wardInformation-print-btn" onClick={handlePrint}>
          <i className="fa-solid fa-print"></i> Print
        </button>
      </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Ward Name</th>
            <th>Occupied</th>
            <th>Vacant</th>
            <th>Reserved</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {wardData.map((ward, index) => (
            <tr key={index}>
              <td className='wardInformation-wardNameColumn'>{ward.wardName}</td>
              <td>{ward.occupied}</td>
              <td>{ward.vacant}</td>
              <td>{ward.reserved}</td>
              <td>{ward.numberOfBeds}</td>
            </tr>
          ))}
          <tr className="wardInformation-total-row">
            <td>Total</td>
            <td>{totals.occupied}</td>
            <td>{totals.vacant}</td>
            <td>{totals.reserved}</td>
            <td>{totals.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HHWardInformation;
