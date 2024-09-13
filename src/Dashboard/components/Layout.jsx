import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "../pages/Home";
import './Layout.css';
import AppointmentBookingList from "../../component/Appointment/AppointmentRouting";
import AppointmentRouting from "../../component/Appointment/AppointmentRouting";
import AppRoutes from "../../component/Employee/AppRoutes";
import Inventory from "../../component/Inventory1/Inventory";
import Incentive from "../../component/IncentiveMain/incentiveApp";
import Lab from "../../component/NavBarSection/Lab";
import Emergency from "../../component/Emergency/Emergency"
import Utilitiesmain from "../../component/Utilities/utilitiesmain";
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
import HomePage from "../../component/Admission/adt-main";
import Mkrtrefrrance from "../../component/MarketingRefferal/mrktreferrance";
import Clinical from "../../component/Clinical/Clinical";
import Vaccination from "../../component/Vaccination/Vaccination";
import FixedAssetReport from "../../component/FixedAssests/FixedAssetsReport/FixedAssetsReport";
import FixedAssets from "../../component/FixedAssests/FixedAssests";
import Cssd from "../../component/CSSD/Cssd";
import AccountComponent from "../../component/Accounting/AccountingComponent";
import PatientQueue from "../../component/QueueMngmt/PatientQueue";
import MaternityHeader from "../../component/Maternity/MaternityHeader";
import AppConfig from "../../component/Maternity/AppConfig";
import HelpDeskNav from "../../component/HelpD/helpDeskNav";
import HelpDeskRouting from "../../component/HelpD/HelpDeskRouting";
import RadiologyRouting from "../../component/RadiologyNav/RadiologyRouting";
import PharmacyRouting from "../../component/PharmacyHospital/PharmacyRouting";
import PatientRouting from "../../component/Patient/PatientRouting";
import NavigationBar from "../../component/Verification/NavigationBar";
import VerificationRouting from "../../component/Verification/VerificationRouting";
import SubstoreRouting from "../../component/SubStoreMainPage/SubstoreRouting";

