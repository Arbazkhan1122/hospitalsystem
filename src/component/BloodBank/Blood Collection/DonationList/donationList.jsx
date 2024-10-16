import React, { useState } from 'react';
// import "../DonationList/donationList.css"
import "./donationList.css"

function Donarlist() {
    const donors = [
        {
            id: 1,
            fullName: 'John Doe',
            dob: '1990-01-01',
            gender: 'Male',
            bloodGroup: 'A+',
            phoneNumber: '123-456-7890',
            email: 'john@example.com',
            address: '123 Elm St',
            city: 'Somewhere',
            state: 'CA',
            postalCode: '90210',
            weight: '75kg',
            lastDonationDate: '2023-06-15',
            medication: 'None',
            surgeries: 'Appendectomy',
            chronicIllness: 'None',
            travelHistory: 'None',
            infectiousDisease: 'None',
            healthComments: 'Healthy',
            donationDate: '2023-07-01',
            donationType: 'Whole Blood',
            donationCenter: 'Main Center',
            timeSlot: '10:00 AM',
            consent: true,
            shareInfo: true,
        },
        // Other donors...
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedDonor, setSelectedDonor] = useState(null);
    const [formData, setFormData] = useState({
        hemoglobinLevel: '',
        pulse: '',
        temperature: '',
        vaccinationStatus: '',
        tattoosOrPiercings: '',
        allergiesOrReactions: '',
        bloodGroup: '',
        rhFactor: '',
        collectionDateTime: '',
        collectionSite: '',
        collectionMethod: '',
        volumeCollected: '',
        collectionBagNumber: '',
    });

    const handleAddInfo = (donor) => {
        // This opens the modal with the form.
        setSelectedDonor(donor);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDonor(null);
    };

    const handleFormChange = (e) => {
        // Update the form values on change
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Data to send in the API call
        const dataToSend = {
            fullName: selectedDonor.fullName,
            dateOfBirth: selectedDonor.dob,
            gender: selectedDonor.gender,
            contactNumber: selectedDonor.phoneNumber,
            emailAddress: selectedDonor.email,
            address: `${selectedDonor.address}, ${selectedDonor.city}, ${selectedDonor.state}, ${selectedDonor.postalCode}`,
            nationalId: selectedDonor.id,
            healthEligibilityInfo: {
                dateOfLastDonation: selectedDonor.lastDonationDate,
                weight: parseFloat(selectedDonor.weight),
                bloodPressure: "120/80", // Placeholder value
                hemoglobinLevel: parseFloat(formData.hemoglobinLevel),
                pulseAndTemperature: `${formData.pulse}, ${formData.temperature}`,
                medicalHistory: selectedDonor.medication,
                travelHistory: selectedDonor.travelHistory,
                vaccinationStatus: formData.vaccinationStatus,
                tattoosOrPiercings: formData.tattoosOrPiercings,
                allergiesOrAdverseReactions: formData.allergiesOrReactions,
            },
            bloodTypeInfo: {
                bloodGroup: formData.bloodGroup,
                rhFactor: formData.rhFactor,
                crossMatchingInfo: 'N/A',
            },
            consentInfo: {
                informedConsent: selectedDonor.consent,
            },
            bloodCollectionDetails: {
                collectionDateTime: formData.collectionDateTime,
                collectionSite: formData.collectionSite,
                collectionMethod: formData.collectionMethod,
                volumeCollected: parseFloat(formData.volumeCollected),
                collectionBagNumber: formData.collectionBagNumber,
                barcodeOrQrCode: 'QR123456789',
            }
        };

        try {
            // Submit data to backend API
            const response = await fetch('http://localhost:9092/api/basic-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                console.log('Data submitted successfully');
                handleCloseModal();
            } else {
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bloodcollection">
            <h2>Donor List</h2>
            <div className="donor-list-container">
                <table className="donor-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Blood Group</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Donation Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map((donor) => (
                            <tr key={donor.id}>
                                <td>{donor.fullName}</td>
                                <td>{donor.bloodGroup}</td>
                                <td>{donor.phoneNumber}</td>
                                <td>{donor.email}</td>
                                <td>{donor.donationDate}</td>
                                <td>
                                    <button className='bloodcollection-btn' onClick={() => handleAddInfo(donor)}>
                                        Add Collection Info
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* This renders the modal for adding advanced collection information */}
            {showModal && (
                <div className="bloodcollection-modal">
                    <div className="bloodcollection-modal-content">
                        <h6>Add Advanced Information for {selectedDonor?.fullName}</h6>
                        <form className='bloodcollectionform' onSubmit={handleFormSubmit}>
                            <label>Hemoglobin Level:</label>
                            <input
                                type="text"
                                name="hemoglobinLevel"
                                value={formData.hemoglobinLevel}
                                onChange={handleFormChange}
                                required
                            />
                            <label>Pulse:</label>
                            <input
                                type="text"
                                name="pulse"
                                value={formData.pulse}
                                onChange={handleFormChange}
                                required
                            />
                            <label>Temperature:</label>
                            <input
                                type="text"
                                name="temperature"
                                value={formData.temperature}
                                onChange={handleFormChange}
                                required
                            />
                            <label>Vaccination Status:</label>
                            <input
                                type="text"
                                name="vaccinationStatus"
                                value={formData.vaccinationStatus}
                                onChange={handleFormChange}
                            />
                            <label>Tattoos or Piercings:</label>
                            <input
                                type="text"
                                name="tattoosOrPiercings"
                                value={formData.tattoosOrPiercings}
                                onChange={handleFormChange}
                            />
                            <label>Allergies or Reactions:</label>
                            <input
                                type="text"
                                name="allergiesOrReactions"
                                value={formData.allergiesOrReactions}
                                onChange={handleFormChange}
                            />
                            <label>Blood Group:</label>
                            <input
                                type="text"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleFormChange}
                                required
                            />
                            <label>RH Factor:</label>
                            <input
                                type="text"
                                name="rhFactor"
                                value={formData.rhFactor}
                                onChange={handleFormChange}
                                required
                            />
                            <label>Collection Date and Time:</label>
                            <input
                                type="datetime-local"
                                name="collectionDateTime"
                                value={formData.collectionDateTime}
                                onChange={handleFormChange}
                                required
                            />
                            <label>Collection Site:</label>
                            <input
                                type="text"
                                name="collectionSite"
                                value={formData.collectionSite}
                                onChange={handleFormChange}
                                required
                            />
                            <label>Collection Method:</label>
                            <input
                                type="text"
                                name="collectionMethod"
                                value={formData.collectionMethod}
                                onChange={handleFormChange}
                                required
                            />
                            <label>Volume Collected (ml):</label>
                            <input
                                type="number"
                                name="volumeCollected"
                                value={formData.volumeCollected}
                                onChange={handleFormChange}
                                required
                            />
                            <label>Collection Bag Number:</label>
                            <input
                                type="text"
                                name="collectionBagNumber"
                                value={formData.collectionBagNumber}
                                onChange={handleFormChange}
                                required
                            />
                            <button className='bloodcollection-btn' type="submit">
                                Submit
                            </button>
                            <button type="button" className='bloodcollection-btn' onClick={handleCloseModal}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Donarlist;
