import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link

function Navbar() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="patient-actions-container">
      <Link to="/">
        <button
          className={`home-button ${selectedButton === 'home' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('home')}
        >
          <i className="fas fa-home"></i>
        </button>
      </Link>
      <Link to="/SearchPatient">
        <button
          className={`patient-action-button ${selectedButton === 'search' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('search')}
        >
          Search Patient
        </button>
      </Link>
      <Link to="/RegisterPatient">
        <button
          className={`patient-action-button ${selectedButton === 'register' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('register')}
        >
          Register Patient
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
