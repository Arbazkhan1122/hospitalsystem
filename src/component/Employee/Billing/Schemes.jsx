// src/ServiceDepartments.jsx

import React, { useState, useEffect, useRef } from 'react';
import './MapSchemeAndPrice.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const usersData = [
    {
        code: "astra",
        schemeName: "Astra",
        community: "Astra",
        description: "BRITAM",
        isActive: true,
        discApplicable: false,
        creditApplicable: false,
        isCopayment: false,
        action: {
          edit: true,
          deactivate: true,
        },
      },
      {
        code: "BRITAM",
        schemeName: "BRITAM",
        community: "BRITAM",
        description: "BRITAM",
        isActive: true,
        discApplicable: false,
        creditApplicable: true,
        isCopayment: false,
        action: {
          edit: true,
          deactivate: true,
        },
      },
      {
        code: "Gene4",
        schemeName: "General",
        community: "Hospital",
        description: "LINDA MAMA SVD",
        isActive: true,
        discApplicable: false,
        creditApplicable: false,
        isCopayment: false,
        action: {
          edit: true,
          deactivate: true,
        },
      },
      {
        code: "LMSVD",
        schemeName: "LINDA MAMA SVD",
        community: "LINDA MAMA SVD",
        description: "MTIBA",
        isActive: true,
        discApplicable: false,
        creditApplicable: false,
        isCopayment: false,
        action: {
          edit: true,
          deactivate: true,
        },
      },
      {
        code: "MBA",
        schemeName: "MTIBA",
        community: "MTIBA",
        description: "MTIBA",
        isActive: true,
        discApplicable: false,
        creditApplicable: false,
        isCopayment: false,
        action: {
          edit: true,
          deactivate: true,
        },
      },
      {
        code: "NHIF-2",
        schemeName: "NHIF CAPITATION",
        community: "OutPatient",
        description: "NHIF CAPITATION",
        isActive: true,
        discApplicable: true,
        creditApplicable: false,
        isCopayment: false,
        action: {
          edit: true,
          deactivate: true,
        },
      },
      {
        code: "NHIF-1",
        schemeName: "NHIF General",
        community: "InPatient",
        description: "NHIF General",
        isActive: true,
        discApplicable: false,
        creditApplicable: false,
        isCopayment: false,
        action: {
          edit: true,
          deactivate: true,
        },
      },
];

const Schemes = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
    return (
        <div className="map-scheme-reaction-container">
          <div className="map-scheme-reaction-header">
            <button className="map-scheme-reaction-add-button">+ New Schemes</button>
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
                "Code",
                "Scheme Name",
                "Community",
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
                    <td>{user.code}</td>
                    <td>{user.schemeName}</td>
                    <td>{user.community}</td>
                    <td>{user.isActive ? 'Yes' : 'No'}</td>
                    <td className="manage-reaction-action-buttons">
                      {user.action.edit && <button className="map-scheme-reaction-action-button">Edit</button>}
                      {user.action.deactivate && <button className="map-scheme-reaction-action-button">Item Setting</button>}

                      {user.action.deactivate && <button className="map-scheme-reaction-action-button">Deactivate</button>}
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
export default Schemes;
