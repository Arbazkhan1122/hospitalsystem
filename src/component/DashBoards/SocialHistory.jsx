import React, { useEffect, useRef, useState } from "react";
import "./SocialHistory.css";
import { startResizing } from "../TableHeadingResizing/resizableColumns";
import { API_BASE_URL } from "../api/api";
import axios from "axios";

const SocialHistory = ({patientId,newPatientVisitId}) => {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [socialHistories, setSocialHistories] = useState([]);
  const [socialHistory,setSocialHistory] = useState({});
  const [updateSocialHistory,setUpdateSocialHistory]=useState({});
  const [newSocialHistory, setNewSocialHistory] = useState({
    smokingHistory: '',
    alcoholHistory: '',
    drugHistory: '',
    occupation: '',
    familySupport: '',
    hobby: ''
  });

  const handleOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsUpdateModalOpen(false);
  };


  useEffect(() => {
    setUpdateSocialHistory({
      smokingHistory: socialHistory.smokingHistory || "",
      alcoholHistory: socialHistory.alcoholHistory || "",
      drugHistory: socialHistory.drugHistory || "",
      occupation: socialHistory.occupation || "",
      familySupport: socialHistory.familySupport || "",
      hobby: socialHistory.hobby || "",
    });
  }, [socialHistory]);
  useEffect(() => {
    const fetchSocialHistories = () => {
      let endpoint = "";
  
      // Check if newPatientVisitId or admissionId is present
      if (newPatientVisitId) {
        endpoint = `${API_BASE_URL}/social-histories/by-newVisitPatientId/${newPatientVisitId}`;
      } else if (patientId) {
        endpoint = `${API_BASE_URL}/social-histories/by-patientId/${patientId}`;
      }
  
      // If an endpoint is determined, make the API call
      if (endpoint) {
        axios
          .get(endpoint)
          .then((response) => {
            if (response.data.length > 0) {
              setSocialHistories(response.data);
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.error("Error fetching social histories:", error);
          });
      }
    };
  
    fetchSocialHistories();
  }, [patientId, newPatientVisitId,isAddModalOpen,isUpdateModalOpen]); // Dependencies to re-fetch when IDs change
  

  const handleAddSocialHistory = async () => {
    const formData =
        patientId > 0
          ? { ...newSocialHistory, patientDTO: { patientId } }
          : { ...newSocialHistory, newPatientVisitDTO: { newPatientVisitId } };
    console.log(formData);
    
    try {
      const response = await fetch(`${API_BASE_URL}/social-histories/save-social-history`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Social History added successfully!');
        // Reset the form and close the modal
        setNewSocialHistory({
          smokingHistory: '',
          alcoholHistory: '',
          drugHistory: '',
          occupation: '',
          familySupport: '',
          hobby: ''
        });
        handleCloseModal();
      } else {
        alert('Failed to add Social History');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  const handleUpdate =(item)=>{
    setSocialHistory(item);
    setIsUpdateModalOpen(true);
    setIsAddModalOpen(false);
  }



  const handleUpdateSocialHistory = async () => {
    console.log(updateSocialHistory);
    
    try {
      const response = await fetch(`${API_BASE_URL}/social-histories/update/${socialHistory.socialHistoryId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateSocialHistory),
      });

      if (response.ok) {
        alert('Social History added successfully!');
        setNewSocialHistory({
          smokingHistory: '',
          alcoholHistory: '',
          drugHistory: '',
          occupation: '',
          familySupport: '',
          hobby: ''
        });
        handleCloseModal();
      } else {
        alert('Failed to add Social History');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSocialHistory({ ...newSocialHistory, [name]: value });
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateSocialHistory({ ...updateSocialHistory, [name]: value });
  };

  return (
    <div className="social-history-container">
      <div className="social-history-main">
        <div className="socialhist">
          <section className="social-history-section">
            <div className="social-history-subdiv">
              <label>Social History Problem List</label>
              <button
                className="social-history-add-button"
                onClick={handleOpenModal}
              >
                ➕ Add
              </button>
            </div>
            <table className="patientList-table" ref={tableRef}>
              <thead>
                <tr>
                  {[
                    "Smoking History",
                    "Alcohol History",
                    "Drug History",
                    "Occupation",
                    "Family Support",
                    "Hobby",
                    "Edit",
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
                {socialHistories.map((history, index) => (
                  <tr key={index}>
                    <td>{history.smokingHistory}</td>
                    <td>{history.alcoholHistory}</td>
                    <td>{history.drugHistory}</td>
                    <td>{history.occupation}</td>
                    <td>{history.familySupport}</td>
                    <td>{history.hobby}</td>
                    <td>
                      <button onClick={()=>handleUpdate(history)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Modal for Adding Social History */}
          {isAddModalOpen && (
            <div className="social-history-modal-overlay">
            <div className="social-history-modal-content">
              <h6>Add Social History</h6>
              <button className="social-history-close-button" onClick={handleCloseModal}>
                ❌
              </button>
      
              <div className="social-history-form-group">
                <label>Smoking History:</label>
                <input
                  type="text"
                  name="smokingHistory"
                  value={newSocialHistory.smokingHistory}
                  onChange={handleInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Alcohol History:</label>
                <input
                  type="text"
                  name="alcoholHistory"
                  value={newSocialHistory.alcoholHistory}
                  onChange={handleInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Drug History:</label>
                <input
                  type="text"
                  name="drugHistory"
                  value={newSocialHistory.drugHistory}
                  onChange={handleInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Occupation:</label>
                <input
                  type="text"
                  name="occupation"
                  value={newSocialHistory.occupation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Family Support:</label>
                <input
                  type="text"
                  name="familySupport"
                  value={newSocialHistory.familySupport}
                  onChange={handleInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Hobby:</label>
                <input
                  type="text"
                  name="hobby"
                  value={newSocialHistory.hobby}
                  onChange={handleInputChange}
                />
              </div>
      
              <button className="social-history-add-button" onClick={handleAddSocialHistory}>
                Add Social History
              </button>
            </div>
          </div>
          )}

{isUpdateModalOpen && (
            <div className="social-history-modal-overlay">
            <div className="social-history-modal-content">
              <h6>Update Social History</h6>
              <button className="social-history-close-button" onClick={handleCloseModal}>
                ❌
              </button>
      
              <div className="social-history-form-group">
                <label>Smoking History:</label>
                <input
                  type="text"
                  name="smokingHistory"
                  value={updateSocialHistory.smokingHistory}
                  onChange={handleUpdateInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Alcohol History:</label>
                <input
                  type="text"
                  name="alcoholHistory"
                  value={updateSocialHistory.alcoholHistory}
                  onChange={handleUpdateInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Drug History:</label>
                <input
                  type="text"
                  name="drugHistory"
                  value={updateSocialHistory.drugHistory}
                  onChange={handleUpdateInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Occupation:</label>
                <input
                  type="text"
                  name="occupation"
                  value={updateSocialHistory.occupation}
                  onChange={handleUpdateInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Family Support:</label>
                <input
                  type="text"
                  name="familySupport"
                  value={updateSocialHistory.familySupport}
                  onChange={handleUpdateInputChange}
                />
              </div>
              <div className="social-history-form-group">
                <label>Hobby:</label>
                <input
                  type="text"
                  name="hobby"
                  value={updateSocialHistory.hobby}
                  onChange={handleUpdateInputChange}
                />
              </div>
      
              <button className="social-history-add-button" onClick={handleUpdateSocialHistory}>
                Update Social History
              </button>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialHistory;
