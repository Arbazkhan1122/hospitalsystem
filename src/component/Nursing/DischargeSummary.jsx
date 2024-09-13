import React, { useState, useEffect } from 'react';
import '../Nursing/InPatientMainContent.css';
import { useNavigate } from 'react-router-dom';
import DischargeFromNurse from './DistchargeFromNurse';
import axios from 'axios';

function MainContent() {
    const [activeTab, setActiveTab] = useState('Discharged Patients'); // Default tab
    const [isDischarge, setIsDischarge] = useState(false);
    const [dischargeData, setDischargeData] = useState([]);
    const [admittedData, setAdmittedData] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState(null); 

    const navigate = useNavigate();

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);

    };


    const openDischargeModal = (patientData) => {
        setSelectedPatientId(patientData);
        setIsDischarge(true);

    };

    const closeDischargeModal = () => {
        setIsDischarge(false);
        setSelectedPatientId(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (activeTab === 'Discharged Patients') {
                    const response = await axios.get('http://192.168.1.37:1415/api/admissions/discharged-summary/Discharged');
                    setDischargeData(response.data);
                    console.log(response.data+'discharged');
                } else if (activeTab === 'Admitted Patients') {
                    const response = await axios.get('http://192.168.1.37:1415/api/admissions/discharged-summary/Admitted');
                    setAdmittedData(response.data);
                    console.log(response.data+'admitted');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [activeTab]);

    const handleAddClick = (data) => {
        openDischargeModal(data);
    };



    return (
        <>
            <div className="discharge-summary-component-container">
                <button
                    className={`inpatient-component-tab ${activeTab === 'Discharged Patients' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Discharged Patients')}
                >
                    Discharged Patients
                </button>
                <button
                    className={`inpatient-component-tab ${activeTab === 'Admitted Patients' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Admitted Patients')}
                >
                    Admitted Patients
                </button>
            </div>

            {activeTab === 'Discharged Patients' && (
                <div className="MyPatientsTable-tableContainer">
                    <div className='Nephrology-Header'>
                        <input type='text' placeholder='Search' className='Nephrology-searchInput' />
                        <div className="Nephrology-actions">
                            <span className="Nephrology-results">Showing {dischargeData.length}/{dischargeData.length} results</span>
                            <button className="Nephrology-button">Export</button>
                            <button className="Nephrology-button">Print</button>
                        </div>
                    </div>

                    <table className="MyPatientsTable-patientsTable">
                        <thead>
                            <tr>
                                <th>Admitted On</th>
                                <th>Discharged On</th>
                                <th>IP Number</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Age/Sex</th>
                                <th>Bill Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dischargeData.length > 0 ? (
                                dischargeData.map((discharge) => (
                                    <tr key={discharge.admissionId}>
                                        <td>{discharge.admissionDate}</td>
                                        <td>{discharge.dischargeDate}</td>
                                        <td>{discharge.admissionId}</td>
                                        <td>{`${discharge.firstName} ${discharge.lastName}`}</td>
                                        <td>{discharge.phoneNumber}</td>
                                        <td>{discharge.age}</td>
                                        <td>Bill Status Placeholder</td>
                                        <td>
                                            <button className="Actions-btn Actions-consumption" onClick={() => handleAddClick(discharge)}>
                                                Add
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8">No discharge data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'Admitted Patients' && (
                <div className="MyPatientsTable-tableContainer">
                    <div className='Nephrology-Header'>
                        <input type='text' placeholder='Search' className='Nephrology-searchInput' />
                        <div className="Nephrology-actions">
                            <span className="Nephrology-results">Showing {admittedData.length}/{admittedData.length} results</span>
                            <button className="Nephrology-button">Export</button>
                            <button className="Nephrology-button">Print</button>
                        </div>
                    </div>

                    <table className="MyPatientsTable-patientsTable">
                        <thead>
                            <tr>
                                <th>Admitted Date</th>
                                <th>IP Number</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Age/Sex</th>
                                <th>Admitting Doctor</th>
                                <th>Bed Feature</th>
                                <th>Bed Code</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admittedData.length > 0 ? (
                                admittedData.map((admitted) => (
                                    <tr key={admitted.admissionId}>
                                        <td>{admitted.admissionDate}</td>
                                        <td>{admitted.admissionId}</td>
                                        <td>{`${admitted.firstName} ${admitted.lastName}`}</td>
                                        <td>{admitted.phoneNumber}</td>
                                        <td>{admitted.age}</td>
                                        <td>Admitting Doctor Placeholder</td>
                                        <td>Bed Feature Placeholder</td>
                                        <td>Bed Code Placeholder</td>
                                        <td>
                                            <button className="Actions-btn Actions-consumption" onClick={() => handleAddClick(admitted)}>
                                                Add
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9">No admitted data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {isDischarge && (
                <DischargeFromNurse
                closeModal={closeDischargeModal}
                show={isDischarge}
                patientData={selectedPatientId} 

            />
            )}
        </>
    );
}

export default MainContent;
