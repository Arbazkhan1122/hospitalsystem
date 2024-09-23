import React, { useState } from 'react';
import './Vendors.css';
import AddVendor from '../components/AddVendor';
import UpdateVendor from '../components/UpdateVendor';

const Vendors = () => {
  const [isAddVendorOpen, setIsAddVendorOpen] = useState(false);
  const [isUpdateVendorOpen, setIsUpdateVendorOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);

  const vendors = [
    { name: 'Shadon Medical Diagno...', code: '00001', address: '123123', number: '12312313', isActive: true, receiveDoc: false },
    { name: 'MEDS', code: '00002', address: 'kenya', number: '2587413698', isActive: true, receiveDoc: false },
    { name: 'DAIMA DISPENSING CH...', code: '00003', address: 'kenya', number: '78532145698', isActive: true, receiveDoc: false },
    { name: 'SHIKAMED CHEMIST', code: '00004', address: 'kenya', number: '1001', isActive: true, receiveDoc: false },
    { name: 'Arbaz Pathan', code: '00005', contactPerson: '9876543212', address: 'Pune', number: '9876543212', kraPin: '98252', email: 'arbazpathan@gmail.com', isActive: true, receiveDoc: false },
  ];

  const openAddVendorModal = () => {
    setIsAddVendorOpen(true);
  };

  const closeAddVendorModal = () => {
    setIsAddVendorOpen(false);
  };

  const openUpdateVendorModal = (vendor) => {
    setSelectedVendor(vendor);
    setIsUpdateVendorOpen(true);
  };

  const closeUpdateVendorModal = () => {
    setIsUpdateVendorOpen(false);
  };

  return (
    <div className="vendors-container">
      <button className="add-vendor-btn" onClick={openAddVendorModal}>
        Add Vendor
      </button>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">🔍</button>
      </div>
      <div className="table-header">
        <span>Showing 5 / 5 results</span>
        <button className="print-btn">Print</button>
      </div>
      <table className="vendors-table">
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Vendor Code</th>
            <th>Contact Person</th>
            <th>Contact Address</th>
            <th>Contact Number</th>
            <th>KRA PIN</th>
            <th>Email Address</th>
            <th>Is Active</th>
            <th>Receive Do...</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={index}>
              <td>{vendor.name}</td>
              <td>{vendor.code}</td>
              <td>{vendor.contactPerson || ''}</td>
              <td>{vendor.address}</td>
              <td>{vendor.number}</td>
              <td>{vendor.kraPin || ''}</td>
              <td>{vendor.email || ''}</td>
              <td>{vendor.isActive.toString()}</td>
              <td>{vendor.receiveDoc.toString()}</td>
              <td>
                <button className="edit-btn" onClick={() => openUpdateVendorModal(vendor)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>1 to 5 of 5</span>
        <button className="page-btn">First</button>
        <button className="page-btn">Previous</button>
        <span>Page 1 of 1</span>
        <button className="page-btn">Next</button>
        <button className="page-btn">Last</button>
      </div>

      {/* AddVendor Modal */}
      <AddVendor isOpen={isAddVendorOpen} onClose={closeAddVendorModal} />

      {/* UpdateVendor Modal */}
      {isUpdateVendorOpen && (
        <UpdateVendor
          isOpen={isUpdateVendorOpen}
          onClose={closeUpdateVendorModal}
          vendor={selectedVendor}
        />
      )}
    </div>
  );
};

export default Vendors;
