// export default VerifyModal;

import React from 'react';
import styles from './VerifyModal.module.css';

function VerifyModal({ isOpen, onClose, requisitionDetails }) {
  if (!isOpen) return null;

  return (
    <div className={styles.verifyModalOverlay}>
      <div className={styles.verifyModalContainer}>
        <div className={styles.verifyModalHeader}>
          <h2>Check and Verify Requisition</h2>
          <button onClick={onClose} className={styles.verifyCloseButton}>×</button>
        </div>
        <div className={styles.verifyModalContent}>
          <div className={styles.verifyRequisitionDetails}>
            <p><strong>Requisition No:</strong> {requisitionDetails.reqNo}</p>
            <p><strong>Store Name:</strong> {requisitionDetails.storeName}</p>
            <p><strong>Requisition Date:</strong> {requisitionDetails.requisitionDate}</p>
            {/* Add more fields as needed */}
          </div>
          <table className={styles.verifyDataTable}>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Remarks</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with actual data */}
              <tr>
                <td>SYRINGES INSULIN</td>
                <td>1</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>active</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.verifyRemarksSection}>
            <label>Requisition Remark:</label>
            <textarea className={styles.verifyRemarksInput}></textarea>
          </div>
        </div>
        <div className={styles.verifyModalFooter}>
          <button onClick={onClose} className={styles.verifyApproveButton}>Approve</button>
          <button onClick={onClose} className={styles.verifyRejectButton}>Reject All</button>
        </div>
      </div>
    </div>
  );
}

export default VerifyModal;
