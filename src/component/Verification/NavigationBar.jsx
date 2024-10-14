// export default NavigationBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  const [activeTab, setActiveTab] = useState('Inventory');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="navigationBarContainer">
      <div className="navigationBarTabMenu">
        <button
          className={`navigationBarTabButton ${activeTab === 'Inventory' ? 'navigationBarActive' : ''}`}
          onClick={() => handleTabClick('Inventory')}
        >
          Inventory
        </button>
        <button
          className={`navigationBarTabButton ${activeTab === 'Pharmacy' ? 'navigationBarActive' : ''}`}
          onClick={() => handleTabClick('Pharmacy')}
        >
          Pharmacy
        </button>
      </div>
      <div className='navigationBarActionButtons'>
        {activeTab === 'Inventory' && (
          <>
            <Link to="/requisition">
              <button className='navigationBarActionButton'>Requisition</button>
            </Link>
            <Link to="/purchase-request">
              <button className='navigationBarActionButton'>Purchase Request</button>
            </Link>
            <Link to="/verify-purchase-order">
              <button className='navigationBarActionButton'>Purchase Order</button>
            </Link>
            <Link to="/gr-quality-inspection">
              <button className='navigationBarActionButton'>GR Quality Inspection</button>
            </Link>
          </>
        )}
        {activeTab === 'Pharmacy' && (
          <>
            <Link to="/verify-purchase-order">
              <button className='navigationBarActionButton'>Purchase Order</button>
            </Link>
            <Link to="/requisitionPharmacy">
              <button className='navigationBarActionButton'>Requisition</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
