
import React, { useState, useRef } from 'react';
// import "../DisStocks/dispenSalesProvisionalBill.css"
import { useReactToPrint } from 'react-to-print';
import "../DisSales/dispenSalesProvisionalSettelment.css"

DispenSalesProvisionalSettelment
function DispenSalesProvisionalSettelment() {
  const [showAddReport, setShowAddReport] = useState(false);
  const [showScanDone, setShowScanDone] = useState(false);
  const [showCreateRequisition, setShowCreateRequisition] = useState(false);

  const printRef = useRef();

  const handleCreateRequisitionClick = () => {
    setShowCreateRequisition(true);
  };
  const closePopups = () => {
    setShowAddReport(false);
    setShowScanDone(false);
    setShowCreateRequisition(false);

  };
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'ProvisionalBill_Report',
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
    `,
  });

  return (
    <div className="dispenSalesProvisionalSettelment-active-imaging-request">
       
        <>
      {/* Rest of your code */}
      <header className='dispenSalesProvisionalSettelment-header'>
         {/* <h4>* ACTIVE IMAGING R EQUEST</h4> */}
         {/* <div className="dispenSalesProvisionalSettelment-checkBox">
           <label>
            <input type="checkbox" />
             All
           </label>
           
            <input type="checkbox" />
            <label >Completed</label>
            <input type="checkbox" />
            <label >Pending</label>
           

             
         </div> */}
       </header>
       <div className="dispenSalesProvisionalSettelment-controls">

       <div className="dispenSalesProvisionalSettelment-select-filters">
          <label>Credit Organizations:
            <select defaultValue="All">
              <option>General</option>
            </select>
          </label>
        </div>
         {/* <div className="dispenSalesProvisionalSettelment-date-range">
           <label>
             From:
             <input type="date" defaultValue="2024-08-09" />
           </label>
           <label>
             To:
             <input type="date" defaultValue="2024-08-16" />
           </label>
           <button className="dispenSalesProvisionalSettelment-star-button">☆</button>
           <button className="dispenSalesProvisionalSettelment-ok-button">OK</button>
         </div> */}
         {/* <button className='dispenSalesProvisionalSettelment-CreateRequisition'>Load Data</button> */}
       </div>
       <div className="dispenSalesProvisionalSettelment-search-N-results">
         <div className="dispenSalesProvisionalSettelment-search-bar">
           <i className="fa-solid fa-magnifying-glass"></i>
           <input type="text" placeholder="Search" />
         </div>
         <div className="dispenSalesProvisionalSettelment-results-info">
           Showing 2 / 2 results
           <button className='dispenSalesProvisionalSettelment-print-btn'
           onClick={handlePrint}
           >Print</button>
         </div>
       </div>
       <div style={{ display: 'none' }}>
            <div ref={printRef}>
              <h2>Provisional Bill Report</h2>
              <p>Date and Time: {new Date().toLocaleString()}</p>
              <table>
                <thead>
                  <tr>
                  <th>Hospital Number</th>
              <th>Ret Receipt No</th>
              <th>Patient Name</th>
              <th>Contact No.</th>
              <th>Age/Sex </th>
              <th>SubTotal</th>
              <th>Discount</th>
              <th>Total</th>
              <th>Ref No</th>
              <th>LastReturnDate</th>
              <th>VisitType</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* Add your table data here */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      <div className="dispenSalesProvisionalSettelment-table-N-paginat">
        
        <table>
          <thead>
            <tr>
              <th>Hospital Number</th>
              <th>Patient Name</th>
              <th>Age/Sex </th>
              <th>Deposit Amt  </th>
              <th>Credit Amt  </th>
              <th>Provisional Amt  </th>
              <th>Blance Amt  </th>
              <th>Last Credit</th>
              <th>Last Deposit</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
            <tr>
              
            </tr>
          </tbody>
        </table>
        {/* <div className="dispenSalesProvisionalSettelment-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div> */}
      </div>

      </>
      

    </div>
  );
}

export default DispenSalesProvisionalSettelment;