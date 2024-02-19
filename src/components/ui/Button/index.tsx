import React from 'react';
import { StyledButton } from '@/components/ui/Button/StyledComponent';

type Props = {
  onClick?: () => void;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'outline';
  isDisabled?: boolean;
};

const Button = ({
  onClick,
  label,
  type = 'button',
  theme = 'primary',
  isDisabled = false,
}: Props) => {
  return (
    <StyledButton
      theme={theme}
      type={type}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
