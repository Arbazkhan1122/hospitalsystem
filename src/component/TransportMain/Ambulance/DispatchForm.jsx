import React, { useState } from 'react';
import './DispatchForm.css';
import axios from 'axios';
const DispatchForm = () => {
    const [formData, setFormData] = useState({
        requestId: '',
        emergencyType: '',
        patientName: '',
        patientLocation: '',
        destination: '',
        ambulanceType: '',
        ambulanceId: '',
        driverName: '',
        driverContactNumber: '',
        dispatchTime: '',
        estimatedArrivalTime: '',
        priorityLevel: '',
        notes: '',
        confirmDispatch: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            requestId: formData.requestId,
            emergencyType: formData.emergencyType,
            patientName: formData.patientName,
            patientLocation: formData.patientLocation,
            destination: formData.destination,
            ambulanceType: formData.ambulanceType,
             ambulanceId: formData.ambulanceId,
            driverName: formData.driverName,
            driverContactNumber: formData.driverContactNumber,
            dispatchTime: new Date(`2024-09-26T${formData.dispatchTime}:00`).toISOString(),
            estimatedArrivalTime: new Date(`2024-09-26T${formData.estimatedArrivalTime}:00`).toISOString(),
            priorityLevel: formData.priorityLevel,
            notes: formData.notes,
            confirmDispatch: formData.confirmDispatch.toString(), 
        };

        try {
            const response = await axios.post('http://localhost:8000/api/dispatch/dispatch', formattedData);
            console.log("API Response: ", response.data);
            alert("Dispatch submitted successfully.");
            // Handle successful form submission
        } catch (error) {
            console.error("Error submitting form: ", error);
            // Handle errors (e.g., show an error message)
        }
    };
    return (
        <form className="dispatch-form-module-com" onSubmit={handleSubmit}>
            <div className="dispatch-form-module-com-left">
                <div className='first-div-dispatch-form'>
                    { /* Left Form Elements */ }
                    <div className="dispatch-form-module-com-group">
                        <label>Request ID <span className="mandatory">*</span></label>
                        <input type="text" name="requestId" value={formData.requestId} onChange={handleInputChange} placeholder="Request ID" required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Emergency Type <span className="mandatory">*</span></label>
                        <input type="text" name="emergencyType" value={formData.emergencyType} onChange={handleInputChange} placeholder="Emergency Type" required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Patient Name <span className="mandatory">*</span></label>
                        <input type="text" name="patientName" value={formData.patientName} onChange={handleInputChange} placeholder="Patient Name" required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Patient Location <span className="mandatory">*</span></label>
                        <input type="text" name="patientLocation" value={formData.patientLocation} onChange={handleInputChange} placeholder="Patient Location" required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Destination <span className="mandatory">*</span></label>
                        <input type="text" name="destination" value={formData.destination} onChange={handleInputChange} placeholder="Destination" required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Ambulance Type <span className="mandatory">*</span></label>
                        <input type="text" name="ambulanceType" value={formData.ambulanceType} onChange={handleInputChange} placeholder="Ambulance Type" required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Ambulance ID <span className="mandatory">*</span></label>
                        <select name="ambulanceId" value={formData.ambulanceId} onChange={handleInputChange} required>
                            <option value="" disabled>Select Ambulance ID</option>
                            <option value="1">1</option>
                           
                        </select>

                        {/* <input type="text" name="ambulanceId" value={formData.ambulanceId} onChange={handleInputChange} placeholder="Ambulance ID" required /> */}
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Driver Name <span className="mandatory">*</span></label>
                        <input type="text" name="driverName" value={formData.driverName} onChange={handleInputChange} placeholder="Driver Name" required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Driver Contact Number <span className="mandatory">*</span></label>
                        <input type="text" name="driverContactNumber" value={formData.driverContactNumber} onChange={handleInputChange} placeholder="Driver Contact Number" required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Dispatch Time <span className="mandatory">*</span></label>
                        <input type="time" name="dispatchTime" value={formData.dispatchTime} onChange={handleInputChange} required />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Estimated Arrival Time <span className="mandatory">*</span></label>
                        <input type="time" name="estimatedArrivalTime" value={formData.estimatedArrivalTime} onChange={handleInputChange} required />
                    </div>
                </div>
            </div>

            <div className="dispatch-form-module-com-right">
                <div className='second-div-dispatch-form'>
                    { /* Right Form Elements */ }
                    <div className="dispatch-form-module-com-group">
                        <label>Priority Level <span className="mandatory">*</span></label>
                        <select name="priorityLevel" value={formData.priorityLevel} onChange={handleInputChange} required>
                            <option value="">Select Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Notes</label>
                        <textarea name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Additional Notes" />
                    </div>
                    <div className="dispatch-form-module-com-group">
                        <label>Confirm Dispatch <span className="mandatory">*</span></label>
                        <input type="checkbox" name="confirmDispatch" checked={formData.confirmDispatch} onChange={handleInputChange} required />
                    </div>
                    <div className="dispatch-form-submit-container">
                    <button type="submit" className="dispatch-form-module-com-submit-button">Submit</button>
                </div>
                </div>

                
            </div>
        </form>
    );
};

export default DispatchForm;
