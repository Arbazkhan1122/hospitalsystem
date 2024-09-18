 /* prachi parab user interface changed  14/9 */

import React, { useState } from 'react';
import './DistchargeFromNurse.css';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DistchargeFromNurse({ onClose, show }) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(show);

    const closeModal = () => {
        setIsModalOpen(false);
        onClose(); // Close the modal
        navigate('/DischargeSummary'); 

    };

    const [medications, setMedications] = useState([{ id: 1, name: '' }]);

    const handleAddMedication = () => {
      setMedications([...medications, { id: Date.now(), name: '' }]); // Add new row
    };
  
    const handleRemoveMedication = (id) => {
      setMedications(medications.filter((med) => med.id !== id)); // Remove row by id
    };
  
    const handleInputChange = (id, value) => {
      setMedications(
        medications.map((med) =>
          med.id === id ? { ...med, name: value } : med
        )
      );
    }

    return (
        <>
            <Modal show={isModalOpen} onHide={closeModal} size="lg" className="custom-modal" >
                <Modal.Header closeButton>
                    <h2>Discharge Summary</h2>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        {/* Header Section */}
                        <header className="distcharge-header">
                            <div className="distcharge-patient-header">
                                <h2>Aakash Pathan</h2>
                                <div className="distcharge-patient-details">
                                    <div>
                                        <p><strong>Address:</strong> Pune</p>
                                        <p><strong>Hospital No:</strong> 240008307</p>
                                        <p><strong>Admitted On:</strong> 2024-08-24 02:51 AD</p>
                                        <p><strong>Discharged On:</strong> -</p>
                                    </div>
                                    <div>
                                        <p><strong>Contact No:</strong> 838288382</p>
                                        <p><strong>InPatient No:</strong> H240007</p>
                                        <p><strong>Ward:</strong> Male Ward</p>
                                    </div>
                                    <div>
                                        <p><strong>Guardian:</strong> Sanjay Pathan | Son</p>
                                        <p><strong>Bed Number:</strong> 001</p>
                                    </div>
                                    <div>
                                        <p>25 Y/Male</p>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Form Section */}
                        <form className="distcharge-form">
                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Discharge Type:</label>
                                    <select>
                                        <option value="Not Improved">Not Improved</option>
                                    </select>
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Treatment During Hospital Stay:</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Consultant:</label>
                                    <input type="text" placeholder="Consultant: name" />
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Condition On Discharge:</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Doctor Incharge:</label>
                                    <input type="text" placeholder="Dr. VICTOR OCHEING OKECH" readOnly />
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Pending Reports:</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Anesthetists:</label>
                                    <input type="text" placeholder="Anesthetists: name" />
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Special Notes:</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Resident Dr:</label>
                                    <input type="text" placeholder="Dr. VICTOR OCHEING OKECH" />
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Allergies:</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Select Diagnosis:</label>
                                    <input type="text" placeholder="Select ICD-11(a) for Provisional Diagnosis" />
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Discharge Order:</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Provisional Diagnosis:</label>
                                    <input type="text" placeholder="Select ICD-11(b) for Provisional Diagnosis" />
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Activities:</label>
                                    <input type="text" placeholder="Activities" />
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Other Diagnosis:</label>
                                    <input type="text" placeholder="Enter Other Diagnosis" />
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Diet:</label>
                                    <input type="text" placeholder="Diet" />
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Clinical Findings:</label>
                                    <textarea rows="3" placeholder="Clinical Findings"></textarea>
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Rest Days:</label>
                                    <input type="text" placeholder="Rest Days" />
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Chief Complain:</label>
                                    <textarea rows="3" placeholder="Chief Complain"></textarea>
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Follow UP:</label>
                                    <input type="text" placeholder="Follow UP" />
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>History Of Presenting Illness:</label>
                                    <textarea rows="3" placeholder="History Of Presenting Illness"></textarea>
                                </div>
                                <div className="distcharge-form-group">
                                    <label>Others:</label>
                                    <input type="text" placeholder="Others" />
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Past History:</label>
                                    <textarea rows="3" placeholder="Past History"></textarea>
                                </div>
                                <div className="distcharge-form-group">
                                    <label>CheckedBy:</label>
                                    <input type="text" placeholder="CheckedBy: name" />
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Case Summary:</label>
                                    <textarea rows="3" placeholder="Case Summary"></textarea>
                                </div>
                            </div>

                            <div className="distcharge-form-row">
                                <div className="distcharge-form-group">
                                    <label>Procedure:</label>
                                    <textarea rows="3" placeholder="Procedure"></textarea>
                                </div>
                            </div>

                            {/* <div className="distcharge-form-row">
                                <div className="distcharge-form-group full-width">
                                    <div className="distcharge-medications">
                                        <label>Medications:</label>
                                        <input type="text" placeholder="Enter Medicines" />
                                        <button className="add-button">+</button>
                                      
                                    </div>
                                </div>
                            </div> */}
                            <div className="investigation-section">
                                    <div className="investigation-header">
                                    <i className="fa fa-list"></i> Investigations :
                                    </div>
                                    <div className="investigation-content">
                                    <div className="investigation-radio-buttons">
                                        Show Result on Report: 
                                        <input type="radio" name="result" /> Yes
                                        <input type="radio" name="result" /> No
                                    </div>
                                    <div className="test-section">
                                        <div className="lab-tests">
                                        <div className="lab-header">Lab Tests</div>
                                        <div className="test-item">
                                            <input type="checkbox" /> CREATININE
                                        </div>
                                        </div>
                                        <div className="add-new-tests">
                                        <div className="test-header">Add New Tests</div>
                                        <input type="text" placeholder="Add New Test" style={{marginTop:'5px'}}/>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                 {/* Imagings Section */}
                                    {/* <div className="imaging-section">
                                        <div className="imaging-header">Imagings :</div>
                                    </div> */}

                                <div className="medication-section">
                                    <div className="medication-header">
                                        <i className="fa fa-list"></i> Medications:
                                    </div>
                                    {medications.map((med) => (
                                        <div className="medication-content" key={med.id}>
                                        <input
                                            type="text"
                                            placeholder="Enter Medicines"
                                            value={med.name}
                                            onChange={(e) => handleInputChange(med.id, e.target.value)}
                                        />
                                        <button
                                            className="medication-add-btn"
                                            onClick={handleAddMedication}
                                        >
                                            +
                                        </button>
                                        {medications.length > 1 && (
                                            <button
                                            className="medication-delete-btn"
                                            onClick={() => handleRemoveMedication(med.id)}
                                            >
                                            x
                                            </button>
                                        )}
                                        </div>
                                    ))}
                                    </div>

                            <div className="distcharge-form-actions">
                                <button type="submit" className="distcharge-submit-button">Submit and Print Summary</button>&nbsp;&nbsp;&nbsp;
                                <button type="button" className="distcharge-update-button">Update</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DistchargeFromNurse;
