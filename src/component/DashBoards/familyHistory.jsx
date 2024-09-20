import React, { useRef, useState } from 'react';
import './familyhistory.css'; 
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const FamilyHistory = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
  const [familyHistories, setFamilyHistories] = useState([]); 
  const [newFamilyHistory, setNewFamilyHistory] = useState({}); 

  const handleOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setNewFamilyHistory({}); 
  };

  const handleAddFamilyHistory = () => {
    setFamilyHistories([...familyHistories, newFamilyHistory]); 
    handleCloseModal(); 
  };

  const handleInputChange = (e) => {
    setNewFamilyHistory({ ...newFamilyHistory, [e.target.name]: e.target.value });
  };

  return (
    <div className="family-history-container">
      {/* Family History Section */}
      <div className="family-history-main">
        <div className='family'>
        <section className="family-history-section">
          <div className='family-history-subdiv'>
          <label>Family History Problem List</label>
          <button className="family-history-add-button" onClick={handleOpenModal}>
            ➕ Add
          </button>
          </div>
          <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "ICD-11 Description",
  "ICD-11 Code",
  "Relationship",
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
              {familyHistories.map((history, index) => (
                <tr key={index}>
                  <td className="family-history-table-data">{history.description}</td>
                  <td>{history.icd11}</td>
                  <td className="family-history-table-data">{history.relationship}</td>
                  <td className="family-history-table-data">{history.note}</td>
                  <td className="family-history-table-data">
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Modal for Adding Family History */}
        {isAddModalOpen && (
          <div className="family-history-modal-overlay">
            <div className="family-history-modal-content">
              <h6>Add Family History</h6>
              <button className="family-history-close-button" onClick={handleCloseModal}>
                ❌
              </button>
              <div className="family-history-form-group">
                <label>Search Problem*:</label>
                <input className='family-history-form-group-input' type="text" name="description" placeholder="ICD-11" onChange={handleInputChange} />
              </div>
              <div className="family-history-form-group">
                <label>ICD-11*:</label>
                <input  className='family-history-form-group-input' type="text" name="icd11" placeholder="ICD-11" onChange={handleInputChange} />
              </div>
              <div className="family-history-form-group">
                <label>Relationship*:</label>
                <input  className='family-history-form-group-input' type="text" name="relationship" onChange={handleInputChange} />
              </div>
              <div className="family-history-form-group">
                <label>Note:</label>
                <textarea  className='family-history-form-group-input' name="note" onChange={handleInputChange}></textarea>
              </div>
              <button className="family-history-add-button" onClick={handleAddFamilyHistory}>
                Add Family History
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default FamilyHistory;
 
