import React from 'react';
import './BedInfo.css';

const WardOccupancy = () => {
  const wardData = [
    { name: 'Brain Ward', occupied: 0, vacant: 1, total: 1 },
    { name: 'Female Ward', occupied: 4, vacant: 2, total: 6 },
    { name: 'ICU', occupied: 1, vacant: 5, total: 6 },
    { name: 'Male Ward', occupied: 4, vacant: 1, total: 5 },
    { name: 'MATERNITY WARD', occupied: 3, vacant: 5, total: 8 },
    { name: 'Private Ward', occupied: 1, vacant: 4, total: 5 },
  ];

  const totals = wardData.reduce(
    (acc, ward) => ({
      occupied: acc.occupied + ward.occupied,
      vacant: acc.vacant + ward.vacant,
      total: acc.total + ward.total,
    }),
    { occupied: 0, vacant: 0, total: 0 }
  );

  return (
    <div className="ward-occupancy">
      <table className="occupancy-table">
        <thead>
          <tr>
            <th>Ward Name</th>
            <th>Occupied</th>
            <th>Vacant</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {wardData.map((ward, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
              <td>{ward.name}</td>
              <td>{ward.occupied}</td>
              <td>{ward.vacant}</td>
              <td>{ward.total}</td>
            </tr>
          ))}
          <tr className="total-row">
            <td>Total</td>
            <td>{totals.occupied}</td>
            <td>{totals.vacant}</td>
            <td>{totals.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WardOccupancy;
