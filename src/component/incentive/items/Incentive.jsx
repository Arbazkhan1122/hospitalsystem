import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SettingsPage from './SettingsPage';
import NewIncentive from './NewIncentive';
import EditItems from './EditItems';
import EditTds from './EditTds';
import ReportsPage from './ReportPage';
import IncentivePaymentInfo from "./IncentivePaymentInfo";
import { Link } from 'react-router-dom';
import "./Incentive.css"


// import NavigationBar from './NavigationBar';


const Incentive = () => {
  return (
    <div>
    {/* <NavigationBar /> */}
      {/* <Routes>
        <Route path="/requisition" element={<RequisitionPage/>} />
      </Routes> */}


     {/* <Routes>
<Route path ="/" element ={<SettingsPage/>} />
    </Routes>  */}
    {/* <NavigationBar /> */}
    {/* <Routes> */}

{/* <Route path ="/" element ={<RequisitionPage/>} /> */}
    {/* </Routes> */}
    <nav className='incentive-navbar'>
    <div className="inventory-nav-links">
        <Link to="/">Transactions</Link>
        <Link to="/incentivereport">Reports</Link>
        <Link to="/incentivesettings">Setting</Link>
      </div>
      </nav>
    <Routes>
       <Route path="/" element={<IncentivePaymentInfo />} />
      <Route path="/incentivereport" element={<ReportsPage/>}></Route>
        <Route path="/incentivesettings" element={<SettingsPage/>} />
        <Route path="/new-incentive" element={<NewIncentive/>} />
        <Route path="/edit-items/:id" element={<EditItems/>} />
        <Route path="/edit-tds/:id" element={<EditTds/>} />
      </Routes> 
    
   </div>
  )
}
export default Incentive;


// const Incentive = () => {
//   return (
//     <BrowserRouter>
//       <NavigationBar />
//       <Routes>
//         <Route path="/requisition" element={<RequisitionPage />} />
//         <Route path="/purchase-request" element={<PurchaseRequest />} />
//         <Route path="/purchase-order" element={<PurchaseOrder />} />
//         {/* Add other routes here for different pages */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Incentive;