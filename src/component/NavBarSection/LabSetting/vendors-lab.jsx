import React from 'react';
import "../LabSetting/vendors-lab.css"
const vendorData = [
  { code: 'INTERNAL', name: 'Lab Internal', isExternal: false, isActive: true, isDefault: true },
  { code: 'EXTERNAL', name: 'Shadon', isExternal: true, isActive: true, isDefault: false },
];

function VendorsLab() {
  return (
    <div className="app">
      <button className="add-vendor-btn">+Add New External Vendor</button>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">🔍</button>
      </div>
      <div className="results-info">
        Showing 2 / 2 results
        <button className="print-btn">Print</button>
      </div>
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Vendor Code</th>
            <th>Vendor Name</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Is External?</th>
            <th>Is Active?</th>
            <th>Is Default?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendorData.map((vendor) => (
            <tr key={vendor.code}>
              <td>{vendor.code}</td>
              <td>{vendor.name}</td>
              <td></td>
              <td></td>
              <td>{vendor.isExternal.toString()}</td>
              <td>{vendor.isActive.toString()}</td>
              <td>{vendor.isDefault.toString()}</td>
              <td>
                {vendor.code === 'INTERNAL' ? (
                  <button className="change-btn">Change Restricted (Internal Vendor)</button>
                ) : (
                  <>
                    <button className="edit-btn">Edit</button>
                    <button className="deactivate-btn">Deactivate</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>1 to 2 of 2</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>
    </div>
  );
}

export default VendorsLab;