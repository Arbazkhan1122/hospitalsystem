import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaUser,FaSync  } from 'react-icons/fa';

import './VisitList.css';

function VisitList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleEdit = (index) => {
        console.log(`Editing visit at index ${index}`);
    };

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='visit_list_main'>
            <div className="visit_list_container">
            <div className="visit_list_new_patient">
      <FaUser style={{ color: 'blue', fontSize: '24px', marginRight: '10px' }} />
      <p className='Admitted_Patient_List'>Insurance Patient Visit List</p>
    </div>

           

                <div className="visit_list_edit_info">
                <button className='visit_list_filter_button'>
        <FaSync style={{ marginRight: '5px' }} /> Reload
      </button>
                </div>

            </div>
            <div className="visit_list_new_patient">
                 <p style={{fontSize:"18px"}}>* Followup is valid up to 14 days of last visit with the same doctor</p>
            </div>

            <div className='visit-list-filter-content'>
                <div className="visit_list_search_bar">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="visit_list_filter_button" style={{height:"30px" , padding:"8px",marginLeft:"-50px", fontSize:"18px"}}>
                        <FaSearch />
                    </button>
                    </div>
                   <div>
                        <label style={{fontSize:"18px"}}>Showing 0/0 results</label>
                    </div>
                    <div>
                        <button className='visit_list_filter_button'>Print</button>
                    </div>
                    
                   
                
            </div>

            <table className="visit_list_table">
                <thead>
                    <tr>
                        <th className='visit_list_tablehead'>Date</th>
                        <th className='visit_list_tablehead'>Time</th>
                        <th className='visit_list_tablehead'>Hospital No</th>
                        <th className='visit_list_tablehead'>Name</th>
                        <th className='visit_list_tablehead'>Age/Sex</th>
                        <th className='visit_list_tablehead'>NHIF No</th>
                        <th className='visit_list_tablehead'>Department</th>
                        <th className='visit_list_tablehead'>Claim Code</th>
                        <th className='visit_list_tablehead'>Visit Type</th>
                        <th className='visit_list_tablehead'>Appt. Type</th>
                        <th className='visit_list_tablehead'>Days Passed</th>
                        <th className='visit_list_tablehead'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.map((patient, index) => (
                        <tr key={index}>
                            <td className='visit_list_tabledata'>{patient.date}</td>
                            <td className='visit_list_tabledata'>{patient.time}</td>
                            <td className='visit_list_tabledata'>{patient.hospitalNo}</td>
                            <td className='visit_list_tabledata'>{patient.name}</td>
                            <td className='visit_list_tabledata'>{patient.ageSex}</td>
                            <td className='visit_list_tabledata'>{patient.nhifNo}</td>
                            <td className='visit_list_tabledata'>{patient.department}</td>
                            <td className='visit_list_tabledata'>{patient.claimCode}</td>
                            <td className='visit_list_tabledata'>{patient.visitType}</td>
                            <td className='visit_list_tabledata'>{patient.apptType}</td>
                            <td className='visit_list_tabledata'>{patient.daysPassed}</td>
                            <td className='visit_list_tabledata'>
                                <button onClick={() => handleEdit(index)} className="visit_list_edit_button">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="visit_list_pagination">
                <button>First</button>
                <button>Previous</button>
                <span>Page 1 of 4</span>
                <button>Next</button>
                <button>Last</button>
            </div>
        </div>
    );
}

export default VisitList;
