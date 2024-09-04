import React from 'react';
import './ClinicalAllergy.css';

const AllergyList = () => {
  const allergies = [
    {
      recordedOn: '2024-08-13 13:20',
      allergen: 'test',
      severity: 'Mild',
      reaction: 'ANNAPHYLAXIS',
      verified: false,
      comments: 't'
    }
  ];

  return (
    <div className="allergy-container">
      <div className="allergy-header">
        <h2>Allergy List</h2>
        <button className="add-new-btn">+ Add New</button>
      </div>
      <table className="allergy-table">
        <thead>
          <tr>
            <th>Recorded On</th>
            <th>Allergen</th>
            <th>Severity</th>
            <th>Reaction</th>
            <th>Verified</th>
            <th>Comments</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {allergies.map((allergy, index) => (
            <tr key={index}>
              <td>{allergy.recordedOn}</td>
              <td>{allergy.allergen}</td>
              <td>{allergy.severity}</td>
              <td>{allergy.reaction}</td>
              <td>{allergy.verified.toString()}</td>
              <td>{allergy.comments}</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllergyList;