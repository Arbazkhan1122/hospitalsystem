// src/Home.js
import React from 'react';
import './homepage.css'

const Home = () => {

    const tableData = [
        { wardName: 'Brain Ward', occupied: 0, vacant: 1, reserved: 0, total: 1 },
        { wardName: 'Female Ward', occupied: 4, vacant: 2, reserved: 0, total: 6 },
        { wardName: 'ICU', occupied: 1, vacant: 5, reserved: 0, total: 6 },
        { wardName: 'Male Ward', occupied: 5, vacant: 0, reserved: 0, total: 5 },
        { wardName: 'MATERNITY WARD', occupied: 3, vacant: 5, reserved: 0, total: 8 },
        { wardName: 'Private Ward', occupied: 1, vacant: 4, reserved: 0, total: 5 },
        { wardName: 'Total', occupied: 14, vacant: 17, reserved: 0, total: 31 },
      ];
  return (
    <div>
        <div className="dashboard-cards">
        <div className="dashboard-card" style={{ backgroundColor: '#007bff' }}>
          <div className="card-content">
            <span className="card-icon">🛏️</span>
            <div className="card-text">
              <h3>Total No. of Beds</h3>
              <h2>31</h2>
            </div>
          </div>
        </div>
        <div className="dashboard-card" style={{ backgroundColor: '#20c997' }}>
          <div className="card-content">
            <span className="card-icon">🛏️</span>
            <div className="card-text">
              <h3>Available No. of Beds</h3>
              <h2>17</h2>
            </div>
          </div>
        </div>
        <div className="dashboard-card" style={{ backgroundColor: '#fd7e14' }}>
          <div className="card-content">
            <span className="card-icon">🛏️</span>
            <div className="card-text">
              <h3>Occupied No. of Beds</h3>
              <h2>14</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bed-feature-table">
      <div className="table-header">
        <h2>Bed Feature Details</h2>
        <div className="table-actions">
          <button>Print</button>
          <button>Export</button>
        </div>
      </div>
      <table className='adttable'>
        <thead>
          <tr>
            <th className='adttablehead'>Ward Name</th>
            <th className='adttablehead'>Occupied</th>
            <th className='adttablehead'>Vacant</th>
            <th className='adttablehead'> Reserved</th>
            <th className='adttablehead'>Total</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className='adttabledata'>{row.wardName}</td>
              <td className='adttabledata'>{row.occupied}</td>
              <td className='adttabledata'>{row.vacant}</td>
              <td className='adttabledata'>{row.reserved}</td>
              <td className='adttabledata'>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Home;




