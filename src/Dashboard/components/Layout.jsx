import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "../pages/Home";
import './Layout.css';
import AppointmentBookingList from "../../component/AppointmentRouting";
import AppointmentRouting from "../../component/AppointmentRouting";
import AppRoutes from "../../component/Employee/AppRoutes";
import Inventory from "../../component/Inventory1/Inventory";
import Incentive from "../../component/incentive/items/Incentive";
import Lab from "../../component/NavBarSection/Lab";
import Emergency from "../../component/Emergency/Emergency"
import Utilitiesmain from "../../component/UTILITIES/utilitiesmain";
import SystemAdmin from "../../component/SystemAdmin/SystemAdmin"
import SocialServicePage from "../../component/SocialServicesMain/SocialServicePage";
import Disprensary from "../../component/DispensaryPage/disprensaryRoute"
import DynamicReport from "../../component/DynamicReport/DynamicReport";
import Report from "../../component/Reports/Layout";
import ReportMainRouting from "../../component/Reports/ReportMainRouting";
import NursingMainRouting from "../../component/Nursing/NursingMainRouting"
import DoctorDashBoard from "../../component/DashBoards/DoctorDashBoard"
import Otmain from "../../component/OT/otmain";
import Nhif from "../../component/NHIF/nhif";
import HomePage from "../../component/admission/mainadmissionpage/homepage";
import Mkrtrefrrance from "../../component/MarketingRefferal/mrktreferrance";

const Layout = () => {
  const [showAppointment, setShowAppointment] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [showInventory,setShowInventory]=useState(false);
  const [showIncentive,setshowIncentive]=useState(false);
  const [showLaboratory,setShowLaboratory]=useState(false);
  const [showUtilites,setShowUtilites]=useState(false);
  const [showEmergency,setShowEmergency]=useState(false);
  const [showSystemAdmin,setShowSystemAdmin]=useState(false)
  const [showSocialService,setShowSocialService]=useState(false)
  const [showDisprensary,setShowDisprensary]=useState(false)
  const [showDynamicReport,setShowDynamicReport]=useState(false)
  const [showReport,setShowReport]=useState(false)
  const [showNurse,setShowNurse]=useState(false)
  const [showDoctor ,setShowDoctor]=useState(false)
  const [showOprationTheater,setShowOprationTheater]=useState(false)
  const [showNhif,setShowNhif]=useState(false)
  const [showADT,setShowATD]=useState(false)
  const [showMKT,setShowMKT]=useState(false)

  const resetAllToggles = () => {
    setShowAppointment(false);
    setShowSetting(false);
    setShowInventory(false);
    setshowIncentive(false);
    setShowLaboratory(false);
    setShowUtilites(false);
    setShowEmergency(false)
    setShowSystemAdmin(false);
    setShowSocialService(false);
    setShowDisprensary(false)
    setShowReport(false)
    setShowNurse(false)
    setShowDoctor(false)
    setShowOprationTheater(false)
    setShowNhif(false)
    setShowATD(false)
    setShowMKT(false)
  }

  const toggelAppointment = () => {
    resetAllToggles();
    setShowAppointment(!showAppointment);
  };

  const toggelSetting = () => {
    resetAllToggles();
    setShowSetting(!showSetting);
  };
   const toggelInventory = () => {
    resetAllToggles();
    setShowInventory(!showInventory);
  };
   const toggelIncentive = () => {
    resetAllToggles();
    setshowIncentive(!showIncentive);
  };
  const toggelLaboratory=()=>{
    resetAllToggles();
    setShowLaboratory(!showLaboratory);
  }
  const toggelUtilites=()=>{
    resetAllToggles();
    setShowUtilites(!showUtilites)
  }
  const toggelEmergency=()=>{
    resetAllToggles();
    setShowEmergency(!showEmergency)
  }

  const toggelSystemAdmin=()=>{
    resetAllToggles();
    setShowSystemAdmin(!showSystemAdmin);
  }
  const toggelSocialService =()=>{
    resetAllToggles();
    setShowSocialService(!showSocialService)
  }
  const toggelDisprensary=()=>{
    resetAllToggles();
    setShowDisprensary(!showDisprensary)
  }
  const toggelDynamicReport=()=>{
    resetAllToggles();
    setShowDynamicReport(!showDynamicReport)
  }
  const toggelReport=()=>{
    resetAllToggles();
    setShowReport(!showReport)
  }
  const toggelNurse=()=>{
    resetAllToggles();
    setShowNurse(!showNurse)
  }
  const toggelDoctor=()=>{
  resetAllToggles()
  setShowDoctor(!showDoctor)
  }
  const toggelOprationTheater=()=>{
    resetAllToggles()
    setShowOprationTheater(!showOprationTheater)
  }
  const toggelNhif=()=>{
    resetAllToggles()
    setShowNhif(!showNhif)
  }
  const toggelADT=()=>{
    resetAllToggles()
    setShowATD(!showADT)
  }
  const toggelMKT=()=>{
    resetAllToggles()
    setShowMKT(!showMKT)
  }
    

  return (
    <div className="hrmsLayout">
      <Sidebar 
        onAppointmentClick={toggelAppointment} 
        onSettings={toggelSetting}
        onInventory={toggelInventory}
        onIncentive={toggelIncentive}
        onLaboratory={toggelLaboratory}
        onUtilites={toggelUtilites}
        onEmergency={toggelEmergency}
        onSystemAdmin={toggelSystemAdmin}
        onSocialService={toggelSocialService}
        onDisprensary={toggelDisprensary}
        onDynamicReport={toggelDynamicReport}
        onReport={toggelReport}
        onNurse={toggelNurse}
        onDoctor={toggelDoctor}
        onOperationTheater={toggelOprationTheater}
        onNhif={toggelNhif}
        onADT={toggelADT}
        onMKT={toggelMKT}
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
      />
      <div className={`hrmsLayoutMainContent ${isOpen ? "hrmsLayoutMainContentOpen" : "hrmsLayoutMainContentClosed"}`}>
        <Header />
        <main className="hrmsLayoutMainPadding">
          {showAppointment && <AppointmentRouting/>}
          {showSetting && <AppRoutes/>}
          {showInventory && <Inventory/>}
          {showIncentive && <Incentive/>}
          {showLaboratory && <Lab/>}
          {showUtilites && <Utilitiesmain/>}
          {showEmergency && <Emergency/>}
          {showSystemAdmin && <SystemAdmin/>}
          {showSocialService && <SocialServicePage/>}
          {showDisprensary && <Disprensary/>}
          {showDynamicReport && <DynamicReport/>}
          {showReport && <ReportMainRouting/>}
          {showNurse && <NursingMainRouting/>}
          {showDoctor && <DoctorDashBoard/>}
          {showOprationTheater && <Otmain/>}
          {showNhif && <Nhif/>}
          {showADT && <HomePage/>}
          {showMKT && <Mkrtrefrrance/>}
        </main>
      </div>
    </div>
  );
};

export default Layout;
