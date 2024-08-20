import React, { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import './refring_org.css'

const RefringOrg= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orgs] = useState([
    {
      orgName: 'Org 1',
      address: '123 Main St',
      contactNo: '123-456-7890',
      contactPerson: 'John Doe',
      isActive: true,
    },
    {
      orgName: 'Org 2',
      address: '456 Elm St',
      contactNo: '987-654-3210',
      contactPerson: 'Jane Smith',
      isActive: false,
    }
    // Add more organization data as needed
  ]);

  const filteredOrgs = orgs.filter(org => 
    org.orgName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeactivate = (index) => {
    const confirmation = window.confirm("Are you sure you want to deactivate this organization?");
    if (confirmation) {
      setOrgs(prevOrgs =>
        prevOrgs.map((org, i) =>
          i === index ? { ...org, isActive: false } : org
        )
      );
    }
  };

  const handleActivate = (index) => {
    const confirmation = window.confirm("Are you sure you want to activate this organization?");
    if (confirmation) {
      setOrgs(prevOrgs =>
        prevOrgs.map((org, i) =>
          i === index ? { ...org, isActive: true } : org
        )
      );
    }
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Logic to save the new organization
    alert("Organization saved!");
    setIsModalOpen(false);
  };

  return (
    <div className="reffering_org_main">
      <div className="reffering_org_container">
        <div className="reffering_org_new_org">
        <button className="reffering_org_new_org_button" onClick={handleOpenModal}>
            <FaPlus className="reffering_org_button_icon" />
            Add Referring Organization
          </button>
        </div>
        
        
      </div>

      <div className="reffering_org_filter_content">
        <div className="reffering_org_search_bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="reffering_org_input_text"
          />
          <button className="reffering_org_filter_button">
            <FaSearch />
          </button>
          <div>
            <label>Showing {filteredOrgs.length} results</label>
          </div>
          
        </div>
      </div>

      <table className="reffering_org_table">
        <thead>
          <tr>
            <th className="reffering_org_tablehead">Organization Name</th>
            <th className="reffering_org_tablehead">Address</th>
            <th className="reffering_org_tablehead">Contact No</th>
            <th className="reffering_org_tablehead">Contact Person</th>
            <th className="reffering_org_tablehead">Is Active</th>
            <th className="reffering_org_tablehead">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrgs.map((org, index) => (
            <tr key={index}>
              <td className="reffering_org_tabledata">{org.orgName}</td>
              <td className="reffering_org_tabledata">{org.address}</td>
              <td className="reffering_org_tabledata">{org.contactNo}</td>
              <td className="reffering_org_tabledata">{org.contactPerson}</td>
              <td className="reffering_org_tabledata">{org.isActive ? 'true' : 'false'}</td>
              <td className="reffering_org_tabledata">
                {org.isActive ? (
                  <>
                    <button 
                      onClick={() => handleDeactivate(index)} 
                      className="reffering_org_active_button active"
                    >
                      Deactivate
                    </button>
                    <button 
                      onClick={() => alert("Edit functionality goes here!")} 
                      className="reffering_org_edit_button"
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => handleActivate(index)} 
                    className="reffering_org_active_button inactive"
                  >
                    Activate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="reffering_org_pagination">
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>
      {isModalOpen && (
        <div className="refering_org_modal_overlay">
          <div className="refering_org_modal_content">
            <div className="refering_org_modal_header">
              <h2>Add New Organization</h2>
              <button onClick={handleCloseModal} className="refering_org_close_button">X</button>
            </div>
            <div className="refering_org_modal_body">
              <form>
                <div>
                  <label>Organization Name *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Address *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Contact No</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Contact Person</label>
                  <input type="text" />
                </div>
              </form>
            </div>
            <div className="refering_org_modal_footer">
              <button onClick={handleSave} className="refering_org_save_button">Save</button>
            </div>
          </div>
        </div>
      )}    </div>
  );
};

export default RefringOrg;
