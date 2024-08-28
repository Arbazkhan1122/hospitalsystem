import React, { useState } from "react";
import './PaymentComponent.css';

function PaymentComponent({ patient }) {
  const [paymentReturn, setPaymentReturn] = useState(false);
  const [paidAmount, setPaidAmount] = useState("");
  const [inWords, setInWords] = useState("");
  const [remarks, setRemarks] = useState("");
  const [paymentHistory, setPaymentHistory] = useState([
    {
      type: 'MaternityAllowance',
      date: '2024-08-13',
      amount: '1000',
      user: 'Mr. admin admin',
      remarks: 'sdfghjkl'
    },
    {
      type: 'MaternityAllowanceReturn',
      date: '2024-08-13',
      amount: '1000',
      user: 'Mr. admin admin',
      remarks: 'fdghjkl'
    }
  ]);

  if (!patient) return null; // Ensure there's a patient object before rendering

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      type: paymentReturn ? 'MaternityAllowanceReturn' : 'MaternityAllowance',
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      amount: paidAmount,
      user: 'Mr. admin admin', // This should be dynamic based on the logged-in user
      remarks
    };

    setPaymentHistory([newEntry, ...paymentHistory]);
    // Clear the form fields
    setPaidAmount("");
    setInWords("");
    setRemarks("");
  };

  return (
    <div className="maternity-patient-list">
      <h2 className="maternity-title">Patient List</h2>
      <div>
        <div className="patient-mat">
          <h3 className="maternity-titles">Maternity Allowance Payment</h3>
        </div>
        <div className="mternity-patient-info">
          <span><strong>Patient: Philip Juma</strong></span>
          <span><strong>Age/Sex: 34Y / Male</strong></span>
          <span><strong>Hospital No: 2406003702</strong></span>
          <span><strong>Discharge On: 2024-08-12</strong></span>
        </div>
      </div>
      <div className="maternity-payment-form">
        <form onSubmit={handleSubmit}>
          <div className="maternity-payment-details">
            <label className="maternity-form-label">
              Payment Return?:
              <input 
                type="checkbox" 
                checked={paymentReturn}
                onChange={(e) => setPaymentReturn(e.target.checked)}
                className="maternity-form-input"
              />
            </label>
            <div className="maternity-form-row">
              <label className="maternity-form-label">
                {paymentReturn ? 'Return Amount:' : 'Paid Amount:'}
                <select 
                  className="maternity-form-select"
                  value={paidAmount}
                  onChange={(e) => setPaidAmount(e.target.value)}
                >
                  <option value="">--Select Amount--</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  {/* Add other options here */}
                </select>
              </label>
            </div>
            <div className="maternity-form-row">
              <label className="maternity-form-label">
                In Words:
                <input 
                  type="text" 
                  value={inWords}
                  onChange={(e) => setInWords(e.target.value)}
                  placeholder="In Words" 
                />
              </label>
            </div>
            <div className="maternity-form-row">
              <label className="maternity-form-label">
                Remarks:
                <textarea 
                  className="maternity-form-textarea" 
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Remarks"
                ></textarea>
              </label>
            </div>
            <div className="maternity-form-actions">
              <button type="submit" className="maternity-button-proceed">Proceed</button>
              <button type="button" className="maternity-button-discard">Discard</button>
            </div>
          </div>
        </form>
      </div>
      <div className="maternity-payment-history">
        <h3 className="maternity-titles">Payment History</h3>
        <div className="mat-search-bar">
          <input type="text" placeholder="Search" className="maternity-form-input"/>
          <span className="pay-span">Showing {paymentHistory.length} / {paymentHistory.length} results</span>
        </div>
        <table className="maternity-table">
          <thead>
            <tr>
              <th className="maternity-table-header">Type</th>
              <th className="maternity-table-header">Date</th>
              <th className="maternity-table-header">Amount</th>
              <th className="maternity-table-header">User</th>
              <th className="maternity-table-header">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((entry, index) => (
              <tr key={index}>
                <td className="maternity-table-cell">{entry.type}</td>
                <td className="maternity-table-cell">{entry.date}</td>
                <td className="maternity-table-cell">{entry.amount}</td>
                <td className="maternity-table-cell">{entry.user}</td>
                <td className="maternity-table-cell">{entry.remarks}</td>
              </tr>
            ))}
          </tbody>
          <div className="mat-pagination">
  {/* <span className="pagination-info">1 to {paymentHistory.length} of {paymentHistory.length}</span> */}
  <div className="mat-pagination-buttons">
    <button className="pagination-button">First</button>
    <button className="pagination-button">Previous</button>
    <span className="pagination-page-info">Page 1 of 1</span>
    <button className="pagination-button">Next</button>
    <button className="pagination-button">Last</button>
  </div>
</div>

        </table>
       
      </div>
    </div>
  );
}

export default PaymentComponent;
