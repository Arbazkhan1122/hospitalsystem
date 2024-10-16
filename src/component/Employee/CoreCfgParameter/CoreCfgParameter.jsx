import React, { useState, useEffect, useRef } from 'react';
import './CoreCfgParameter.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const CoreCfgParameter = () => {
    const [columnWidths,setColumnWidths] = useState({});
    const tableRef=useRef(null);
    const data = [
        { parameter: 'Common', parameterName: 'DefaultCountry', parameterValue: '{"CountryName":"Kenya","CountryId":1}', valueDataType: 'JSON', description: 'Default country id for Manaka...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Common', parameterName: 'CustomerHeader', parameterValue: '{"hospitalName":"Demo Hospital","hospitalId":123,"address":"123 Demo St..."}', valueDataType: 'JSON', description: 'Customer header information for...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'LAB', parameterName: 'TemplateLocationPath', parameterValue: 'D:\\DanpheHealthInc_PvtLtd_Files\\Documents\\Templates\\', valueDataType: 'string', description: 'Storage location of Lab Template', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Common', parameterName: 'DBExportCSVXMLDirPath', parameterValue: 'D:\\DanpheHealthInc_PvtLtd_Files\\DataExport\\', valueDataType: 'string', description: 'Location path for exporting data...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'SystemAdmin', parameterName: 'SqlAuditActionNameList', parameterValue: '{"1":"CREATE","2":"ALTER","3":"DROP","4":"INSERT","5":"UPDATE","6":"DELETE"}', valueDataType: 'JSON', description: 'This provides all Action Name list...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Common', parameterName: 'CustomerHeaderLocal', parameterValue: '{"hospitalName":"Demo Hospital","localId":456,"branch":"Main"}', valueDataType: 'JSON', description: 'This is Customer Header Local...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'BILL', parameterName: 'Currency', parameterValue: '{"CurrencyUnit":"Ksh."}', valueDataType: 'JSON', description: 'Default Currency Unit', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Common', parameterName: 'HospitalCode', parameterValue: 'KMH', valueDataType: 'string', description: 'Hospital Code for PatientCode', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'BILL', parameterName: 'BillingHeader', parameterValue: '{"CustomerName":"Demo Hospital","Address":"123 Billing St..."}', valueDataType: 'JSON', description: 'Billing Header', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'BILL', parameterName: 'TaxInfo', parameterValue: '{"TaxId":3,"TaxName":"None","TaxPercentage":0}', valueDataType: 'JSON', description: 'Tax Detail', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Common', parameterName: 'CalendarTypes', parameterValue: '{"LaboratoryServices":"np","PatientCareServices":"np"}', valueDataType: 'JSON', description: 'This will include parameter for...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'TenantMgmt', parameterName: 'SoftwareLicense', parameterValue: '{"LicenseType":"Full","StartDate":"2023-01-01","EndDate":"2024-01-01"}', valueDataType: 'json-encr', description: 'License details of current custom...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Government', parameterName: 'HospitalName', parameterValue: 'Demo Hospital', valueDataType: 'string', description: 'Hospital name in header of Gov...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Radiology', parameterName: 'EnableImageUpload', parameterValue: 'true', valueDataType: 'boolean', description: 'Image Upload configuration', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'PrinterSetting', parameterName: 'showServerPrintBtn', parameterValue: '{"OPDSticker":"true"}', valueDataType: 'JSON', description: 'This row contains boolean values...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Common', parameterName: 'CustomerHeaderView', parameterValue: '{"showCustomerHeader":true}', valueDataType: 'JSON', description: 'To hide or view customer header...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Radiology', parameterName: 'RAD_AttachFileButtonShow', parameterValue: 'true', valueDataType: 'boolean', description: 'Hide or show attach imaging file...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'Radiology', parameterName: 'dicomViewerUrl', parameterValue: 'http://localhost:5864/danphe-dicom-viewer', valueDataType: 'string', description: 'DICOM viewer API URL with patStu...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'PrinterSetting', parameterName: 'DefaultPrinterName', parameterValue: '{"BillingReceipt":"EPSON","OPDSticker":"Canon"}', valueDataType: 'JSON', description: 'It contains default printer sett...', parameterSource: 'custom', action: 'Edit' },
        { parameter: 'PrinterSetting', parameterName: 'PrintFileLocationPath', parameterValue: 'D:\\Danphe_Print\\PrintUAT\\', valueDataType: 'string', description: 'Default storage path of the files...', parameterSource: 'custom', action: 'Edit' },
    ];
    

    return (
        <div className="manage-tax-core-cfg-parameters-container">
            <div className="manage-tax-search-bar">
                <input type="text" placeholder="Search" />
            </div>
           <div className='core-cfg-para'>
           <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                "Parameter",
                "Parameter Name",
                "Parameter Value",
                "ValueDataType",
                "Description",
                "Parameter Source",
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
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.parameter}</td>
                            <td>{row.parameterName}</td>
                            <td className="manage-tax-truncate">{row.parameterValue}</td>
                            <td>{row.valueDataType}</td>
                            <td className="manage-tax-truncate">{row.description}</td>
                            <td>{row.parameterSource}</td>
                            <td>
                                <button className="manage-tax-edit-button">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <div className="manage-tax-pagination">
                <span>Showing 1 to 20 of 386 results</span>
                <div className="manage-tax-pagination-buttons">
                    <button>First</button>
                    <button>Previous</button>
                    <span>Page 1 of 20</span>
                    <button>Next</button>
                    <button>Last</button>
                </div>
            </div> */}
           </div>
        </div>
    );
};

export default CoreCfgParameter;
