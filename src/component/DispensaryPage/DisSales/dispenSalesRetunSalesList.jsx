
// import React, { useState, useRef } from 'react';
// // import "../DisStocks/dispenSalesRetunSalesList.css"
// import { useReactToPrint } from 'react-to-print';
// import "../DisSales/dispenSalesRetunSalesList.css"

// function DispenSalesRetunSalesList() {
//   const [showAddReport, setShowAddReport] = useState(false);
//   const [showScanDone, setShowScanDone] = useState(false);
//   const [showCreateRequisition, setShowCreateRequisition] = useState(false);

//   const printRef = useRef();

//   const handleCreateRequisitionClick = () => {
//     setShowCreateRequisition(true);
//   };
//   const closePopups = () => {
//     setShowAddReport(false);
//     setShowScanDone(false);
//     setShowCreateRequisition(false);

//   };
//   const handlePrint = useReactToPrint({
//     content: () => printRef.current,
//     documentTitle: 'Requisition_Report',
//     pageStyle: `
//       @page {
//         size: A4;
//         margin: 20mm;
//       }
//     `,
//   });

//   return (
//     <div className="dispenSalesRetunSalesList-active-imaging-request">
       
//         <>
//       {/* Rest of your code */}
//       <header className='dispenSalesRetunSalesList-header'>
//          {/* <h4>* ACTIVE IMAGING R EQUEST</h4> */}
//          {/* <div className="dispenSalesRetunSalesList-checkBox">
//            <label>
//             <input type="checkbox" />
//              All
//            </label>
           
//             <input type="checkbox" />
//             <label >Completed</label>
//             <input type="checkbox" />
//             <label >Pending</label>
           

             
//          </div> */}
//        </header>
//        <div className="dispenSalesRetunSalesList-controls">
//          <div className="dispenSalesRetunSalesList-date-range">
//            <label>
//              From:
//              <input type="date" defaultValue="2024-08-09" />
//            </label>
//            <label>
//              To:
//              <input type="date" defaultValue="2024-08-16" />
//            </label>
//            <button className="dispenSalesRetunSalesList-star-button">☆</button>
//            <button className="dispenSalesRetunSalesList-ok-button">OK</button>
//          </div>
//          <button className='dispenSalesRetunSalesList-CreateRequisition'>Load Data</button>
//        </div>
//        <div className="dispenSalesRetunSalesList-search-N-results">
//          <div className="dispenSalesRetunSalesList-search-bar">
//            <i className="fa-solid fa-magnifying-glass"></i>
//            <input type="text" placeholder="Search" />
//          </div>
//          <div className="dispenSalesRetunSalesList-results-info">
//            Showing 2 / 2 results
//            {/* <button className='dispenSalesRetunSalesList-print-btn'onClick={handlePrint}>Print</button> */}
//          </div>
//        </div>
//        <div style={{ display: 'none' }}>
//             <div ref={printRef}>
//               <h2>Requisition Report</h2>
//               <p>Date and Time: {new Date().toLocaleString()}</p>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Req.No</th>
//                     <th>Requested By</th>
//                     <th>Requested From</th>
//                     <th>Date</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     {/* Add your table data here */}
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//       <div className="dispenSalesRetunSalesList-table-N-paginat">
        
//         <table>
//           <thead>
//             <tr>
//               <th>Hospital Number</th>
//               <th>Ref.Invoice No</th>
//               <th>Patient Name</th>
//               <th>Sub Total</th>
//               <th>Dis Amt </th>
//               <th>Tatal Amt</th>
//               <th>Return Date</th>
//               <th>Credit Note No.</th>
//               <th>Patient Type</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
              
//             </tr>
//             <tr>
              
//             </tr>
//           </tbody>
//         </table>
//         <div className="dispenSalesRetunSalesList-pagination">
//           <span>0 to 0 of 0</span>
//           <button>First</button>
//           <button>Previous</button>
//           <span>Page 0 of 0</span>
//           <button>Next</button>
//           <button>Last</button>
//         </div>
//       </div>

