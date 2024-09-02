import React, { useState, useRef } from 'react';
import Navbar from './Navbar'; // Ensure this path is correct
import './RegisterPatient.css'; // Add your CSS for styling
import PatientRegistration from './PatientRegistration';
import AddressPage from './AddressPage';
import GuarantorPage from './GuarantorPage';
import InsurancePage from './InsurancePage'; // Import the new InsurancePage component
import EmergencyContactPage from './EmergencyContactPage';

function RegisterPatient() {
  const [activeTab, setActiveTab] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    patientData: {},
    addressData: {},
    guarantorData: {},
    insuranceData: {},
    emergencyContactData: {},
  });

  console.log(formData);

  const openCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsCameraOpen(true);
        }
      })
      .catch(error => {
        console.error('Error accessing camera', error);
      });
  };

  const takePicture = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      setImageSrc(canvasRef.current.toDataURL('image/png'));
      setIsCameraOpen(false);
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    }
  };

  const handlePatientdata = (data) => {
    setFormData(prevState => ({
      ...prevState,
      patientData: data,
    }));
  };

  const handleAddressdata = (data) => {
    setFormData(prevState => ({
      ...prevState,
      addressData: data,
    }));
  };

  const handleGuarantordata = (data) => {
    setFormData(prevState => ({
      ...prevState,
      guarantorData: data,
    }));
  };

  const handleInsurancedata = (data) => {
    setFormData(prevState => ({
      ...prevState,
      insuranceData: data,
    }));
  };

  const handleEmergencyContactdata = (data) => {
    setFormData(prevState => ({
      ...prevState,
      emergencyContactData: data,
    }));
  };

  console.log(formData);

  const handleRegisterPatient = async () => {
    // Check if all tabs have data (optional validation)
    const { patientData, addressData, guarantorData, insuranceData, emergencyContactData } = formData;
    if (!patientData || !addressData || !guarantorData || !insuranceData || !emergencyContactData) {
      alert('Please complete all sections before registering.');
      return;
    }

    // Combine all form data
    const dataToSubmit = {
      ...patientData,
      addresses: addressData,
      guarantor: guarantorData,
      insurance: insuranceData,
      emergencyContact: emergencyContactData
    };
    console.log(dataToSubmit);

    try {
      // Replace this URL with your backend API endpoint
      const response = await fetch('http://localhost:8989/api/patients/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      alert('Patient registered successfully');
      console.log('Patient registered successfully:', result);

      // Optionally reset form data or redirect the user
      setFormData({
        patientData: {},
        addressData: {},
        guarantorData: {},
        insuranceData: {},
        emergencyContactData: {}
      });
      setActiveTab(''); // Optionally reset active tab

    } catch (error) {
      console.error('Error registering patient:', error);
      alert('An error occurred while registering the patient. Please try again.');
    }
  };

  return (
    <div className="register-patient">
      <div className="menu">
        <a href="#basic-info" className="menu-item" onClick={() => setActiveTab('basic-info')}>Basic Information</a>
        <a href="#address" className="menu-item" onClick={() => setActiveTab('address')}>Address</a>
        <a href="#guarantor" className="menu-item" onClick={() => setActiveTab('guarantor')}>Guarantor</a>
        <a href="#insurance" className="menu-item" onClick={() => setActiveTab('insurance')}>Insurance</a>
        <a href="#emergency-contact" className="menu-item" onClick={() => setActiveTab('emergency-contact')}>Kin/Emergency Contact</a>
        <a href="#" className="register-button" onClick={handleRegisterPatient}>Register Patient</a>
      </div>

      <div className="register-patient-content">
        {activeTab === 'basic-info' && <PatientRegistration sendpatientdata={handlePatientdata} />}
        {activeTab === 'address' && <AddressPage sendaddressdata={handleAddressdata} />}
        {activeTab === 'guarantor' && <GuarantorPage sendguarantordata={handleGuarantordata} />}
        {activeTab === 'insurance' && <InsurancePage sendinsurancedata={handleInsurancedata} />}
        {activeTab === 'emergency-contact' && <EmergencyContactPage sendemergencycontactdata={handleEmergencyContactdata} />}
        {isCameraOpen && (
          <div className="register-patient-camera-container">
            <video ref={videoRef} autoPlay></video>
            <button onClick={takePicture} className="register-patient-capture-btn">Take Photo</button>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
          </div>
        )}

        {!isCameraOpen && imageSrc && (
          <div className="register-patient-image-preview">
            <img src={imageSrc} alt="Captured" className="register-patient-captured-image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterPatient;
