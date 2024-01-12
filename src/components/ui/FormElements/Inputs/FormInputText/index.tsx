'use client';

import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { InputStarSvg } from '@/assets/images/svg';
import {
  InputTextContainer,
  InputTextError,
  InputTextTitle,
  InputTextWrapper,
} from '@/components/ui/FormElements/Inputs/FormInputText/StyledComponents';

type Props = {
  label?: string;
  type: InputTypeProps;
  isSecure?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  register: any;
  error: string | null | undefined | any;
};

type InputTypeProps = 'password' | 'text' | 'email';

const InputText = ({
  label,
  type = 'text',
  isSecure,
  isRequired,
  error,
  register,
  placeholder,
}: Props) => {
  const [inputType, setInputType] = useState<InputTypeProps>(type);

  const errorStyle = {
    border: '1px solid red',
  };

  const handleInputType = (type: 'password' | 'text'): void => {
    setInputType(type);
  };
  return (
    <InputTextWrapper>
      {label && (
        <InputTextTitle>
          {isRequired && <InputStarSvg />}
          <label>{label}</label>
        </InputTextTitle>
      )}

      <InputTextContainer style={error ? errorStyle : {}}>
        <input type={inputType} {...register} placeholder={placeholder} />

        {isSecure && inputType === 'password' && (
          <FiEyeOff size={20} onClick={() => handleInputType('text')} />
        )}
        {isSecure && inputType === 'text' && (
          <FiEye size={20} onClick={() => handleInputType('password')} />
        )}
      </InputTextContainer>

      {error && <InputTextError>{error}</InputTextError>}
    </InputTextWrapper>
  );
};

export default InputText;
