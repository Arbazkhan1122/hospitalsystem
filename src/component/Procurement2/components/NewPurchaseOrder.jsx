import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Procurement.css';

const Table = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const printTable = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<style>'); // Inline styles for the print preview
    printWindow.document.write(`
      body { font-family: Arial, sans-serif; }
      .tabb-table { width: 100%; border-collapse: collapse; }
      .tabb-th, .tabb-td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      .tabb-th { background-color: #f2f2f2; }
      .tabb-po-created { color: red; text-align: center; }
    `);
    printWindow.document.write('</style></head><body >');
    printWindow.document.write(document.querySelector('.tabb-table').outerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const data = [
    { p: 7, requestDate: '2024-08-24 00:00', vendor: 'SHIKAMED CHEMIST', status: 'pending', verificationStatus: '2 verified out of 2', requestedBy: 'Mr. admin admin', poCreated: 'No' },
    { p: 6, requestDate: '2024-08-24 00:00', vendor: 'Shadon Medical Dia...', status: 'pending', verificationStatus: '2 verified out of 2', requestedBy: 'Mr. admin admin', poCreated: 'No' },
    { p: 5, requestDate: '2024-08-24 00:00', vendor: 'DAIMA DISPENSING ...', status: 'pending', verificationStatus: '2 verified out of 2', requestedBy: 'Mr. admin admin', poCreated: 'No' },
    { p: 4, requestDate: '2024-08-24 00:00', vendor: 'Shadon Medical Dia...', status: 'pending', verificationStatus: '2 verified out of 2', requestedBy: 'Mr. admin admin', poCreated: 'No' },
  ];

  return (
    <div className="tabb-table-container">
      {/* Other table-related content */}

      <table className="tabb-table">
        <thead>
          <tr>
            <th>P.</th>
            <th>Request Date</th>
            <th>Vendor</th>
            <th>Status</th>
            <th>Verification Status</th>
            <th>Requested By</th>
            <th>PO Cre...</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.p}>
              <td>{row.p}</td>
              <td>{row.requestDate}</td>
              <td>{row.vendor}</td>
              <td>{row.status}</td>
              <td>{row.verificationStatus}</td>
              <td>{row.requestedBy}</td>
              <td className="tabb-po-created">{row.poCreated}</td>
              <td>
                <button className="tabb-view-button" onClick={() => navigate('/purchase-request-view')}>View</button>
                <button className="tabb-add-po-button" onClick={() => navigate('/add-purchase-order')}>Add Purchase Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
