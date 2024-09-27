import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../LabSetting/looksUps.css";
import LabLookUpAddNewLUp from './labLookUpAddNewLUp';
import { API_BASE_URL } from '../../api/api';
import LabLookUpUpdateNewLUp from './LabLookUpUpdateNewLUp';

const LookUps = () => {
  const [labTests, setLabTests] = useState([]); // State to store fetched lab lookups
  const [showPopup, setShowPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [lookup,setLookUp] = useState({});
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // Fetch lab lookups from the backend
  const fetchLabLookups = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${API_BASE_URL}/lab-lookups/getAll-lookup`);
      setLabTests(response.data); // Assuming API response is an array of lab lookups
    } catch (err) {
      setError('Failed to fetch lab lookups. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch lab lookups on component mount
  useEffect(() => {
    fetchLabLookups();
  }, []);

  // Handle Add New Look-Up popup
  const handleAddNewLabTestClick = () => {
    setShowPopup(true);

  };
  const handleUpdateNewLabTestClick = (item) => {
    setLookUp(item)
    setShowUpdatePopup(true);
    setShowPopup(false);
    
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setShowUpdatePopup(false);
  };

  return (
    <div className="looksUps-container">
      <div className="looksUps-firstRow">
        <div className="looksUps-addBtn">
          <button className="looksUps-add-button" onClick={handleAddNewLabTestClick}>+ Add New Look-Up</button>
        </div>
      </div>

      <div className="looksUps-search-N-result">
        <div className="looksUps-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="looksUps-results-info">
          <span>Showing {labTests.length} / {labTests.length} results</span>
          <button className="looksUps-print-button">
            <i className="fa-solid fa-print"></i> Print
          </button>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="looksUps-error">{error}</p>}
      <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Module Name</th>
            <th>Look-up Name</th>
            <th>Look-up Data</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labTests.length > 0 ? (
            labTests.map((test, index) => (
              <tr key={index}>
                <td>{test.moduleName}</td>
                <td>{test.lookupName}</td>
                <td>{JSON.stringify(test.lookupdata)}</td> {/* Convert array to string */}
                <td>{test.description}</td>
                <td>
                  <button className="looksUps-edit-button" onClick={()=>handleUpdateNewLabTestClick(test)}>Edit</button>
                  {/* Add deactivate or other action buttons here */}
                </td>
              </tr>
            ))
          ) : (
            !loading && <tr><td colSpan="5">No lab lookups available</td></tr>
          )}
        </tbody>
      </table>
      </div>

      {/* Modal Popup for Add/Edit Look-Up */}
      {showPopup && (
        <div className="looksUps-modal">
          <div className="looksUps-modal-content">
            <LabLookUpAddNewLUp onClose={handleClosePopup} />
          </div>
        </div>
      )}
      {showUpdatePopup && (
        <div className="looksUps-modal">
          <div className="looksUps-modal-content">
            <LabLookUpUpdateNewLUp lookup={lookup} onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LookUps;
