import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';
import Barcode from 'react-barcode';
import "./sampleCodePopup.css"

const SampleCodePopup = ({ isOpen, onClose, patientName, testName, runNumber, barCodeNumber }) => {
    const [copies, setCopies] = useState(1);
    const [selectedPrinter, setSelectedPrinter] = useState('');

    // Create a ref for the barcode section
    const printRef = useRef(null);

    if (!isOpen) return null;

    const handlePrint = () => {
        const printContent = printRef.current.innerHTML;

        // Create an iframe to hold the content
        const iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        document.body.appendChild(iframe);

        // Write the HTML content of the section into the iframe document
        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
            <html>
                <head>
                    <title>Print Barcode</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                        }
                        .barcode-section {
                            text-align: center;
                            margin-top: 20px;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 10px;
                        }
                        th, td {
                            border: 1px solid black;
                            padding: 8px;
                            text-align: left;
                        }
                        .barcode-info {
                            text-align: left;
                            margin-top: 10px;
                        }
                    </style>
                </head>
                <body>
                    ${printContent}
                </body>
            </html>
        `);
        iframeDoc.close();

        // Trigger the print
        iframe.contentWindow.focus();
        iframe.contentWindow.print();

        // Remove the iframe after printing
        document.body.removeChild(iframe);
    };

    return (
        <div className="samplecodepopup-overlay">
            <div className="samplecodepopup-container">
                <div className="samplecodepopup-header">
                    <h2 className="samplecodepopup-title">Sample Code generated successfully</h2>
                    <button onClick={onClose} className="samplecodepopup-close-button">
                        <X size={24} />
                    </button>
                </div>

                {/* Section to be printed */}
                <div ref={printRef}>
                    <div className="samplecodepopup-patient-info">
                        <p><strong>Patient Name:</strong> {patientName}</p>
                    </div>

                    <table className="samplecodepopup-table">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left p-2">Test Name</th>
                                <th className="text-left p-2">Run Number</th>
                                <th className="text-left p-2">BarCodeNumber</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2">{testName}</td>
                                <td className="p-2">{runNumber}</td>
                                <td className="p-2">{barCodeNumber}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="samplecodepopup-barcode-container">
                        <div className='samplecodepopup-barcode-info'>
                            <p>Hospital No: 2311000003 OP</p>
                            <p>{patientName} 32 Y/M</p>
                            <p>{barCodeNumber}</p>
                            <p>RN:{runNumber} | 2024-09-09 04:57 PM</p>
                        </div>
                        <div className="samplecodepopup-barcode">
                            <Barcode value={barCodeNumber} />
                        </div>
                    </div>
                </div>

                <div className="samplecodepopup-copies">
                    <label className="mr-2">No. of copies:</label>
                    <input
                        type="number"
                        value={copies}
                        onChange={(e) => setCopies(parseInt(e.target.value))}
                        className="border p-1 w-16"
                        min="1"
                    />
                </div>

                <div className="samplecodepopup-printer-select">
                    <label className="mr-2">Select Printer:</label>
                    <select
                        value={selectedPrinter}
                        onChange={(e) => setSelectedPrinter(e.target.value)}
                        className="border p-1"
                    >
                        <option value="">Select a printer</option>
                        <option value="printer1">Printer 1</option>
                        <option value="printer2">Printer 2</option>
                    </select>
                    <button onClick={() => console.log('OK clicked')} className="samplecodepopup-ok-button">
                        OK
                    </button>
                </div>

                <div className="samplecodepopup-footer">
                    <button onClick={handlePrint} className="samplecodepopup-print-button">
                        <span className="mr-2">Print</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div>
                        <button onClick={() => console.log('Print Empty Sheet clicked')} className="samplecodepopup-empty-sheet-button">
                            Print Empty Sheet
                        </button>
                        <button onClick={onClose} className="samplecodepopup-close-button">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SampleCodePopup;
