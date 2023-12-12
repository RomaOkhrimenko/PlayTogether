import React from 'react';

type Props = {
  onChange: (string) => void
  value: string
  placeholder: string
}

const Input = ({ onChange, value, placeholder }: Props) => {
  return (
    <input type='text' onChange={onChange} value={value} placeholder={placeholder} />
  );
};

export default Input;