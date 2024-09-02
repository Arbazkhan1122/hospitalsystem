import React, { useState } from 'react'
// import PatientForm1 from './Patient/PatientForm1';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Navbar from '../Patient/Navbar';
import PatientRegistration from '../Patient/PatientRegistration';
import SearchPatient from '../Patient/SearchPatient';
import RegisterPatient from '../Patient/RegisterPatient';
import Dashborad from '../Patient/Dashborad';


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
