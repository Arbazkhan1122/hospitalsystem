import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './ot_personnelType.css';

function Ot_personnelType() {
  const [machines, setMachines] = useState([
    { name: 'A', isActive: true },
    
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (index) => {
    console.log(`Editing personnel type at index ${index}`);
  };

  const filteredMachines = machines.filter((machine) =>
    machine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='ot_personnelType_main'>
      <div className="ot_personnelType_container">
        <div className="ot_personnelType_input">
          <label htmlFor="personnel-type-name">Personnel Type Name:</label>
          <input type="text" id="personnel-type-name" placeholder="Personnel Type Name" />
        </div>
        <div className="ot_personnelType_checkbox">
          <input type="checkbox" id="is-active" />
          <label htmlFor="is-active">Is Active</label>
        </div>
        <div className="ot_personnelType_buttons">
          <button className="ot_personnelType_save">Save</button>
          <button className="ot_personnelType_clear">Clear</button>
        </div>
      </div>

      <div className="ot_personnelType_search_bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="ot_personnelType_filter_button">
          <FaSearch />
        </button>
      </div>

      <table className="ot_personnelType_table">
        <thead>
          <tr>
            <th className='ot_personnelType_tablehead'>Personnel Type Name</th>
            <th className='ot_personnelType_tablehead'>IsActive</th>
            <th className='ot_personnelType_tablehead'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMachines.map((machine, index) => (
            <tr key={index}>
              <td className='ot_personnelType_tabledata'>{machine.name}</td>
              <td className='ot_personnelType_tabledata'>{machine.isActive.toString()}</td>
              <td className='ot_personnelType_tabledata'>
                <button onClick={() => handleEdit(index)} className="ot_personnelType_edit_button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="ot_personnelType_pagination">
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 4</span>
        <button>Next</button>
        <button>Last</button>
      </div>
    </div>
  );
}

export default Ot_personnelType;
