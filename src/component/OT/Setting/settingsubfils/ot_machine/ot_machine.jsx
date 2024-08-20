import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './ot_machine.css';

function Ot_machine() {
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
    <div className='ot_machine_main '>
      <div className="ot_machine_container">
        <div className="ot_machine_input">
          <label htmlFor="machine-name">Machine Name:</label>
          <input type="text" id="machine-name" placeholder="Machine Name" />
        </div>
        <div className="ot_machine_checkbox">
          <input type="checkbox" id="is-active" />
          <label htmlFor="is-active">Is Active</label>
        </div>
        <div className="ot_machine_buttons">
          <button className="ot_machine_save">Save</button>
          <button className="ot_machine_clear">Clear</button>
        </div>
      </div>

      <div className="ot_machine_search_bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="ot_machine_filter_button">
          <FaSearch />
        </button>
        
      </div>

      <table className="ot_machine_table">
        <thead>
          <tr>
            <th className='ot_machine_tablehead'>Machine Name</th>
            <th className='ot_machine_tablehead'>IsActive</th>
            <th className='ot_machine_tablehead'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMachines.map((machine, index) => (
            <tr key={index}>
              <td className='ot_machine_tabledata'>{machine.name}</td>
              <td className='ot_machine_tabledata'>{machine.isActive.toString()}</td>
              <td className='ot_machine_tabledata'>
                <button onClick={() => handleEdit(index)} className="ot_machine_edit_button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="ot_machine_pagination">
     
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 4</span>
        <button>Next</button>
        <button>Last</button>
      
      </div>
    </div>
  );
}

export default Ot_machine;
