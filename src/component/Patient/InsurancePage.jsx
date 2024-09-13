 //prachi parab patientRegisteration css 13/9
import React, { useEffect, useState } from 'react';
import './InsurancePage.css';

function InsurancePage({ sendinsurancedata, insuranceData }) {
  const [insuranceDataPatient, setInsuranceDataPatient] = useState({
    insuranceProvider: 'NHIF',
    insuranceName: '',
    cardNo: '',
    insuranceNo: '',
    facilityCode: '',
    initialBalance: '0',
  });

  useEffect(() => {
    // Only update the state if the incoming insuranceData is different from the current state
    if (insuranceData && (
      insuranceData.insuranceProvider !== insuranceDataPatient.insuranceProvider ||
      insuranceData.insuranceName !== insuranceDataPatient.insuranceName ||
      insuranceData.cardNo !== insuranceDataPatient.cardNo ||
      insuranceData.insuranceNo !== insuranceDataPatient.insuranceNo ||
      insuranceData.facilityCode !== insuranceDataPatient.facilityCode ||
      insuranceData.initialBalance !== insuranceDataPatient.initialBalance
    )) {
      setInsuranceDataPatient({
        insuranceProvider: insuranceData.insuranceProvider || 'NHIF',
        insuranceName: insuranceData.insuranceName || '',
        cardNo: insuranceData.cardNo || '',
        insuranceNo: insuranceData.insuranceNo || '',
        facilityCode: insuranceData.facilityCode || '',
        initialBalance: insuranceData.initialBalance || '0',
      });
    }
  }, [insuranceData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsuranceDataPatient(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendinsurancedata(insuranceDataPatient); // Send the correct state object
    alert("Insurance Information Saved Successfully");
  };

  return (
    <div className="insurance-page">
      <h5 style={{marginBottom:'20px'}}>Insurance Information</h5>
      <form onSubmit={handleSubmit} className='insurance-page-form'>
        <div>
          <label htmlFor="insuranceProvider">Insurance Provider<span className='mandatory'>*</span>:</label>
          <select
            id="insuranceProvider"
            name="insuranceProvider"
            value={insuranceDataPatient.insuranceProvider}
            onChange={handleChange}
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
            name="insuranceName"
            value={insuranceDataPatient.insuranceName}
            onChange={handleChange}
            placeholder="Insurance name"
          />
        </div>
        <div>
          <label htmlFor="cardNo">Card Number (ID No)<span className='mandatory'>*</span>:</label>
          <input
            type="text"
            id="cardNo"
            name="cardNo"
            value={insuranceDataPatient.cardNo}
            onChange={handleChange}
            placeholder="Card number (ID No)"
            required
          />
        </div>
        <div>
          <label htmlFor="insuranceNo">Insurance Number (Member No)<span className='mandatory'>*</span>:</label>
          <input
            type="text"
            id="insuranceNo"
            name="insuranceNo"
            value={insuranceDataPatient.insuranceNo}
            onChange={handleChange}
            placeholder="Insurance number (Member No)"
            required
          />
        </div>
        <div>
          <label htmlFor="facilityCode">Facility Code<span className='mandatory'>*</span>:</label>
          <input
            type="text"
            id="facilityCode"
            name="facilityCode"
            value={insuranceDataPatient.facilityCode}
            onChange={handleChange}
            placeholder="Facility Code"
            required
          />
        </div>
        <div>
          <label htmlFor="initialBalance">Initial Balance<span className='mandatory'>*</span>:</label>
          <input
            type="number"
            id="initialBalance"
            name="initialBalance"
            value={insuranceDataPatient.initialBalance}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{textAlign:"right"}}>
         
       </div>
        <button type="submit" className="add-insurance-btn" style={{width:'fit-content'}}>Add Insurance</button>
      </form>
    </div>
  );
}

export default InsurancePage;
