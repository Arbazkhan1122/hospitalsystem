// export default RequisitionPage;

import React, { useState } from 'react';
import VerifyModal from './VerifyModal';
import styles from './RequisitionPage.module.css';

function RequisitionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequisition, setSelectedRequisition] = useState({});

  const handleVerifyClick = (requisition) => {
    setSelectedRequisition(requisition);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.requisitionPageContainer}>
      {/* Other components like the filter section and table go here */}
      <div className={styles.requisitionFilterSection}>
        <label className={styles.requisitionCheckboxLabel}>
          <input type="checkbox" />
          Check and Verify Requisition
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
              <th>Req.No</th>
              <th>StoreName</th>
              <th>Requested On</th>
              <th>Req. Status</th>
              <th>Verification Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>Accounts</td>
              <td>2024-08-06</td>
              <td>active</td>
              <td>Pending</td>
              <td>
                <button onClick={() => handleVerifyClick({
                  reqNo: 10,
                  storeName: 'Accounts',
                  requisitionDate: '2024-08-06'
                  // Add more fields as needed
                })}>
                  Verify
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Render the modal */}
      <VerifyModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        requisitionDetails={selectedRequisition}
      />
    </div>
  );
}

export default RequisitionPage;
