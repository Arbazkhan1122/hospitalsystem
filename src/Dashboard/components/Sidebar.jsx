import React, { useState } from "react";
import { LuChevronDown, LuChevronUp, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { FaClinicMedical, FaUserMd, FaFileInvoice } from "react-icons/fa";
import './Sidebar.css';
import hospitallogo from "../Images/hospital.png";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen, onAppointmentClick,onSettings,onInventory,onIncentive,onLaboratory,onUtilites,onEmergency,onSystemAdmin,onSocialService,onDisprensary,onDynamicReport,onReport,onNurse,onDoctor,onOperationTheater,onNhif,onADT,onMKT}) => {
  const [openMenus, setOpenMenus] = useState({});
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

   const handleItemClick = (menu, submenu) => {
    setActiveLink(`${menu}-${submenu}`);
  };

    const handleAppointmentClick = () => {
    handleLinkClick("appointment");
    onAppointmentClick(); // Call the passed function when appointment is clicked
  };
   const handleSettingClick=()=>{
    handleLinkClick("setting");
    onSettings();
   }

   const handleInventoryClick=()=>{
    handleLinkClick("inventory");
   onInventory();
   }
   const handleIncentiveClick=()=>{
    handleLinkClick("incentive");
    onIncentive();
   }
   const handleLaboratoryClick=()=>{
    handleLinkClick("laboratory");
    onLaboratory();
   }
   const handleUtilitesClick=()=>{
    handleLinkClick("utilites");
    onUtilites();
   }
   const handleEmergencyClick=()=>{
    handleLinkClick("emergency");
   onEmergency();
   }

   const handleSystemAdminClick=()=>{
    handleLinkClick("systemAdmin");
    onSystemAdmin();
   }
  const handleSocialServiceClick=()=>{
    handleLinkClick("socialService");
    onSocialService();
  }
  const handleDisprensaryClick=()=>{
    handleLinkClick("disprensary");
    onDisprensary();
  }
  const handleDynamicReportClick=()=>{
    handleLinkClick("dynamicReport");
    onDynamicReport();
  }
  const handleReportClick=()=>{
    handleLinkClick("report");
    onReport();
  }
  const handleNurseClick=()=>{
    handleLinkClick("nurse");
    onNurse();
  }
  const handleDoctor=()=>{
    handleLinkClick("doctor");
    onDoctor();
  }
  const handleOprationTheaterClick=()=>{
    handleLinkClick("operationTheater");
    onOperationTheater();
  }
  const handleNhifClick=()=>{
    handleLinkClick("nhif");
    onNhif();
  }
  const handleAdtClick=()=>{
    handleLinkClick("adt");
    onADT();
  }
  const handleMKTClick=()=>{
    handleLinkClick("mkt");
    onMKT();
  }

  return (
    <div className={`custom-sidebar ${isOpen ? '' : 'custom-sidebar-closed'}`}>
      <button className="custom-toggle-button" onClick={toggleSidebar}>
        {isOpen ? <LuChevronLeft size={20} /> : <LuChevronRight size={20} />}
      </button>
      <div className="custom-logo-container">
        {isOpen ? (
          <span>
            <img style={{ width: "30px" }} src={hospitallogo} alt="Hospital Logo" />
            Hospital
          </span>
        ) : (
          <img style={{ width: "30px" }} src={hospitallogo} alt="Hospital Logo" />
        )}
      </div>
      <ul className="custom-sidebar-links">
        <li className={`custom-nav-item ${activeLink === "dispensary-submenu1" || activeLink === "dispensary-submenu2" || activeLink === "dispensary-submenu3" || activeLink === "dispensary-submenu4" || activeLink === "dispensary-submenu5" || activeLink === "dispensary-submenu6" || activeLink === "dispensary-submenu7" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleDisprensaryClick}>
            <span><FaClinicMedical /></span>
            {isOpen && <span className="custom-nav-link-text">Dispensary</span>}
            <span className="custom-dropdown-icon">
              {openMenus.dispensary ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.dispensary && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("dispensary", "submenu1")} className={activeLink === "dispensary-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/disPrescription">Prescription</Link> 
              </li>
              <li onClick={() => handleItemClick("dispensary", "submenu2")} className={activeLink === "dispensary-submenu2" ? "custom-submenu-active" : ""}>
                <Link to="/dispenSales">Sale</Link> 
              </li>
              <li onClick={() => handleItemClick("dispensary", "submenu3")} className={activeLink === "dispensary-submenu3" ? "custom-submenu-active" : ""}>
                <Link to="/salesStockDetails">Stock</Link> 
              </li>
              <li onClick={() => handleItemClick("dispensary", "submenu4")} className={activeLink === "dispensary-submenu4" ? "custom-submenu-active" : ""}>
                <Link to="/dispenCouter">Counter </Link> 
              </li>
              <li onClick={() => handleItemClick("dispensary", "submenu5")} className={activeLink === "dispensary-submenu5" ? "custom-submenu-active" : ""}>
                <Link to="/dispenReportList">Reports </Link> 
              </li>
               <li onClick={() => handleItemClick("dispensary", "submenu5")} className={activeLink === "dispensary-submenu5" ? "custom-submenu-active" : ""}>
                <Link to="/dispenPatientConsump">Patient Consumption </Link> 
              </li>
            </ul>
          )}
        </li>
        <li className={`custom-nav-item ${activeLink === "dynamicReport-submenu1" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleDynamicReportClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Dynamic Report</span>}
            <span className="custom-dropdown-icon">
              {openMenus.dynamicReport ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          </li>
       
        
          <li className={`custom-nav-item ${activeLink === "oprationTheatre-submenu1" || activeLink === "oprationTheatre-submenu2" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleOprationTheaterClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Opration Theater</span>}
            <span className="custom-dropdown-icon">
              {openMenus.oprationTheatre ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.oprationTheatre && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("oprationTheatre", "submenu1")} className={activeLink === "oprationTheatre-submenu1" ? "custom-submenu-active" : ""}>
               <Link to="/bookingList">BookingList</Link> 

              </li>
              <li onClick={() => handleItemClick("oprationTheatre", "submenu2")} className={activeLink === "oprationTheatre-submenu2" ? "custom-submenu-active" : ""}>
                <Link to="/setting/*">Settings</Link> 

              </li>
            </ul>
          )}
        </li>
        <li className={`custom-nav-item ${activeLink === "doctor-submenu1" || activeLink ==="doctor-submenu2" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleDoctor}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Doctor</span>}
            <span className="custom-dropdown-icon">
              {openMenus.doctor ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.doctor && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("doctor","submenu1")} className={activeLink === "doctor-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/Outpatient">Out Patient</Link> 
              </li>
              <li onClick={() => handleItemClick("doctor","submenu2")} className={activeLink === "doctor-submenu2" ? "custom-submenu-active" : ""}>
                <Link to="/Outpatient">In Patient Department </Link> 
              </li>
               <li onClick={() => handleItemClick("doctor","submenu3")} className={activeLink === "doctor-submenu3" ? "custom-submenu-active" : ""}>
                <Link to="/Outpatient">In Patient Department </Link> 
              </li>
            </ul>
          )}
        </li>
         <li className={`custom-nav-item ${activeLink === "clinical-submenu1" || activeLink === "clinical-submenu2"? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={() => handleLinkClick("clinical")}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Clinical</span>}
            <span className="custom-dropdown-icon">
              {openMenus.clinical ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.clinical && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("clinical","submenu1")} className={activeLink === "clinical-submenu1" ? "custom-submenu-active" : ""}>
                Submenu 1
              </li>
              <li onClick={() => handleItemClick("clinical","submenu2")} className={activeLink === "clinical-submenu2" ? "custom-submenu-active" : ""}>
                Submenu 2
              </li>
            </ul>
          )}
        </li>
         <li className={`custom-nav-item ${activeLink === "nursing-submenu1" || activeLink === "nursing-submenu2" || activeLink ===  "nursing-submenu3" || activeLink === "nursing-submenu4" || activeLink === "nursing-submenu5" || activeLink === "nursing-submenu6"? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleNurseClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Nursing</span>}
            <span className="custom-dropdown-icon">
              {openMenus.nursing ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.nursing && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("nursing","submenu1")} className={activeLink === "nursing-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/Outpatient">Out Patient</Link> 
              </li>
              <li onClick={() => handleItemClick("nursing","submenu2")} className={activeLink === "nursing-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/Inpatient" className="nursing-booking-list-nav-link">
                  In Patient
                 </Link>
              </li>
              <li onClick={() => handleItemClick("nursing","submenu3")} className={activeLink === "nursing-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/Nephrology" className="appointment-booking-list-nav-link">
                  Nephrology
                 </Link>
              </li>
              <li onClick={() => handleItemClick("nursing","submenu4")} className={activeLink === "nursing-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="/RequisitionList" className="appointment-booking-list-nav-link">
                   Requisition List
                  </Link>
              </li>
              <li onClick={() => handleItemClick("nursing","submenu5")} className={activeLink === "nursing-submenu5" ? "custom-submenu-active" : ""}>
                  <Link to="/DischargeSummary" className="appointment-booking-list-nav-link">
                 Discharge Summary
                  </Link>
              </li>
              
            </ul>
          )}
        </li>
         <li className={`custom-nav-item ${activeLink === "appointment-submenu1" || activeLink === "appointment-submenu2" || activeLink ===  "appointment-submenu3" || activeLink === "appointment-submenu4" || activeLink === "appointment-submenu5" || activeLink === "appointment-submenu6"? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleAppointmentClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Appointment</span>}
            <span className="custom-dropdown-icon">
              {openMenus.appointment ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.appointment && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("appointment","submenu1")} className={activeLink === "appointment-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/appointment-booking-list">Appointment Booking List</Link> 
              </li>
              <li onClick={() => handleItemClick("appointment","submenu2")} className={activeLink === "appointment-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/book-appointment" className="appointment-booking-list-nav-link">
                  Book Appointment
                 </Link>
              </li>
              <li onClick={() => handleItemClick("appointment","submenu3")} className={activeLink === "appointment-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/list-visits" className="appointment-booking-list-nav-link">
                   List Visits
                 </Link>
              </li>
              <li onClick={() => handleItemClick("appointment","submenu4")} className={activeLink === "appointment-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="/new-visit" className="appointment-booking-list-nav-link">
                    New Visit
                  </Link>
              </li>
              <li onClick={() => handleItemClick("appointment","submenu5")} className={activeLink === "appointment-submenu5" ? "custom-submenu-active" : ""}>
                  <Link to="/online-appointment" className="appointment-booking-list-nav-link">
                  Online Appointment
                  </Link>
              </li>
               <li onClick={() => handleItemClick("appointment","submenu6")} className={activeLink === "appointment-submenu6" ? "custom-submenu-active" : ""}>
                  <Link to="/ssf-claim" className="appointment-booking-list-nav-link">
                  SSFClaim
                  </Link>
              </li>
            </ul>
          )}
        </li>
         <li className={`custom-nav-item ${activeLink === "setting-submenu1" || activeLink === "setting-submenu2" || activeLink ===  "setting-submenu3" || activeLink === "setting-submenu4" || activeLink === "setting-submenu5" || activeLink === "setting-submenu6" || activeLink === "setting-submenu7" || activeLink === "setting-submenu8"? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleSettingClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Settings</span>}
            <span className="custom-dropdown-icon">
              {openMenus.setting ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.setting && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("setting","submenu1")} className={activeLink === "setting-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="department">Departments</Link> 
              </li>
              <li onClick={() => handleItemClick("setting","submenu2")} className={activeLink === "setting-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="radiology" className="appointment-booking-list-nav-link">
                  Radiology
                 </Link>
              </li>
              <li onClick={() => handleItemClick("setting","submenu3")} className={activeLink === "setting-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="adt" className="appointment-booking-list-nav-link">
                   ADT
                 </Link>
              </li>
              <li onClick={() => handleItemClick("setting","submenu4")} className={activeLink === "setting-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="security" className="appointment-booking-list-nav-link">
                    Security
                  </Link>
              </li>
              <li onClick={() => handleItemClick("setting","submenu5")} className={activeLink === "setting-submenu5" ? "custom-submenu-active" : ""}>
                  <Link to="billing" className="appointment-booking-list-nav-link">
                  Billing
                  </Link>
              </li>
               <li onClick={() => handleItemClick("setting","submenu6")} className={activeLink === "setting-submenu6" ? "custom-submenu-active" : ""}>
                  <Link to="employee" className="appointment-booking-list-nav-link">
                  Employee
                  </Link>
              </li>
              <li onClick={() => handleItemClick("setting","submenu7")} className={activeLink === "setting-submenu7" ? "custom-submenu-active" : ""}>
                  <Link to="geolocation" className="appointment-booking-list-nav-link">
                 Geolocation
                  </Link>
              </li>
              <li onClick={() => handleItemClick("setting","submenu8")} className={activeLink === "setting-submenu8" ? "custom-submenu-active" : ""}>
                  <Link to="clinical" className="appointment-booking-list-nav-link">
                Clinical
                  </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`custom-nav-item ${activeLink === "inventory-submenu1" || activeLink === "inventory-submenu2" || activeLink ===  "inventory-submenu3" || activeLink === "inventory-submenu4" || activeLink === "inventory-submenu5" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleInventoryClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Inventory</span>}
            <span className="custom-dropdown-icon">
              {openMenus.inventory ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.inventory && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("inventory","submenu1")} className={activeLink === "inventory-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/internal/*">Internal</Link> 
              </li>
              <li onClick={() => handleItemClick("inventory","submenu2")} className={activeLink === "inventory-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/stock/*" className="appointment-booking-list-nav-link">
                  Stock
                 </Link>
              </li>
              <li onClick={() => handleItemClick("inventory","submenu3")} className={activeLink === "inventory-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/reports/*" className="appointment-booking-list-nav-link">
                  Reports
                 </Link>
              </li>
              <li onClick={() => handleItemClick("inventory","submenu4")} className={activeLink === "inventory-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="/return-to-vendor" className="appointment-booking-list-nav-link">
                    Return To Vendor
                  </Link>
              </li>
              <li onClick={() => handleItemClick("inventory","submenu5")} className={activeLink === "inventory-submenu5" ? "custom-submenu-active" : ""}>
                  <Link to="/donate" className="appointment-booking-list-nav-link">
                  Donate
                  </Link>
              </li>
               
             
             
            </ul>
          )}
        </li>
        <li className={`custom-nav-item ${activeLink === "incentive-submenu1" || activeLink === "incentive-submenu2" || activeLink ===  "incentive-submenu3" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleIncentiveClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Incentive</span>}
            <span className="custom-dropdown-icon">
              {openMenus.incentive ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.incentive && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("incentive","submenu1")} className={activeLink === "incentive-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/internal/*">Transactions
                </Link> 
              </li>
              <li onClick={() => handleItemClick("incentive","submenu2")} className={activeLink === "incentive-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/incentivereport" className="appointment-booking-list-nav-link">
                  Reports
                 </Link>
              </li>
              <li onClick={() => handleItemClick("incentive","submenu3")} className={activeLink === "incentive-submenu3" ? "custom-submenu-active" : ""}>
                 <Link  to="/incentivesettings" className="appointment-booking-list-nav-link">
                  Setting
                 </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`custom-nav-item ${activeLink === "laboratory-submenu1" || activeLink === "laboratory-submenu2" || activeLink ===  "laboratory-submenu3" || activeLink === "laboratory-submenu4" || activeLink === "laboratory-submenu5" || activeLink === "laboratory-submenu6" || activeLink === "laboratory-submenu7" || activeLink === "laboratory-submenu8"? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleLaboratoryClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Laboratory</span>}
            <span className="custom-dropdown-icon">
              {openMenus.laboratory ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.laboratory && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("laboratory","submenu1")} className={activeLink === "laboratory-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/appointment-booking-list">Departments</Link> 
              </li>
              <li onClick={() => handleItemClick("laboratory","submenu2")} className={activeLink === "laboratory-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/book-appointment" className="appointment-booking-list-nav-link">
                  Radiology
                 </Link>
              </li>
              <li onClick={() => handleItemClick("laboratory","submenu3")} className={activeLink === "laboratory-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/list-visits" className="appointment-booking-list-nav-link">
                   ADT
                 </Link>
              </li>
              <li onClick={() => handleItemClick("laboratory","submenu4")} className={activeLink === "laboratory-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="/new-visit" className="appointment-booking-list-nav-link">
                    Security
                  </Link>
              </li>
              <li onClick={() => handleItemClick("laboratory","submenu5")} className={activeLink === "laboratory-submenu5" ? "custom-submenu-active" : ""}>
                  <Link to="/online-appointment" className="appointment-booking-list-nav-link">
                  Billing
                  </Link>
              </li>
               <li onClick={() => handleItemClick("laboratory","submenu6")} className={activeLink === "laboratory-submenu6" ? "custom-submenu-active" : ""}>
                  <Link to="/employee" className="appointment-booking-list-nav-link">
                  Employee
                  </Link>
              </li>
              <li onClick={() => handleItemClick("laboratory","submenu7")} className={activeLink === "laboratory-submenu7" ? "custom-submenu-active" : ""}>
                  <Link to="/ssf-claim" className="appointment-booking-list-nav-link">
                 Geolocation
                  </Link>
              </li>
              <li onClick={() => handleItemClick("laboratory","submenu8")} className={activeLink === "laboratory-submenu8" ? "custom-submenu-active" : ""}>
                  <Link to="/ssf-claim" className="appointment-booking-list-nav-link">
                 Geolocation
                  </Link>
              </li>
            </ul>
          )}
        </li>
         <li className={`custom-nav-item ${activeLink === "utilites-submenu1" || activeLink === "utilites-submenu2" || activeLink ===  "utilites-submenu3" || activeLink ===  "utilites-submenu4" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleUtilitesClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Utilites</span>}
            <span className="custom-dropdown-icon">
              {openMenus.utilites ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.utilites && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("utilites","submenu1")} className={activeLink === "utilites-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/schemerefundlist">Scheme Refund
                </Link> 
              </li>
              <li onClick={() => handleItemClick("utilites","submenu2")} className={activeLink === "utilites-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/Change_Visitscheme" className="appointment-booking-list-nav-link">
                  Change Visit Scheme
                 </Link>
              </li>
              <li onClick={() => handleItemClick("utilites","submenu3")} className={activeLink === "utilites-submenu3" ? "custom-submenu-active" : ""}>
                 <Link  to="/CounterInfo" className="appointment-booking-list-nav-link">
                  Change Billing Counter
                 </Link>
              </li>
               <li onClick={() => handleItemClick("utilites","submenu4")} className={activeLink === "utilites-submenu3" ? "custom-submenu-active" : ""}>
                 <Link  to="/organizationdeposit" className="appointment-booking-list-nav-link">
                  Organization Deposit
                 </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`custom-nav-item ${activeLink === "emergency-submenu1" || activeLink === "emergency-submenu2"? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleEmergencyClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Emergency</span>}
            <span className="custom-dropdown-icon">
              {openMenus.emergency ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.emergency && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("emergency","submenu1")} className={activeLink === "emergency-submenu1" ? "custom-submenu-active" : ""}>
                 <Link  to="/newPatients" className="appointment-booking-list-nav-link">
                 New patients</Link>
               
              </li>
              <li onClick={() => handleItemClick("emergency","submenu2")} className={activeLink === "emergency-submenu2" ? "custom-submenu-active" : ""}>
               <Link to="/triagedPatients" className="appointment-booking-list-nav-link"></Link>
              </li>
              <li onClick={() => handleItemClick("emergency","submenu3")} className={activeLink === "emergency-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/finalizedPatients" className="appointment-booking-list-nav-link"> Finalized patients</Link>
             
                 
              </li>
               <li onClick={() => handleItemClick("emergency","submenu3")} className={activeLink === "emergency-submenu3" ? "custom-submenu-active" : ""}>
               <Link to="/bedInfo" className="appointment-booking-list-nav-link"> Bed Information</Link>
                 
              </li>
             
            </ul>
          )}
        </li>
         <li className={`custom-nav-item ${activeLink === "systemAdmin-submenu1" || activeLink === "systemAdmin-submenu2" || activeLink ===  "systemAdmin-submenu3" || activeLink === "systemAdmin-submenu4" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleSystemAdminClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">System Admin</span>}
            <span className="custom-dropdown-icon">
              {openMenus.systemAdmin ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.systemAdmin && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("systemAdmin","submenu1")} className={activeLink === "systemAdmin-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/database-backup">Database Backup</Link> 
              </li>
              <li onClick={() => handleItemClick("systemAdmin","submenu2")} className={activeLink === "systemAdmin-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/materialized-sales-view" className="appointment-booking-list-nav-link">
                  Materialized Sales View
                 </Link>
              </li>
              <li onClick={() => handleItemClick("systemAdmin","submenu3")} className={activeLink === "systemAdmin-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/sales-book" className="appointment-booking-list-nav-link">
                  Sales Book
                 </Link>
              </li>
              <li onClick={() => handleItemClick("systemAdmin","submenu4")} className={activeLink === "systemAdmin-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="/new-sales" className="appointment-booking-list-nav-link">
                    New Sales Book
                  </Link>
              </li>
               
             
             
            </ul>
          )}
        </li>
       
        <li className={`custom-nav-item ${activeLink === "socialService-submenu1" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleSocialServiceClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Social Service</span>}
            <span className="custom-dropdown-icon">
              {openMenus.socialService ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          </li>

        <li className={`custom-nav-item ${activeLink === "report-submenu1" || activeLink === "report-submenu2" || activeLink ===  "report-submenu3" || activeLink === "report-submenu4" || activeLink === "report-submenu5" || activeLink === "report-submenu6" || activeLink === "report-submenu7" || activeLink === "report-submenu8"? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleReportClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">Reports</span>}
            <span className="custom-dropdown-icon">
              {openMenus.report ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.report && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("report","submenu1")} className={activeLink === "report-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/Admission">Admission</Link> 
              </li>
              <li onClick={() => handleItemClick("report","submenu2")} className={activeLink === "report-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/BillingReports" className="appointment-booking-list-nav-link">
                  Billing Reports
                 </Link>
              </li>
              <li onClick={() => handleItemClick("report","submenu3")} className={activeLink === "report-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/AppointmentReport" className="appointment-booking-list-nav-link">
                   Appointment
                 </Link>
              </li>
              <li onClick={() => handleItemClick("report","submenu4")} className={activeLink === "report-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="/RadiologyReport" className="appointment-booking-list-nav-link">
                    Radiology
                  </Link>
              </li>
              <li onClick={() => handleItemClick("report","submenu5")} className={activeLink === "report-submenu5" ? "custom-submenu-active" : ""}>
                  <Link to="/LabReport" className="appointment-booking-list-nav-link">
                  Lab
                  </Link>
              </li>
               <li onClick={() => handleItemClick("report","submenu6")} className={activeLink === "report-submenu6" ? "custom-submenu-active" : ""}>
                  <Link to="/DoctorReport" className="appointment-booking-list-nav-link">
                  Doctors
                  </Link>
              </li>
              <li onClick={() => handleItemClick("report","submenu7")} className={activeLink === "report-submenu7" ? "custom-submenu-active" : ""}>
                  <Link to="/PatientReport" className="appointment-booking-list-nav-link">
                 Patient
                  </Link>
              </li>
              <li onClick={() => handleItemClick("report","submenu8")} className={activeLink === "report-submenu8" ? "custom-submenu-active" : ""}>
                  <Link to="/PoliceCase" className="appointment-booking-list-nav-link">
                Police Case
                  </Link>
              </li>
            </ul>
          )}
        </li>

         <li className={`custom-nav-item ${activeLink === "nhif-submenu1" || activeLink === "nhif-submenu2" || activeLink ===  "nhif-submenu3" || activeLink === "nhif-submenu4" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleNhifClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">NHIF</span>}
            <span className="custom-dropdown-icon">
              {openMenus.nhif ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.nhif && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("nhif","submenu1")} className={activeLink === "nhif-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/PatientList">Patient List</Link> 
              </li>
              <li onClick={() => handleItemClick("nhif","submenu2")} className={activeLink === "nhif-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/VisitList" className="appointment-booking-list-nav-link">
                 Visit List
                 </Link>
              </li>
              <li onClick={() => handleItemClick("nhif","submenu3")} className={activeLink === "nhif-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/IPD_billing" className="appointment-booking-list-nav-link">
                  IPD Billing
                 </Link>
              </li>
              <li onClick={() => handleItemClick("nhif","submenu4")} className={activeLink === "nhif-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="/Report" className="appointment-booking-list-nav-link">
                    Reports
                  </Link>
              </li>
            </ul>
          )}
        </li>
         <li className={`custom-nav-item ${activeLink === "adt-submenu1" || activeLink === "adt-submenu2" || activeLink ===  "adt-submenu3" || activeLink === "adt-submenu4" || activeLink === "adt-submenu5" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleAdtClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">ADT</span>}
            <span className="custom-dropdown-icon">
              {openMenus.adt ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.adt && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("adt","submenu1")} className={activeLink === "adt-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/PatientList">Search Patient</Link> 
              </li>
              <li onClick={() => handleItemClick("adt","submenu2")} className={activeLink === "adt-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/VisitList" className="appointment-booking-list-nav-link">
                 Admitted Patients
                 </Link>
              </li>
              <li onClick={() => handleItemClick("adt","submenu3")} className={activeLink === "adt-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/IPD_billing" className="appointment-booking-list-nav-link">
                  Discharged Patients
                 </Link>
              </li>
              <li onClick={() => handleItemClick("adt","submenu4")} className={activeLink === "adt-submenu4" ? "custom-submenu-active" : ""}>
                  <Link to="/Report" className="appointment-booking-list-nav-link">
                    ExchangeBed
                  </Link>
              </li>
              <li onClick={() => handleItemClick("adt","submenu5")} className={activeLink === "adt-submenu5" ? "custom-submenu-active" : ""}>
                  <Link to="/Report" className="appointment-booking-list-nav-link">
                    Cancel Bed Reservation
                  </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`custom-nav-item ${activeLink === "mkt-submenu1" || activeLink === "mkt-submenu2" || activeLink ===  "mkt-submenu3" ? "custom-nav-item-active" : ""}`}>
          <div className="custom-nav-link-content" onClick={handleMKTClick}>
            <span><TbUsers /></span>
            {isOpen && <span className="custom-nav-link-text">MktReferral</span>}
            <span className="custom-dropdown-icon">
              {openMenus.mkt ? <LuChevronUp /> : <LuChevronDown />}
            </span>
          </div>
          {openMenus.mkt && isOpen && (
            <ul className="custom-submenu">
              <li onClick={() => handleItemClick("mkt","submenu1")} className={activeLink === "mkt-submenu1" ? "custom-submenu-active" : ""}>
                <Link to="/Transaction">Transaction</Link> 
              </li>
              <li onClick={() => handleItemClick("mkt","submenu2")} className={activeLink === "mkt-submenu2" ? "custom-submenu-active" : ""}>
                 <Link to="/Setting/*" className="appointment-booking-list-nav-link">
                 Settings
                 </Link>
              </li>
              <li onClick={() => handleItemClick("mkt","submenu3")} className={activeLink === "mkt-submenu3" ? "custom-submenu-active" : ""}>
                 <Link to="/Mreport" className="appointment-booking-list-nav-link">
                  Reports
                 </Link>
              </li>
             
              
            </ul>
          )}
        </li>
        

      </ul>
    </div>
  );
};

export default Sidebar;
