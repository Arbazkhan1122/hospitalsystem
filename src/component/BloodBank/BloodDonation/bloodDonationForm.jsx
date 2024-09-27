/*Mohini_BloodDonationForm_24/sep/24/_WholePage*/

import React, { useState } from 'react';
import axios from 'axios';
import './bloodDonationForm.css';
const BloodDonationForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        gender: "",
        bloodGroup: "",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        weight: "",
        lastDonationDate: "",
        medication: "",
        surgeries: "",
        chronicIllness: "",
        travelHistory: "",
        infectiousDisease: "",
        healthComments: "",
        donationDate: "",
        donationType: "",
        donationCenter: "",
        timeSlot: "",
        consent: false,
        shareInfo: false,
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const formatDate=(date)=>{
        if(!date) return "";
        const [year,month,day]=date.split("-");
        return `${year}-${month}-${day}`;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedData = {
            ...formData,
            dob: formatDate(formData.dob),
            lastDonationDate: formatDate(formData.lastDonationDate),
            donationDate: formatDate(formData.donationDate),
        };
        axios.post('http://localhost:8000/api/donors/register', formattedData)
        .then(response=>{
            setSubmissionStatus('Success! Form submitted.');
            alert("Form Data Submitted Successfully: ", response.data); 
        })
        .catch(error => {
            setSubmissionStatus('Failed to submit the form.');
            console.error("There was an error submitting the form!", error);
        });


    };

    return (
        <div>
            <h3 className='header-BloodDonation'>Blood Donation Registeration</h3>
        <form className="blood-donation-patient-form" onSubmit={handleSubmit}>
           
            <div className="blood-donation-patient-left">
                {/* Left Side Inputs */}
                <div className="blood-donation-patient-group">
                <label>Full Name <span className="mandatory">*</span></label>
                <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Date of Birth <span className="mandatory">*</span>
                    </label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Gender<span className="mandatory"> *</span> </label>
                    <div className="blood-donation-patient-gender-options">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleInputChange}
                                required
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleInputChange}
                                required
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={formData.gender === 'Other'}
                                onChange={handleInputChange}
                                required
                            />
                            Other
                        </label>
                    </div>
                </div>
                <div className="blood-donation-patient-group">
                    <label>Blood Group <span className="mandatory">*</span></label>
                    <input
                        type="text"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                        placeholder="Blood Group"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Phone Number<span className="mandatory">*</span> </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Email <span className="mandatory">*</span></label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Address<span className="mandatory">*</span> </label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>City <span className="mandatory">*</span></label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>State <span className="mandatory">*</span></label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Postal Code<span className="mandatory">*</span> </label>
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="Postal Code"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Weight <span className="mandatory">*</span></label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="Weight (kg)"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Last Donation Date</label>
                    <input
                        type="date"
                        name="lastDonationDate"
                        value={formData.lastDonationDate}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="blood-donation-patient-right">
                {/* Right Side Inputs */}
                <div className="blood-donation-patient-group">
                    <label>Medication</label>
                    <input
                        type="text"
                        name="medication"
                        value={formData.medication}
                        onChange={handleInputChange}
                        placeholder="Medication"
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Surgeries</label>
                    <input
                        type="text"
                        name="surgeries"
                        value={formData.surgeries}
                        onChange={handleInputChange}
                        placeholder="Surgeries"
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Chronic Illness</label>
                    <input
                        type="text"
                        name="chronicIllness"
                        value={formData.chronicIllness}
                        onChange={handleInputChange}
                        placeholder="Chronic Illness"
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Travel History</label>
                    <input
                        type="text"
                        name="travelHistory"
                        value={formData.travelHistory}
                        onChange={handleInputChange}
                        placeholder="Travel History"
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Infectious Disease</label>
                    <input
                        type="text"
                        name="infectiousDisease"
                        value={formData.infectiousDisease}
                        onChange={handleInputChange}
                        placeholder="Infectious Disease"
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Health Comments</label>
                    <textarea
                        name="healthComments"
                        value={formData.healthComments}
                        onChange={handleInputChange}
                        placeholder="Health Comments"
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Donation Date <span className="mandatory">*</span></label>
                    <input
                        type="date"
                        name="donationDate"
                        value={formData.donationDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Donation Type <span className="mandatory">*</span></label>
                    <input
                        type="text"
                        name="donationType"
                        value={formData.donationType}
                        onChange={handleInputChange}
                        placeholder="Donation Type"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Donation Center<span className="mandatory">*</span> </label>
                    <input
                        type="text"
                        name="donationCenter"
                        value={formData.donationCenter}
                        onChange={handleInputChange}
                        placeholder="Donation Center"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
                    <label>Time Slot <span className="mandatory">*</span></label>
                    <input
                        type="time"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        placeholder="Time Slot"
                        required
                    />
                </div>
                <div className="blood-donation-patient-group">
    <label>
        I consent to donate blood.
    </label>
    <input
        type="checkbox"
        name="consent"
        checked={formData.consent}
        onChange={handleInputChange}
    />
</div>
<div className="blood-donation-patient-group">
    <label>
        I consent to share my information with relevant parties.
    </label>
    <input
        type="checkbox"
        name="shareInfo"
        checked={formData.shareInfo}
        onChange={handleInputChange}
    />
</div>
         <div className='blood-donation-button'>
         <button type="submit" className="blood-donation-submit-btn">Submit</button>

         </div>

         {/* {submissionStatus && <p>{submissionStatus}</p>} */}
            </div>
           
        </form>
        </div>
        
    );
};

export default BloodDonationForm;
/*Mohini_BloodDonationForm_24/sep/24/_WholePage*/
