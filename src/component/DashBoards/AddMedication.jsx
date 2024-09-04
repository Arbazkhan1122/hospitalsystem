import React from 'react';
import './LabsActiveOrder.css';

const OrdersPage = () => {
  const activeOrders = [
    { type: 'Medication', name: 'ACECLOFENAC + PARACETAMOL TABS 3 times a day', startDate: '13.08.2024', status: 'active' },
    { type: 'Medication', name: 'DEXTROSE 5% IN NORMAL SALINE 500ML 2 times a day', startDate: '13.08.2024', status: 'active' },
    { type: 'Medication', name: 'Sodium Chloride (Normal Saline) 0.9% 500Ml 1 times a day', startDate: '13.08.2024', status: 'active' },
    { type: 'Medication', name: 'Hydralazine Hydrochloride Injection & 20Mg/Ml 1 times a day', startDate: '13.08.2024', status: 'active' },
  ];

  
  return (
    <div className="orders-page">
      <div className="active-orders">
        <h2><i className="icon-location"></i> Active Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activeOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.type}</td>
                <td>{order.name} Start Date- {order.startDate}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="print-medication">Print Medication</button>
      </div>
      <div className="new-orders">
        <h2><i className="icon-plus"></i> New Orders</h2>
        <div className="new-order-controls">
          <select defaultValue="">
            <option value="" disabled>Select an option</option>
            {/* Add options here */}
          </select>
          <div className="search-container">
            <input type="text" placeholder="search order items" />
            <button className="search-button"><i className="icon-search"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;