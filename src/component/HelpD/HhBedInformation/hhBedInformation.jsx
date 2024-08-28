// // import React from 'react';
// // import "../HhBedInformation/hhBedInformation.css";

// // function HHBedInformation() {

// //   const handlePrint = () => {
// //     window.print();
// //   };

// //   return (
// //     <div className="bedInformation-container">
// //       <div className="bedInformation-stats-container">
// //         <div className="stat-card total">
// //           <h2>Total No. of Beds</h2>
// //           <span className="number">31</span>
// //         </div>
// //         <div className="stat-card available">
// //           <h2>Available No. of Beds</h2>
// //           <span className="number">18</span>
// //         </div>
// //         <div className="stat-card occupied">
// //           <h2>Occupied No. of Beds</h2>
// //           <span className="number">13</span>
// //         </div>
// //       </div>
      
// //       <div className="bedInformation-table-container">
// //         <h4>BED OCCUPANCY STATUS</h4>
// //         <div className="bedInformation-button-container">
// //           <button className="bedInformation-print-btn" onClick={handlePrint}>
// //             <i className="fa-solid fa-print"></i> Print
// //           </button>
// //           <button className="bedInformation-export-btn">
// //             <i className="fa-regular fa-file-excel"></i> Export
// //           </button>
// //         </div>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Ward Name</th>
// //               <th>Occupied</th>
// //               <th>Vacant</th>
// //               <th>Reserved</th>
// //               <th>Total</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //               <td className='wardNameColumn'>Brain Ward</td>
// //               <td>0</td>
// //               <td>1</td>
// //               <td>0</td>
// //               <td>1</td>
// //             </tr>
// //             <tr>
// //               <td className='wardNameColumn'>Female Ward</td>
// //               <td>4</td>
// //               <td>2</td>
// //               <td>0</td>
// //               <td>6</td>
// //             </tr>
// //             <tr>
// //               <td className='wardNameColumn'>ICU</td>
// //               <td>1</td>
// //               <td>5</td>
// //               <td>0</td>
// //               <td>6</td>
// //             </tr>
// //             <tr>
// //               <td className='wardNameColumn'>Male Ward</td>
// //               <td>4</td>
// //               <td>1</td>
// //               <td>1</td>
// //               <td>6</td>
// //             </tr>
// //             <tr>
// //               <td className='wardNameColumn'>MATERNITY WARD</td>
// //               <td>3</td>
// //               <td>5</td>
// //               <td>0</td>
// //               <td>8</td>
// //             </tr>
// //             <tr>
// //               <td className='wardNameColumn'>Private Ward</td>
// //               <td>1</td>
// //               <td>4</td>
// //               <td>0</td>
// //               <td>5</td>
// //             </tr>
// //             <tr className="bedInformation-total-row">
// //               <td>Total</td>
// //               <td>13</td>
// //               <td>18</td>
// //               <td>1</td>
// //               <td>32</td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HHBedInformation;
// import React from 'react';
// import * as XLSX from 'xlsx';
// import "../HhBedInformation/hhBedInformation.css";

