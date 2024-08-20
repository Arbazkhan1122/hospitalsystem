// export default InvoiceItems;

import React, { useState, useEffect } from 'react';
import './InvoiceItems.css';

const InvoiceItems = () => {
  const [fromDate, setFromDate] = useState('05-08-2024');
  const [toDate, setToDate] = useState('12-08-2024');
  const [isFavorite, setIsFavorite] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulated data, replace with actual API call
    setItems([
      { serviceDep: 'OPD', itemName: 'Consultation C...', priceCategory: 'Normal', prescriber: '', performer: 'Mr. KEPH' },
      { serviceDep: 'OPD', itemName: 'Dispensing Fee', priceCategory: 'Normal', prescriber: '', performer: 'Dr. VICTO' },
      { serviceDep: 'OPD', itemName: 'Dispensing Fee', priceCategory: 'Normal', prescriber: '', performer: 'Dr. VICTO' },
      { serviceDep: 'OPD', itemName: 'Consultation C...', priceCategory: 'Normal', prescriber: '', performer: 'Dr. pooja' },
      { serviceDep: 'OPD', itemName: 'Dispensing Fee', priceCategory: 'Normal', prescriber: '', performer: 'Dr. VICTO' },
      { serviceDep: 'Serology', itemName: 'BRUCELLA', priceCategory: 'Normal', prescriber: 'Mrs. BRENDA ...', performer: 'Mr. COLL' },
      { serviceDep: 'MRI', itemName: 'MRI Abdomen', priceCategory: 'Normal', prescriber: 'Mrs. BRENDA ...', performer: '' },
      { serviceDep: 'Serology', itemName: 'COVID 19 AG', priceCategory: 'Normal', prescriber: 'Mrs. BRENDA ...', performer: 'Mr. KEPH' },
    ]);
  }, []);

  const handleFromDateChange = (e) => setFromDate(e.target.value);
  const handleToDateChange = (e) => setToDate(e.target.value);
  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  // Filter items based on search term
  const filteredItems = items.filter(item => {
    return (
      item.serviceDep.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.priceCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.prescriber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.performer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="invoice-items">
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
        <button className="load">OK</button>
      </div>
      
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="type to search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Service Dep.</th>
            <th>Item Name</th>
            <th>PriceCategory</th>
            <th>Prescriber</th>
            <th>Performer</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{item.serviceDep}</td>
              <td>{item.itemName}</td>
              <td>{item.priceCategory}</td>
              <td>{item.prescriber}</td>
              <td>{item.performer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="results-count">Showing {filteredItems.length} / {items.length} results</p>
    </div>
  );
};

export default InvoiceItems;
