import React, { useState } from 'react';

const DateInput = ({ inputName, inputLabel, isRequired, value, onChange, maxDate }) => {
  const [inputValue, setInputValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const dateValue = event.target.value;
    setInputValue(dateValue);
    const date = new Date(dateValue);

    setIsValid(!isNaN(date.getTime()) && dateValue === date.toISOString().split('T')[0]);

    onChange(dateValue);
  };

  return (
    <div>
      <label htmlFor={inputName} className="form-label">
        {inputLabel} {isRequired && <span className="text-danger">*</span>}
      </label>
      <input
        type="date"
        name={inputName}
        value={inputValue}
        onChange={handleInputChange}
        max={maxDate}
        className={`form-control ${isValid ? '' : 'is-invalid'}`}
        id={inputName}
      />
      {!isValid && (
        <div className="invalid-feedback">
          {isRequired && !inputValue === '' ? `${inputLabel} is required.` : 'Please input a valid date.'}
        </div>
      )}
    </div>
  );
};

export default DateInput;
