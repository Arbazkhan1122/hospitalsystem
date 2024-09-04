import React from 'react';
// import './RequisitionDetailsPrint.css';
import "../SSInventory/sSSIInvenReqView.css"

const SSSIInvenReqView = () => {
  return (
    <div className="requisition-details-container">
      {/* <div className="header">
        <div className="logo-title">
          <div className="logo">+</div>
          <div className="title">Sasa Health</div>
        </div>
        <div className="header-info">
          <div>Requisition No: 17</div>
          <div className="contact-info">
            <div>KRA PIN: ;</div>
            <div>Phone No:</div>
            <div>Inventory Unit</div>
          </div>
          <div>Requisition Date: 2024-08-24T19:22:15.657</div>
        </div> 
      </div>*/}

      <div className="requisition-table">
        <div className="table-header">REQUISITION DETAILS PRINT</div>
        <table>
          <thead>
            <tr>
              <th>Item Category</th>
              <th>Item Name</th>
              <th>Code</th>
              <th>Quantity</th>
              <th>Dispatched Qty.</th>
              <th>Pending Qty.</th>
              <th>Received Qty.</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Consumables</td>
              <td>catheter</td>
              <td>0007001</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>active</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="requisition-info">
        <div className="requested-by">
          <strong>Requested By:</strong>
          <div>Mr. admin admin</div>
          <div>Aug 27, 2024, 7:22:15 PM</div>
        </div>
        <div className="verified-by">
          <strong>Verified By:</strong>
          <div>1 Mr. admin admin (Aug 27, 2024, 7:23:00 PM)</div>
        </div>
      </div>

      <div className="status-steps">
        <div className="step completed">Requested</div>
        <div className="step active">Verified(1)</div>
        <div className="step">Dispatched</div>
        <div className="step">Received</div>
      </div>

      <div className="buttons">
        <button className="edit-button">Edit</button>
        <button className="withdraw-button">Withdraw Request</button>
        <button className="print-button">Print</button>
      </div>
    </div>
  );
};

export default SSSIInvenReqView;
