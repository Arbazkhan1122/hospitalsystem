// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './otNavbar';
import BookingList from './BookingList/booinglist';
import Setting from './Setting/setting';

const Otmain = () => {
  return (
    <>
        <Navbar/>
        
     
      <div className="app-container">
        <Routes>
          <Route path="/" element={<BookingList/>} />
          <Route path="setting/*" element={<Setting/>} />
          {/* <Route path="/Change_Visitscheme" element={<Change_Visitscheme/>} /> */}
        
         
        </Routes>
      </div>
      </>
    
  );
};

export default Otmain;