const Layout = () => {
  const [showAppointment, setShowAppointment] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [showInventory, setShowInventory] = useState(false);
  const [showIncentive, setshowIncentive] = useState(false);
  const [showLaboratory, setShowLaboratory] = useState(false);
  const [showUtilites, setShowUtilites] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const [showSystemAdmin, setShowSystemAdmin] = useState(false)
  const [showSocialService, setShowSocialService] = useState(false)
  const [showDisprensary, setShowDisprensary] = useState(false)
  const [showDynamicReport, setShowDynamicReport] = useState(false)
  const [showReport, setShowReport] = useState(false)
  const [showNurse, setShowNurse] = useState(false)
  const [showDoctor, setShowDoctor] = useState(false)
  const [showOprationTheater, setShowOprationTheater] = useState(false)
  const [showNhif, setShowNhif] = useState(false)
  const [showADT, setShowATD] = useState(false)
  const [showMKT, setShowMKT] = useState(false)
  const [showClinical, setShowClinical] = useState(false)
  const [showVaccination, setShowVaccination] = useState(false)
  const [showFixAssets, setShowFixAssets] = useState(false)
  const [showCSSD, setShowCSSD] = useState(false)
  const [showAccounting, setShowAccounting] = useState(false)
  const [showQueuemgnt, setShowQueuemgnt] = useState(false)
  const [showMaternity, setShowMaternity] = useState(false)
  const [showHelpDesk, setShowHelpDesk] = useState(false)
  const [showRadiology, setShowRadiology] = useState(false)
  const [showPharmacy, setShowPharmacy] = useState(false)
  const [showPatient, setShowPatient] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [showSubStore, setShowSubStore] = useState(false)

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
    setShowClinical(false)
    setShowVaccination(false)
    setShowFixAssets(false)
    setShowCSSD(false)
    setShowAccounting(false)
    setShowQueuemgnt(false)
    setShowMaternity(false)
    setShowHelpDesk(false)
    setShowRadiology(false)
    setShowPharmacy(false)
    setShowPatient(false)
    setShowDynamicReport(false)
    setShowVerification(false)
    setShowSubStore(false)
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
  const toggelLaboratory = () => {
    resetAllToggles();
    setShowLaboratory(!showLaboratory);
  }
  const toggelUtilites = () => {
    resetAllToggles();
    setShowUtilites(!showUtilites)
  }
  const toggelEmergency = () => {
    resetAllToggles();
    setShowEmergency(!showEmergency)
  }

  const toggelSystemAdmin = () => {
    resetAllToggles();
    setShowSystemAdmin(!showSystemAdmin);
  }
  const toggelSocialService = () => {
    resetAllToggles();
    setShowSocialService(!showSocialService)
  }
  const toggelDisprensary = () => {
    resetAllToggles();
    setShowDisprensary(!showDisprensary)
  }
  const toggelDynamicReport = () => {
    resetAllToggles();
    setShowDynamicReport(!showDynamicReport)
  }
  const toggelReport = () => {
    resetAllToggles();
    setShowReport(!showReport)
  }
  const toggelNurse = () => {
    resetAllToggles();
    setShowNurse(!showNurse)
  }
  const toggelDoctor = () => {
    resetAllToggles()
    setShowDoctor(!showDoctor)
  }
  const toggelOprationTheater = () => {
    resetAllToggles()
    setShowOprationTheater(!showOprationTheater)
  }
  const toggelNhif = () => {
    resetAllToggles()
    setShowNhif(!showNhif)
  }
  const toggelADT = () => {
    resetAllToggles()
    setShowATD(!showADT)
  }
  const toggelMKT = () => {
    resetAllToggles()
    setShowMKT(!showMKT)
  }
  const toggelClinical = () => {
    resetAllToggles();
    setShowClinical(!showClinical)
  }
  const toggelVaccination = () => {
    resetAllToggles()
    setShowVaccination(!showVaccination)
  }
  const toggelFixAssests = () => {
    resetAllToggles()
    setShowFixAssets(!showFixAssets)
  }
  const toggelCSSD = () => {
    resetAllToggles()
    setShowCSSD(!showCSSD)
  }
  const toggelAccounting = () => {
    resetAllToggles()
    setShowAccounting(!showAccounting)
  }
  const toggelQueuemgnt = () => {
    resetAllToggles()
    setShowQueuemgnt(!showQueuemgnt)
  }
  const toggelMaternity = () => {
    resetAllToggles()
    setShowMaternity(!showMaternity)
  }
  const toggelHelpDesk = () => {
    resetAllToggles()
    setShowHelpDesk(!showHelpDesk)
  }
  const toggelRadiology = () => {
    resetAllToggles()
    setShowRadiology(!showRadiology)
  }
  const toggelPharmacy = () => {
    resetAllToggles()
    setShowPharmacy(!showPharmacy)
  }
  const toggelPatient = () => {
    resetAllToggles()
    setShowPatient(!showPatient)
  }
  const toggelVerification = () => {
    resetAllToggles()
    setShowVerification(!showVerification)
  }
  const toggelSubstore = () => {
    resetAllToggles()
    setShowSubStore(!showSubStore)
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
        onClinical={toggelClinical}
        onVaccination={toggelVaccination}
        onFixAssests={toggelFixAssests}
        onCSSD={toggelCSSD}
        onAccounting={toggelAccounting}
        onQueueManagement={toggelQueuemgnt}
        onMaternity={toggelMaternity}
        onHelpdesk={toggelHelpDesk}
        onRadiology={toggelRadiology}
        onPharmacy={toggelPharmacy}
        onPatient={toggelPatient}
        onVerification={toggelVerification}
        onSubstoreClick={toggelSubstore}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className={`hrmsLayoutMainContent ${isOpen ? "hrmsLayoutMainContentOpen" : "hrmsLayoutMainContentClosed"}`}>
        <Header />
        <main className="hrmsLayoutMainPadding">
          {showAppointment && <AppointmentRouting />}
          {showSetting && <AppRoutes />}
          {showInventory && <Inventory />}
          {showIncentive && <Incentive />}
          {showLaboratory && <Lab />}
          {showUtilites && <Utilitiesmain />}
          {showEmergency && <Emergency />}
          {showSystemAdmin && <SystemAdmin />}
          {showSocialService && <SocialServicePage />}
          {showDisprensary && <Disprensary />}
          {showDynamicReport && <DynamicReport />}
          {showReport && <ReportMainRouting />}
          {showNurse && <NursingMainRouting />}
          {showDoctor && <DoctorDashBoard />}
          {showOprationTheater && <Otmain />}
          {showNhif && <Nhif />}
          {showADT && <HomePage />}
          {showMKT && <Mkrtrefrrance />}
          {showClinical && <Clinical />}
          {showVaccination && <Vaccination />}
          {showFixAssets && <FixedAssets />}
          {showCSSD && <Cssd />}
          {showAccounting && <AccountComponent />}
          {showQueuemgnt && <PatientQueue />}
          {showMaternity && <AppConfig />}
          {showHelpDesk && <HelpDeskRouting />}
          {showRadiology && <RadiologyRouting />}
          {showPharmacy && <PharmacyRouting />}
          {showPatient && <PatientRouting />}
          {showVerification && <VerificationRouting />}
          {showSubStore && <SubstoreRouting />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
