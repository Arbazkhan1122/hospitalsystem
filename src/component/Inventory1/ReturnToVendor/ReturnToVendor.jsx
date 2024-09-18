import React, { useState, useEffect, useRef } from 'react';
import './ReturnToVendor.css';
import CreateReturnToVendor from './CreateReturnToVendor';
import CustomModal from "../CustomModel/CustomModal";
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const ReturnToVendor = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [returnData, setReturnData] = useState([]); // State to hold the fetched data
  const [isLoading, setIsLoading] = useState(true); // State to manage loading
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/returnToVendor');
        if (response.ok) {
          const data = await response.json();
          setReturnData(data); // Set the fetched data
          setIsLoading(false);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty array ensures this runs once when the component mounts

  // Filter the returnData based on the search query
  const filteredData = returnData.filter((item) =>
    item.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.creditNoteNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="returnToVendor-interface">
      <div className="returnToVendor-button">
        <button className="ret-button" onClick={openModal}>
          +Create New Return
        </button>
      </div>

      {/* Modal */}
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <CreateReturnToVendor />
      </CustomModal>

      {/* Search Bar */}
      <div className="returnToVendor-searchBar">
        <input
          type="text"
          className="ret-input"
          placeholder="Search by vendor or credit note no."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
        />
        <div className="ret-inner-div">
          <p>Showing {filteredData.length}/{returnData.length} result(s)</p>
          <button className="ret-button">Print</button>
        </div>
      </div>

      {/* Table */}
      <div className='return-to-vendor-ta'>
      <div className="returnToVendor-table">
      <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Vendor Name",
                "Credit Note No",
                "Returned On",
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
            {isLoading ? (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            ) : filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.vendor}</td>
                  <td>{item.creditNoteNo}</td>
                  <td>{new Date(item.returnOn).toLocaleDateString()}</td>
                  <td>
                    <button className="returnToVendor-ret-button">View</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="returnToVendor-returnToVendor-no-rows">No Rows To Show</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="returnToVendor-returnToVendor-pagination">
        <span>{returnData.length > 0 ? `1 to ${filteredData.length} of ${returnData.length}` : '0 to 0 of 0'}</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div> */}
      </div>
    </div>
  );
};

export default ReturnToVendor;
