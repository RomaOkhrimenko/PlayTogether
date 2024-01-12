import React, { useEffect, useState } from 'react';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';
import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import {
  Container,
  StyledTextField,
} from '@/modules/authorization/setting-profile/FourthStep/components/TextField/StyledComponents';

type Props = {
  register: any;
  requiredText: string;
  inputType: string;
  pattern?: { value: string; message: string };
  error?: string | undefined | any;
  fieldName: string;
  placeholder: string;
  number: string;
  value: string;
  onValidateField?: () => string;
};
const TextField = ({
  fieldName,
  register,
  inputType,
  requiredText,
  pattern,
  error,
  placeholder,
  number,
  value,
  onValidateField,
}: Props) => {
  const [fieldState, setFieldState] = useState('text');

  useEffect(() => {
    if (onValidateField) {
      setFieldState(onValidateField());
    }
  }, [value]);

  return (
    <Container>
      <div>
        <FieldNumber state={fieldState} text={number} />
      </div>
      <StyledTextField>
        <h4>{fieldName}</h4>
        <InputText
          type={'text'}
          register={...register(inputType, {
            required: requiredText,
            pattern: pattern,
          })}
          error={error}
          placeholder={placeholder}
        />
      </StyledTextField>
    </Container>
  );
};
``;

export default TextField;
