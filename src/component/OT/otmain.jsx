//  neha-OT-OT-otmain-14-9-24
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './otNavbar';
import BookingList from './BookingList/booinglist';
import Setting from './Setting/setting';
<<<<<<< HEAD
import Sugeryscheduling from './SurgeryScheduling/schedulinglist';
import OTResourceManagement from './OTResourcemgnt/otresourcemangement';
import SurgicalInstrumentTracking from './surgicalinsrumenttrack/surgicalinstrumenttracking';
import AnesthesiaRecordManagement from './anesthesiarecordmgnt/anesthesiarecordmanagemet';
import PostSurgeryCare from './Postcaresurgery/postcaresurgery';
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

const Otmain = () => {
  return (
    <>
        <Navbar/>
        
     
      <div className="app-container">
        <Routes>
          <Route path="/" element={<BookingList/>} />
          <Route path="setting/*" element={<Setting/>} />
          {/* <Route path="/Change_Visitscheme" element={<Change_Visitscheme/>} /> */}
        
<<<<<<< HEAD
            <Route path="/surgeryScheduling" element={<Sugeryscheduling />} />
            <Route path='/ot' element={<OTResourceManagement />} />
            <Route path='/surgicaltrack' element={<SurgicalInstrumentTracking />} />
            <Route path='/anesthesiarecordmgnt' element={<AnesthesiaRecordManagement />} />
            <Route path='/postsurgerycare' element={<PostSurgeryCare />} />
=======
         
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
        </Routes>
      </div>
      </>
    
  );
};

export default Otmain;
