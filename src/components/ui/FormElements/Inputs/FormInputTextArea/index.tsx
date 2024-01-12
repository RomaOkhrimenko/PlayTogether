'use client';

import { InputStarSvg } from '@/assets/images/svg';
import {
  InputTextAreaContainer,
  InputTextAreaError,
  InputTextAreaTitle,
  InputTextAreaWrapper,
} from '@/components/ui/FormElements/Inputs/FormInputTextArea/StyledComponents';

type Props = {
  label?: string;
  isSecure?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  register: any;
  error: string | null | undefined;
};

const InputTextArea = ({
  label,
  isRequired,
  error,
  register,
  placeholder,
}: Props) => {
  return (
    <InputTextAreaWrapper>
      {label && (
        <InputTextAreaTitle>
          {isRequired && <InputStarSvg />}
          <label>{label}</label>
        </InputTextAreaTitle>
      )}

      <InputTextAreaContainer error={error}>
        <textarea {...register} placeholder={placeholder}></textarea>
      </InputTextAreaContainer>

      {error && <InputTextAreaError>{error}</InputTextAreaError>}
    </InputTextAreaWrapper>
  );
};

export default InputTextArea;
