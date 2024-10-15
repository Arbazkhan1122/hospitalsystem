import React, { useState, useEffect, useRef } from 'react';
import './AdditionalServicesItems.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const AdditionalServicesItems = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
  return (
    <div className="additional-service-container">
      <div className="additional-service-header">
        <div className="additional-service-title">+ Additional Service Item</div>
       
      </div>
      <div className="additional-service-search-box">
          <input type="text" placeholder="Search..." />
          {/* <button className='additional-ser'>🔍</button> */}
        </div>
     <div className='table-container'>
     <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Group Name",
  "Price Category",
  "Service Item",
  "Minimum Charge Amount",
  "Use Item Self Price?",
  "Percentage of Parent Item For Same Dept",
  "Percentage Of Parent Item For Diff Dept",
  "With PreAnaesthesis?",
  "Is PreAnaesthesia?",
  "Is Up Service Item",
  "Is Op Service Item",
  "Is Active",
  "Action"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        <tbody>
          <tr>
            <td colSpan="13" className="additional-service-no-results">No Rows To Show</td>
          </tr>
        </tbody>
      </table>
      {/* <div className="additional-service-pagination">
        <button>First</button>
        <button>Previous</button>
        <span>Page 0 of 0</span>
        <button>Next</button>
        <button>Last</button>
      </div>
      <div className="additional-service-results-info">
        0 to 0 of 0
      </div> */}
     </div>
    </div>
  );
};

export default AdditionalServicesItems;
