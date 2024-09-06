// import React from 'react';
// import "../LabSetting/labTest.css";

// const LabTest = () => {
//   return (
//     <div className="lab-test">
//       <h2>Lab Test</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Lab Test Name</th>
//             <th>Reporting Name</th>
//             <th>Category</th>
//             <th>Is Active</th>
//             <th>Display Sequence</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Sugar Fasting</td>
//             <td>Sugar Fasting</td>
//             <td>Biochemistry</td>
//             <td>True</td>
//             <td>1000</td>
//             <td>
//               <button className="edit-btn">Edit</button>
//               <button className="deactivate-btn">Deactivate</button>
//             </td>
//           </tr>
//           {/* Add more rows as needed */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LabTest;



// // import React, { useState, useEffect } from 'react';
// // // import './App.css';
// // import "../LabSetting/labTest.css";

// // function App() {
// //   const [labTests, setLabTests] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [activeFilter, setActiveFilter] = useState(true);
// //   const [categoryFilter, setCategoryFilter] = useState('All');

// //   useEffect(() => {
// //     // Fetch lab test data from an API or other source
// //     const fetchData = async () => {
// //       const response = await fetch('https://api.example.com/lab-tests'); 
// //       const data = await response.json();
// //       setLabTests(data);
// //     };

// //     fetchData();
// //   }, []);

// //   const handleSearchChange = (event) => {
// //     setSearchTerm(event.target.value);
// //   };

// //   const handleActiveFilterChange = (event) => {
// //     setActiveFilter(event.target.checked);
// //   };

// //   const handleCategoryFilterChange = (event) => {
// //     setCategoryFilter(event.target.value);
// //   };

// //   const filteredLabTests = labTests.filter((labTest) => {
// //     // Filter by search term
// //     if (searchTerm && !labTest.name.toLowerCase().includes(searchTerm.toLowerCase())) {
// //       return false;
// //     }

// //     // Filter by active status
// //     if (activeFilter && !labTest.isActive) {
// //       return false;
// //     }

// //     // Filter by category
// //     if (categoryFilter !== 'All' && labTest.category !== categoryFilter) {
// //       return false;
// //     }

// //     return true;
// //   });

// //   return (
// //     <div className="container">
// //       <h1>Lab Test Management</h1>

// //       <div className="search-filters">
// //         <input 
// //           type="text" 
// //           placeholder="Search" 
// //           value={searchTerm} 
// //           onChange={handleSearchChange} 
// //         />

// //         <div className="filter-checkbox">
// //           <input
// //             type="checkbox"
// //             checked={activeFilter}
// //             onChange={handleActiveFilterChange}
// //           />
// //           <label htmlFor="active-filter">Active</label>
// //         </div>

// //         <div className="filter-checkbox">
// //           <input
// //             type="checkbox"
// //             checked={!activeFilter}
// //             onChange={handleActiveFilterChange}
// //           />
// //           <label htmlFor="inactive-filter">Inactive</label>
// //         </div>

// //         <select value={categoryFilter} onChange={handleCategoryFilterChange}>
// //           <option value="All">All</option>
// //           <option value="Biochemistry">Biochemistry</option>
// //           {/* Add more category options as needed */}
// //         </select>
// //       </div>

// //       <div className="add-button">
// //         <button>Add New Lab Test</button>
// //       </div>

// //       <table className="lab-tests-table">
// //         <thead>
// //           <tr>
// //             <th>Lab Test Name</th>
// //             <th>Reporting Name</th>
// //             <th>Category</th>
// //             <th>Is Active</th>
// //             <th>Display Sequence</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {filteredLabTests.map((labTest) => (
// //             <tr key={labTest.id}>
// //               <td>{labTest.name}</td>
// //               <td>{labTest.reportingName}</td>
// //               <td>{labTest.category}</td>
// //               <td>{labTest.isActive ? 'True' : 'False'}</td>
// //               <td>{labTest.displaySequence}</td>
// //               <td>
// //                 <button onClick={() => handleEditLabTest(labTest.id)}>Edit</button>
// //                 <button onClick={() => handleDeactivateLabTest(labTest.id)}>Deactivate</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default App;


import React, { useState } from 'react';
import "../LabSetting/labTest.css"
import LSLabTestAddNLTest from './lSLabTestAddNLTest';
const labTests = [
  { labTestName: "Sugar Fasting", reportingName: "Sugar Fasting", category: "Biochemistry", isActive: true, displaySequence: 1000 },
  { labTestName: "RFT", reportingName: "RFT", category: "Biochemistry", isActive: true, displaySequence: 1000 },
  // Add more rows as needed
];

const LabTestSetting = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddNewLabTestClick = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div className="labTestLS-container">
    <div className="labTestLS-firstRow">
    <div className="labTestLS-addBtn">
      <button className="labTestLS-add-button" onClick={handleAddNewLabTestClick}>+Add New Lab Test</button>
      </div>
        <div className="labTestLS-filters">
          <span>Search Filters: </span>
          <label><input type="checkbox" /> Active</label>
          <label><input type="checkbox" /> Inactive</label>
          <label><input type="checkbox" /> ALL</label>
        </div>
        <div className="labTestLS-category-filter">
          <label>Category: </label>
          <select>
            <option>--All--</option>
            <option>Biochemistry</option>
            <option>Hematology</option>
            <option>Parasitology</option>
            <option>Serology</option>
            <option>Immunoassay</option>
            <option>DEFAULT</option>
            <option>HISTOCYTOLOGY</option>
            <option>OUT SOURCE</option>
            <option>MOLECULAR BIOCHEMISTRY</option>
            <option>PATHOLOGY</option>
            <option>TUMOR MARKER</option>
            <option>VIROLOGY</option>
            <option>SPECIAL CHEMISTRY</option>
            <option>Blood Transfusion</option>
            
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>
      <div className='labTestLS-search-N-result'>
      <div className="labTestLS-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Search..." 
            
          />
        </div>
        <div className="labTestLS-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="labTestLS-print-button">Print</button>
        </div>
        </div>
      <table >
        <thead>
          <tr>
            <th>Lab Test Name</th>
            <th>Reporting Name</th>
            <th>Category</th>
            <th>Is Active</th>
            <th>Display Sequence</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labTests.map((test, index) => (
            <tr key={index}>
              <td>{test.labTestName}</td>
              <td>{test.reportingName}</td>
              <td>{test.category}</td>
              <td>{test.isActive ? 'True' : 'False'}</td>
              <td>{test.displaySequence}</td>
              <td>
                <button className="labTestLS-edit-button"onClick={handleAddNewLabTestClick}>Edit</button>
                <button className="labTestLS-deactivate-button">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="labTestLS-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      {/* Modal Popup */}
      {showPopup && (
        <div className="labTestLS-modal">
          <div className="labTestLS-modal-content">
            <LSLabTestAddNLTest onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LabTestSetting;
