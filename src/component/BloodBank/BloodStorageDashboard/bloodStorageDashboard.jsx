import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import "./bloodStorageDashboard.css"
import BSDAddNewBloodNew from './bSDAddNewBloodNew';


const BloodStorageDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [storageData, setStorageData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Fetch the data from the API
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/bloodstorage/getall');
            const data = await response.json();
            setStorageData(data);
            setFilteredData(data); // Initially set filteredData to all fetched data
        } catch (error) {
            console.error('Error fetching blood storage data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Handle search by storage ID or test ID
    const handleSearch = () => {
        const filtered = storageData.filter((item) =>
            searchTerm
                ? item.id.toString().includes(searchTerm) || item.testId.toString().includes(searchTerm)
                : true
        );
        setFilteredData(filtered);
    };

    // Handle delete functionality
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8081/api/bloodstorage/delete/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error deleting the record');
            }

            const updatedData = storageData.filter((item) => item.storage_id !== id);
            setStorageData(updatedData);
            setFilteredData(updatedData);
            alert(`Storage ID: ${id} has been deleted.`);
        } catch (error) {
            console.error('Error deleting storage:', error);
            alert('There was an error deleting the record.');
        }
    };

    // Handle opening the modal to add a new blood unit
    const handleAddNewBloodUnit = () => {
        setShowModal(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Callback function to refresh data
    const refreshData = async () => {
        await fetchData();
        handleCloseModal(); // Close the modal after refreshing data
    };

    return (
        <div className="bloodStorage-dashboard-container-box">
            <span className='bloodStorage-dashboard-container-heading'>Blood Storage Dashboard</span>

            <div className="bloodStorage-dashboard-controls">
                <div className="bloodStorage-search-bar">
                    <div className='bloodStorage-search-bar-input-btn'>
                        <input
                            type="text"
                            placeholder="Search by Storage ID or Test ID"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>

            <div className="bloodStorage-dashboard-actions">
                <button onClick={handleAddNewBloodUnit}>Add New Blood Unit</button>
                {/* Add your Export functionality here */}
            </div>

            <table className="bloodStorage-storage-table">
                <thead>
                    <tr>
                        <th>Storage ID</th>
                        <th>Test ID</th>
                        <th>Blood Group</th>
                        <th>Volume</th>
                        <th>Storage Date</th>
                        <th>Expiry Date</th>
                        <th>Storage Location</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.storage_id}>
                            <td>{item.storage_id}</td>
                            <td>{item.test_id}</td>
                            <td>{item.bloodgroup}</td>
                            <td>{item.volume} ml</td>
                            <td>{item.storagedate}</td>
                            <td>{item.expirydate}</td>
                            <td>{item.storagelocation}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handleDelete(item.storage_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Show Modal if showModal is true */}
            {showModal && <BSDAddNewBloodNew onClose={handleCloseModal} refreshData={refreshData} />}
        </div>
    );
};

export default BloodStorageDashboard;
