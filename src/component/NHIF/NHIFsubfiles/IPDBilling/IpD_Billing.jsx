import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaUser, FaSync } from 'react-icons/fa';
import '../IPDBilling/IPD_Billing.css'; // Make sure to create and use the corresponding CSS file

function IPD_billing() {
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleEdit = (index) => {
        console.log(`Editing billing entry at index ${index}`);
    };

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='ipd_billing_main'>
            <div className="ipd_billing_container">
                <div className="ipd_billing_new_patient">
                    <FaUser style={{ color: 'blue', fontSize: '24px', marginRight: '10px' }} />
                    <p className='Admitted_Patient_List'>  Admitted Patient List</p>
                </div>

            </div>
            
            <div className="ipd_billing_new_patient">
                <p>* Follow-up is valid up to 14 days of last visit with the same doctor</p>
            </div>

            <div className='ipd_billing_filter_content'>
                <div className="ipd_billing_search_bar">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="ipd_billing_filter_button" style={{ height: "30px", padding: "8px", marginLeft: "-50px", fontSize: "18px" }}>
                        <FaSearch />
                    </button>
                </div>
                <div>
                    <label>Showing 0/0 results</label>
                </div>
                <div>
                    <button className='ipd_billing_filter_button'>Print</button>
                </div>
            </div>

            <table className="ipd_billing_table">
                <thead>
                    <tr>
                        <th className='ipd_billing_tablehead'>Date</th>
                        <th className='ipd_billing_tablehead'>Time</th>
                        <th className='ipd_billing_tablehead'>Hospital No</th>
                        <th className='ipd_billing_tablehead'>Name</th>
                        <th className='ipd_billing_tablehead'>Age/Sex</th>
                        <th className='ipd_billing_tablehead'>NHIF No</th>
                        <th className='ipd_billing_tablehead'>Department</th>
                        <th className='ipd_billing_tablehead'>Claim Code</th>
                        <th className='ipd_billing_tablehead'>Visit Type</th>
                        <th className='ipd_billing_tablehead'>Appt. Type</th>
                        <th className='ipd_billing_tablehead'>Days Passed</th>
                        <th className='ipd_billing_tablehead'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.map((patient, index) => (
                        <tr key={index}>
                            <td className='ipd_billing_tabledata'>{patient.date}</td>
                            <td className='ipd_billing_tabledata'>{patient.time}</td>
                            <td className='ipd_billing_tabledata'>{patient.hospitalNo}</td>
                            <td className='ipd_billing_tabledata'>{patient.name}</td>
                            <td className='ipd_billing_tabledata'>{patient.ageSex}</td>
                            <td className='ipd_billing_tabledata'>{patient.nhifNo}</td>
                            <td className='ipd_billing_tabledata'>{patient.department}</td>
                            <td className='ipd_billing_tabledata'>{patient.claimCode}</td>
                            <td className='ipd_billing_tabledata'>{patient.visitType}</td>
                            <td className='ipd_billing_tabledata'>{patient.apptType}</td>
                            <td className='ipd_billing_tabledata'>{patient.daysPassed}</td>
                            <td className='ipd_billing_tabledata'>
                                <button onClick={() => handleEdit(index)} className="ipd_billing_edit_button">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="ipd_billing_pagination">
                <button>First</button>
                <button>Previous</button>
                <span>Page 1 of 4</span>
                <button>Next</button>
                <button>Last</button>
            </div>
        </div>
    );
}

export default IPD_billing;
