import React from "react";

interface PasswordInputProps {
  label;
  name;
  position;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  position,
}) => {
  return (
    <div className={`${position}-input`}>
      <label htmlFor={name}>{label}</label>
      <input type="password" name={name} />
    </div>
  );
};

export default PasswordInput;
