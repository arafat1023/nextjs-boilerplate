import React from 'react';

interface InputProps {
  type: 'text' | 'number' | 'password' | 'email';
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  minLength,
  maxLength,
}) => {
  let errorMessage = null;

  if (type === 'password' && minLength && value.length < minLength) {
    errorMessage = `Password must be at least ${minLength} characters`;
  }

  if (type === 'password' && maxLength && value.length > maxLength) {
    errorMessage = `Password must be no more than ${maxLength} characters`;
  }

  return (
    <div className="flex flex-col">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-200 p-2"
        minLength={minLength}
        maxLength={maxLength}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Input;
