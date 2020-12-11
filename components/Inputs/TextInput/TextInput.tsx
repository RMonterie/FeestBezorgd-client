import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  position: string;
  value: string;
  onChangeHandler: (event) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  position,
  value,
  onChangeHandler,
}) => {
  return (
    <div className={`${position}-input`}>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} onChange={onChangeHandler} value={value} />
    </div>
  );
};

export default TextInput;
