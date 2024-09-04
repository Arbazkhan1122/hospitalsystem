import React, { useEffect, useState } from 'react';
import "../SSPharmacy/sSPRequisition.css";
import { useParams } from 'react-router-dom';
import SSPharmacyReqCreateReq from './sSPharmacyReqCreateReq';

function SSPRequisition() {
  const { store } = useParams();
  const [requisitions, setRequisitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const fetchRequisitions = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/pharmacyRequisitions/getAll');
        if (!response.ok) {
          throw new Error('Failed to fetch requisitions');
        }
        const data = await response.json();
        const filteredData = data.filter(item => item.storeName === store);
        setRequisitions(filteredData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRequisitions();
  }, [store]);

  return (
    <div className="ssp-container">
      <button className="ssp-create-requisition" onClick={handleOpenPopup}>
        <i className="fa-solid fa-plus"></i>Create Requisition
      </button>
      
      {isPopupOpen && (
        <div className="ssp-modal-overlay">
          <div className="ssp-modal-content">
            <button className="ssp-close-button" onClick={handleClosePopup}>
              &times;
            </button>
            <SSPharmacyReqCreateReq />
          </div>
        </div>
      )}

      <div className="ssp-search-bar">
        <input type="text" placeholder="Search" />
        <button type="button">🔍</button>
      </div>

      <div className="ssp-results-header">
        <span>Showing {requisitions.length} / {requisitions.length} results</span>
        <button className="ssp-btn-print">Print</button>
      </div>

      {loading ? (
        <p>Loading requisitions...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table className="ssp-table">
          <thead>
            <tr>
              <th>Req No.</th>
              <th>Requested By</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.requestedBy}</td>
                <td>{req.requestedDate}</td>
                <td>{req.status}</td>
                <td>
                  <button className="ssp-btn-view">View</button>
                  {req.status === 'pending' ? null : (
                    <button className="ssp-btn-receive">Receive Items</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="ssp-pagination">
        <span>1 to {requisitions.length} of {requisitions.length}</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <button className="ssp-active">Page 1 of 1</button>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>
    </div>
  );
}

export default SSPRequisition;
