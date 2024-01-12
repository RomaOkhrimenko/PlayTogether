import React from 'react';

type Props = {
  onChange: (arg0: string) => void;
  value: string;
  placeholder: string;
};

const Input = ({ onChange, value, placeholder }: Props) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
