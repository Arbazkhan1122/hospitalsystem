/* Dhanashree_ButtonPanel_19/09 */

import React, { useState } from 'react';
import './SystemAdmin.css';
import DatabaseBackup from './DataBaseBackup'; // Import the DatabaseBackup component
import MaterializedSalesView from './Materialized'; // Import the MaterializedSalesView component
import SalesBookDetails from './SalesBook'; // Import the SalesBookDetails component
import NewSales from './NewSales'; // Import the NewSales component
import AuditTrails from './AuditTrial'; // Import the AuditTrails component

const ButtonPanel = () => {
  const [activeButton, setActiveButton] = useState(0); // Initialize the first button as active

  const buttons = [
    'Database Backup',
    'Materialized Sales View',
    'Sales Book',
    'New Sales Book',
    'AuditTrail'
  ];

  return (
    <div className="ButtonPanel-button-panel-container">
      <div className="ButtonPanel-button-panel">
        {buttons.map((text, index) => (
          <button 
            key={index} 
            className={`ButtonPanel-button ${index === activeButton ? 'ButtonPanel-active' : ''}`}
            onClick={() => setActiveButton(index)} // Update the active button index on click
          >
            {text}
          </button>
        ))}
      </div>

      {/* Conditionally render the appropriate component based on the active button */}
      {activeButton === 0 && <DatabaseBackup />}
      {activeButton === 1 && <MaterializedSalesView />}
      {activeButton === 2 && <SalesBookDetails />}
      {activeButton === 3 && <NewSales />}
      {activeButton === 4 && <AuditTrails />}
    </div>
  );
};

export default ButtonPanel;

/* Dhanashree_ButtonPanel_19/09 */
