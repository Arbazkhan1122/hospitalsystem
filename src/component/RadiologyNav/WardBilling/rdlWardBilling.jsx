// import React, { useState } from 'react';
// import "../WardBilling/rdlWardBilling.css"

// import WardBillingViewDetails from './wardBillingViewDetalis';

// function RDLWardBilling() {
//   const [showAddReport, setShowAddReport] = useState(false);
//   const [showScanDone, setShowScanDone] = useState(false);

//   const handleAddReportClick = () => {
//     setShowAddReport(true);
//   };

//   const handleScanDoneClick = () => {
//     setShowScanDone(true);
//   };

//   const closePopups = () => {
//     setShowAddReport(false);
//     setShowScanDone(false);
//   };

//   const printTable = () => {
//     const printContents = document.getElementById('table-to-print').outerHTML;
//     const originalContents = document.body.innerHTML;
//     document.body.innerHTML = `<html><head><title>Print</title></head><body>${printContents}</body></html>`;
//     window.print();
//     document.body.innerHTML = originalContents;
//     window.location.reload();  // Reload the page to reset the state
//   };

//   return (
//     <div className="rDLListRequest-active-imaging-request">
      
   
//       <div className="rDLListRequest-search-N-results">
//         <div className="rDLListRequest-search-bar">
//           <i className="fa-solid fa-magnifying-glass"></i>
//           <input type="text" placeholder="Search" />
//         </div>
//         <div className="rDLListRequest-results-info">
//           Showing 2 / 2 results
//           <button className="rdlListReports-ex-pri-buttons" onClick={printTable}>Print</button>
//         </div>
//       </div>
//       <div className="rDLListRequest-table-N-paginat" id="table-to-print">
//         <table>
//           <thead>
//             <tr>
//               <th>Hospital Number</th>
//               <th>Patient Name</th>
//               <th>Age/Sex</th>
//               <th>Contact</th>
//               <th>Admitted Date</th>
//               <th>Admitted Doctor</th>
//               <th>Reporting Doctor</th>
//               <th>Inpatient No</th>
//               <th>Ward/Bed</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>2024-08-16</td>
//               <td>2408003817</td>
//               <td>Sachin Ramesh</td>
//               <td>50Y / M</td>
//               <td>9876543211</td>
//               <td>Dr. Pooja Mishra</td>
//               <td>USG Chest</td>
//               <td></td>
//               <td>
//                 <button
//                   className="action-button add-report"
//                   onClick={handleAddReportClick}
//                 >
//                  View Details
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>2024-08-16</td>
//               <td>2408003817</td>
//               <td>Sachin Ramesh</td>
//               <td>50Y / M</td>
//               <td>9876543211</td>
//               <td>Dr. Pooja Mishra</td>
//               <td>CT-Neck</td>
//               <td></td>
//               <td>
//                 <button
//                   className="action-button scan-done"
//                   onClick={handleScanDoneClick}
//                 >
//                   View Details
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* {showAddReport && <AddReportForm />}
//       {showScanDone && <RDLAddScanDoneDetails onClose={closePopups} />} */}
//     </div>
//   );
// }

// export default RDLWardBilling;


import React, { useState } from 'react';
import "../WardBilling/rdlWardBilling.css";
import WardBillingViewDetails from './wardBillingViewDetalis';

function RDLWardBilling() {
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  const handleViewDetailsClick = () => {
    setShowDetailsPopup(true);
  };

  const closeDetailsPopup = () => {
    setShowDetailsPopup(false);
  };

  const printTable = () => {
    const printContents = document.getElementById('table-to-print').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = `<html><head><title>Print</title></head><body>${printContents}</body></html>`;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();  // Reload the page to reset the state
  };

  return (
    <div className="rDLListRequest-active-imaging-request">
      <div className="rDLListRequest-search-N-results">
        <div className="rDLListRequest-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="rDLListRequest-results-info">
          Showing 2 / 2 results
          <button className="rdlListReports-ex-pri-buttons" onClick={printTable}>Print</button>
        </div>
      </div>
      <div className="rDLListRequest-table-N-paginat" id="table-to-print">
        <table>
          <thead>
            <tr>
              <th>Hospital Number</th>
              <th>Patient Name</th>
              <th>Age/Sex</th>
              <th>Contact</th>
              <th>Admitted Date</th>
              <th>Admitted Doctor</th>
              <th>Inpatient No</th>
              <th>Ward/Bed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2408003817</td>
              <td>Sachin Ramesh</td>
              <td>50Y / M</td>
              <td>9087654321</td>
              <td>2024-08-16</td>
              <td>Dr. Pooja Mishra</td>
              <td>H2400023</td>
              <td>H2400023</td>
              <td>
                <button
                  className="action-button add-report"
                  onClick={handleViewDetailsClick}
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr>
            <td>2408003819</td>
              <td> Ramesh Patil</td>
              <td>50Y / M</td>
              <td>9087654321</td>
              <td>2024-08-16</td>
              <td>Dr. Pooja Mishra</td>
              <td>H2400023</td>
              <td>H2400023</td>
              <td>
                <button
                  className="action-button scan-done"
                  onClick={handleViewDetailsClick}
                >
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showDetailsPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup" onClick={closeDetailsPopup}>×</button>
            <WardBillingViewDetails />
          </div>
        </div>
      )}
    </div>
  );
}

export default RDLWardBilling;
