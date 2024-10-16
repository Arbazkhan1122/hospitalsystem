import React, { useEffect, useState } from 'react';
// import './collectionlist.css';
import "./collectionList.css"

function Colletionlist() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:9092/api/basic-info/all');
                if (response.ok) {
                    const data = await response.json();
                    setPatients(data);
                } else {
                    console.error('Error fetching data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div className="collection-list-container">
            <h2>Blood Collection List</h2>
            <table className="collection-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Collection Date</th>
                        <th>Collection Site</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.fullName}</td>
                            <td>{patient.bloodTypeInfo.bloodGroup}</td>
                            <td>{patient.contactNumber}</td>
                            <td>{patient.emailAddress}</td>
                            <td>{patient.bloodCollectionDetails.collectionDateTime}</td>
                            <td>{patient.bloodCollectionDetails.collectionSite}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Colletionlist;
