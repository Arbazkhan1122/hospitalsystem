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


import React, { useEffect, useState } from 'react';
import "../LabSetting/labCategories.css"
import LabCategoryAddNewLC from './labCategoryAddNewLC';
import axios from 'axios';
import { API_BASE_URL } from '../../api/api';
import LabCategoryUpdateNewLC from './LabCategoryUpdateNewLC';


const LabCategories = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showUpdatePopup,setShowUpdatePopup] = useState(false);
  const [labCategories, setLabCategories] = useState([]); // State to hold fetched data
  const [searchTerm, setSearchTerm] = useState('');
  const [labCategory,setLabCategory] = useState({});


  const fetchLabCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/lab-test-categories/getAll-testCategory`);
      setLabCategories(response.data); // Set the data to state
      console.log(response.data);
      
    } catch (error) {
      console.error("Error fetching lab categories:", error);
    }
  };
  useEffect(() => {
    fetchLabCategories();
  }, []);

  // Function to handle search
  // const filteredLabCategories = labCategories.filter((category) =>
  //   category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  const handleAddNewLabTestClick = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
    setShowUpdatePopup(false)
  };
  
  const handleUpdateNewLabTestClick = (category) => {
    setLabCategory(category)
    setShowUpdatePopup(true); // Show the popup
    setShowPopup(false)
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <div className="labCategories-results-info">
          {/* <span>Showing {filteredLabCategories.length} / {labCategories.length} results</span> */}
          <button className="labCategories-print-button"><i className="fa-solid fa-print"></i> Print</button>
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
        {labCategories.map((category, index) => (
              <tr key={index}>
                <td>{category.labTestCategoryName}</td>
                <td>
                  <button className="labCategories-edit-button" onClick={()=>handleUpdateNewLabTestClick(category)}>Edit</button>
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

{showUpdatePopup && (
        <div className="labCategories-modal">
          <div className="labCategories-modal-content">
            <LabCategoryUpdateNewLC labCategory={labCategory} onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LabCategories;
