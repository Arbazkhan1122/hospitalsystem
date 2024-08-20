import React from 'react';
import './Registration.css';

const EmergencyPatientRegistration = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Emergency Patient Registration</h1>
                <button className="close-button">✖</button>
            </header>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="membership">Membership <span className="required">*</span>:</label>
                    <select id="membership" name="membership">
                        <option>General</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="priceCategory">Price Category:</label>
                    <select id="priceCategory" name="priceCategory">
                        <option>Normal</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-section">
                    <div className="form-left">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name <span className="required">*</span>:</label>
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="middleName">Middle Name:</label>
                            <input type="text" id="middleName" name="middleName" placeholder="Middle Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name <span className="required">*</span>:</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="religion">Religion <span className="required">*</span>:</label>
                            <select id="religion" name="religion">
                                <option>--Religion--</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender <span className="required">*</span>:</label>
                            <select id="gender" name="gender">
                                <option>--select--</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Have DOB?</label>
                            <input type="checkbox" id="dob" name="dob" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <div className="age-group">
                                <input type="number" id="age" name="age" defaultValue={0} />
                                <select id="ageUnit" name="ageUnit">
                                    <option>Years</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country:</label>
                            <input type="text" id="country" name="country" defaultValue="Kenya" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="county">County:</label>
                            <input type="text" id="county" name="county" defaultValue="Juja sub county" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" placeholder="Address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="case">Case:</label>
                            <select id="case" name="case">
                                <option>--select--</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="form-right">
                        <div className="form-group">
                            <label htmlFor="contactNumber">Contact number:</label>
                            <input type="text" id="contactNumber" name="contactNumber" placeholder="Phone number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="referredBy">Referred By:</label>
                            <input type="text" id="referredBy" name="referredBy" placeholder="Referred By" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="conditionArrival">Condition during arrival:</label>
                            <input type="text" id="conditionArrival" name="conditionArrival" placeholder="Condition during arrival" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="modeArrival">Mode of arrival:</label>
                            <input type="text" id="modeArrival" name="modeArrival" placeholder="Enter Mode Of Arrival" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="careOfPerson">Care Of Person:</label>
                            <input type="text" id="careOfPerson" name="careOfPerson" placeholder="Care Of Person" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="careOfPersonNumber">Care Of Person Number:</label>
                            <input type="text" id="careOfPersonNumber" name="careOfPersonNumber" placeholder="Number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="broughtBy">Brought By:</label>
                            <input type="text" id="broughtBy" name="broughtBy" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="relationWithPatient">Relation With Patient:</label>
                            <input type="text" id="relationWithPatient" name="relationWithPatient" placeholder="Relation" />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button type="button" className="add-button">Add Unknown ER-Patient</button>
                    <button type="submit" className="register-button">Register</button>
                </div>
            </form>
        </div>
    );
};

export default EmergencyPatientRegistration;
