import React from 'react';
import './CheckIn.css';

const CheckIn = () => {
  return (
    <div className="checkIn__container">
      <div className="checkIn__header">
        <h2>New Visit</h2>
      </div>

      <div className="checkIn__topbar">
        <div className="checkIn__field">
          <label>Membership <span className="checkIn__required">*</span></label>
          <select className="checkIn__dropdown">
            <option>General</option>
          </select>
        </div>
        <div className="checkIn__field">
          <label>Price Category:</label>
          <select className="checkIn__dropdown">
            <option>Normal</option>
          </select>
        </div>
      </div>

      <div className="checkIn__content">
       <div className="checkIn__section checkIn__section--patient">
      <h3 className="checkIn__section-title">
        <span className="checkIn__section-icon">👤</span> Patient Information
      </h3>
      <div className="checkIn__form">
        <div className="checkIn__form-group">
          <label className="checkIn__label">
            Name <span className="checkIn__required">*</span>
          </label>
          <div className="checkIn__name-inputs">
            <input
              className="checkIn__input"
              type="text"
              placeholder="First Name"
              value="Tino"
            />
            <input
              className="checkIn__input"
              type="text"
              placeholder="Middle Name"
            />
            <input
              className="checkIn__input"
              type="text"
              placeholder="Last Name"
              value="Werner"
            />
          </div>
        </div>
        <div className="checkIn__form-group checkIn__form-group--dob">
          <label className="checkIn__label">Have DOB?</label>
          <input type="checkbox" />
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">
            Religion <span className="checkIn__required">*</span>
          </label>
          <input className="checkIn__input" type="text" />
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">
            Age <span className="checkIn__required">*</span>
          </label>
          <div className="checkIn__age-inputs">
            <input
              className="checkIn__input checkIn__input--age"
              type="number"
              value="34"
            />
            <select className="checkIn__select">
              <option>Years</option>
            </select>
          </div>
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">
            Gender <span className="checkIn__required">*</span>
          </label>
          <select className="checkIn__select">
            <option>Male</option>
          </select>
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">
            Phone No. <span className="checkIn__required">*</span>
          </label>
          <div className="checkIn__phone-inputs">
            <input
              className="checkIn__input"
              type="text"
              value="8147591847"
            />
            <input
              className="checkIn__input"
              type="text"
              placeholder="LandLine Number"
            />
          </div>
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">
            Address <span className="checkIn__required">*</span>
          </label>
          <select className="checkIn__select">
            <option>Kenya</option>
          </select>
          <input
            className="checkIn__input checkIn__input--address"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">Email</label>
          <input
            className="checkIn__input"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">Care of Person</label>
          <input
            className="checkIn__input"
            type="text"
            placeholder="Care Taker Person"
          />
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">Relation With Patient</label>
          <input className="checkIn__input" type="text" />
        </div>
        <div className="checkIn__form-group">
          <label className="checkIn__label">Care of Person Contact</label>
          <input
            className="checkIn__input"
            type="text"
            placeholder="Care Takers Contact"
          />
        </div>
      </div>
    </div>
      <div className='checkIn-visit-billing'>
        <div className="checkIn__section checkIn__section--visit">
          <h3 className="checkIn__section-title">Visit Information</h3>
          <div className="checkIn__form">
            <div className="checkIn__form-group">
              <label>Department <span className="checkIn__required">*</span></label>
              <input type="text" value="Dental" />
            </div>
            <div className="checkIn__form-group">
              <label>Doctor <span className="checkIn__required">*</span></label>
              <input type="text" placeholder="Doctor's Name" />
            </div>
            <div className="checkIn__form-group">
              <label>Referred By</label>
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="checkIn__form-group">
              <label>Visit Date <span className="checkIn__required">*</span></label>
              <input type="date" value="2024-08-12" />
            </div>
            <div className="checkIn__form-group">
              <label>Visit Time <span className="checkIn__required">*</span></label>
              <input type="time" value="17:58" />
            </div>
            <div className="checkIn__form-group checkIn__form-group--external">
              <label>External?</label>
              <input type="checkbox" checked />
              <button className="checkIn__add-button">+</button>
            </div>
          </div>
        </div>

        <div className="checkIn__section checkIn__section--billing">
          <h3 className="checkIn__section-title">Billing Information</h3>
          <div className="checkIn__form">
            <div className="checkIn__billing-item">
              <span>Particular(s)</span>
              <input type="text" value="Admission Fees" disabled />
            </div>
            <div className="checkIn__billing-summary">
              <div className="checkIn__billing-item">
                <span>Discount %</span>
                <input type="number" value="0" />
              </div>
              <div className="checkIn__billing-item">
                <span>Discount Amount</span>
                <input type="number" value="0" />
              </div>
              <div className="checkIn__billing-item">
                <span>SubTotal</span>
                <input type="text" value="1000" disabled />
              </div>
              <div className="checkIn__billing-item">
                <span>Total Amount</span>
                <input type="text" value="1000" disabled />
              </div>
            </div>
            <div className="checkIn__billing-item">
              <span>Tender</span>
              <input type="number" value="1000" />
            </div>
            <div className="checkIn__billing-item">
              <span>Change/Return</span>
              <input type="number" value="0" disabled />
            </div>
            <div className="checkIn__billing-item">
              <span>Payment Options</span>
              <select>
                <option>Cash</option>
              </select>
            </div>
            <button className="checkIn__print-btn">Print Invoice</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CheckIn;
