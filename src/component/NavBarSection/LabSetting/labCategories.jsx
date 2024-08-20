import React from 'react';
import "../LabSetting/labCategories.css"
const lookupData = [
  {  name: 'Biochemistry', },
  {  name: 'Hematology',},
  {  name: 'Microbiology',},
  {  name: 'Parasitology', },
  {  name: 'Serology',  },
  { name: 'Immunoassay',  },
  { name: 'DEFAULT', },
  {  name: 'HISTOCYTOLOGY',  },
  {  name: 'OUT SOURCE', },
  {  name: 'MOLECULAR BIOCHEMISTRY',  },
  {  name: 'PATHOLOGY',  },
];

function LabCategories() {
  return (
    <div className="app">
      <button className="add-lookup-btn">+Add New Lab Categories</button>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">🔍</button>
      </div>
      <div className="results-info">
        Showing 29 / 29 results
        <button className="print-btn">Print</button>
      </div>
      <table className="lookup-table">
        <thead>
          <tr>
         
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lookupData.map((item) => (
            <tr key={item.id}>
             
              <td>{item.name}</td>
            
              <td>
                <button className="edit-btn">Edit</button>
                <button className="edit-btn">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LabCategories;