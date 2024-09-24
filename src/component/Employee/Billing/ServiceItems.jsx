// src/ServiceDepartments.jsx

import React, { useState, useEffect, useRef } from 'react';
import './MapSchemeAndPrice.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const usersData = [
    { department: 'Bed Charge', code: 'CABEN', name: 'CABEN', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'MATERNITY', name: 'MATERNITY', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: '0010', name: 'Bed 3', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'BF-11', name: 'Bed 4', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'BF-12', name: 'Bed 5', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'BF-13', name: 'Bed 6', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'BF-14', name: 'Bed 7', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'BF-15', name: 'Bed 8', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'BF-16', name: 'Bed 9', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'BF-17', name: 'Bed 10', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'SUITE', name: 'first class', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: '2ND CLASS', name: '2nd class', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'FEMALEWARD', name: 'female', description: '', isActive: 'No', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: '3RD CLASS', name: '3rd class', description: '', isActive: 'No', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'MALE WARD', name: 'Male Ward', description: '', isActive: 'No', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'FEMALE1', name: 'FEMALE WARD', description: '', isActive: 'No', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Bed Charge', code: 'BD111', name: 'Electronic', description: '', isActive: 'Yes', category: '', taxApplicable: 'false', integrationName: 'Bed Charges' },
    { department: 'Biochemistry', code: '1', name: 'Sugar Fasting', description: '', isActive: 'Yes', category: '', taxApplicable: 'true', integrationName: 'LAB' },
    { department: 'Biochemistry', code: '2', name: 'RFT', description: '', isActive: 'Yes', category: '', taxApplicable: 'true', integrationName: 'LAB' },
    { department: 'Biochemistry', code: '3', name: 'LFT', description: '', isActive: 'Yes', category: '', taxApplicable: 'true', integrationName: 'LAB' },
    // You can add more data entries as needed
];

const ServiceItems = () => {
    const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
    return (
        <div className="map-scheme-reaction-container">
            <div className="map-scheme-reaction-header">
                <button className="map-scheme-reaction-add-button">+ New Service Items</button>
            </div>
            <input type="text" placeholder="Search" className="map-scheme-reaction-search-input" />
            <div className="map-scheme-reaction-span">
                <span>Showing {usersData.length}/{usersData.length} results</span>
            </div>
            <div className="table-container">
            <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                  "Department",
  "Service Department",
  "Short Name",
  "Is Active",
  "Action"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
                    <tbody>
                        {usersData.map((user, index) => (
                            <tr key={index}>
                                <td>{user.department}</td>
                                <td>{user.code}</td> {/* Updated to use the 'code' as Service Department */}
                                <td>{user.name}</td> {/* Updated to use the 'name' as Short Name */}
                                <td>{user.isActive}</td> {/* Directly use the 'isActive' string */}
                                <td className="manage-reaction-action-buttons">
                                    <button className="map-scheme-reaction-action-button">Edit</button> {/* Placeholder action */}
                                    <button className="map-scheme-reaction-action-button">Disable</button> {/* Placeholder action */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <div className="map-scheme-reaction-pagination">
                    <div className="map-scheme-reaction-pagination-controls">
                        <button>First</button>
                        <button>Previous</button>
                        <button>Next</button>
                        <button>Last</button>
                    </div>
                </div> */}
            </div>
            
        </div>
    );
};

export default ServiceItems;
