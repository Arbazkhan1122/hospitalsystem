import React, { useState } from 'react';
import './InsurancePage.css';

function InsurancePage({sendinsurancedata}) {
  const [insuranceProvider, setInsuranceProvider] = useState('NHIF');
  const [insuranceName, setInsuranceName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [insuranceNumber, setInsuranceNumber] = useState('');
  const [facilityCode, setFacilityCode] = useState('');
  const [initialBalance, setInitialBalance] = useState('0');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the data object to send to the API
    const insuranceData = {
      insuranceProvider,
      insuranceName,
      cardNumber,
      insuranceNumber,
      facilityCode,
      initialBalance
    };

    sendinsurancedata(insuranceData);
  };

  return (
    <div className="insurance-page">
      <h2>Insurance Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="insuranceProvider">Insurance Provider*:</label>
          <select
            id="insuranceProvider"
            value={insuranceProvider}
            onChange={(e) => setInsuranceProvider(e.target.value)}
            required
          >
            <option value="NHIF">NHIF</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="insuranceName">Insurance Name:</label>
          <input
            type="text"
            id="insuranceName"
            value={insuranceName}
            onChange={(e) => setInsuranceName(e.target.value)}
            placeholder="Insurance name"
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number (ID No)*:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card number (ID No)"
            required
          />
        </div>
        <div>
          <label htmlFor="insuranceNumber">Insurance Number (Member No)*:</label>
          <input
            type="text"
            id="insuranceNumber"
            value={insuranceNumber}
            onChange={(e) => setInsuranceNumber(e.target.value)}
            placeholder="Insurance number (Member No)"
            required
          />
        </div>
        <div>
          <label htmlFor="facilityCode">Facility Code*:</label>
          <input
            type="text"
            id="facilityCode"
            value={facilityCode}
            onChange={(e) => setFacilityCode(e.target.value)}
            placeholder="Facility Code"
            required
          />
        </div>
        <div>
          <label htmlFor="initialBalance">Initial Balance*:</label>
          <input
            type="number"
            id="initialBalance"
            value={initialBalance}
            onChange={(e) => setInitialBalance(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-insurance-btn">Add Insurance</button>
      </form>
    </div>
  );
}

export default InsurancePage;
