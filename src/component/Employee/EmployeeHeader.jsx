// src/EmployeeHeader.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmployeeTable.css';

const EmployeeHeader = ({ onNavClick }) => {
  const [activeNav, setActiveNav] = useState(null);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleNavClick = (navType) => {
    setActiveNav(activeNav === navType ? null : navType);
  };

  return (
    <>
      <header className="employee-header">
        <nav>
          <ul className="employee-header-form">
            <li onClick={() => handleNavClick('department')}>Departments</li>
            <li onClick={() => handleNavClick('radiology')}>Radiology</li> 
            <li onClick={() => handleNavClick('adt')}>ADT</li>
            <li onClick={() => handleNavClick('security')}>Security</li>

            <li onClick={() => handleNavClick('billing')}>Billing</li> {/* Updated to handle 'Billing' */}

            <li onClick={() => handleNavClick('employee')}>Employee</li>
            <li onClick={() => handleNavClick('geolocation')}>Geolocation</li> {/* Added onClick */}
            <li onClick={() => handleNavClick('clinical')}>Clinical</li> {/* Added onClick */}
            <li onClick={() => window.location.href = '/manage-tax'}>Manage Tax</li> {/* Direct navigation */}
            <li onClick={() => handleNavClick('dynamicTemplates')}>Dynamic Templates</li> {/* Added onClick */}
            <li onClick={() => window.location.href = '/external-referrals'}>External Referrals</li>
            <li onClick={() => window.location.href = '/core-cfg-prmeter'}>Core CFG Parameters</li>
            <li onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}>More...</li>
{moreDropdownOpen && (
  <div className="more-dropdown">
    <ul>
      <li><Link to="/manage-banks" onClick={() => onNavClick('ManageBanks')}>Banks</Link></li>
      <li><Link to="/manage-printers" onClick={() => onNavClick('ManagePrinters')}>Printers</Link></li>
      <li><Link to="/print-export-configuration" onClick={() => onNavClick('PrintExportConfiguration')}>PrintExport Configuration</Link></li>
      <li><Link to="/payment-mode-settings" onClick={() => onNavClick('PaymentModeSettings')}>Payment Mode Settings</Link></li>
      <li><Link to="/price-category" onClick={() => onNavClick('PriceCategory')}>PriceCategory</Link></li>
    </ul>
  </div>
)}
          </ul>
        </nav>
      </header>
      {activeNav === 'employee' && (
        <div className="employee-sub-nav">
          <ul>
            <li><Link to="/manage-employee" >Manage Employee</Link></li>
            <li><Link to="/manage-employee-role" >Manage Employee Role</Link></li>
            <li><Link to="/manage-employee-type">Manage Employee Type</Link></li>
          </ul>
        </div>
      )}
      {activeNav === 'department' && (
        <div className="department-sub-nav">
          <ul>
            <li><Link to="/manage-department" >Manage Department</Link></li>
            <li><Link to="/manage-substore" >Manage Substore</Link></li>
            <li><Link to="/manage-ward-substore" >Manage Ward Substore</Link></li>
          </ul>
        </div>
      )}
      {activeNav === 'adt' && (
        <div className="adt-sub-nav">
          <ul>
            <li><Link to="/manage-ward" >Manage Ward</Link></li>
            <li><Link to="/manage-bed-feature" >Manage Bed Feature</Link></li>
            <li><Link to="/manage-bed" >Manage Bed</Link></li>
            <li><Link to="/manage-auto-add-billing-items" >Manage Auto Add Billing Items</Link></li>
            <li><Link to="/manage-bed-feature-scheme" >Manage Bed Feature Scheme And PriceCategory</Link></li>
            <li><Link to="/deposit-settings" >Deposit Settings</Link></li>
          </ul>
        </div>
      )}
      {activeNav === 'radiology' && (  /* Added Radiology sub-nav */
        <div className="radiology-sub-nav">
          <ul>
            <li><Link to="/manage-imaging-type">Manage Imaging Type</Link></li>
            <li><Link to="/manage-imaging-item" >Manage Imaging Item</Link></li>
            <li><Link to="/manage-radiology-template" >Manage Radiology Template</Link></li>
            <li><Link to="/default-signatories" >Default Signatories</Link></li>
          </ul>
        </div>
      )}
     {activeNav === 'security' && (
        <div className="security-sub-nav">
          <ul>
            <li><Link to="/manage-user" >Manage User</Link></li>
            <li><Link to="/manage-role" >Manage Role</Link></li>
          </ul>
        </div>
      )}
      {activeNav === 'geolocation' && (  /* Added Geolocation sub-nav */
        <div className="geolocation-sub-nav">
          <ul>
            <li><Link to="/manage-municipality" >Manage Municipality</Link></li>
            <li><Link to="/manage-country" >Manage Country</Link></li>
            <li><Link to="/manage-subdivision" >Manage SubDivision</Link></li>
          </ul>
        </div>
      )}
       {activeNav === 'clinical' && ( /* Added Clinical sub-nav */
        <div className="clinical-sub-nav">
          <ul>
            <li><Link to="/manage-reaction" >Manage Reaction</Link></li>
            <li><Link to="/icd-groups" >ICD Groups</Link></li>
            <li><Link to="/clinical-note" >Clinical Note</Link></li>
          </ul>
        </div>
      )}
       {activeNav === 'dynamicTemplates' && ( /* Added Dynamic Templates sub-nav */
        <div className="dynamic-templates-sub-nav">
          <ul>
            <li><Link to="/templates">Templates</Link></li>
            <li><Link to="/template-types" >Templates Types</Link></li>
            <li><Link to="/filed-master" >Filed Master</Link></li>
          </ul>
        </div>
      )}
      {activeNav === 'billing' && (  /* Added Billing sub-nav */
        <div className="billing-sub-nav">
          <ul>
            <li><Link to="/map-ap-scheme" >Map AP Scheme And PriceCategory</Link></li>
            <li><Link to="/service-departments" >Service Departments</Link></li>
            <li><Link to="/deposit-heads" >Deposit Heads</Link></li>
            <li><Link to="/service-items">Service Items</Link></li>
            <li><Link to="/additional-service-items" >Additional Service Items</Link></li>
            <li><Link to="/billing-packages" >Billing Packages</Link></li>
            <li><Link to="/credit-organizations" >Credit Organizations</Link></li>
            <li><Link to="/schemes" >Schemes</Link></li>
            <li><Link to="/free-services-mapping">Free Services Mapping</Link></li>
            <li><Link to="/reporting-items-mapping">Reporting Items Mapping</Link></li>
            <li><Link to="/registration-sticker" >Registration Sticker</Link></li>
          </ul>
        </div>
      )}
     
    </>
  );
};

export default EmployeeHeader;
{/* <li>
<Link to="/manage-tax" onClick={() => onNavClick('ManageTax')}>
 
</Link>
</li>
<li>
<Link to="/external-referrals" onClick={() => onNavClick('ExternalReferrals')}>
 
</Link>
</li> */}