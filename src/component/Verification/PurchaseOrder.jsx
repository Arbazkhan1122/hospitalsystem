// export default PurchaseOrder;

import React, { useRef, useState } from 'react';
import './RequisitionPage.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

function PurchaseOrder() {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  return (
    <div className="requisitionPageContainer">
      <div className="requisitionTabMenu">
        {/* <button className={`${styles.requisitionTabButton} ${styles.requisitionTabButtonActive}`}>Requisition</button>
        <button className={styles.requisitionTabButton}>Purchase Request</button>
        <button className={styles.requisitionTabButton}>Purchase Order</button>
        <button className={styles.requisitionTabButton}>GR Quality Inspection</button> */}
      </div>

      <div className="requisitionFilterSection">
        <label className="requisitionCheckboxLabel">
          <input type="checkbox" />
          Check and Verify Purchase Order
        </label>
        <div className="requisitionDatePickerContainer">
          <label>From:</label>
          <input type="date" className="requisitionDateInput"/>
          <label>To:</label>
          <input type="date" className="requisitionDateInput" />
          <button className="requisitionOkButton">OK</button>
        </div>
      </div>

      <div className="requisitionStatusSection">
        <div className="requisitionRadioButtons">
          <label>
            <input type="radio" name="verificationStatus" /> Pending
          </label>
          <label>
            <input type="radio" name="verificationStatus" /> Approved
          </label>
          <label>
            <input type="radio" name="verificationStatus" /> Rejected
          </label>
          <label>
            <input type="radio" name="verificationStatus" /> All
          </label>
        </div>
        <div className="requisitionDropdownContainer">
          <label>Requisition Status:</label>
          <select className="requisitionDropdown">
            <option value="all">--ALL--</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="requisitionTableContainer">
      <table className="patientList-table" ref={tableRef}>
              <thead>
                <tr>
                  {[
                     "PO No",
                     "Req No",
                     "PO From",
                     "Vendor",
                     "Status",
                     "PO Date",
                     "PO Status",
                     "Verification Status",
                     "Action"
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
              <td colSpan="9" className="requisitionNoRows">No Rows To Show</td>
            </tr>
          </tbody>
        </table>
        {/* <div className={styles.requisitionPagination}>
          <button className={styles.requisitionPaginationButton}>First</button>
          <button className={styles.requisitionPaginationButton}>Previous</button>
          <span>Page 0 of 0</span>
          <button className={styles.requisitionPaginationButton}>Next</button>
          <button className={styles.requisitionPaginationButton}>Last</button>
        </div> */}
      </div>
    </div>
  );
}

export default PurchaseOrder;
