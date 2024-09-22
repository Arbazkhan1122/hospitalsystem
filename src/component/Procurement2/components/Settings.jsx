import React, { useState } from 'react';
import './Settings.css';
import CurrencyTable from '../components/Currency'; // Import CurrencyTable
import CompanyTable from '../components/Company'; // Import CompanyTable
import PackagingTypeList from '../components/PackagingType'; // Import PackagingTypeList
import UnitOfMeasurementComponent from '../components/UnitOfMeasurement'; // Import UnitOfMeasurementComponent
import AccountHeadComponent from '../components/AccountHead'; // Import AccountHeadComponent
import ItemList from '../components/Items'; // Import ItemList
import Vendors from '../components/Vendors'; // Import Vendors
import Terms from '../components/Terms'; // Import Terms
import SubCategoryList from '../components/SubCategory'; // Import SubCategoryList
import InvoiceHeaders from '../components/InvoiceHeaders'; // Import InvoiceHeaders

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tab-container">
      {/* Tab Navigation */}
      <div className="tabs">
        {['Currency', 'Company', 'PackagingType', 'Unit of Measurement', 'Account Head', 'Items', 'Vendors', 'Terms', 'Sub Category', 'Invoice Headers'].map(tab => (
          <div
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Conditional Rendering of Components */}
      {activeTab === 'Currency' && <CurrencyTable />}
      {activeTab === 'Company' && <CompanyTable />}
      {activeTab === 'PackagingType' && <PackagingTypeList />}
      {activeTab === 'Unit of Measurement' && <UnitOfMeasurementComponent />}
      {activeTab === 'Account Head' && <AccountHeadComponent />}
      {activeTab === 'Items' && <ItemList />}
      {activeTab === 'Vendors' && <Vendors />}
      {activeTab === 'Terms' && <Terms />}
      {activeTab === 'Sub Category' && <SubCategoryList />}
      {activeTab === 'Invoice Headers' && <InvoiceHeaders />}
    </div>
  );
};

export default TabNavigation;
