import React, { useState } from 'react';
import './SurgicalHistory.css';

const SurgicalHistory = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [surgicalHistories, setSurgicalHistories] = useState([]);
  const [newSurgicalHistory, setNewSurgicalHistory] = useState({});

  const handleOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setNewSurgicalHistory({});
  };

  const handleAddSurgicalHistory = () => {
    setSurgicalHistories([...surgicalHistories, newSurgicalHistory]);
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    setNewSurgicalHistory({ ...newSurgicalHistory, [e.target.name]: e.target.value });
  };

  return (
    <div className="surgical-history-container">
      <div className="surgical-history-main">
        <div className='surgicalhist'>
        <section className="surgical-history-section">
          <label>Surgical History List</label>
          <button className="add-button" onClick={handleOpenModal}>
            ➕ Add
          </button>
          <table className="surgical-history-table">
            <thead>
              <tr>
                <th>Surgery Type</th>
                <th>ICD-11 Description</th>
                <th>ICD-11 Code</th>
                <th>Surgery Date</th>
                <th>Note</th>
                <th>Edit</th>
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
                <input type="text" name="surgeryType" placeholder="Surgery Type" onChange={handleInputChange} />
              </div>
              <div className="surgical-history-form-group">
                <label>ICD-11 Description*:</label>
                <input type="text" name="description" placeholder="ICD-11 Description" onChange={handleInputChange} />
              </div>
              <div className="surgical-history-form-group">
                <label>ICD-11 Code*:</label>
                <input type="text" name="icd11" placeholder="ICD-11 Code" onChange={handleInputChange} />
              </div>
              <div className="surgical-history-form-group">
                <label>Surgery Date*:</label>
                <input type="date" name="surgeryDate" onChange={handleInputChange} />
              </div>
              <div className="surgical-history-form-group">
                <label>Note:</label>
                <textarea name="note" onChange={handleInputChange}></textarea>
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
