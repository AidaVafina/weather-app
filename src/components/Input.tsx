import React, { ChangeEvent } from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  onSubmit,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    onSubmit(); // Call onSubmit whenever the input changes
  };

  return (
    <form>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Input;
