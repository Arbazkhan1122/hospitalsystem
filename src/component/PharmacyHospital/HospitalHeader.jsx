import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HospitalHeader.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const HospitalHeader = () => {
  const [activeNav, setActiveNav] = useState(null);
  const [activeSubNav, setActiveSubNav] = useState(null);

  const handleNavClick = (navItem) => {
    if (activeNav === navItem) {
      setActiveNav(null); // Collapse if clicking the already active main item
      setActiveSubNav(null); // Reset sub-navigation
    } else {
      setActiveNav(navItem);
      setActiveSubNav(null); // Reset sub-navigation
    }
  };

  const handleSubNavClick = (subNavItem) => {
    setActiveSubNav(subNavItem);
  };

  return (
    <div className="hospital-header-container-module">
      <header className="pharmacy-header-module">
        <nav className="hospital-nav-module">
          <ul className="hospital-nav-list-module">
            <Link to="/"
              className="hospital-nav-item-module"
              
            >
              <i className="fa fa-home"></i>
            </Link>
            <Link to="order"
              className={`hospital-nav-item-module ${activeNav === "order" ? "active" : ""}`}
              onClick={() => handleNavClick("order")}
            >
              Order
            </Link>
            <Link to='/SupplierLedgerComponent'
              className={`hospital-nav-item-module ${activeNav === "supplier" ? "active" : ""}`}
             
            >
              Supplier
            </Link>
            <Link to="report"
              className={`hospital-nav-item-module ${activeNav === "report" ? "active" : ""}`}
              onClick={() => handleNavClick("report")}
            >
              Report
            </Link>
            <li 
              className={`hospital-nav-item-module ${activeNav === "setting" ? "active" : ""}`}
              onClick={() => handleNavClick("setting")}
            >
              Setting
            </li>
            <li 
              className={`hospital-nav-item-module ${activeNav === "store" ? "active" : ""}`}
              onClick={() => handleNavClick("store")}
            >
              Store
            </li>
            <Link to="/SupplierHeaderCom" className="hospital-nav-item-module"
            >
              Supplier Ledger
            </Link>
            <Link to="/SubstoreDispatchCom" className="hospital-nav-item-module"
            >
              Substore Request/Dispatch
            </Link>
          </ul>
        </nav>
      </header>

      {activeNav === "order" && (
        <div className="pharmacy-sub-nav-module">
          <ul>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/purchase-order" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/purchase-order")}
            >
              <Link to="/purchase-order">Purchase Order</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/good-receipt" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/good-receipt")}
            >
              <Link to="/good-receipt">Good Receipt</Link>
            </li>
          </ul>
        </div>
      )}

      {activeNav === "report" && (
        <div className="pharmacy-sub-nav-module">
          <ul>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/purchase" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/purchase")}
            >
              <Link to="/purchase">Purchase</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/sales" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/sales")}
            >
              <Link to="/sales">Sales</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/stock" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/stock")}
            >
              <Link to="/stock">Stock</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/supplier" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/supplier")}
            >
              <Link to="/supplier">Supplier</Link>
            </li>
          </ul>
        </div>
      )}

      {activeNav === "setting" && (
        <div className="pharmacy-sub-nav-module">
          <ul>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-supplier" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-supplier")}
            >
              <Link to="/setting-supplier">Supplier</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-company" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-company")}
            >
              <Link to="/setting-company">Company</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-category" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-category")}
            >
              <Link to="/setting-category">Category</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-uom" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-uom")}
            >
              <Link to="/setting-uom">UOM</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-item-type" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-item-type")}
            >
              <Link to="/setting-item-type">Item Type</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-item-component" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-item-component")}
            >
              <Link to="/setting-item-component">Item</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-tax" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-tax")}
            >
              <Link to="/setting-tax">TAX</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-generic" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-generic")}
            >
              <Link to="/setting-generic">Generic</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-dispensary" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-dispensary")}
            >
              <Link to="/setting-dispensary">Dispensary</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-rack" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-rack")}
            >
              <Link to="/setting-rack">Rack</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-invoice-headers" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-invoice-headers")}
            >
              <Link to="/setting-invoice-headers">Invoice Headers</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/setting-terms" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/setting-terms")}
            >
              <Link to="/setting-terms">Terms</Link>
            </li>
          </ul>
        </div>
      )}

      {activeNav === "store" && (
        <div className="pharmacy-sub-nav-module">
          <ul>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/breakage-item" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/breakage-item")}
            >
              <Link to="/breakage-item">Breakage Item
              <i className="fa-solid fa-trash-can"></i>
              </Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/return-to-supplier" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/return-to-supplier")}
            >
              <Link to="/return-to-supplier">Return To Supplier 
              <i className="fa-solid fa-plus"></i>
              </Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/return-to-supplier-list" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/return-to-supplier-list")}
            >
              <Link to="/return-to-supplier-list">Return To Supplier List</Link>
            </li>
            <li
              className={`pharmacy-sub-nav-item-module ${activeSubNav === "/store-details-list" ? "active" : ""}`}
              onClick={() => handleSubNavClick("/store-details-list")}
            >
              <Link to="/store-details-list">Store Details List</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HospitalHeader;
