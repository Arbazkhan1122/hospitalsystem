import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './manage_checklist.css';

function ManageOtChecklist() {
  const [machines, setMachines] = useState([
    { name: 'Abc', isActive: true },
    { name: 'OT', isActive: true },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (index) => {
    console.log(`Editing machine at index ${index}`);
  };

  const filteredMachines = machines.filter((machine) =>
    machine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='manage_ot_checklist_main'>




<div className="ot_checklist_main">
  {/* First Div */}
  <div className="ot_checklist_section1">
    <div className="ot_checklist_input">
      <label htmlFor="checklist-name">Checklist Name:</label>
      <input type="text" id="checklist-name" placeholder="Enter Checklist Name" />
    </div>
    
    <div className="ot_checklist_dropdown">
      <label htmlFor="section-type">Section Type:</label>
      <select id="section-type">
        <option value="single">Single Section</option>
        <option value="multiple">Multiple Section</option>
        <option value="file">File</option>
        <option value="short-description">Short Description</option>
        <option value="long-description">Long Description</option>
      </select>
    </div>

    <div className="ot_checklist_checkbox">
    <label htmlFor="is-active">Is Active</label>
      <input type="checkbox" id="is-active" />
     
    </div>
  </div>

  {/* Second Div */}
  <div className="ot_checklist_section2">
    <div className="ot_checklist_input">
      <label htmlFor="display-name">Display Name:</label>
      <input type="text" id="display-name" placeholder="Enter Display Name" />
    </div>
    
    <div className="ot_checklist_input">
      <label htmlFor="display-sequence">Display Sequence:</label>
      <input type="text" id="display-sequence" placeholder="Enter Display Sequence" />
    </div>

    <div className="ot_checklist_checkbox">
    <label htmlFor="is-mandatory">Is Mandatory</label>
      <input type="checkbox" id="is-mandatory" />
      
    </div>
  </div>
</div>
      <div className="manage_ot_checklist_container">
        <div className="manage_ot_checklist_buttons">
          <button className="manage_ot_checklist_save">Save</button>
          <button className="manage_ot_checklist_clear">Clear</button>
        </div>
      </div>

      <div className="manage_ot_checklist_search_bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="manage_ot_checklist_filter_button">
          <FaSearch />
        </button>
      </div>

      <table className="manage_ot_checklist_table">
        <thead>
          <tr>
            <th className='manage_ot_checklist_tablehead'>Machine Name</th>
            <th className='manage_ot_checklist_tablehead'>IsActive</th>
            <th className='manage_ot_checklist_tablehead'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMachines.map((machine, index) => (
            <tr key={index}>
              <td className='manage_ot_checklist_tabledata'>{machine.name}</td>
              <td className='manage_ot_checklist_tabledata'>{machine.isActive.toString()}</td>
              <td className='manage_ot_checklist_tabledata'>
                <button onClick={() => handleEdit(index)} className="manage_ot_checklist_edit_button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="manage_ot_checklist_pagination">
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 4</span>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
  );
}

export default ManageOtChecklist;
