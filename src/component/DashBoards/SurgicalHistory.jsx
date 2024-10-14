import React, { useEffect, useRef, useState } from 'react';
import './SurgicalHistory.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';
import { API_BASE_URL } from '../api/api';
import axios from 'axios';

const SurgicalHistory = ({patientId,newPatientVisitId}) => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen,setIsUpdateModalOpen] = useState(false);
  const [surgicalHistories, setSurgicalHistories] = useState([]);
  const [newSurgicalHistory, setNewSurgicalHistory] = useState({});
  const [updateSurgicalHistory,setUpdateSurgicalHistory]=useState({});
  const [formData, setFormData] = useState({
    surgeryType: '',
    searchProblem: '',
    surgeryDate: '',
    note: ''
  });

  const handleOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsUpdateModalOpen(false)
    
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  useEffect (()=>{
    setUpdateSurgicalHistory({
      surgeryType: newSurgicalHistory.surgeryType || '',
      searchProblem:newSurgicalHistory.searchProblem || '',
      surgeryDate:newSurgicalHistory.surgeryDate || '',
      note:newSurgicalHistory.note || ''
    })

  },[newSurgicalHistory])

  useEffect(() => {
    const fetchSurgicalHistories = () => {
      let endpoint = "";
  
      // Check if newPatientVisitId or admissionId is present
      if (newPatientVisitId) {
        endpoint = `${API_BASE_URL}/surgical-histories/by-newVisitPatientId/${newPatientVisitId}`;
      } else if (patientId) {
        endpoint = `${API_BASE_URL}/surgical-histories/by-patientId/${patientId}`;
      }
  
      // If an endpoint is determined, make the API call
      if (endpoint) {
        axios
          .get(endpoint)
          .then((response) => {
            if (response.data.length > 0) {
              setSurgicalHistories(response.data);
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.error("Error fetching surgical histories:", error);
          });
      }
    };
  
    fetchSurgicalHistories();
  }, [patientId, newPatientVisitId,isUpdateModalOpen,isAddModalOpen]); // Dependencies to track patient IDs
  
  const handleAddSurgicalHistory = async () => {
    const Surgical =
        patientId > 0
          ? { ...formData, patientDTO: { patientId } }
          : { ...formData, newPatientVisitDTO: { newPatientVisitId } };
    console.log(Surgical);
    try {
      const response = await fetch(`${API_BASE_URL}/surgical-histories/save-surgical-history`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Surgical),
      });

      if (response.ok) {
        alert('Surgical History added successfully!');
        setFormData({
          surgeryType: '',
          searchProblem: '',
          surgeryDate: '',
          note: ''
        });
        handleCloseModal();
      } else {
        alert('Failed to add Surgical History');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };


  const handleUpdateSurgicalHistory = async () => {
    console.log(updateSurgicalHistory);
    try {
      const response = await fetch(`${API_BASE_URL}/surgical-histories/update/${newSurgicalHistory.surgicalHistoryId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateSurgicalHistory),
      });

      if (response.ok) {
        alert('Surgical History added successfully!');
        setFormData({
          surgeryType: '',
          searchProblem: '',
          surgeryDate: '',
          note: ''
        });
        handleCloseModal();
      } else {
        alert('Failed to add Surgical History');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  const handleUpdate = (item)=>{
    setNewSurgicalHistory(item);
    setIsUpdateModalOpen(true);
    setIsAddModalOpen(false);
  }

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateSurgicalHistory({ ...updateSurgicalHistory, [name]: value });
  };


  return (
    <div className="surgical-history-container">
      <div className="surgical-history-main">
        <div className='surgicalhist'>
        <section className="surgical-history-section">
          <div className='surgical-history-subdiv'>
          <label>Surgical History List</label>
          <button className="surgical-history-add-button" onClick={handleOpenModal}>
            ➕ Add
          </button>
          </div>
          <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                  "Surgery Type",
                  "searchProblem",
                  "Surgery Date",
                  "Note",
                  "Edit"
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
              {surgicalHistories.map((history, index) => (
                <tr key={index}>
                  <td className="surgical-history-table-data">{history.surgeryType}</td>
                  <td>{history.searchProblem}</td>
                  <td>{history.surgeryDate}</td>
                  <td>{history.note}</td>
                  <td>
                    <button onClick={()=>handleUpdate(history)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Modal for Adding Surgical History */}
        {isAddModalOpen && (
        <div className="surgical-history-modal-overlay">
        <div className="surgical-history-modal-content">
          <h6>Add Surgical History</h6>
          <button className="surgical-history-close-button" onClick={handleCloseModal}>
            ❌
          </button>
          <div className="surgical-history-form-group">
            <label>Surgery Type*:</label>
            <input
              type="text"
              name="surgeryType"
              placeholder="Surgery Type"
              value={formData.surgeryType}
              onChange={handleInputChange}
            />
          </div>
          <div className="surgical-history-form-group">
            <label>ICD-11 Description*:</label>
            <input
              type="text"
              name="searchProblem"
              placeholder="ICD-11 Description"
              value={formData.searchProblem}
              onChange={handleInputChange}
            />
          </div>
          <div className="surgical-history-form-group">
            <label>Surgery Date*:</label>
            <input
              type="date"
              name="surgeryDate"
              value={formData.surgeryDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="surgical-history-form-group">
            <label>Note:</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className="surgical-history-add-button" onClick={handleAddSurgicalHistory}>
            Add Surgical History
          </button>
        </div>
      </div>
        )}

{isUpdateModalOpen && (
        <div className="surgical-history-modal-overlay">
        <div className="surgical-history-modal-content">
          <h6>Update Surgical History</h6>
          <button className="surgical-history-close-button" onClick={handleCloseModal}>
            ❌
          </button>
          <div className="surgical-history-form-group">
            <label>Surgery Type*:</label>
            <input
              type="text"
              name="surgeryType"
              placeholder="Surgery Type"
              value={updateSurgicalHistory.surgeryType}
              onChange={handleUpdateInputChange}
            />
          </div>
          <div className="surgical-history-form-group">
            <label>ICD-11 Description*:</label>
            <input
              type="text"
              name="searchProblem"
              placeholder="ICD-11 Description"
              value={updateSurgicalHistory.searchProblem}
              onChange={handleUpdateInputChange}
            />
          </div>
          <div className="surgical-history-form-group">
            <label>Surgery Date*:</label>
            <input
              type="date"
              name="surgeryDate"
              value={updateSurgicalHistory.surgeryDate}
              onChange={handleUpdateInputChange}
            />
          </div>
          <div className="surgical-history-form-group">
            <label>Note:</label>
            <textarea
              name="note"
              value={updateSurgicalHistory.note}
              onChange={handleUpdateInputChange}
            ></textarea>
          </div>
          <button className="surgical-history-add-button" onClick={handleUpdateSurgicalHistory}>
            Update Surgical History
          </button>
        </div>
      </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default SurgicalHistory;
