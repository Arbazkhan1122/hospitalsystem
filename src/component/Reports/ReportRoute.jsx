import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Admission from './Report Module/src/Reports/Admission';
import BillingReportsCom from '../Reports/BillingReports';
// import AppointmentReportCom from './Report Module/src/Reports/AppointmentReport';
import RadiologyReports from '../Reports/RevenueEneratedReport';
import LabReportCom from '../Reports/LabReport';
import DoctorsReport from '../Reports/DoctorsReport';
import PatientReport from '../Reports/RegistrationReport';
import PoliceCase from '../Reports/PoliceCase';
import LayoutCom from '../Reports/Layout';
import UserCollectionReport from '../Reports/UserCollectionReport';
import TotalItemBill from '../Reports/TotalItemBill';
import DepositBalance from '../Reports/DepositBalance';
import PatientCreditSummary from '../Reports/PatientCreditSummary';
import IncomeSegragation from '../Reports/IncomeSegragation';
import CancelBill from '../Reports/CancelBill';
import ReturnBill from '../Reports/ReturnBill';
import DiscountReport from '../Reports/DiscountReport';
import PatientCensus from '../Reports/PatientCensus';
import PackageSales from '../Reports/PackageSales';
import Schemedetails from '../Reports/Schemedetails';
import PaymentModewiseReport from '../Reports/PaymentModewiseReport';
import CreditSettlementReport from '../Reports/CreditSettlementReport';
import BillDetailsReport from '../Reports/BillDetailsReport';
import EHSBillingReport from '../Reports/EHSBillingReport';
import UserWiseCashCollection from '../Reports/UserWiseCashCollection';
import DepartmentWiseDiscountScheme from '../Reports/DepartmentWiseDiscountScheme';
import DiscountSchemeReport from '../Reports/DiscountSchemeReport';
import DepositeTransaction from '../Reports/DepositeTransaction';
import DoctorWiseIncomeSummary from '../Reports/DoctorWiseIncomeSummary';
import MISReport from '../Reports/MISReport';
import ItemSummaryReport from '../Reports/ItemSummaryReport';
import DepartmentSummary from '../Reports/DepartmentSummary';
import DialysisPatientDetails from '../Reports/DialysisPatientDetails';
import ReferralSummary from '../Reports/ReferralSummary';
import RegistrationReport from '../Reports/RegistrationReport';
import EditedPatientDetailReport from '../Reports/EditedPatientDetailReport';
import RevenueEneratedReport from '../Reports/RevenueEneratedReport';
import CategoryWiseReport from '../Reports/CategoryWiseReport';
import FilmTypeCount from '../Reports/FilmTypeCount';
import CategoryWiseLapReport from '../Reports/CategoryWiseLapReport';
import TotalRevenueCom from '../Reports/TotalRevenue';
import ItemWiseLab from '../Reports/ItemWiseLab';
import TestStatusDetailsReport from '../Reports/TestStatusDetailsReport';
import HIVTesstDetailsReport from '../Reports/HIVTesstDetailsReport';
import CovidCountryReport from '../Reports/CovidCountryReport';
import LabCultureDetails from '../Reports/LabCultureDetails';
import LabTypeWiseTestCountReport from '../Reports/LabTypeWiseTestCountReport';
import CovidCaseReportDetails from '../Reports/CovidCaseReportDetails';
import CategortAndTestCount from '../Reports/CategortAndTestCount';
import DoctorWisePatientcount from '../Reports/DoctorWisePatientcount';
import AdmittedPatient from '../Reports/AdmittedPatient';
import DischargedPatient from '../Reports/DischargedPatient';
import TransferredPatient from '../Reports/TransferredPatient';
import DiagnosisWiseReport from '../Reports/DiagnosisWiseReport';
import AdmissionAndDischargedList from '../Reports/AdmissionAndDischargedList';
import RankMembershipWiseAdmittedReport from '../Reports/RankMembershipWiseAdmittedReport';
import InPatientOutstandingReport from '../Reports/InPatientOutstandingReport';
import RankMembershipWiseDischargedPatient from '../Reports/RankMembershipWiseDischargedPatient';
import InpatientCensus from '../Reports/InPatientReport';
import DetailsCom from '../Reports/Details';
import CountyWise from '../Reports/CountyWise';
import AppoinmentDepartmentWise from '../Reports/AppoinmentDepartmentWise';
import AppDoctorWiseOutPatient from '../Reports/AppDoctorWiseOutPatient';
import PhoneBookAppointmentReport from '../Reports/PhoneBookAppointmentReport';
import DepartmentWiseRankCountCom from '../Reports/DepartmentWiseRankCount';
import DepartmentWiseStatReport from '../Reports/DepartmentWiseStatReport';
import GeoGraphicalStatReport from '../Reports/GeoGraphicalStatReport';
import RankWiseDailyAppointmentReport from '../Reports/RankWiseDailyAppointmentReport';
import DoctorWiseStatisticsReport from '../Reports/DoctorWiseStatisticsReport';
import DayAndMonthWiseVisitReport from '../Reports/DayAndMonthWiseVisitReport';
function ReportRoute() {
  return (
    <>
     
            <LayoutCom>
                <Routes>
                  {/* <Route path='/admission' element={<Admission/>}></Route> */}
                  <Route path='/BillingReports' element={<BillingReportsCom/>}></Route>
                  {/* <Route path='/AppointmentReport' element={<AppointmentReportCom/>}></Route> */}
                  <Route path='/RadiologyReport' element={<RadiologyReports/>}></Route>
                  <Route path='/LabReport' element={<LabReportCom/>}></Route>
                  <Route path='/DoctorReport' element={<DoctorsReport/>}></Route>
                  <Route path='/PatientReport' element={<PatientReport/>}></Route>
                  <Route path='/PoliceCase' element={<PoliceCase/>}></Route>
                  <Route path='/user-collection-report' element={<UserCollectionReport/>}/>
                  <Route path='/total-item-bill' element={<TotalItemBill/>}/>
                  <Route path='/deposit-balance' element={<DepositBalance/>}/>
                  <Route path='/patient-credit-summary' element={<PatientCreditSummary/>}/>
                  <Route path='/income-segregation' element={<IncomeSegragation/>}/>
                  <Route path='/cancel-bill' element={<CancelBill/>}/>
                  <Route path='/return-bill' element={<ReturnBill/>}/>
                  <Route path='/discount-report' element={<DiscountReport/>}/>
                  <Route path='/patient-census' element={<PatientCensus/>}/>
                  <Route path='/doctorwise-income-summary' element={<DoctorWiseIncomeSummary/>}/>
                  <Route path='/doctor-summary' element={<DoctorsReport/>}/>
                  <Route path='/package-sales' element={<PackageSales/>}/>
                  <Route path='/scheme-details' element={<Schemedetails/>}/>
                  <Route path='/payment-mode-wise-report' element={<PaymentModewiseReport/>}/>
                  <Route path='/credit-settlement-report' element={<CreditSettlementReport/>}/>
                  <Route path='/bill-detail' element={<BillDetailsReport/>}/>
                  <Route path='/ehs-bill' element={<EHSBillingReport/>}/>
                  <Route path='/user-wise-cash-collection' element={<UserWiseCashCollection/>}/>
                  <Route path='/department-wise-discount-scheme' element={<DepartmentWiseDiscountScheme/>}/>
                  <Route path='/discount-scheme' element={<DiscountSchemeReport/>}/>
                  <Route path='/deposit-transaction' element={<DepositeTransaction/>}/>
                  <Route path='/daily-mis' element={<MISReport/>}/>
                  <Route path='/item-summary' element={<ItemSummaryReport/>}/>
                  <Route path='/department-summary' element={<DepartmentSummary/>}/>
                  <Route path='/dialysis-patient-details' element={<DialysisPatientDetails/>}/>
                  <Route path='/referral-summary' element={<ReferralSummary/>}/>
                  <Route path='/PoliceCase' element={<PoliceCase/>}/>
                  <Route path='/PatientReport/Registration' element={<RegistrationReport/>}/>
                  <Route path='/PatientReport/EditedDetails' element={<EditedPatientDetailReport/>}/>
                  <Route path='/RadiologyReport/TotalRevenue' element={<RevenueEneratedReport/>}/>
                  <Route path='/RadiologyReport/CategoryWise' element={<CategoryWiseReport/>}/>
                  <Route path='/RadiologyReport/FilmTypeCount' element={<FilmTypeCount/>}/>
                  <Route path='/category-wise-report' element={<CategoryWiseLapReport/>}/>
                  <Route path='/total-revenue' element={<TotalRevenueCom/>}/>
                  <Route path='/item-wise-lab' element={<ItemWiseLab/>}/>
                  <Route path='/test-status-detail-report' element={<TestStatusDetailsReport/>}/>
                  <Route path='/covid-country-wise' element={<CovidCountryReport/>}/>
                  <Route path='/hiv-test-details-report' element={<HIVTesstDetailsReport/>}/>
                  <Route path='/lab-culture-details-report' element={<LabCultureDetails/>}/>
                  <Route path='/labtype-wise-test-count-report' element={<LabTypeWiseTestCountReport/>}/>
                  <Route path='/covid-cases-detail-report' element={<CovidCaseReportDetails/>}/>
                  <Route path='/category-and-test-count' element={<CategortAndTestCount/>}/>
                  <Route path='/doctor-wise-patient-count-lab' element={<DoctorWisePatientcount/>}/>
                  <Route path='/Admission/AdmittedPatient' element={<AdmittedPatient/>}/>
                  <Route path='/Admission/DischargedPatient' element={<DischargedPatient/>}/>
                  <Route path='/Admission/TransferredPatient' element={<TransferredPatient/>}/>
                  <Route path='/Admission/DiagnosisWisePatient' element={<DiagnosisWiseReport/>}/>
                  <Route path='/Admission/AdmissionDischargeList' element={<AdmissionAndDischargedList/>}/>
                  <Route path='/Admission/RankMembershipWiseAdmittedPatient' element={<RankMembershipWiseAdmittedReport/>}/>
                  <Route path='/Admission/InPatientOutstanding' element={<InPatientOutstandingReport/>}/>
                  <Route path='/Admission/RankMembershipWiseDischargedPatient' element={<RankMembershipWiseDischargedPatient/>}/>
                  <Route path='/Admission/InPatientCensusReport' element={<InpatientCensus/>}/>
                  <Route path='/AppointmentReport/Details' element={<DetailsCom/>}/>
                  <Route path='/AppointmentReport/CountyWise' element={<CountyWise/>}/>
                  <Route path='/AppointmentReport/DepartmentWise' element={<AppoinmentDepartmentWise/>}/>
                  <Route path='/AppointmentReport/DoctorWiseOutPatient' element={<AppDoctorWiseOutPatient/>}/>
                  <Route path='/AppointmentReport/PhoneBookAppointmentReport' element={<PhoneBookAppointmentReport/>}/>
                  <Route path='/AppointmentReport/DepartmentWiseRankCount' element={<DepartmentWiseRankCountCom/>}/>
                  <Route path='/AppointmentReport/DepartmentWiseStatReport' element={<DepartmentWiseStatReport/>}/>
                  <Route path='/AppointmentReport/GeographicalStatReport' element={<GeoGraphicalStatReport/>}/>
                  <Route path='/AppointmentReport/RankwiseDailyAppointmentReport' element={<RankWiseDailyAppointmentReport/>}/>
                  <Route path='/AppointmentReport/DoctorWiseStatisticsReport' element={<DoctorWiseStatisticsReport/>}/>
                  <Route path='/AppointmentReport/DayAndMonthwiseVisitReport' element={<DayAndMonthWiseVisitReport/>}/>

                  </Routes>
            </LayoutCom>
      
    </> 
  )                  
}
export default ReportRoute


