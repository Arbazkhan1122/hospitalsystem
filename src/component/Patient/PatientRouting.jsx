import React, { useState } from 'react'
// import PatientForm1 from './Patient/PatientForm1';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';
import PatientRegistration from './PatientRegistration';
import SearchPatient from './SearchPatient';
import RegisterPatient from './RegisterPatient';
import Dashborad from './Dashborad';


function PatientRouting() {

  return (
    <>
    
       <div className="app-container">
         <Navbar />
        <Routes>
        <Route path='/PatientRegistration' element={<PatientRegistration/>}></Route>
        <Route path='/SearchPatient' element={<SearchPatient/>}></Route>
        <Route path='/RegisterPatient' element={<RegisterPatient/>}></Route>
        <Route path='/' element={<Dashborad/>}></Route>

         </Routes>
      </div>

     
          </>
  )
}

export default PatientRouting
