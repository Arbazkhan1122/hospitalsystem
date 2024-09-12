import React, { useState } from 'react';
import { RefreshCw, Check } from 'lucide-react';
import "./CollectSample.css"
import SampleCodePopup from './sampleCodePopup';

const CollectSample = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [sampleData, setSampleData] = useState({
        patientName: '',
        testName: '',
        runNumber: '',
        barCodeNumber: ''
    });

    const handleCollectSample = () => {
        // You would typically fetch this data from your form or API
        setSampleData({
            patientName: 'Titus Kipsang',
            testName: 'Sugar Fasting',
            runNumber: '7/5',
            barCodeNumber: '1000058'
        });
        setIsPopupOpen(true);
    };

    return (
        <div className="collectsample-container bg-blue-50">
            <div className="collectsample-header bg-blue-100 p-4">
                <h1 className="collectsample-title text-xl font-bold">Collect Sample</h1>
                <div className="collectsample-alert bg-green-100 p-2 mt-2">
                    Please verify the RUN Number and Tests Carefully before Collecting Sample
                </div>
            </div>

            <div className="collectsample-content p-4">
                <div className="collectsample-info bg-gray-100 p-4 flex justify-between">
                    <div>Ward: outpatient</div>
                    <div>Phone Number: 20202020</div>
                </div>

                <div className="collectsample-table mt-4">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th>Requested On (BS)</th>
                                <th>Prescribed By</th>
                                <th>Select Test</th>
                                <th>Is Outsourced?</th>
                                <th>Specimen</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><RefreshCw size={16} className="text-blue-500" /></td>
                                <td>Dr. ALEX OKELLO ONYIEGO</td>
                                <td>
                                    <div className="flex items-center">
                                        <Check size={16} className="text-blue-500 mr-2" />
                                        Sugar Fasting
                                    </div>
                                </td>
                                <td>NO</td>
                                <td>
                                    <select className="border rounded">
                                        <option>Blood</option>
                                    </select>
                                </td>
                                <td>normal</td>
                                <td>
                                    <button className="collectsample-transfer bg-blue-500 text-white px-2 py-1 rounded">
                                        Transfer
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="collectsample-run-number mt-4 flex items-center">
                    <span>Outpatient (Normal) Run Number:</span>
                    <input type="text" value="7" className="border mx-2 w-16 text-center" />
                    <span>/</span>
                    <input type="text" value="5" className="border mx-2 w-16 text-center" />
                    <RefreshCw size={16} className="text-blue-500 ml-2" />
                    <button className="collectsample-change-date ml-4 text-blue-500">
                        Change Sample Collection Date
                    </button>
                </div>

                <button className="collectsample-button" onClick={handleCollectSample}>
                    Collect Sample
                </button>
            </div>

            <SampleCodePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                {...sampleData}
            />
        </div>
    );
};

export default CollectSample;