// components/WorkList.jsx
import React, { useState } from 'react';
import "../NavBarSection/addResults.css"
// import './WorkList.css';

function AddResults() {
  const [dateFrom, setDateFrom] = useState('08/08/2024');
  const [dateTo, setDateTo] = useState('08/08/2024');
  const [category, setCategory] = useState('');

  return (
    <div className="work-list">
      <div className="header">
        <div className="date-range">
          <label>From:</label>
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
          <label>To:</label>
          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </div>
        <div className="category-select">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">--Select Lab Category--</option>
            {/* Add more options here */}
          </select>
        </div>
        <button className="load-button">Load</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <table className="work-table">
        <thead>
          <tr>
            <th>Hospit...</th>
            <th>Patient Name</th>
            <th>Ag...</th>
            <th>Phone...</th>
            <th>Test Name</th>
            <th>Category</th>
            <th>Requ...</th>
            <th>Run...</th>
            <th>Bar C...</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="10">Loading...</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
  );
}

export default AddResults;



// import React from 'react';
// // import './WorkList.css';
// import "../NavBarSection/addResults.css"

// const WorkList = () => (
//   <div className="work-list">
//     <div className="header">
//       <div className="date-filter">
//         <label>From: <input type="date" /></label>
//         <label>To: <input type="date" /></label>
//       </div>
//       <div className="category-dropdown">
//         <label>Category: 
//           <select>
//             <option value="">--Select Lab Category--</option>
//             {/* Add options here */}
//           </select>
//         </label>
//         <button className="load-button">Load</button>
//       </div>
//     </div>

//     <div className="table-container">
//       <input type="text" placeholder="Search..." className="search-bar" />
//       <table>
//         <thead>
//           <tr>
//             <th>Hospital</th>
//             <th>Patient Name</th>
//             <th>Age</th>
//             <th>Phone</th>
//             <th>Test Name</th>
//             <th>Category</th>
//             <th>Request</th>
//             <th>Run</th>
//             <th>Bar Code</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td colSpan="10" className="loading">Loading...</td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button>First</button>
//         <button>Previous</button>
//         <span>Page 0 of 0</span>
//         <button>Next</button>
//         <button>Last</button>
//       </div>
//     </div>

//     <button className="print-button">Print</button>
//   </div>
// );

// export default WorkList;
