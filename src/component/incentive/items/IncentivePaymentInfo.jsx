// export default InvoiceSearch;

import React, { useState } from 'react';
import './IncentivePaymentInfo.css';
import InvoiceItems from './InvoiceItems';
import BillSync from './BillSync';
import Payment from './Payment';
import { Link } from 'react-router-dom';

const InvoiceSearch = () => {
  const [activeTab, setActiveTab] = useState('Invoice'); // State to manage the active tab
  const [fromDate, setFromDate] = useState('11-07-2024');
  const [toDate, setToDate] = useState('29-07-2024');
  const [isFavorite, setIsFavorite] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [invoices, setInvoices] = useState([]);

  const handleFromDateChange = (e) => setFromDate(e.target.value);
  const handleToDateChange = (e) => setToDate(e.target.value);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleLoad = () => {
    // Simulating API call to load invoices
    setInvoices([]);
    // Add actual API call here
  };

  // Function to render the appropriate component based on the active tab
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Invoice':
        return (
          <div className="invoice-search">
            <div className="search-bar">
              <div className="date-picker">
                <label>From:</label>
                <input type="date" value={fromDate} onChange={handleFromDateChange} />
              </div>
              <div className="date-picker">
                <label>To:</label>
                <input type="date" value={toDate} onChange={handleToDateChange} />
              </div>
              <button className={`favorite ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
                ★
              </button>
              <button className="subtract">-</button>
              <button className="load" onClick={handleLoad}>Load</button>
            </div>
            
            <input
              type="text"
              className="search-input"
              placeholder="type to search"
              value={searchTerm}
              onChange={handleSearch}
            />
            
            <p>{invoices.length} invoices found..</p>
          </div>
        );
      case 'InvoiceItems':
        return <InvoiceItems />;
      case 'BillSync':
        return <BillSync />;
      case 'Payment':
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <div className="invoice-search-container">
      
      <div className="sub-tabs">
        <button className={`tab-button ${activeTab === 'Invoice' ? 'active' : ''}`} onClick={() => setActiveTab('Invoice')}>Invoice</button>
        <button className={`tab-button ${activeTab === 'InvoiceItems' ? 'active' : ''}`} onClick={() => setActiveTab('InvoiceItems')}>Invoice-Items</button>
        <button className={`tab-button ${activeTab === 'BillSync' ? 'active' : ''}`} onClick={() => setActiveTab('BillSync')}>Bill Sync</button>
        <button className={`tab-button ${activeTab === 'Payment' ? 'active' : ''}`} onClick={() => setActiveTab('Payment')}>Payment</button>
      </div>
      
      
      
      {renderActiveTab()}
    </div>
  );
};

export default InvoiceSearch;
