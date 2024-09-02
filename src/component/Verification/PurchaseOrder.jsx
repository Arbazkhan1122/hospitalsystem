// export default PurchaseOrder;

import React from 'react';
import styles from './RequisitionPage.module.css';

function PurchaseOrder() {
  return (
    <div className={styles.requisitionPageContainer}>
      <div className={styles.requisitionTabMenu}>
        {/* <button className={`${styles.requisitionTabButton} ${styles.requisitionTabButtonActive}`}>Requisition</button>
        <button className={styles.requisitionTabButton}>Purchase Request</button>
        <button className={styles.requisitionTabButton}>Purchase Order</button>
        <button className={styles.requisitionTabButton}>GR Quality Inspection</button> */}
      </div>

      <div className={styles.requisitionFilterSection}>
        <label className={styles.requisitionCheckboxLabel}>
          <input type="checkbox" />
          Check and Verify Purchase Order
        </label>
        <div className={styles.requisitionDatePickerContainer}>
          <label>From:</label>
          <input type="date" className={styles.requisitionDateInput} />
          <label>To:</label>
          <input type="date" className={styles.requisitionDateInput} />
          <button className={styles.requisitionOkButton}>OK</button>
        </div>
      </div>

      <div className={styles.requisitionStatusSection}>
        <div className={styles.requisitionRadioButtons}>
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
        <div className={styles.requisitionDropdownContainer}>
          <label>Requisition Status:</label>
          <select className={styles.requisitionDropdown}>
            <option value="all">--ALL--</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className={styles.requisitionTableContainer}>
        <table className={styles.requisitionDataTable}>
          <thead>
            <tr>
              <th>PO No</th>
              <th>Req No</th>
              <th>PO From</th>
              <th>Vendor</th>
              <th>Status</th>
              <th>PO Date</th>
              <th>PO Status</th>
              <th>Verification Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9" className={styles.requisitionNoRows}>No Rows To Show</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.requisitionPagination}>
          <button className={styles.requisitionPaginationButton}>First</button>
          <button className={styles.requisitionPaginationButton}>Previous</button>
          <span>Page 0 of 0</span>
          <button className={styles.requisitionPaginationButton}>Next</button>
          <button className={styles.requisitionPaginationButton}>Last</button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseOrder;
