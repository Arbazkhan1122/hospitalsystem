import React, { useState, useEffect, useRef } from 'react';
import './MaanageReaction.css'; // Ensure this is the correct filename
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const usersData = [
    { code: 'AN', name: 'ANNAPHYLAXIS' },
    { code: 'ANX', name: 'ANXIETY' },
    { code: 'AP', name: 'ABDOMINAL PAIN' },
    { code: 'BL', name: 'BLISTERING' },
    { code: 'BP', name: 'BLOOD PRESSURE DECREASE' },
    { code: 'CA', name: 'CARDIAC ARREST' },
    { code: 'CON', name: 'CONFUSTION' },
    { code: 'COU', name: 'COUGH' },
    { code: 'DB', name: 'DIFFICULTY BREATHING' },
    { code: 'DIA', name: 'DIARRHEA' },
    { code: 'DIZ', name: 'DIZZINESS' },
    { code: 'HI', name: 'HIVES' },
    { code: 'IE', name: 'ITCHING EYES' },
    { code: 'LH', name: 'LIGHT HEADNESS' },
    { code: 'MU', name: 'MULTIPLE: PLEASE ADD COMMENTS' },
    { code: 'NA', name: 'NAUSEA' },
    { code: 'NC', name: 'NASAL CONGESTION' },
    { code: 'NV', name: 'NAUSEA AND VOMITING' },
    { code: 'RA', name: 'RASH' },
    { code: 'RE', name: 'REDNESS EYES' },
];

const ManageReaction = () => {
    const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
    return (
        <div className="manage-reaction-container">
            <div className="manage-reaction-header">
                <button className="manage-reaction-add-button">+ Add Reaction</button>
            </div>
            <input type="text" placeholder="Search" className="manage-reaction-search-input" />
            <div className="manage-reaction-span">
                <span>Showing 34/34 results</span>
            </div>
            <div className="table-container">
            <table  ref={tableRef}>
          <thead>
            <tr>
              {[
'Reaction Code', 'Reaction Name', 'Action'       
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
                                <td>{user.name}</td>
                                <td className="manage-reaction-action-buttons">
                                    <button className="manage-reaction-action-button">Edit</button>
                                    {/* <button className="manage-reaction-action-button">Delete</button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="manage-reaction-pagination">
                    {/* <div className="manage-reaction-pagination-controls">
                        <button>First</button>
                        <button>Previous</button>
                        <button>1</button>
                        <button>Next</button>
                        <button>Last</button>
                    </div> */}
                </div>
            </div>
            
        </div>
    );
};

export default ManageReaction;
