import React, { useState } from 'react';

const TextInput = ({ inputName, inputLabel, isRequired, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    const isTextWithSpacesAndHyphens = /^[A-Za-z][A-Za-z\s-]*$/.test(newValue);
    const isValid = isTextWithSpacesAndHyphens || (!isRequired && newValue.trim() === '');

    setIsValid(isValid);

    onChange(isValid ? newValue.trim() : null);
  };

  return (
    <div>
      <label htmlFor={inputName} className="form-label">
        {inputLabel} {isRequired && <span className="text-danger">*</span>}
      </label>
      <input
        type="text"
        name={inputName}
        value={inputValue}
        onChange={handleInputChange}
        className={`form-control ${(isRequired && !isValid) || (!isRequired && inputValue.trim() !== '' && !isValid) ? 'is-invalid' : ''}`}
        id={inputName}
      />
      {!isValid && inputValue.trim() === '' && isRequired && (
        <div className="invalid-feedback">
          {`${inputLabel} is required.`}
        </div>
      )}
      {!isValid && inputValue.trim() !== '' && (
        <div className="invalid-feedback">
          {'Invalid input, please input only letters'}
        </div>
      )}
    </div>
  );
};

export default TextInput;

