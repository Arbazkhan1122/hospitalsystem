// AppointmentList.js
import React, { useState,useRef } from 'react';
import './OnlineAppointment.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const OnlineAppointment = () => {
  
  const [activeTab, setActiveTab] = useState('Initiated');
  

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Initiated':
        return <InitiatedAppointments />;
      case 'Completed':
        return <CompletedAppointments />;
      default:
        return null;
    }
  };

  return (
    <div className="Online-appointment-list">
      <div className="Online-tab-header">
        <div 
          className={`Online-tab ${activeTab === 'Initiated' ? 'active' : ''}`}
          onClick={() => setActiveTab('Initiated')}
        >
          Initiated Appointment
        </div>
        <div 
          className={`Online-tab ${activeTab === 'Completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('Completed')}
        >
          Completed Appointment
        </div>
      </div>
      <div className="Online-tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

  
  

   const InitiatedAppointments = () => {
      const [fromDate, setFromDate] = useState('08-08-2024');
      const [toDate, setToDate] = useState('08-08-2024');
      const [paymentStatus, setPaymentStatus] = useState('All');
      const [department, setDepartment] = useState('');
      const [doctor, setDoctor] = useState('');
      const [searchTerm, setSearchTerm] = useState('');
      const [columnWidths, setColumnWidths] = useState({});
      const tableRef = useRef(null);
      



      return (
      <>
      <div className="Online-filters">
        <div className="Online-date-range">
          <label>From:</label>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          <label>To:</label>
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          <button className="Online-star-btn">☆</button>
          <button className="Online-minus-btn">-</button>
        </div>
        <div className="Online-filter-row">
          <div className="Online-filter-item">
            <label>Payment Status:</label>
            <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
              <option value="All">All</option>
              {/* Add other options here */}
            </select>
          </div>
          <div className="Online-filter-item">
            <label>Department:</label>
            <input type="text" placeholder="Department Name" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </div>
          <div className="Online-filter-item">
            <label>Doctor:</label>
            <input type="text" placeholder="Doctor's Name" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
          </div>
        </div>
      </div>
      <button className="Online-reload-btn">↻ Reload Data</button>
      <div className="Online-search-bar">
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="Online-search-btn">🔍</button>
      </div>
      <div className="Online-results-actions">
        <span>Showing results</span>
        <button className="Online-export-btn">Export</button>
        <button className="Online-print-btn">Print</button>
      </div>
      <div className='table-container'>
      <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
               "Status",
              "Date/Time",
              "Patient Name",
              "Age/Gender",
              "Phone N...",
              "Address",
              "Department",
              "Doctor",
              "Payment St...",
              "Payment M...",
              "Actions"

              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        <tbody>
          <tr>
            <td colSpan="11" className="Online-loading">Loading...</td>
          </tr>
        </tbody>
      </table>
      </div>
      {/* <div className="Online-pagination">
        <span>0 to 0 of 0</span>
        <button className="Online-page-btn">First</button>
        <button className="Online-page-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="Online-page-btn">Next</button>
        <button className="Online-page-btn">Last</button>
      </div>
     */}
    </>
  );
};


const CompletedAppointments = () => {
      const [fromDate, setFromDate] = useState('08-08-2024');
      const [toDate, setToDate] = useState('08-08-2024');
      const [paymentStatus, setPaymentStatus] = useState('All');
      const [department, setDepartment] = useState('');
      const [doctor, setDoctor] = useState('');
      const [searchTerm, setSearchTerm] = useState('');
      const [columnWidths, setColumnWidths] = useState({});
      const tableRef = useRef(null);
      




      return (
      <>
      <div className="Online-filters">
        <div className="Online-date-range">
          <label>From:</label>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          <label>To:</label>
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          <button className="Online-star-btn">☆</button>
          <button className="Online-minus-btn">-</button>
        </div>
        
      </div>
      <button className="Online-reload-btn">↻ Reload Data</button>
      <div className="Online-search-bar">
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="Online-search-btn">🔍</button>
      </div>
      <div className="Online-results-actions">
       
        <button className="Online-export-btn">Export</button>
        <button className="Online-print-btn">Print</button>
      </div>
      <div className='table-container'>
      <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
               "Status",
              "Date/Time",
              "Patient Name",
              "Age/Gender",
              "Phone N...",
              "Address",
              "Department",
              "Doctor",
              "Payment St...",
              "Payment M...",
              "Actions"
              ,
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        <tbody>
          <tr>
            <td colSpan="11" className="Online-loading">Loading...</td>
          </tr>
        </tbody>
      </table>
      </div>
      {/* <div className="Online-pagination">
        <span>0 to 0 of 0</span>
        <button className="Online-page-btn">First</button>
        <button className="Online-page-btn">Previous</button>
        <span>Page 0 of 0</span>
        <button className="Online-page-btn">Next</button>
        <button className="Online-page-btn">Last</button>
      </div> */}
    
    </>
  );
};

export default OnlineAppointment;