//       </>
      

//     </div>
//   );
// }

// export default DispenSalesRetunSalesList;

import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import "../DisSales/dispenSalesRetunSalesList.css";

function DispenSalesRetunSalesList() {
  const [returnLists, setReturnLists] = useState([]); // State to store return list data
  const [showCreateRequisition, setShowCreateRequisition] = useState(false);
  const printRef = useRef();

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://192.168.1.40:3155/api/hospital/return-lists/fetch-all-returnList')
      .then(response => response.json())
      .then(data => setReturnLists(data))
      .catch(error => console.error('Error fetching return list data:', error));
  }, []);

  const handleCreateRequisitionClick = () => {
    setShowCreateRequisition(true);
  };

  const closePopups = () => {
    setShowCreateRequisition(false);
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Requisition_Report',
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
    `,
  });

  return (
    <div className="dispenSalesRetunSalesList-active-imaging-request">
      {/* Header and Controls */}
      <header className='dispenSalesRetunSalesList-header'>
        {/* Your header and controls code */}
      </header>
      <div className="dispenSalesRetunSalesList-controls">
        <div className="dispenSalesRetunSalesList-date-range">
          <label>
            From:
            <input type="date" defaultValue="2024-08-09" />
          </label>
          <label>
            To:
            <input type="date" defaultValue="2024-08-16" />
          </label>
          <button className="dispenSalesRetunSalesList-star-button">☆</button>
          <button className="dispenSalesRetunSalesList-ok-button">OK</button>
        </div>
        <button className='dispenSalesRetunSalesList-CreateRequisition'>Load Data</button>
      </div>

      {/* Search and Results Info */}
      <div className="dispenSalesRetunSalesList-search-N-results">
        <div className="dispenSalesRetunSalesList-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="dispenSalesRetunSalesList-results-info">
          Showing {returnLists.length} / {returnLists.length} results
        </div>
      </div>

      {/* Hidden Print Section */}
      <div style={{ display: 'none' }}>
        <div ref={printRef}>
          <h2>Requisition Report</h2>
          <p>Date and Time: {new Date().toLocaleString()}</p>
          <table>
            <thead>
              <tr>
                <th>Req.No</th>
                <th>Requested By</th>
                <th>Requested From</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {returnLists.map((item) => (
                <tr key={item.returnListId}>
                  <td>{item.returnListId}</td>
                  <td>{item.patientName}</td>
                  <td>{item.refInvoiceNumber}</td>
                  <td>{item.returnDate}</td>
                  <td>{item.patientType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table and Pagination */}
      <div className="dispenSalesRetunSalesList-table-N-paginat">
        <table>
          <thead>
            <tr>
              <th>Hospital Number</th>
              <th>Ref.Invoice No</th>
              <th>Patient Name</th>
              <th>Sub Total</th>
              <th>Dis Amt </th>
              <th>Total Amt</th>
              <th>Return Date</th>
              <th>Credit Note No.</th>
              <th>Patient Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {returnLists.map((item) => (
              <tr key={item.returnListId}>
                <td>{item.returnListId}</td>
                <td>{item.refInvoiceNumber}</td>
                <td>{item.patientName}</td>
                <td>{item.subTotal}</td>
                <td>{item.discountAmount}</td>
                <td>{item.totalAmount}</td>
                <td>{item.returnDate}</td>
                <td>{item.creditNoteNumber}</td>
                <td>{item.patientType}</td>
                <td>
                  <button onClick={() => alert(`Action for ${item.returnListId}`)}>Action</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="dispenSalesRetunSalesList-pagination">
          <span>0 to {returnLists.length} of {returnLists.length}</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 1 of 1</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
    </div>
  );
}

export default DispenSalesRetunSalesList;
