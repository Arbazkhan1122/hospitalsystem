import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './RegisterPatient.css'; // Add your CSS for styling
import PatientRegistration from './PatientRegistration';
import AddressPage from './AddressPage';
import GuarantorPage from './GuarantorPage';
import InsurancePage from './InsurancePage'; // Import the new InsurancePage component
import EmergencyContactPage from './EmergencyContactPage';

function RegisterPatient() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic-info');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const[patientIds,setPatientIds]=useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState({
      patientData: {},
      addressData: {},
      guarantorData: {},
      insuranceData: {},
      emergencyContactData: {},
    });

  const {id}=useParams();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const id = location?.state?.patient?.patientId;
    setPatientIds(id);
  
    if (location?.state && location?.state?.patient) {
      const patient = location.state.patient;
      setFormData({
        patientData: {
          address: patient.address || '',
          age: patient.age || '',
          bloodGroup: patient.bloodGroup || '',
          country: patient.country || '',
          dateOfBirth: patient.dateOfBirth || '',
          dialysisPatient: patient.dialysisPatient || false,
          email: patient.email || '',
          emergencyContactDTO: patient.emergencyContactDTO || {},
          employerInfo: patient.employerInfo || '',
          firstName: patient.firstName || '',
          gender: patient.gender || '',
          guarantorDTO: patient.guarantorDTO || {},
          hospitalNo: patient.hospitalNo || '',
          insuranceDTO: patient.insuranceDTO || {},
          ipd: patient.ipd || false,
          landlineNumber: patient.landlineNumber || '',
          lastName: patient.lastName || '',
          maritalStatus: patient.maritalStatus || '',
          middleName: patient.middleName || '',
          notifications: patient.notifications || false,
          occupation: patient.occupation || '',
          passportNumber: patient.passportNumber || '',
          phoneNumber: patient.phoneNumber || '',
          pinCode: patient.pinCode || '',
          previousLastName: patient.previousLastName || '',
          race: patient.race || '',
          religion: patient.religion || '',
          salutation: patient.salutation || '',
          state: patient.state || '',
        },
        addressData: patient.addressDTO || {},
        guarantorData: patient.guarantorDTO || {},
        insuranceData: patient.insuranceDTO || {},
        emergencyContactData: patient.emergencyContactDTO || {},
      });
      setIsEditMode(true);
      setActiveTab('basic-info'); // Set the active tab based on the incoming data
    }
  }, [location?.state]);
  

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

  const handlePatientData = (data) => {
    setFormData(prevState => ({
      ...prevState,
      patientData: data,
    }));
  };

  const handleAddressData = (data) => {
    setFormData(prevState => ({
      ...prevState,
      addressData: data,
    }));
  };

  const handleGuarantorData = (data) => {
    setFormData(prevState => ({
      ...prevState,
      guarantorData: data,
    }));
  };

  const handleInsuranceData = (data) => {
    setFormData(prevState => ({
      ...prevState,
      insuranceData: data,
    }));
  };

  const handleEmergencyContactData = (data) => {
    setFormData(prevState => ({
      ...prevState,
      emergencyContactData: data,
    }));
  };

  // useEffect(()=>{
  //   if(patientIds!=null){
  //     fetchPatientdata()
  //   }
  // },[])

  // const fetchPatientdata = () => {
  //   fetch(`http://192.168.1.40:1415/api/patients/${patientIds}`)
  //     .then(response => response.json())
  //     .then(res => {
  //       // Assuming `res` is the patient data object
  //       setFormData({
  //         patientData: {
  //           address: res.address || '',
  //           age: res.age || '',
  //           bloodGroup: res.bloodGroup || '',
  //           country: res.country || '',
  //           dateOfBirth: res.dateOfBirth || '',
  //           dialysisPatient: res.dialysisPatient || false,
  //           email: res.email || '',
  //           emergencyContactDTO: res.emergencyContactDTO || {},
  //           employerInfo: res.employerInfo || '',
  //           firstName: res.firstName || '',
  //           gender: res.gender || '',
  //           guarantorDTO: res.guarantorDTO || {},
  //           hospitalNo: res.hospitalNo || '',
  //           insuranceDTO: res.insuranceDTO || {},
  //           ipd: res.ipd || false,
  //           landlineNumber: res.landlineNumber || '',
  //           lastName: res.lastName || '',
  //           maritalStatus: res.maritalStatus || '',
  //           middleName: res.middleName || '',
  //           notifications: res.notifications || false,
  //           occupation: res.occupation || '',
  //           passportNumber: res.passportNumber || '',
  //           phoneNumber: res.phoneNumber || '',
  //           pinCode: res.pinCode || '',
  //           previousLastName: res.previousLastName || '',
  //           race: res.race || '',
  //           religion: res.religion || '',
  //           salutation: res.salutation || '',
  //           state: res.state || '',
  //         },
  //         addressData: res.addressDTO || {},
  //         guarantorData: res.guarantorDTO || {},
  //         insuranceData: res.insuranceDTO || {},
  //         emergencyContactData: res.emergencyContactDTO || {},
  //       });
  //       console.log(res);
        
  //     })
  //     .catch(error => {
  //       console.error('Error fetching patient data:', error);
  //     });
  // };
  

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
      addressDTO: addressData,
      guarantorDTO: guarantorData,
      insuranceDTO: insuranceData,
      emergencyContactDTO: emergencyContactData,
      isIPD:true
    };

    try {
      const url = isEditMode 
        ? `http://localhost:1415/api/patients/${patientData.id}` // Adjust the endpoint for update
        : 'http://localhost:1415/api/patients/add-in-Patient'; // Endpoint for adding new patient

      const response = await fetch(url, {
        method: isEditMode ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      alert(isEditMode ? 'Patient data updated successfully' : 'Patient registered successfully');
      console.log('Operation successful:', result);

      // Optionally reset form data or redirect the user
      setFormData({
        patientData: {},
        addressData: {},
        guarantorData: {},
        insuranceData: {},
        emergencyContactData: {}
      });
      setActiveTab('basic-info'); // Optionally reset active tab to default
      navigate('/'); // Redirect to the home page or wherever appropriate

    } catch (error) {
      console.error('Error handling patient data:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-patient">
      <div className="menu">
      <a 
    href={patientIds ? `#basic-info/${patientIds}` : '#basic-info'} 
    className={`menu-item ${activeTab === 'basic-info' ? 'active' : ''}`} 
    onClick={() => setActiveTab('basic-info')}
  >
    Basic Information
  </a>
  <a 
    href={patientIds ? `#address/${patientIds}` : '#address'} 
    className={`menu-item ${activeTab === 'address' ? 'active' : ''}`} 
    onClick={() => setActiveTab('address')}
  >
    Address
  </a>
  <a 
    href={patientIds ? `#guarantor/${patientIds}` : '#guarantor'} 
    className={`menu-item ${activeTab === 'guarantor' ? 'active' : ''}`} 
    onClick={() => setActiveTab('guarantor')}
  >
    Guarantor
  </a>
  <a 
    href={patientIds ? `#insurance/${patientIds}` : '#insurance'} 
    className={`menu-item ${activeTab === 'insurance' ? 'active' : ''}`} 
    onClick={() => setActiveTab('insurance')}
  >
    Insurance
  </a>
  <a 
    href={patientIds ? `#emergency-contact/${patientIds}` : '#emergency-contact'} 
    className={`menu-item ${activeTab === 'emergency-contact' ? 'active' : ''}`} 
    onClick={() => setActiveTab('emergency-contact')}
  >
    Kin/Emergency Contact
  </a>
        <a href="#" className="register-button" onClick={handleRegisterPatient}>
          {isEditMode ? 'Update Patient' : 'Register Patient'}
        </a>
      </div>

      <div className="register-patient-content">
        {activeTab === 'basic-info' && <PatientRegistration sendpatientdata={handlePatientData}  patientData={formData.patientData} />}
        {activeTab === 'address' && <AddressPage sendaddressdata={handleAddressData} addressData={formData.addressData} />}
        {activeTab === 'guarantor' && <GuarantorPage sendguarantordata={handleGuarantorData} guarantorData={formData.guarantorData} />}
        {activeTab === 'insurance' && <InsurancePage sendinsurancedata={handleInsuranceData} insuranceData={formData.insuranceData} />}
        {activeTab === 'emergency-contact' && <EmergencyContactPage sendemergencycontactdata={handleEmergencyContactData} emergencyData={formData.emergencyContactData} />}

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
