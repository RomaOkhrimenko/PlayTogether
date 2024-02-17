import React from 'react';

type Props = {
  onClick: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ onClick, text, type = 'button' }: Props) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
