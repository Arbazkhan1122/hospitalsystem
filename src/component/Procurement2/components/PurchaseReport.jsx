import React, { useState } from 'react';
import './PurchaseReport.css';
import PurchaseOrderReport from '../components/PurchaseReportOrder';
import PurchaseReport from '../components/PurchaseItem';
import PurchaseSummaryReport from '../components/SummaryPurchase';
import ReturnToSupplierReport from '../components/ReturnToSupplier'; // Import the ReturnToSupplierReport component

const Purchase = () => {
  // State to track which report is being viewed
  const [selectedReport, setSelectedReport] = useState(null);

  const purchase = [
    { title: 'Purchase Order', icon: 'chart-line', component: 'PurchaseOrder' },
    { title: 'Cancelled PO and GR', icon: 'folder', component: 'CancelledPO' },
    { title: 'Purchase Items', icon: 'shopping-cart', component: 'PurchaseItems' },
    { title: 'Purchase Summary', icon: 'file-alt', component: 'PurchaseSummary' },
    { title: 'Return To Supplier', icon: 'undo-alt', component: 'ReturnToSupplier' },
  ];

  // Function to handle the click event
  const handleClick = (component) => {
    setSelectedReport(component);
  };

  // Function to go back to the main menu
  const handleBack = () => {
    setSelectedReport(null);
  };

  return (
    <div className="purchase-container">
      {!selectedReport && (
        <div className="reports-boxes">
          {purchase.map((item, index) => (
            <div
              key={index}
              className="report-box"
              onClick={() => handleClick(item.component)}
            >
              <i className={`report-icon fas fa-${item.icon}`}></i>
              <div className="report-content">
                <h3>{item.title}</h3>
                <p>Report</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedReport === 'PurchaseOrder' && (
        <div>
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>
          <PurchaseOrderReport />
        </div>
      )}

      {selectedReport === 'PurchaseItems' && (
        <div>
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>
          <PurchaseReport />
        </div>
      )}

      {selectedReport === 'PurchaseSummary' && (
        <div>
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>
          <PurchaseSummaryReport />
        </div>
      )}

      {selectedReport === 'CancelledPO' && (
        <div>
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>
          {/* <CancelledPOReport /> */}
          <h2>Cancelled PO and GR Report Coming Soon...</h2>
        </div>
      )}

      {selectedReport === 'ReturnToSupplier' && (
        <div>
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>
          <ReturnToSupplierReport /> {/* Render the ReturnToSupplierReport component here */}
        </div>
      )}
    </div>
  );
};

export default Purchase;
