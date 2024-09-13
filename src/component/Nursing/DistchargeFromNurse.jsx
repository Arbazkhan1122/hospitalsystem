import React, { useState,useEffect } from 'react';
import './DistchargeFromNurse.css';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DistchargeFromNurse({ closeModal, show,patientData }) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(show);
    const [formData, setFormData] = useState({
        dischargeId: 6,
        dischargeDate: "2024-09-03",
        dischargedType: "Regular",
        consultant: "Dr. Ajay",
        doctorIncharge: "Dr. Arbaz",
        anesthetists: "Dr. Sarah",
        residentDr: "Dr. Doe",
        selectDiagnosis: "Diagnosis1",
        provisonalDiagnosis: "Provisional1",
        otherDiagnosis: "Other1",
        clinicalFindings: "Findings1",
        cheifComplain: "Complain1",
        historyOfPresentingIllness: "History1",
        pastHistory: "PastHistory1",
        caseSummary: "Summary1",
        medicalProcedure: "Procedure1",
        operativeFindings: "OperativeFindings1",
        hospitalReports: "Reports1",
        hospitalCourse: "Course1",
        treatmentDuringHospitalStay: "Treatment1",
        conditionOnDischarge: "Condition1",
        pendingReport: "PendingReport1",
        specialNotes: "Notes1",
        allergies: "Allergies1",
        dischargeOrder: "Order1",
        activities: "Activities1",
        diet: "Diet1",
        restDay: "RestDay1",
        followUp: 1,
        others: "Others1",
        checkedBy: "CheckedBy1",
        showResult: "ShowResult1",
        labTests: "LabTests1",
        imaging: "Imaging1",
        medications: "Medications1",
        patientDTO: {
          patientId: 1,
          salutation: null,
          firstName: null,
          middleName: null,
          lastName: null,
          dateOfBirth: null,
          age: 0,
          phoneNumber: null,
          landlineNumber: null,
          country: null,
          passportNumber: null,
          state: null,
          address: null,
          bloodGroup: null,
          gender: null,
          religion: null,
          maritalStatus: null,
          notifications: null,
          employerInfo: null,
          previousLastName: null,
          occupation: null,
          email: null,
          race: null,
          pinCode: null,
          dialysisPatient: null,
          hospitalNo: null,
          isIPD: null,
          addressDTO: null,
          guarantorDTO: null,
          insuranceDTO: null,
          emergencyContactDTO: null
        },
        newPatientVisitDTO: null
        });

  const closeTriAgeModal = () => {
        setIsModalOpen(false);
        closeModal();
        navigate('/DischargeSummary');
    };

    console.log(patientData);
    


    const openTriAgeModal = (data) => {
        setModalData(data); // Set the data to be passed to the modal
        setIsModalOpen(true);
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData+"------");
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://192.168.1.37:1415/api/discharge-summaries/save', formData);
        
            console.log('Discharge saved successfully:................', response.data);
            alert("Discharge data saved successfully")
            closeTriAgeModal();
        } catch (error) {
            console.error('Error saving discharge summary:', error);
        }
    };
    
    
     

    return (
        <>
            <Modal show={setIsModalOpen} onClose={closeTriAgeModal} size="lg" className="custom-modal">
                <Modal.Header closeButton>
                
                    <h2>Discharge Summary</h2>
                </Modal.Header>
                <Modal.Body>
                    <div className="discharge-container">
                    <button type="button" className="update-button" onClick={closeTriAgeModal}>Back</button>
                        {/* Header Section */}
                        <header className="distcharge-header">
                        <div className="patient-header">
                            <h2>{patientData?.firstName} {patientData?.lastName}</h2>
                            <div className="patient-details">
                                <div>
                                    <p><strong>Address:</strong> {patientData?.address || 'Pune'}</p>
                                    <p><strong>Admitted On:</strong> 2024-08-24 02:51 AD</p>
                                    <p><strong>Discharged On:</strong> {formData.dischargeDate || '-'}</p>
                                </div>
                                <div>
                                    <p><strong>Contact No:</strong> {patientData?.phoneNumber || 'N/A'}</p>
                                    <p><strong>InPatient No:</strong> H240007</p>
                                    <p><strong>Ward:</strong>{patientData?.wardName || 'N/A'} </p>
                                </div>
                                <div>
                                    <p><strong>Guardian:</strong> Sanjay Pathan | Son</p>
                                    <p><strong>Bed Number:</strong>{patientData?.wardCode || 'N/A'} </p>
                                </div>
                                <div>
                                    <p>{patientData?.age} Years{patientData?.gender}</p>
                                </div>
                            </div>
                        </div>
                        </header>

                        {/* Form Section */}
                        <form className="form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Discharge Type:</label>
                                    <select name="dischargedType" value={formData.dischargedType} onChange={handleInputChange}>
                                    <option value="DOR">DOR</option>
                                    <option value="Recovered">Recovered</option>
                                    <option value="NotImproved">Not Improved</option>
                                    <option value="LAMA">LAMA</option>
                                    <option value="Absconded">Absconded</option>
                                    <option value="Death">Death</option>
                                    <option value="Referred">Referred</option>
                                    <option value="Death">Discharge On Request</option>
                                    <option value="Stable">Stable</option>
                                   
                                </select>
                                </div>
                                <div className="form-group">
                                    <label>Treatment During Hospital Stay:</label>
                                    <textarea rows="3" onChange={handleInputChange}></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Consultant:</label>
                                    <select name="consultant" value={formData.consultant} onChange={handleInputChange}>
                                        <option value="DrJohnDoe">Dr. John Doe</option>
                                        <option value="DrJaneSmith">Dr. Jane Smith</option>
                                        <option value="DrEmilyBrown">Dr. Emily Brown</option>
                                        <option value="DrMichaelJohnson">Dr. Michael Johnson</option>
                                        <option value="DrSarahWilliams">Dr. Sarah Williams</option>
                                        <option value="DrRobertDavis">Dr. Robert Davis</option>
                                        <option value="DrLauraWilson">Dr. Laura Wilson</option>
                                        <option value="DrDavidClark">Dr. David Clark</option>
                                            
                                     </select>
                                   
                                </div>
                                <div className="form-group">
                                    <label>Condition On Discharge:</label>
                                    <textarea rows="3" onChange={handleInputChange}></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Doctor Incharge:</label>
                                    <select name="drIncharge" value={formData.doctorIncharge} onChange={handleInputChange}>
                                        <option value="DrJohnDoe">Dr. John Doe</option>
                                        <option value="DrJaneSmith">Dr. Jane Smith</option>
                                        <option value="DrEmilyBrown">Dr. Emily Brown</option>
                                        <option value="DrMichaelJohnson">Dr. Michael Johnson</option>
                                        <option value="DrSarahWilliams">Dr. Sarah Williams</option>
                                        <option value="DrRobertDavis">Dr. Robert Davis</option>
                                        <option value="DrLauraWilson">Dr. Laura Wilson</option>
                                        <option value="DrDavidClark">Dr. David Clark</option>
                                            
                                     </select>
                                </div>
                                <div className="form-group">
                                    <label>Pending Reports:</label>
                                    <textarea rows="3" value={formData.pendingReport} onChange={handleInputChange}></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Anesthetists:</label>
                                    <select name="anesthetists" value={formData.anesthetists} onChange={handleInputChange}>
                                        <option value="DrJohnDoe">Dr. John Doe</option>
                                        <option value="DrJaneSmith">Dr. Jane Smith</option>
                                        <option value="DrEmilyBrown">Dr. Emily Brown</option>
                                        <option value="DrMichaelJohnson">Dr. Michael Johnson</option>
                                        <option value="DrSarahWilliams">Dr. Sarah Williams</option>
                                        <option value="DrRobertDavis">Dr. Robert Davis</option>
                                        <option value="DrLauraWilson">Dr. Laura Wilson</option>
                                        <option value="DrDavidClark">Dr. David Clark</option>
                                            
                                     </select>
                                 
                                </div>
                                <div className="form-group">
                                    <label>Special Notes:</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Resident Dr:</label>
                                    <select name="residentDr" value={formData.residentDr} onChange={handleInputChange}>
                                        <option value="DrJohnDoe">Dr. John Doe</option>
                                        <option value="DrJaneSmith">Dr. Jane Smith</option>
                                        <option value="DrEmilyBrown">Dr. Emily Brown</option>
                                        <option value="DrMichaelJohnson">Dr. Michael Johnson</option>
                                        <option value="DrSarahWilliams">Dr. Sarah Williams</option>
                                        <option value="DrRobertDavis">Dr. Robert Davis</option>
                                        <option value="DrLauraWilson">Dr. Laura Wilson</option>
                                        <option value="DrDavidClark">Dr. David Clark</option>
                                            
                                     </select>
                                </div>
                                <div className="form-group">
                                    <label>Allergies:</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Select Diagnosis:</label>
                                    <select name="diagnosis" value={formData.selectDiagnosis} onChange={handleInputChange}>
                                        <option value="" disabled>Select a Diagnosis</option>  {/* Placeholder */}
                                        <option value="Flu">Flu</option>
                                        <option value="Hypertension">Hypertension</option>
                                        <option value="Diabetes">Diabetes</option>
                                        <option value="Pneumonia">Pneumonia</option>
                                        <option value="Covid19">COVID-19</option>
                                        <option value="Asthma">Asthma</option>
                                        <option value="HeartDisease">Heart Disease</option>
                                        <option value="Arthritis">Arthritis</option>
                                        <option value="Cancer">Cancer</option>
                                        <option value="Stroke">Stroke</option>
                                        <option value="KidneyDisease">Kidney Disease</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label>Discharge Order:</label>
                                    <textarea rows="3" onChange={handleInputChange}></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Provisional Diagnosis:</label>
                                    <input type="text" placeholder="Select ICD-11(b) for Provisional Diagnosis" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Activities:</label>
                                    <input type="text" placeholder="Activities" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Other Diagnosis:</label>
                                    <input type="text" placeholder="Enter Other Diagnosis" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Diet:</label>
                                    <input type="text" placeholder="Diet" onChange={handleInputChange}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Clinical Findings:</label>
                                    <textarea rows="3" placeholder="Clinical Findings" onChange={handleInputChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Rest Days:</label>
                                    <input type="text" placeholder="Rest Days" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Chief Complain:</label>
                                    <textarea rows="3" placeholder="Chief Complain" onChange={handleInputChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Follow UP:</label>
                                    <input type="text" placeholder="Follow UP" onChange={handleInputChange}/>
                                </div>
                            </div> 

                            <div className="form-row">
                                <div className="form-group">
                                    <label>History Of Presenting Illness:</label>
                                    <textarea rows="3" placeholder="History Of Presenting Illness" onChange={handleInputChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Others:</label>
                                    <input type="text" placeholder="Others" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Past History:</label>
                                    <textarea rows="3" placeholder="Past History" onChange={handleInputChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>CheckedBy:</label>
                                    <input type="text" placeholder="CheckedBy: name"  onChange={handleInputChange}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Case Summary:</label>
                                    <textarea rows="3" placeholder="Case Summary" onChange={handleInputChange}></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Procedure:</label>
                                    <textarea rows="3" placeholder="Procedure" onChange={handleInputChange}></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group full-width">
                                    <div className="medications">
                                        <label>Medications:</label>
                                        <input type="text" placeholder="Enter Medicines" onChange={handleInputChange} />
                                        <button className="add-button">+</button>
                                        <button className="remove-button">x</button>
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="submit-button" onClick={handleSubmit}>Submit and Print Summary</button>
                                <button type="button" className="update-button">Update</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DistchargeFromNurse;
