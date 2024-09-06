import React, { useState } from 'react';
import './familyhistory.css'; 

const FamilyHistory = () => {
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
          <label>Family History Problem List</label>
          <button className="add-button" onClick={handleOpenModal}>
            ➕ Add
          </button>
          <table className="family-history-table">
            <thead>
              <tr>
                <th>ICD-11 Description</th>
                <th>ICD-11 code </th>
                <th>Relationship</th>
                <th>Note</th>
                <th>Edit</th>
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
                <input type="text" name="description" placeholder="ICD-11" onChange={handleInputChange} />
              </div>
              <div className="family-history-form-group">
                <label>ICD-11*:</label>
                <input type="text" name="icd11" placeholder="ICD-11" onChange={handleInputChange} />
              </div>
              <div className="family-history-form-group">
                <label>Relationship*:</label>
                <input type="text" name="relationship" onChange={handleInputChange} />
              </div>
              <div className="family-history-form-group">
                <label>Note:</label>
                <textarea name="note" onChange={handleInputChange}></textarea>
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
 
