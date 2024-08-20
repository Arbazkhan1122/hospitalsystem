import React, { useRef } from 'react';
import '../SystemAdmin/AuditTrial.css';

const AuditTrails = () => {
  const auditTableRef = useRef();

  const handlePrint = () => {
    const printContent = auditTableRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reload to re-render the original content
  };

  return (
    <div className="audit-trail">
      <h2 className="section-title">AUDIT TRAIL DETAILS</h2>
      
      <div className="filters">
        <div className="filter-item">
          <label>User Name :</label>
          <select><option>Select User(s)</option></select>
        </div>
        <div className="filter-item">
          <label>Table Name :</label>
          <select><option>Select Table(s)</option></select>
        </div>
        <div className="filter-item">
          <label>Select Action :</label>
          <select><option>Select Action</option></select>
        </div>
      </div>
      
      <div className="date-range">
        <div className="date-input">
          <label>From:</label>
          <input type="date" value="2024-08-06" />
        </div>
        <div className="date-input">
          <label>To:</label>
          <input type="date" value="2024-08-13" />
        </div>
        <button className="star-btn">☆</button>
        <button className="minus-btn">-</button>
        <button className="ok-btn">OK</button>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
      
      <div className="results-info">
        <span>Showing 0 / 0 results</span>
        <button className="export-btn">Export</button>
        <button className="print-btn" onClick={handlePrint}>Print</button>
      </div>
      
      <div ref={auditTableRef}>
        <table className="audit-table">
          <thead>
            <tr>
              <th>A</th>
              <th>Insert...</th>
              <th>C.</th>
              <th>Chang...</th>
              <th>Table_Database</th>
              <th>Action...</th>
              <th>Table_Name</th>
              <th>PrimaryKey</th>
              <th>ColumnsValue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9" className="no-rows">No Rows To Show</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
      
      <h2 className="section-title">LOGIN INFORMATIONS</h2>
      
      <div className="date-range">
        <div className="date-input">
          <label>From:</label>
          <input type="date" value="2024-08-06" />
        </div>
        <div className="date-input">
          <label>To:</label>
          <input type="date" value="2024-08-13" />
        </div>
        <button className="star-btn">☆</button>
        <button className="minus-btn">-</button>
        <button className="ok-btn">OK</button>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
      
      <div className="results-info">
        <span>Showing 318 / 318 results</span>
        <button className="print-btn">Print</button>
      </div>

      {/* New table added here */}
      <table className="login-info-table">
        <thead>
          <tr>
            <th>Employ...</th>
            <th>UserName</th>
            <th>Action Name</th>
            <th>DateTime</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>admin</td>
            <td>login</td>
            <td>2024-08-06T00:05:14.933</td>
          </tr>
          <tr>
            <td>1</td>
            <td>admin</td>
            <td>login</td>
            <td>2024-08-06T01:43:47.403</td>
          </tr>
          <tr>
            <td>1</td>
            <td>admin</td>
            <td>login</td>
            <td>2024-08-06T06:25:28.727</td>
          </tr>
          <tr>
            <td>1</td>
            <td>admin</td>
            <td>login</td>
            <td>2024-08-06T07:57:55.65</td>
          </tr>
          <tr>
            <td></td>
            <td>admin</td>
            <td>invalid-login-attempt</td>
            <td>2024-08-06T09:01:35.563</td>
          </tr>
          <tr>
            <td></td>
            <td>admin</td>
            <td>invalid-login-attempt</td>
            <td>2024-08-06T09:01:42.11</td>
          </tr>
          <tr>
            <td>1</td>
            <td>admin</td>
            <td>login</td>
            <td>2024-08-06T11:26:45.623</td>
          </tr>
          <tr>
            <td></td>
            <td>admin</td>
            <td>invalid-login-attempt</td>
            <td>2024-08-06T11:45:54.25</td>
          </tr>
          <tr>
            <td></td>
            <td>admin</td>
            <td>invalid-login-attempt</td>
            <td>2024-08-06T11:47:43.39</td>
          </tr>
          <tr>
            <td></td>
            <td>admin</td>
            <td>invalid-login-attempt</td>
            <td>2024-08-06T11:47:53.733</td>
          </tr>
          <tr>
            <td></td>
            <td>admin</td>
            <td>invalid-login-attempt</td>
            <td>2024-08-06T11:49:04.873</td>
          </tr>
        </tbody>
      </table>

      <div className="pagination">
        <span>0 to 0 of 0</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
  );
};

export default AuditTrails;
