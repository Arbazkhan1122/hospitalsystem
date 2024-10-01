// export default NavigationBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

function NavigationBar() {
  const [activeTab, setActiveTab] = useState('Inventory');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.navigationBarContainer}>
      <div className={styles.navigationBarTabMenu}>
        <button
          className={`${styles.navigationBarTabButton} ${activeTab === 'Inventory' ? styles.navigationBarActive : ''}`}
          onClick={() => handleTabClick('Inventory')}
        >
          Inventory
        </button>
        <button
          className={`${styles.navigationBarTabButton} ${activeTab === 'Pharmacy' ? styles.navigationBarActive : ''}`}
          onClick={() => handleTabClick('Pharmacy')}
        >
          Pharmacy
        </button>
      </div>
      <div className={styles.navigationBarActionButtons}>
        {activeTab === 'Inventory' && (
          <>
            <Link to="/requisition">
              <button className={styles.navigationBarActionButton}>Requisition</button>
            </Link>
            <Link to="/purchase-request">
              <button className={styles.navigationBarActionButton}>Purchase Request</button>
            </Link>
            <Link to="/purchase-order">
              <button className={styles.navigationBarActionButton}>Purchase Order</button>
            </Link>
            <Link to="/gr-quality-inspection">
              <button className={styles.navigationBarActionButton}>GR Quality Inspection</button>
            </Link>
          </>
        )}
        {activeTab === 'Pharmacy' && (
          <>
            <Link to="/purchase-order">
              <button className={styles.navigationBarActionButton}>Purchase Order</button>
            </Link>
            <Link to="/requisitionPharmacy">
              <button className={styles.navigationBarActionButton}>Requisition</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
