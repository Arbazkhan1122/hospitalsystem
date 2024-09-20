import React, { useState } from 'react';
import './SocialHistory.css';

const SocialHistory = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [socialHistories, setSocialHistories] = useState([]);
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
    setNewSocialHistory({
      smokingHistory: '',
      alcoholHistory: '',
      drugHistory: '',
      occupation: '',
      familySupport: '',
      hobby: ''
    });
  };

  const handleAddSocialHistory = () => {
    setSocialHistories([...socialHistories, newSocialHistory]);
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    setNewSocialHistory({ ...newSocialHistory, [e.target.name]: e.target.value });
  };

  return (
    <div className="social-history-container">
      <div className="social-history-main">
        <div className='socialhist'>
          <section className="social-history-section">
          <div className='social-history-subdiv'>
            <label>Social History Problem List</label>
            <button className="social-history-add-button" onClick={handleOpenModal}>
              ➕ Add
            </button>
            </div>
            <table className="social-history-table">
              <thead>
                <tr>
                  <th>Smoking History</th>
                  <th>Alcohol History</th>
                  <th>Drug History</th>
                  <th>Occupation</th>
                  <th>Family Support</th>
                  <th>Hobby</th>
                  <th>Edit</th>
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
                      <button>Edit</button>
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
        </div>
      </div>
    </div>
  );
};

export default SocialHistory;
