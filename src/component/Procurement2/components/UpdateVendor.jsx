  import React, { useState } from 'react';
  import './UpdateVendor.css'; // Import the CSS file

  const UpdateVendor = () => {
    const [formValues, setFormValues] = useState({
      vendorName: '',
      contactAddress: '',
      contactNumber: '',
      currencyCode: '',
      vendorCode: ''  
    });
    

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      setErrors({ ...errors, [name]: '' }); // Clear the error when the user starts typing
    };

    const handleSubmit = () => {
      const requiredFields = ['vendorName', 'contactAddress', 'contactNumber', 'currencyCode', 'vendorCode'];
      const newErrors = {};

      requiredFields.forEach(field => {
        if (!formValues[field]) {
          newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
        }
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        alert('Vendor added successfully!');
        // Proceed with form submission logic here
      }
    };

    return (
      <div className="vendddContainer">
        <button className="vendddCloseButton" onClick={() => alert('Close button clicked!')}>
          &times;
        </button>
        <h2 className="vendddHeading">Update Vendor</h2>
        <div className="vendddFormContainer">
          <div className="vendddColumn">
            <VendddFormRow
              label="Vendor Name"
              name="vendorName"
              required
              value={formValues.vendorName}
              onChange={handleInputChange}
              placeholder="Vendor Name"
              error={errors.vendorName}
            />
            <VendddFormRow
              label="Contact Address"
              name="contactAddress"
              required
              value={formValues.contactAddress}
              onChange={handleInputChange}
              placeholder="Contact Address"
              error={errors.contactAddress}
            />
            <VendddFormRow
              label="Contact Number"
              name="contactNumber"
              required
              value={formValues.contactNumber}
              onChange={handleInputChange}
              placeholder="Contact Number"
              error={errors.contactNumber}
            />
            <VendddFormRow
              label="KRA PIN"
              name="kraPin"
              value={formValues.kraPin}
              onChange={handleInputChange}
              placeholder="KRA PIN"
            />
            <VendddFormRow
              label="Vendor Country"
              name="vendorCountry"
              elementType="select"
              options={[
                  "Afghanistan",
                  "Albania",
                  "Algeria",
                  "Andorra",
                  "Angola",
                  "Antigua and Barbuda",
                  "Argentina",
                  "Armenia",
                  "Australia",
                  "Austria",
                  "Azerbaijan",
                  "Bahamas",
                  "Bahrain",
                  "Bangladesh",
                  "Barbados",
                  "Belarus",
                  "Belgium",
                  "Belize",
                  "Benin",
                  "Bhutan",
                  "Bolivia",
                  "Bosnia and Herzegovina",
                  "Botswana",
                  "Brazil",
                  "Brunei",
                  "Bulgaria",
                  "Burkina Faso",
                  "Burundi",
                  "Cabo Verde",
                  "Cambodia",
                  "Cameroon",
                  "Canada",
                  "Central African Republic",
                  "Chad",
                  "Chile",
                  "China",
                  "Colombia",
                  "Comoros",
                  "Congo (Congo-Brazzaville)",
                  "Costa Rica",
                  "Croatia",
                  "Cuba",
                  "Cyprus",
                  "Czechia (Czech Republic)",
                  "Denmark",
                  "Djibouti",
                  "Dominica",
                  "Dominican Republic",
                  "Ecuador",
                  "Egypt",
                  "El Salvador",
                  "Equatorial Guinea",
                  "Eritrea",
                  "Estonia",
                  "Ethiopia",
                  "Fiji",
                  "Finland",
                  "France",
                  "Gabon",
                  "Gambia",
                  "Georgia",
                  "Germany",
                  "Ghana",
                  "Greece",
                  "Grenada",
                  "Guatemala",
                  "Guinea",
                  "Guinea-Bissau",
                  "Guyana",
                  "Haiti",
                  "Honduras",
                  "Hungary",
                  "Iceland",
                  "India",
                  "Indonesia",
                  "Iran",
                  "Iraq",
                  "Ireland",
                  "Israel",
                  "Italy",
                  "Jamaica",
                  "Japan",
                  "Jordan",
                  "Kazakhstan",
                  "Kenya",
                  "Kiribati",
                  "Kuwait",
                  "Kyrgyzstan",
                  "Laos",
                  "Latvia",
                  "Lebanon",
                  "Lesotho",
                  "Liberia",
                  "Libya",
                  "Liechtenstein",
                  "Lithuania",
                  "Luxembourg",
                  "Madagascar",
                  "Malawi",
                  "Malaysia",
                  "Maldives",
                  "Mali",
                  "Malta",
                  "Marshall Islands",
                  "Mauritania",
                  "Mauritius",
                  "Mexico",
                  "Micronesia",
                  "Moldova",
                  "Monaco",
                  "Mongolia",
                  "Montenegro",
                  "Morocco",
                  "Mozambique",
                  "Myanmar (formerly Burma)",
                  "Namibia",
                  "Nauru",
                  "Nepal",
                  "Netherlands",
                  "New Zealand",
                  "Nicaragua",
                  "Niger",
                  "Nigeria",
                  "North Korea",
                  "North Macedonia",
                  "Norway",
                  "Oman",
                  "Pakistan",
                  "Palau",
                  "Palestine State",
                  "Panama",
                  "Papua New Guinea",
                  "Paraguay",
                  "Peru",
                  "Philippines",
                  "Poland",
                  "Portugal",
                  "Qatar",
                  "Romania",
                  "Russia",
                  "Rwanda",
                  "Saint Kitts and Nevis",
                  "Saint Lucia",
                  "Saint Vincent and the Grenadines",
                  "Samoa",
                  "San Marino",
                  "Sao Tome and Principe",
                  "Saudi Arabia",
                  "Senegal",
                  "Serbia",
                  "Seychelles",
                  "Sierra Leone",
                  "Singapore",
                  "Slovakia",
                  "Slovenia",
                  "Solomon Islands",
                  "Somalia",
                  "South Africa",
                  "South Korea",
                  "South Sudan",
                  "Spain",
                  "Sri Lanka",
                  "Sudan",
                  "Suriname",
                  "Sweden",
                  "Switzerland",
                  "Syria",
                  "Taiwan",
                  "Tajikistan",
                  "Tanzania",
                  "Thailand",
                  "Timor-Leste",
                  "Togo",
                  "Tonga",
                  "Trinidad and Tobago",
                  "Tunisia",
                  "Turkey",
                  "Turkmenistan",
                  "Tuvalu",
                  "Uganda",
                  "Ukraine",
                  "United Arab Emirates",
                  "United Kingdom",
                  "United States of America",
                  "Uruguay",
                  "Uzbekistan",
                  "Vanuatu",
                  "Vatican City",
                  "Venezuela",
                  "Vietnam",
                  "Yemen",
                  "Zambia",
                "Zimbabwe"
              ]}
              
              value={formValues.vendorCountry}
              onChange={handleInputChange}
            />
            <VendddFormRow
              label="Currency Code"
              name="currencyCode"
              required
              value={formValues.currencyCode}
              onChange={handleInputChange}
              placeholder="Currency Code"
              error={errors.currencyCode}
            />
            <VendddFormRow
              label="Bank Details"
              name="bankDetails"
              elementType="textarea"
              value={formValues.bankDetails}
              onChange={handleInputChange}
              placeholder="Bank details"
            />
          </div>
          <div className="vendddColumn">
            <VendddFormRow
              label="Vendor Code"
              name="vendorCode"
              required
              value={formValues.vendorCode}
              onChange={handleInputChange}
              placeholder="Vendor Code"
              error={errors.vendorCode}
            />
            <VendddFormRow
              label="Contact Person"
              name="contactPerson"
              value={formValues.contactPerson}
              onChange={handleInputChange}
              placeholder="Contact Person"
            />
            <VendddFormRow
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email Address"
            />
            <VendddFormRow
              label="Credit Period (days)"
              name="creditPeriod"
              elementType="number"
              value={formValues.creditPeriod}
              onChange={handleInputChange}
                />
            <VendddFormRow
              label="Govt Reg Date"
              name="govtRegDate"
              elementType="date"
              value={formValues.govtRegDate}
              onChange={handleInputChange}
            />
            <VendddFormRow
              label="Is Active"
              name="isActive"
              elementType="checkbox"
              defaultChecked
              value={formValues.isActive}
              onChange={handleInputChange}
            />
            <VendddFormRow
              label="Receive Donation"
              name="receiveDonation"
              elementType="checkbox"
              value={formValues.receiveDonation}
              onChange={handleInputChange}    
            />
          </div>
        </div>
        <button className="vendddAddButton" onClick={handleSubmit}>Update Vendor</button>
      </div>
    );
  };

  const VendddFormRow = ({ label, name, required, elementType = 'input', options = [], defaultChecked, value, onChange, placeholder, error }) => (
    <div className="vendddFormRow">
      <label className="vendddLabel">
        {label}
        {required && <span className="vendddRequired">*</span>}
      </label>
      <div className="vendddColon">:</div>
      {elementType === 'input' && (
        <>
          <input className="vendddInput" type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} />
          {error && <div className="vendddError">{error}</div>}
        </>
      )}
      {elementType === 'textarea' && (
        <>
          <textarea className="vendddTextarea" name={name} value={value} onChange={onChange} placeholder={placeholder} />
          {error && <div className="vendddError">{error}</div>}
        </>
      )}
      {elementType === 'select' && (
        <>
          <select className="vendddInput" name={name} value={value} onChange={onChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {error && <div className="vendddError">{error}</div>}
        </>
      )}
      {elementType === 'checkbox' && (
        <>
          <input className="vendddCheckbox" type="checkbox" name={name} checked={value} onChange={onChange} defaultChecked={defaultChecked} />
          {error && <div className="vendddError">{error}</div>}
        </>
      )}
      {elementType === 'date' && (
        <>
          <input className="vendddInput" type="date" name={name} value={value} onChange={onChange} />
          {error && <div className="vendddError">{error}</div>}
        </>
      )}
      {elementType === 'number' && (
        <>
          <input className="vendddInput" type="number" name={name} value={value} onChange={onChange} placeholder={placeholder} />
          {error && <div className="vendddError">{error}</div>}
        </>
      )}
    </div>
  );

  export default UpdateVendor;
