import React, { useState } from 'react';
import InventorySummaryReport from '../components/InventorySummary';
import SubstoreDispatchAndConsumptionReport from '../components/SubstoreDispatchAndConsumption';
import DetailStockLeadger from '../components/DetailStockLeadger';
import ExpiryItem from '../components/ExpiryItem';
import ConsumableStockLedger from '../components/ConsumableStockLedger';
import CapitalStockLedger from '../components/CapitalStockLedger';
import IssuedItemListReport from '../components/IssuedItemList';
import ExpirableStock from '../components/ExpirableStock';
import OpeningStockValuation from '../components/OpeningStockEvaluation';
import SubstoreWiseSummary from '../components/SubStoreWiseSummary';
import './Stock.css';
const ReportsBoxes = () => {
  const [activeReport, setActiveReport] = useState(null);

  const reports = [
    // { title: 'Current Stock Level', icon: 'chart-line' },
    { title: 'Inventory Summary', icon: 'folder' },
    { title: 'Substore Dispatch And Consumption', icon: 'shopping-cart' },
    { title: 'Detail Stock Ledger', icon: 'circle' },
    { title: 'Expiry Item', icon: 'circle' },
    { title: 'Consumable Stock Ledger', icon: 'circle' },
    { title: 'Capital Stock Ledger', icon: 'circle' },
    { title: 'Issued Item List', icon: 'circle' },
    { title: 'Expirable Stock', icon: 'circle' },
    { title: 'Opening Stock Valuation', icon: 'circle' },
    { title: 'Substore Wise Summary', icon: 'chart-line' }, // Add the new report here
  ];

  const handleReportClick = (title) => {
    if (title === 'Inventory Summary') {
      setActiveReport('InventorySummary');
    } else if (title === 'Substore Dispatch And Consumption') {
      setActiveReport('SubstoreDispatchAndConsumption');
    } else if (title === 'Detail Stock Ledger') {
      setActiveReport('DetailStockLeadger');
    } else if (title === 'Expiry Item') {
      setActiveReport('ExpiryItem');
    } else if (title === 'Consumable Stock Ledger') {
      setActiveReport('ConsumableStockLedger');
    } else if (title === 'Capital Stock Ledger') {
      setActiveReport('CapitalStockLedger');
    } else if (title === 'Issued Item List') {
      setActiveReport('IssuedItemList');
    } else if (title === 'Expirable Stock') {
      setActiveReport('ExpirableStock');
    } else if (title === 'Opening Stock Valuation') {
      setActiveReport('OpeningStockValuation');
    } else if (title === 'Substore Wise Summary') {
      setActiveReport('SubstoreWiseSummary');
    }
  };

  return (
    <div className="reports-container">
      {activeReport === 'InventorySummary' ? (
        <InventorySummaryReport />
      ) : activeReport === 'SubstoreDispatchAndConsumption' ? (
        <SubstoreDispatchAndConsumptionReport />
      ) : activeReport === 'DetailStockLeadger' ? (
        <DetailStockLeadger />
      ) : activeReport === 'ExpiryItem' ? (
        <ExpiryItem />
      ) : activeReport === 'ConsumableStockLedger' ? (
        <ConsumableStockLedger />
      ) : activeReport === 'CapitalStockLedger' ? (
        <CapitalStockLedger />
      ) : activeReport === 'IssuedItemList' ? (
        <IssuedItemListReport />
      ) : activeReport === 'ExpirableStock' ? (
        <ExpirableStock />
      ) : activeReport === 'OpeningStockValuation' ? (
        <OpeningStockValuation />
      ) : activeReport === 'SubstoreWiseSummary' ? ( // Render SubstoreWiseSummary when selected
        <SubstoreWiseSummary />
      ) : (
        <div className="reports-boxes">
          {reports.map((report, index) => (
            <div 
              key={index} 
              className="report-box" 
              onClick={() => handleReportClick(report.title)}
            >
              <i className={`report-icon fas fa-${report.icon}`}></i>
              <div className="report-content">
                <h3>{report.title}</h3>
                <p>Report</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportsBoxes;
