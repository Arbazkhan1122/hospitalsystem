// import React from 'react';
// import "../LabSetting/labCategories.css"
// const lookupData = [
//   {  name: 'Biochemistry', },
//   {  name: 'Hematology',},
//   {  name: 'Microbiology',},
//   {  name: 'Parasitology', },
//   {  name: 'Serology',  },
//   { name: 'Immunoassay',  },
//   { name: 'DEFAULT', },
//   {  name: 'HISTOCYTOLOGY',  },
//   {  name: 'OUT SOURCE', },
//   {  name: 'MOLECULAR BIOCHEMISTRY',  },
//   {  name: 'PATHOLOGY',  },
// ];

// function LabCategories() {
//   return (
//     <div className="app">
//       <button className="add-lookup-btn">+Add New Lab Categories</button>
//       <div className="search-container">
//         <input type="text" placeholder="Search" className="search-input" />
//         <button className="search-btn">🔍</button>
//       </div>
//       <div className="results-info">
//         Showing 29 / 29 results
//         <button className="print-btn">Print</button>
//       </div>
//       <table className="lookup-table">
//         <thead>
//           <tr>
         
//             <th>Category Name</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {lookupData.map((item) => (
//             <tr key={item.id}>
             
//               <td>{item.name}</td>
            
//               <td>
//                 <button className="edit-btn">Edit</button>
//                 <button className="edit-btn">Deactivate</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default LabCategories;


import React, { useState } from 'react';
import "../LabSetting/labCategories.css"
import LabCategoryAddNewLC from './labCategoryAddNewLC';
// import LSLabTestAddNLTest from './lSLabTestAddNLTest';
const labTests = [
  // { vendorCode:'INTERNAL',vendorName: "Lab Internal", address: "", contactNo: "normal",  isExternal: "false", isActive:'true', isDefault:'true' },
  { categoryName: 'Biochemistry', },
  { categoryName: 'Hematology', },
  { categoryName: 'Microbiology', },
  { categoryName: 'Parasitology', },

  // Add more rows as needed
  

];

const LabCategories = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddNewLabTestClick = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div className="labCategories-container">
    <div className="labCategories-firstRow">
    <div className="labCategories-addBtn">
      <button className="labCategories-add-button" onClick={handleAddNewLabTestClick}>+ Add New Lab Categories</button>
      </div>
        
      </div>
      <div className='labCategories-search-N-result'>
      <div className="labCategories-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Search..." 
            
          />
        </div>
        <div className="labCategories-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="labCategories-print-button"><i class="fa-solid fa-print"></i> Print</button>
        </div>
        </div>
      <table >
        <thead>
          <tr>
            <th> Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labTests.map((test, index) => (
            <tr key={index}>
              <td>{test.categoryName}</td>
             
              
              <td>
                <button className="labCategories-edit-button"onClick={handleAddNewLabTestClick}>Edit</button>
                <button className="labCategories-deactivate-button">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="labCategories-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div> */}
      {/* Modal Popup */}
      {showPopup && (
        <div className="labCategories-modal">
          <div className="labCategories-modal-content">
            <LabCategoryAddNewLC onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LabCategories;
