import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="inventory-navbar">
      <button className="inventory-home-button" onClick={() => navigate('/')}>⌂</button>
      <div className="inventory-nav-links">
        <button onClick={() => navigate('/internal')}>Internal</button>
        <button onClick={() => navigate('/stock')}>Stock</button>
        <button onClick={() => navigate('/reports')}>Reports</button>
        <button onClick={() => navigate('/return-to-vendor')}>Return To Vendor</button>
        <button onClick={() => navigate('/donate')}>Donate</button>
      </div>
      <div className="inventory-active-inventory">
        Active Inventory: GENERAL-INVENTORY <span className="inventory-arrow">➔</span>
      </div>
    </nav>
  );
};

export default Navbar;
