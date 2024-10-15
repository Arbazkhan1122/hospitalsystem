import React, { useState, useEffect, useRef } from 'react';
import './ExternalReferrals.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const ExternalReferrals = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
  const data = [
    { name: 'ram', address: 'ttki', contact: '589632147', isActive: 'true' },
    { name: 'Dr.pal', address: '', contact: '1324', isActive: 'true' },
    { name: 'datta', address: '', contact: '904986565', isActive: 'true' },
    { name: 'SCD5515', address: '', contact: '1234567890', isActive: 'true' }
  ];

  return (
    <div className="external-reference-table-container">
      <div className="external-reference-table-header">
        <button className="external-reference-add-new-button">+Add New</button>
        
        {/* <div className="search-container">
          
          <button className="external-reference-search-button">
            <i className="fa fa-search"></i>
          </button>

        </div>
         */}
      </div>
      
      <input type="text" placeholder="Search" className="external-reference-search-input" />
       <div className='external-referal-span'>
       <span>Showing 4 / 4 results</span>

       </div>
     <div className='table-container'>
     <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Name",
                 "Address",
                 "Contact No.",
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.contact}</td>
              <td>{item.isActive}</td>
              <td>
                <button className="external-reference-edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="external-reference-pagination">
        <div>
          <button className="external-reference-pagination-button">First</button>
          <button className="external-reference-pagination-button">Previous</button>
          <span>Page 1 of 1</span>
          <button className="external-reference-pagination-button">Next</button>
          <button className="external-reference-pagination-button">Last</button>
        </div>
      </div> */}
     </div>
     
    </div>
  );
};

export default ExternalReferrals;
