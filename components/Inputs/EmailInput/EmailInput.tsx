import React from "react";

interface EmailInputProps {
  label;
  name;
  position;
}

const EmailInput: React.FC<EmailInputProps> = ({ label, name, position }) => {
  return (
    <div className={`${position}-input`}>
      <label htmlFor={name}>{label}</label>
      <input type="email" name={name} />
    </div>
  );
};

export default EmailInput;
