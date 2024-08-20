
 
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';

function SettingsPage() {
  const [activeTab, setActiveTab] = useState('employeeItems');
  const [employees, setEmployees] = useState([
    { name: 'Dr. Pooja Mishra', tdsPercent: 5, isActive: true },
    { name: 'John Doe', tdsPercent: 10, isActive: true },
    { name: 'Jane Smith', tdsPercent: 7, isActive: true },
    { name: 'Michael Johnson', tdsPercent: 8, isActive: true },
    { name: 'Emily Davis', tdsPercent: 6, isActive: true },
  ]);
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showTDSEditPopup, setShowTDSEditPopup] = useState(false);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const tableRef = useRef(null);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProfiles = filteredProfiles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProfiles.length / itemsPerPage);

  const currentEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);
  const totalEmployeePages = Math.ceil(employees.length / itemsPerPage);

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
    setShowAddModal(false);
  };

  const handleDeactivate = (index) => {
    const newEmployees = [...employees];
    newEmployees[index].isActive = false;
    setEmployees(newEmployees);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleEditTDS = (index) => {
    setSelectedEmployeeIndex(index);
    setShowTDSEditPopup(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleExport = () => {
    console.log('Exporting employee data...');
  };

  const handlePrint = () => {
    if (tableRef.current) {
      const table = tableRef.current;
      const printWindow = window.open('', 'Print Window');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Print Employee Data</title></head><body>');
        printWindow.document.write(table.outerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  return (
    <div className="SettingsPage">
      
      <div className="content">
        <div className="tabs">
          <button
            className={activeTab === 'employeeItems' ? 'active' : ''}
            onClick={() => setActiveTab('employeeItems')}
          >
            Employee Items Setup
          </button>
          <button
            className={activeTab === 'profileManage' ? 'active' : ''}
            onClick={() => setActiveTab('profileManage')}
          >
            Profile Manage
          </button>
        </div>

        {activeTab === 'employeeItems' && (
          <div className="employee-items-setup">
            <h2>Employee Items Setup</h2>
            <div className="top-actions">
              <div className="left-actions">
                <button className="export-button" onClick={handleExport}>
                  Export
                </button>
                <button className="print-button" onClick={handlePrint}>
                  Print
                </button>
              </div>
              <div className="right-actions">
                <button className="new-incentive-button" onClick={() => navigate('/new-incentive')}>
                  + New Employee Incentive
                </button>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="table-container">
              <table ref={tableRef}>
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>TDS Percent</th>
                    <th>IsActive</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEmployees.map((employee, index) => (
                    <tr key={index}>
                      <td>{employee.name}</td>
                      <td>{employee.tdsPercent}</td>
                      <td>{employee.isActive.toString()}</td>
                      <td>
                        <button className="edit-button" onClick={() => navigate(`/edit-items/${index}`)}>
                          Edit Items
                        </button>
                        <button className="deactivate-button" onClick={() => handleDeactivate(index)}>
                          Deactivate
                        </button>
                        <button className="edit-tds-button" onClick={() => handleEditTDS(index)}>
                          Edit TDS%
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                First
              </button>
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              <span>Page {currentPage} of {totalEmployeePages}</span>
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalEmployeePages}>
                Next
              </button>
              <button onClick={() => handlePageChange(totalEmployeePages)} disabled={currentPage === totalEmployeePages}>
                Last
              </button>
            </div>
          </div>
        )}

        {activeTab === 'profileManage' && (
          <div className="profile-manage">
            <h2>Profile Manage</h2>
            <div className="actions">
              <button className="add-profile-btn" onClick={() => setShowAddModal(true)}>
                + Add New Profile
              </button>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Profile Name</th>
                  <th>Description</th>
                  <th>IsActive</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentProfiles.map((profile, index) => (
                  <tr key={index}>
                    <td>{profile.name}</td>
                    <td>{profile.description}</td>
                    <td>{profile.isActive.toString()}</td>
                    <td>
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredProfiles.length === 0 && (
              <div className="no-rows">No Rows To Show</div>
            )}
            <div className="pagination">
              <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                First
              </button>
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </button>
              <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                Last
              </button>
            </div>
          </div>
        )}
      </div>

      {showAddModal && (
        <AddNewProfileModal onSave={handleAddProfile} onClose={() => setShowAddModal(false)} />
      )}

      {showTDSEditPopup && (
        <div className="tds-edit-popup">
          <h3>Edit TDS Percent For: {employees[selectedEmployeeIndex].name}</h3>
          <input
            type="number"
            className="tds-input"
            value={employees[selectedEmployeeIndex].tdsPercent}
            onChange={(e) => {
              const newEmployees = [...employees];
              newEmployees[selectedEmployeeIndex].tdsPercent = parseInt(e.target.value);
              setEmployees(newEmployees);
            }}
          />
          <button onClick={() => setShowTDSEditPopup(false)}>Save</button>
          <button onClick={() => setShowTDSEditPopup(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

function AddNewProfileModal({ onSave, onClose }) {
  const [newProfile, setNewProfile] = useState({ name: '', description: '', isActive: true });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSave(newProfile);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add New Profile</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newProfile.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Active:</label>
          <input
            type="checkbox"
            name="isActive"
            checked={newProfile.isActive}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default SettingsPage;
