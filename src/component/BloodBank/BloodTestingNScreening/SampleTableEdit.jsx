/* Dhanashree_SampleTestCard_24/09_Start */

import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './SampleTableEdit.css'; 

const SampleTestCard = ({ testData, onClose }) => {
    const [testType, setTestType] = useState('');
    const [result, setResult] = useState('');
    const [remark, setRemark] = useState('');
    const [testedBy, setTestedBy] = useState('');
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    useEffect(() => {
        if (testData) {
            setTestType(testData.test_type);
            setResult(testData.result);
            setRemark(testData.remarks);
            setTestedBy(testData.tested_by);
        }
    }, [testData]);

    const handleUpdate = async () => {
        setLoading(true);
        setError(null);

        const updatedData = {
            test_type: testType,
            result: result,
            remarks: remark,
            tested_by: testedBy,
        };

        // Sufiyan_ SampleTestCard_24/09_Start

        try {
            await axios.put(`http://localhost:8085/blood-testing/update-test/${testData.test_id}`, updatedData);
            console.log('Updated:', updatedData);
            onClose(); 
        } catch (err) {
            setError('Failed to update the test. Please try again.');
            console.error('Error updating data:', err);
        } finally {
            setLoading(false);
        }
    };
            // Sufiyan_ SampleTestCard_24/09_End


    return (
        <div className="SampleTestCard-container">
            <div className="SampleTestCard-card">
                <div className="SampleTestCard-card-header">
                    <h2>Test Information</h2>
                </div>
                <div className="SampleTestCard-card-body">
                    <div className="SampleTestCard-field">
                        <label>
                            <strong>Test Type:</strong>
                            <input
                                type="text"
                                value={testType}
                                onChange={(e) => setTestType(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="SampleTestCard-field">
                        <label>
                            <strong>Result:</strong>
                            <input
                                type="text"
                                value={result}
                                onChange={(e) => setResult(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="SampleTestCard-field">
                        <label>
                            <strong>Remark:</strong>
                            <input
                                type="text"
                                value={remark}
                                onChange={(e) => setRemark(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="SampleTestCard-field">
                        <label>
                            <strong>Tested By:</strong>
                            <input
                                type="text"
                                value={testedBy}
                                onChange={(e) => setTestedBy(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className="SampleTestCard-footer">
                    {loading ? (
                        <button className="SampleTestCard-update-button" disabled>
                            Updating...
                        </button>
                    ) : (
                        <button className="SampleTestCard-update-button" onClick={handleUpdate}>
                            Update
                        </button>
                    )}
                </div>
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

export default SampleTestCard;

/* Dhanashree_SampleTestCard_24/09_End */
