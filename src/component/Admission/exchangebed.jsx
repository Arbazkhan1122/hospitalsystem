/* // neha-ADT-exchangebed-19/09/24 */
import React, { useState } from 'react';
import './exchangebed.css'
import { FaSearch } from 'react-icons/fa';

const ExchangeBed = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchTerm);
  };
  return (
    <div className="page">
     

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search by Hospitalno/IpNumber/PatientName"
          style={{width:"500px"}}
          className="exchangebed-search-input"
        />
       <button className='icon-btn'> <FaSearch style={{ color: 'gray', fontSize: '18px' }} /></button>
      </form>
    </div>
  );
};

export default ExchangeBed;
