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


import React from 'react';
// import './LabTestSetting.css';
import "../LabSetting/labTest.css"
const labTests = [
  { labTestName: "Sugar Fasting", reportingName: "Sugar Fasting", category: "Biochemistry", isActive: true, displaySequence: 1000 },
  { labTestName: "RFT", reportingName: "RFT", category: "Biochemistry", isActive: true, displaySequence: 1000 },
  // Add more rows as needed
];

const LabTestSetting = () => {
  return (
    <div className="lab-test-setting-container">
      <button className="add-button">+Add New Lab Test</button>
      <div className="search-filters">
        <input type="text" className="search-box" placeholder="Search" />
        <div className="filters">
          <span>Search Filters: </span>
          <label><input type="checkbox" /> Active</label>
          <label><input type="checkbox" /> Inactive</label>
          <label><input type="checkbox" /> ALL</label>
        </div>
        <div className="category-filter">
          <label>Category: </label>
          <select>
            <option>--All--</option>
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>
      <table className="lab-test-table">
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
                <button className="edit-button">Edit</button>
                <button className="deactivate-button">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="results-info">Showing 40 / 40 results</div>
      <button className="print-button">Print</button>
    </div>
  );
};

export default LabTestSetting;
