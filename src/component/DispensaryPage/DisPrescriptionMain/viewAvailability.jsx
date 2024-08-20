import React from 'react';
import "../DisPrescriptionMain/viewAvailability.css"
const PrescriptionDetails = ({ prescription, onClose }) => {
  return (
    <div className="prescription-container">
      <div className="header">
        <img src="your-logo-url" alt="Logo" className="logo" />
        <div className="viewAvailability-close-button" onClick={onClose}>x</div>
      </div>

      <div className="info">
        <div className="left">
          <p>KRA PIN:</p>
          <p>Phone No:</p>
          <p>Hospital Code: <span>{prescription.code}</span></p>
          <p>Patient Name: <span>{prescription.patientName}</span></p>
        </div>
        <div className="right">
          <p>Pharmacy Unit</p>
          <p>Requested By: <span>{prescription.requestedBy}</span></p>
          <p>Date: <span>{prescription.date}</span></p>
        </div>
      </div>

      <div className="prescription-details">
        <h3>PRESCRIPTION DETAILS</h3>
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Item Name</th>
              <th>Frequency</th>
              <th>Days</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>DEXTROSE 5% IN NORMAL SALINE 500ML</td>
              <td>2</td>
              <td>1</td>
              <td className="availability">YES</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sodium Chloride (Normal Saline) 0.9% 500ML</td>
              <td>1</td>
              <td>1</td>
              <td className="availability">YES</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Hydralazine Hydrochloride Injection & 20Mg/MI</td>
              <td>1</td>
              <td>1</td>
              <td className="availability">YES</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="buttons">
        <button className="print-button">Print</button>
        <button className="dispatch-button">Dispatch</button>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
