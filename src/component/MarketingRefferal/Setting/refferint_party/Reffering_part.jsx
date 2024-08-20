import React, { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import './reffering.css'

const ReferringParty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Logic to save the new organization
    alert("Referring Party saved!");
    setIsModalOpen(false);
  };

  return (
    <div className="referring_party_main">
      <div className="referring_party_container">
        <div className="referring_party_new_party">
          <button className="referring_party_new_party_button" onClick={handleOpenModal}>
            <FaPlus className="referring_party_button_icon" />
            Add Referring Party
          </button>
        </div>
      </div>

      <div className="referring_party_filter_content">
        <div className="referring_party_search_bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="referring_party_input_text"
          />
          <button className="referring_party_filter_button">
            <FaSearch />
          </button>
          <div style={{marginLeft:"70%"}}>
            <label>Showing 0 results</label>
          </div>
        </div>
      </div>

      <table className="referring_party_table">
        <thead>
          <tr>
            <th className="referring_party_tablehead">Party Name</th>
            <th className="referring_party_tablehead">Group Name</th>
            <th className="referring_party_tablehead">Organization Name</th>
            <th className="referring_party_tablehead">Address</th>
            <th className="referring_party_tablehead">Vehicle Number</th>
            <th className="referring_party_tablehead">Contact Number</th>
            <th className="referring_party_tablehead">Area Code</th>
            <th className="referring_party_tablehead">KRA PIN</th>
            <th className="referring_party_tablehead">Is Active</th>
            <th className="referring_party_tablehead">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows will be added here */}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="referring_party_modal_overlay">
          <div className="referring_party_modal_content">
            <div className="referring_party_modal_header">
              <h2>Add New Referring Party</h2>
              <button onClick={handleCloseModal} className="referring_party_close_button">X</button>
            </div>
            <div className="referring_party_modal_body">
              <form>
                <div>
                  <label>Party Name *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Group Name *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Organization Name *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Address *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Vehicle Number</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Contact Number</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Area Code</label>
                  <input type="text" />
                </div>
                <div>
                  <label>KRA PIN</label>
                  <input type="text" />
                </div>
              </form>
            </div>
            <div className="referring_party_modal_footer">
              <button onClick={handleSave} className="referring_party_save_button">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferringParty;
