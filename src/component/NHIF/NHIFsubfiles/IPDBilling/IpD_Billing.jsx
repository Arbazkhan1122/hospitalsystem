import React, { useState } from 'react';
import { FaSearch, FaUser, FaSync } from 'react-icons/fa';
import './IPD_Billing.css'; // Make sure to create and use the corresponding CSS file

function IPD_billing() {
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState([
        {
            date: '2024-08-20',
            time: '10:00 AM',
            hospitalNo: 'H001',
            name: 'John Doe',
            ageSex: '30/M',
            nhifNo: 'HIF123456',
            department: 'Cardiology',
            claimCode: 'CLM0001',
            visitType: 'Follow-up',
            apptType: 'In-Person',
            daysPassed: 5,
        },
        {
            date: '2024-08-18',
            time: '02:00 PM',
            hospitalNo: 'H002',
            name: 'Jane Smith',
            ageSex: '28/F',
            nhifNo: 'HIF654321',
            department: 'Pediatrics',
            claimCode: 'CLM0002',
            visitType: 'Initial',
            apptType: 'Virtual',
            daysPassed: 7,
        },
        {
            date: '2024-08-15',
            time: '09:30 AM',
            hospitalNo: 'H003',
            name: 'Alice Johnson',
            ageSex: '45/F',
            nhifNo: 'HIF789012',
            department: 'Orthopedics',
            claimCode: 'CLM0003',
            visitType: 'Follow-up',
            apptType: 'In-Person',
            daysPassed: 12,
        },
        {
            date: '2024-08-10',
            time: '11:00 AM',
            hospitalNo: 'H004',
            name: 'Bob Brown',
            ageSex: '60/M',
            nhifNo: 'HIF345678',
            department: 'Neurology',
            claimCode: 'CLM0004',
            visitType: 'Initial',
            apptType: 'Virtual',
            daysPassed: 20,
        },
        {
            date: '2024-08-05',
            time: '03:00 PM',
            hospitalNo: 'H005',
            name: 'Carol White',
            ageSex: '37/F',
            nhifNo: 'HIF901234',
            department: 'Gynecology',
            claimCode: 'CLM0005',
            visitType: 'Follow-up',
            apptType: 'In-Person',
            daysPassed: 25,
        },
        // Add more entries as needed
    ]);

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
                    <p className='Admitted_Patient_List'>Admitted Patient List</p>
                </div>
            </div>
            
            {/* <div className="ipd_billing_new_patient">
                <p>* Follow-up is valid up to 14 days of last visit with the same doctor</p>
            </div> */}

            <div className='ipd_billing_filter_content'>
                <div className="ipd_billing_search_bar">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {/* <button className="ipd_billing_filter_button" style={{ height: "30px", padding: "8px", marginLeft: "-50px", fontSize: "18px" }}>
                        <FaSearch />
                    </button> */}
                </div>
                {/* <div>
                    <label>Showing {filteredPatients.length}/{patients.length} results</label>
                </div> */}
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
                        <th className='ipd_billing_tablehead'>HIF No</th>
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
                <span>Page 1 of 1</span>
                <button>Next</button>
                <button>Last</button>
            </div>
        </div>
    );
}

export default IPD_billing;
