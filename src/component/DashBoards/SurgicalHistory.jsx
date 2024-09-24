import React, { useRef, useState } from 'react';
import './SurgicalHistory.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const SurgicalHistory = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [surgicalHistories, setSurgicalHistories] = useState([]);
  const [newSurgicalHistory, setNewSurgicalHistory] = useState({});
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
    setNewSurgicalHistory({});
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSurgicalHistory = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/surgical-histories/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Surgical History added successfully!');
        // Reset form and close modal
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
                  "ICD-11 Description",
                  "ICD-11 Code",
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
                  <td>{history.description}</td>
                  <td>{history.icd11}</td>
                  <td>{history.surgeryDate}</td>
                  <td>{history.note}</td>
                  <td>
                    <button>Edit</button>
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
        </div>
      </div>
    </div>
  );
};

export default SurgicalHistory;
