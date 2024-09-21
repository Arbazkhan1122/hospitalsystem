// src/Routes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import EmployeeTable from './Employee/EmployeeTable';
// import EmployeeRoleTable from './Employee/EmployeeRoleTable';
// import EmployeeTypeTable from './Employee/EmployeeTypeTable';
import Employeecomponent from './EmployeeTable';
import EmployeeRoleComponent from './EmployeeRoleTable';
import EmployeeTypeComponent from './EmployeeTypeTable';
import ManageDepartment from './ManageDepartment';
import ManageSubstore from './ManageSubstore';
import ManageWardSubstoreMap from './ManageWardSubstoreMap';
import ManageWard from './ADT/ManageWard';
import ManageBedFeatureScheme from './ADT/ManageBedFeatureScheme';
import ManageBed from './ADT/ManageBed';
import ManageAutoAddBillingItems from './ADT/ManageAutoAddBillingItems';
import ManageBedPriceCategory from './ADT/ManageBedPriceCategory';
import DepositeSettings from './ADT/DepositSettings';
import ManageTax from './Manage Tax/ManageTax';
import ExternalReferrals from './ExternalReferrals/ExternalReferrals';
import CoreCfgParameter from './CoreCfgParameter/CoreCfgParameter';
import ManageImagingType from "./Radiology/ManageImagingType";
import ManageImagingItem from './Radiology/ManageImagingItem';
import ManageRadiologyTempltate from './Radiology/ManageRadiologyTempltate';
import DefaultSignatories from './Radiology/DefaultSignatories';
import ManageUsers from './security/ManageUsers';
import ManageRole from './security/ManageRole';
import ManageCountry from './Geolocation/ManageCountry';
import ManageSubDivision from './Geolocation/ManageSubDivision';
import ManageMunicipality from './Geolocation/ManageMunicipality';
import ManageReaction from './Clinical/ManageReaction';
import ICDGroup from './Clinical/ICDGroup';
import ClinicalNotes from './Clinical/ClinicalNotes';
import Templates from './DynamiceTemplates/Templates';
import TemplateType from './DynamiceTemplates/TemplateType';
import FeildMaster from './DynamiceTemplates/FeildMaster';
import MapSchemeAndPrice from './Billing/MapSchemeAndPrice';
import ServiceDepartments from './Billing/ServiceDepartments';
import DepositeHeads from './Billing/DepositeHeads';
import ServiceItems from './Billing/ServiceItems';
import AdditionalServicesItems from './Billing/AdditionalServicesItems';
import BillingPackages from './Billing/BillingPackages';
import CreaditOrganizations from './Billing/CreaditOrganizations';
import Schemes from './Billing/Schemes';
import ReportingItemsMapping from './Billing/ReportingItemsMapping';
import RegistrationSticker from './Billing/RegistrationSticker';
import EmployeeHeader from './EmployeeHeader';
import ManageMunicipalityCom from './Geolocation/ManageMunicipality';


const AppRoutes = () => {
  return (
    <>
    <EmployeeHeader/>
    <Routes>
      <Route path="/manage-employee" element={<Employeecomponent />} />
      <Route path="/manage-employee-role" element={<EmployeeRoleComponent/>} />
      <Route path="/manage-employee-type" element={<EmployeeTypeComponent />} />
      <Route path="/manage-department" element={<ManageDepartment />} />
      <Route path="/manage-substore" element={ <ManageSubstore/>}/>
      <Route path="/manage-ward-substore" element={ <ManageWardSubstoreMap/>}/>
      <Route path="/manage-ward" element={<ManageWard />} />
      <Route path="/manage-bed-feature" element={<ManageBedFeatureScheme/>}/>
      <Route  path="manage-bed" element = { <ManageBed/>}/>
      <Route path="manage-auto-add-billing-items" element= {<ManageAutoAddBillingItems/>}/>
      <Route path="manage-bed-feature-scheme" element={<ManageBedPriceCategory/>}/>
      <Route path="deposit-settings" element={<DepositeSettings/>}/>
      <Route path="manage-tax" element={<ManageTax/>}/>
      <Route path="external-referrals" element={<ExternalReferrals/>}/>
      <Route path="core-cfg-prmeter" element={<CoreCfgParameter/>}/>
      <Route path="manage-imaging-type" element={<ManageImagingType/>}/>
      <Route path="manage-imaging-item" element={<ManageImagingItem/>}/>
      <Route path="manage-radiology-template" element={<ManageRadiologyTempltate/>}/>
      <Route path="default-signatories" element={<DefaultSignatories/>}/>
      <Route path="manage-user" element={<ManageUsers/>}/>
      <Route path="manage-role" element={<ManageRole/>}/>
      <Route  path="manage-municipality" element={<ManageMunicipality/>}/>
    <Route path="manage-country" element={<ManageCountry/>}/>
     <Route path="manage-subdivision" element={<ManageSubDivision/>}/>
     <Route path="manage-reaction" element={<ManageReaction/>}/>
     <Route path="icd-groups" element={<ICDGroup/>}/>
     <Route path="clinical-note" element={<ClinicalNotes/>}/>
     <Route path="templates" element={<Templates/>}/>
     <Route path="template-types" element={<TemplateType/>}/>
     <Route path="filed-master" element={<FeildMaster/>}/>
     <Route path="map-ap-scheme" element={<MapSchemeAndPrice/>}/>
     <Route path="service-departments" element={<ServiceDepartments/>}/>
     <Route path="deposit-heads" element={<DepositeHeads/>}/>
     <Route path="service-items" element={<ServiceItems/>}/>
     <Route path="additional-service-items" element={<AdditionalServicesItems/>}/>
     <Route path="billing-packages" element={<BillingPackages/>}/>
     <Route path="credit-organizations" element={<CreaditOrganizations/>}/>
     <Route path="schemes" element={<Schemes/>}/>
     <Route path="reporting-items-mapping" element={<ReportingItemsMapping/>}/>
     <Route path="registration-sticker" element={<RegistrationSticker/>}/>
     <Route path="manage-municipalitys" element={<ManageMunicipalityCom/>}/>

    </Routes>
    </>
  );
};

export default AppRoutes;

