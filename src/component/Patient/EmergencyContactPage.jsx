import React, { useState } from 'react';
import './EmergencyContactPage.css';

function EmergencyContactPage({sendemergencycontactdata}) {
  const [contactType, setContactType] = useState({
    kin: false,
    emergencyContact: false,
    both: false
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [relationship, setRelationship] = useState('');
  const [comments, setComments] = useState('');

  const handleTypeChange = (type) => {
    setContactType({
      kin: type === 'kin',
      emergencyContact: type === 'emergencyContact',
      both: type === 'both'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data object to send to the API
    const contactData = {
      contactType: contactType.both ? 'both' : contactType.kin ? 'kin' : 'emergencyContact',
      firstName,
      lastName,
      phoneNumber,
      relationship,
      comments
    };

    sendemergencycontactdata(contactData)
    alert("Emergency Contact Details Saved Successfully ")
  };

  return (
    <div className="emergency-contact-page">
      <h2>Kin/Emergency Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="emergency-contact-type">
          <label>Type*:</label>
          <div>
            <label>
              <input 
                type="checkbox" 
                checked={contactType.kin} 
                onChange={() => handleTypeChange('kin')}
              /> KIN
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={contactType.emergencyContact} 
                onChange={() => handleTypeChange('emergencyContact')}
              /> Emergency Contact
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={contactType.both} 
                onChange={() => handleTypeChange('both')}
              /> Both
            </label>
          </div>
        </div>
        <div className="emergency-contact-input">
          <label htmlFor="firstName">First Name*:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
        </div>
        <div className="emergency-contact-input">
          <label htmlFor="lastName">Last Name*:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="emergency-contact-input">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <div className="emergency-contact-input">
          <label htmlFor="relationship">Relationship*:</label>
          <input
            type="text"
            id="relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            placeholder="Relationship"
            required
          />
        </div>
        <div className="emergency-contact-input">
          <label htmlFor="comments">Comments:</label>
          <input
            type="text"
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Comments"
          />
        </div>
        <button type="submit" className="emergency-contact-add-btn">Add</button>
      </form>
    </div>
  );
}

export default EmergencyContactPage;