// function HHBedInformation() {

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleExport = () => {
//     const table = document.querySelector("table");
//     const workbook = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
//     XLSX.writeFile(workbook, "BedInformation.xlsx");
//   };

//   return (
//     <div className="bedInformation-container">
//       <div className="bedInformation-stats-container">
//         <div className="stat-card total">
//           <h2>Total No. of Beds</h2>
//           <span className="number">31</span>
//         </div>
//         <div className="stat-card available">
//           <h2>Available No. of Beds</h2>
//           <span className="number">18</span>
//         </div>
//         <div className="stat-card occupied">
//           <h2>Occupied No. of Beds</h2>
//           <span className="number">13</span>
//         </div>
//       </div>
      
//       <div className="bedInformation-table-container">
//         <h4>BED OCCUPANCY STATUS</h4>
//         <div className="bedInformation-button-container">
//           <button className="bedInformation-print-btn" onClick={handlePrint}>
//             <i className="fa-solid fa-print"></i> Print
//           </button>
//           <button className="bedInformation-export-btn" onClick={handleExport}>
//             <i className="fa-regular fa-file-excel"></i> Export
//           </button>
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>Ward Name</th>
//               <th>Occupied</th>
//               <th>Vacant</th>
//               <th>Reserved</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className='wardNameColumn'>Brain Ward</td>
//               <td>0</td>
//               <td>1</td>
//               <td>0</td>
//               <td>1</td>
//             </tr>
//             <tr>
//               <td className='wardNameColumn'>Female Ward</td>
//               <td>4</td>
//               <td>2</td>
//               <td>0</td>
//               <td>6</td>
//             </tr>
//             <tr>
//               <td className='wardNameColumn'>ICU</td>
//               <td>1</td>
//               <td>5</td>
//               <td>0</td>
//               <td>6</td>
//             </tr>
//             <tr>
//               <td className='wardNameColumn'>Male Ward</td>
//               <td>4</td>
//               <td>1</td>
//               <td>1</td>
//               <td>6</td>
//             </tr>
//             <tr>
//               <td className='wardNameColumn'>MATERNITY WARD</td>
//               <td>3</td>
//               <td>5</td>
//               <td>0</td>
//               <td>8</td>
//             </tr>
//             <tr>
//               <td className='wardNameColumn'>Private Ward</td>
//               <td>1</td>
//               <td>4</td>
//               <td>0</td>
//               <td>5</td>
//             </tr>
//             <tr className="bedInformation-total-row">
//               <td>Total</td>
//               <td>13</td>
//               <td>18</td>
//               <td>1</td>
//               <td>32</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default HHBedInformation;


import React from 'react';
import * as XLSX from 'xlsx';
import "../HhBedInformation/hhBedInformation.css";

function HHBedInformation() {

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    // Get the table element
    const table = document.querySelector("table");
    
    // Convert table to a worksheet
    const ws = XLSX.utils.table_to_sheet(table);
    
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Add custom rows at the beginning
    const createdDate = `Created Date: ${new Date().toLocaleDateString()}`;
    XLSX.utils.sheet_add_aoa(ws, [[createdDate]], { origin: 'A1' });
    XLSX.utils.sheet_add_aoa(ws, [["Ward wise Bed Occupancy"]], { origin: 'A2' });
    
    // Move the table down by 3 rows to accommodate the custom headers
    XLSX.utils.sheet_add_aoa(ws, [[""]], { origin: 'A4' });

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Write the workbook to a file
    XLSX.writeFile(wb, "BedInformation.xlsx");
  };

  return (
    <div className="bedInformation-container">
      <div className="bedInformation-stats-container">
        <div className="stat-card total">
          <h2>Total No. of Beds</h2>
          <span className="number">31</span>
        </div>
        <div className="stat-card available">
          <h2>Available No. of Beds</h2>
          <span className="number">18</span>
        </div>
        <div className="stat-card occupied">
          <h2>Occupied No. of Beds</h2>
          <span className="number">13</span>
        </div>
      </div>
      
      <div className="bedInformation-table-container">
        <h4>BED OCCUPANCY STATUS</h4>
        <div className="bedInformation-button-container">
          <button className="bedInformation-print-btn" onClick={handlePrint}>
            <i className="fa-solid fa-print"></i> Print
          </button>
          <button className="bedInformation-export-btn" onClick={handleExport}>
            <i className="fa-regular fa-file-excel"></i> Export
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Ward Name</th>
              <th>Occupied</th>
              <th>Vacant</th>
              <th>Reserved</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='wardNameColumn'>Brain Ward</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td className='wardNameColumn'>Female Ward</td>
              <td>4</td>
              <td>2</td>
              <td>0</td>
              <td>6</td>
            </tr>
            <tr>
              <td className='wardNameColumn'>ICU</td>
              <td>1</td>
              <td>5</td>
              <td>0</td>
              <td>6</td>
            </tr>
            <tr>
              <td className='wardNameColumn'>Male Ward</td>
              <td>4</td>
              <td>1</td>
              <td>1</td>
              <td>6</td>
            </tr>
            <tr>
              <td className='wardNameColumn'>MATERNITY WARD</td>
              <td>3</td>
              <td>5</td>
              <td>0</td>
              <td>8</td>
            </tr>
            <tr>
              <td className='wardNameColumn'>Private Ward</td>
              <td>1</td>
              <td>4</td>
              <td>0</td>
              <td>5</td>
            </tr>
            <tr className="bedInformation-total-row">
              <td>Total</td>
              <td>13</td>
              <td>18</td>
              <td>1</td>
              <td>32</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HHBedInformation;
