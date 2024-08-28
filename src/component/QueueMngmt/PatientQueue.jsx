import React, { useState } from 'react';
import './PatientQueue.css';

const PatientQueue = () => {
  const [data, setData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [showTable, setShowTable] = useState(false);

  const handleLoadData = () => {
    if (selectedDoctor) {
      setShowTable(true);
      // Load data logic can be added here if needed.
    } else {
      setShowTable(false);
    }
  };

  return (
    <div className="patient-queue-management-container">
      <div className='patient-queue-management-header'>
        <header className="queue-management-header">
          <button className="queue-management-header-button">OPD</button>
        </header>
      </div>
      <div className="queue-management-content">
        <h2 className="queue-management-title">
          <span role="img" aria-label="user">👤</span> Patient Queue List
        </h2>
        <div className="queue-management-form-container">
          <div className="queue-management-form-group">
            <label>Doctor :</label>
            <select
              className="queue-management-select-doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              <option value="">Select Doctor</option>
              <option>Dr. PHRM Anonymous Doctor</option>
              <option>Dr. VICTOR OCHIENG OKECH</option>
              <option>Mr. DENNIS MURANGIRI NJUE</option>
              <option>Mr. КЕРНА OPIYO ODINDO</option>
              <option>Mrs. BRENDA MWANIA WANJIRU</option>
              <option>Mr. COLLINS GIKUNGU</option>
              <option>MAINA</option>
              <option>Mrs. CAROLINE wanjiru WANJIKU</option>
              <option>Mrs. BERTHA WANGARI WAIRIUKO</option>
              <option>Mrs. BEATRICE WANGAI MUKOLWE</option>
              <option>Dr. ANN NJOKI THIONGO</option>
              <option>Mr. COLLINS KIPKEMEI</option>
              <option>Dr. Pooja Mishra</option>
              <option>Dr. Amit Shah</option>
              <option>Mr. Account Trial</option>
              <option>Dr. Harry Potter</option>
              <option>Dr. Baus Wringley</option>
              <option>INNOCENT TENGO</option>
              <option>Dr. Emmanuel Bassy</option>
              <option>Hannah Benta</option>
              <option>Prof. Dr. Hannah Benta</option>
              <option>Prof. Dr. Suresh Singh Singh</option>
            </select>
          </div>
          <div className="queue-management-form-group status-group">
            <label>Status :</label>
            <div className="queue-management-status-options">
              <input type="radio" id="all" name="status" defaultChecked />
              <label htmlFor="all">All</label>
              <input type="radio" id="pending" name="status" />
              <label htmlFor="pending">Pending</label>
              <input type="radio" id="completed" name="status" />
              <label htmlFor="completed">Completed</label>
              <input type="radio" id="skipped" name="status" />
              <label htmlFor="skipped">Skipped</label>
            </div>
          </div>
          <button
            className="queue-management-load-data-button"
            onClick={handleLoadData}
          >
            Load Data
          </button>
        </div>

        {showTable && (
          <div className="queue-management-table-section">
            <div className="queue-management-search-container">
              <input type="text" placeholder="Search" />
              <button className="queue-management-search-button">🔍</button>
            </div>
            <div className="queue-management-results-info">Showing 0/ 0 results</div>

            <div className='queue-mana-table'>
              <table className='queue-managemnt-table'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Hospital No.</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Doctor</th>
                    <th>Visit Type</th>
                    <th>Appt. Type</th>
                    <th>Day</th>
                    <th>Queue No.</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr>
                      <td colSpan="12" className="queue-management-no-data">No Rows To Show</td>
                    </tr>
                  ) : (
                    data.map((row, index) => (
                      <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.hospitalNo}</td>
                        <td>{row.name}</td>
                        <td>{row.phone}</td>
                        <td>{row.age}</td>
                        <td>{row.department}</td>
                        <td>{row.doctor}</td>
                        <td>{row.visitType}</td>
                        <td>{row.apptType}</td>
                        <td>{row.day}</td>
                        <td>{row.queueNo}</td>
                        <td>{row.actions}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="queue-management-pagination">
                <span>0 to 0 of 0</span>
                <button className="queue-management-pagination-button">First</button>
                <button className="queue-management-pagination-button">Previous</button>
                <span>Page 0 of 0</span>
                <button className="queue-management-pagination-button">Next</button>
                <button className="queue-management-pagination-button">Last</button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default PatientQueue;
