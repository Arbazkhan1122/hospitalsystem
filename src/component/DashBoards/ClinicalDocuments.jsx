import React, { useRef, useState } from 'react';
import './ClinicalDocument.css'; // Import the CSS file
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const CinicalDocument = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  return (
    <div className="cliDoc-container">

<table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Document Type", "Upload Date", "Uploaded By", "Remark", "Option"
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
            <tr></tr>
          </tbody>
          </table>
    </div>
  );
};

export default CinicalDocument;
