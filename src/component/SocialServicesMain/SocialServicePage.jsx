

// import React from 'react';
// import "../SocialServicesMain/socialServicePage.css"

// function SocialServicePage() {
//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="ssu-patient-list">
//       <button className='ssuPatient-bttn'>SSU Patient List</button>
//       <div className="socialService-content">
//         <div className="socialService-top-controls">
//           <button className="socialService-register-button">+ Register New SSU Patient</button>
//           <div className="socialService-edit-patient">
//             <span>Edit Information Of</span>
//             <input type="text" placeholder="Existing Patient Name" />
//           </div>
//         </div>

//         <div className="socialService-patient-status-main">
//           <div className="socialService-patient-status">
//             <span>List by Patient Status:</span>
//             <label><input type="radio" name="status" value="all" defaultChecked /> All</label>
//             <label><input type="radio" name="status" value="active" /> Active</label>
//             <label><input type="radio" name="status" value="inactive" /> Inactive</label>
//           </div>
//         </div>

//         <div className="socialService-search-N-result">
//           <div className="socialService-search-bar">
//             <input type="text" placeholder="Search (Minimum 3 Character)" />
//             <button className="search-button">🔍</button>
//           </div>
//           <div className="socialService-results-info">
//             <span>Showing 0 / 0 results </span>
//             <button className="socialService-print-button" onClick={handlePrint}>Print</button>
//           </div>
//         </div>

//         <div className="socialService-table-N-bttns">
//           <table>
//             <thead>
//               <tr>
//                 <th>Hospital Number</th>
//                 <th>Patient Name</th>
//                 <th>Age/Sex</th>
//                 <th>Address</th>
//                 <th>Phone</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td colSpan="6" className="no-data">No Rows To Show</td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="socialService-pagination">
//             <span>0 to 0 of 0</span>
//             <button>First</button>
//             <button>Previous</button>
//             <span>Page 0 of 0</span>
//             <button>Next</button>
//             <button>Last</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SocialServicePage;


import React, { useState } from 'react';
import "../../component/SocialServicesMain/SocialServicePage.css";
import RegisterNewSSUPatient from './registerNewSSUPatient';

function SocialServicePage() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="ssu-patient-list">
      <button className='ssuPatient-bttn'>SSU Patient List</button>
      <div className="socialService-content">
        <div className="socialService-top-controls">
          <button 
            className="socialService-register-button" 
            onClick={togglePopup}
          >
            + Register New SSU Patient
          </button>
          <div className="socialService-edit-patient">
            <span>Edit Information Of</span>
            <input type="text" placeholder="Existing Patient Name" />
          </div>
        </div>

        <div className="socialService-patient-status-main">
          <div className="socialService-patient-status">
            <span>List by Patient Status:</span>
            <label><input type="radio" name="status" value="all" defaultChecked /> All</label>
            <label><input type="radio" name="status" value="active" /> Active</label>
            <label><input type="radio" name="status" value="inactive" /> Inactive</label>
          </div>
        </div>

        <div className="socialService-search-N-result">
          <div className="socialService-search-bar">
            <input type="text" placeholder="Search (Minimum 3 Character)" />
            <button className="search-button">🔍</button>
          </div>
          <div className="socialService-results-info">
            <span>Showing 0 / 0 results </span>
            <button className="socialService-print-button" onClick={handlePrint}>Print</button>
          </div>
        </div>

        <div className="socialService-table-N-bttns">
          <table>
            <thead>
              <tr>
                <th>Hospital Number</th>
                <th>Patient Name</th>
                <th>Age/Sex</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="no-data">No Rows To Show</td>
              </tr>
            </tbody>
          </table>
          <div className="socialService-pagination">
            <span>0 to 0 of 0</span>
            <button>First</button>
            <button>Previous</button>
            <span>Page 0 of 0</span>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="socialService-popup">
          <div className="socialService-popup-inner">
            <button className="close-socialService-popup" onClick={togglePopup}>X</button>
            <RegisterNewSSUPatient />
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialServicePage;
