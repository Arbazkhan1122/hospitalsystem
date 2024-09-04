import React from 'react';
import './ImagingAdd.css';

const ImagingAdd = ({ onClose }) => {
  const orders = [
    { type: 'Medication', name: 'ACECLOFENAC + PARACETAMOL TABS', frequency: '3 times a day', startDate: '13.08.2024', status: 'active' },
    { type: 'Medication', name: 'DEXTROSE 5% IN NORMAL SALINE 500ML', frequency: '2 times a day', startDate: '13.08.2024', status: 'active' },
    { type: 'Medication', name: 'Sodium Chloride (Normal Saline) 0.9% 500Ml', frequency: '1 times a day', startDate: '13.08.2024', status: 'active' },
    { type: 'Medication', name: 'Hydralazine Hydrochloride Injection & 20Mg/Ml', frequency: '1 times a day', startDate: '13.08.2024', status: 'active' },
  ];

  return (
    <div className="imaging-add-container">
      <button className="close-button" onClick={onClose}>❌</button> 
      <div className="active-orders">
        <h2><i className="icon-bulb"></i> Active Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.type}</td>
                <td>{order.name} {order.frequency} Start Date- {order.startDate}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="print-btn">Print Medication</button>
      </div>
      <div className="new-orders">
        <h2>+ New Orders</h2>
        <div className="search-container">
          <select>
            <option value="" disabled selected>-------</option>
          </select>
          <input type="text" placeholder="search order items" />
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </div>
  );
};

export default ImagingAdd;
