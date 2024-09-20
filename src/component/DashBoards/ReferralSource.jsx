import React, { useRef, useState } from 'react';
import './ReferralSource.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const ReferralSource = () => {
    const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
    return (
        <div className="hist-container">
            <div className="hist-header"> 
                <span className="hist-title">Referral Source List</span>
                <button className="hist-add-button">Add New</button>
            </div>
            <div className='table-container'>
            <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Item Name *",
                 "Code",
                 "Available Qty",
                 "Write-Off Qty *",
                 "Write-Off Date *",
                 "Remark *",
                 "Item Rate",
                 "Sub Total",
                 "VAT %",
                 "Total Amount"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ReferralSource;
