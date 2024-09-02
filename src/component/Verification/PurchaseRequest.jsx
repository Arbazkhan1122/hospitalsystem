import React from 'react';
import styles from './PurchaseRequest.module.css';

function PurchaseRequest() {
  return (
    <div className={styles.purchaseRequestContainer}>
      <div className={styles.purchaseRequestTabMenu}>
        {/* <button className={`${styles.purchaseRequestTabButton} ${styles.purchaseRequestActive}`}>Requisition</button>
        <button className={styles.purchaseRequestTabButton}>Purchase Request</button>
        <button className={styles.purchaseRequestTabButton}>Purchase Order</button>
        <button className={styles.purchaseRequestTabButton}>GR Quality Inspection</button> */}
      </div>

      <div className={styles.purchaseRequestFilterSection}>
        <label className={styles.purchaseRequestCheckboxLabel}>
          <input type="checkbox" />
          Check and Verify Purchase Request
        </label>
        <div className={styles.purchaseRequestDatePickerContainer}>
          <label>From:</label>
          <input type="date" className={styles.purchaseRequestDateInput} />
          <label>To:</label>
          <input type="date" className={styles.purchaseRequestDateInput} />
          <button className={styles.purchaseRequestOkButton}>OK</button>
        </div>
      </div>

      <div className={styles.purchaseRequestStatusSection}>
        <div className={styles.purchaseRequestRadioButtons}>
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
        <div className={styles.purchaseRequestDropdownContainer}>
          <label>Requisition Status:</label>
          <select className={styles.purchaseRequestDropdown}>
            <option value="all">--ALL--</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className={styles.purchaseRequestTableContainer}>
        <table className={styles.purchaseRequestDataTable}>
          <thead>
            <tr>
              <th>PR</th>
              <th>Requested From</th>
              <th>Requested On</th>
              <th>Requested By</th>
              <th>Vendor</th>
              <th>Status</th>
              <th>Verification Status</th>
              <th>PO Creation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className={styles.purchaseRequestNoRows}>No Rows To Show</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.purchaseRequestPagination}>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseRequest;
