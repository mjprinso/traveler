import React, { useState, useEffect } from 'react';
import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';

const PersonalInfoForm = ({ onPersonalInfoChange }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });

  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const { firstName, lastName, dateOfBirth, } = personalInfo;
    if (firstName && lastName && dateOfBirth) {
      onPersonalInfoChange(personalInfo);
    }
    else{
      onPersonalInfoChange(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalInfo]);

  const handleInputChange = (fieldName, value) => {
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  };

  return (
    <section>
      <h4>Personal Information</h4>
      <p className="font-monospace">
        <span className="text-danger">*</span> Indicates field is required
      </p>
      <div className="mb-3">
        <TextInput
          inputName="firstName"
          inputLabel="First Name"
          isRequired={true}
          value={personalInfo.firstName}
          onChange={(value) => handleInputChange('firstName', value)}
        />
      </div>

      <div className="mb-3">
        <TextInput
          inputName="lastName"
          inputLabel="Last Name"
          isRequired={true}
          value={personalInfo.lastName}
          onChange={(value) => handleInputChange('lastName', value)}
        />
      </div>

      <div className="mb-3">
        <DateInput
          inputName="dateOfBirth"
          inputLabel="Date of Birth"
          isRequired={true}
          value={personalInfo.dateOfBirth}
          maxDate={currentDate}
          onChange={(value) => handleInputChange('dateOfBirth', value)}
        />
      </div>
    </section>
  );
};

export default PersonalInfoForm;
