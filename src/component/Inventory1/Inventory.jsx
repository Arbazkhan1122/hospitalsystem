import React from 'react';
import Home from "./Internal/Home";
import Internal from "./Internal/Internal";
import Stock from "./Stock/Stock";
import Reports from "./Reports/Reports";
import ReturnToVendor from "./ReturnToVendor/ReturnToVendor";
import Donate from "./Donate/Donate";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const Inventory = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/internal/*" element={<Internal />} />
        <Route path="/stock/*" element={<Stock/>} />
        <Route path="/reports/*" element={<Reports />} />
        <Route path="/return-to-vendor" element={<ReturnToVendor />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  )
}

export default Inventory