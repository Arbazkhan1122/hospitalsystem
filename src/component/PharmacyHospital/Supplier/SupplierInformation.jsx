/* Mohini_HospitalHeader_WholePage_14/sep/2024 */
import React from 'react';
import './SupplierInformation.css';

const SupplierInformationCom = () => {
  const suppliers = [
    { name: 'Naynesh', contact: '123456', city: '', pan: '', address: 'kenya', email: '' },
    { name: 'Vishal', contact: '785623', city: '', pan: '', address: 'Dubai', email: '' },
    { name: 'MEDS', contact: '0788989876', city: '', pan: '', address: 'NAIROBI', email: '' },
    { name: 'Temporibus voluptatum', contact: '551681257', city: 'Non cumque culpa minus ut', pan: '', address: 'Sit itaque quo ea ad eligendi temp...', email: 'sa@a.com' },
  ];

  return (
    <div className="supplier-info-list-container">
      <div className="supplier-info-search-container">
        <input type="text" placeholder="Search" className="supplier-infosearch-input" />
        {/* <button className="supplier-info-search-button"><i className="fa fa-search"></i></button> */}
      </div>
      <div className='supplier-info-sale'>
      <div>Showing 4 / 4 results</div>

          <button className="supplier-info-export-button">Export</button>
          <button className="supplier-info-print-button">Print</button>
        </div>
        <div className='supplier-info-supplier-info-com'>
      <table className="supplier-info-supplier-table">
        <thead>
          <tr>
            <th>SupplierName</th>
            <th>Contact No</th>
            <th>City</th>
            <th>Pan No.</th>
            <th>ContactAddress</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={index}>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.city}</td>
              <td>{supplier.pan}</td>
              <td>{supplier.address}</td>
              <td>{supplier.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="supplier-info-pagination-container">
       
          <button className="supplier-info-pagination-button">First</button>
          <button className="supplier-info-pagination-button">Previous</button>
          <span>Page 1 of 1</span>
          <button className="supplier-info-pagination-button">Next</button>
          <button className="supplier-info-pagination-button">Last</button>
       
        
      </div> */}
      </div>
    </div>
  );
};

export default SupplierInformationCom;
/* Mohini_HospitalHeader_WholePage_14/sep/2024 */
