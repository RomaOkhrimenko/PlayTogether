import React, { useEffect, useState } from 'react';
import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import {
  StyledTextField,
} from '@/modules/authorization/setting-profile/FourthStep/components/TextField/StyledComponents';
import SettingProfileElementLayout
  from '@/modules/authorization/setting-profile/FourthStep/layout/SettingProfileElementLayout';
import { FieldNumberState } from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber/types';

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
  onValidateField?: () => FieldNumberState;
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
  const [fieldState, setFieldState] = useState<FieldNumberState>('text');

  useEffect(() => {
    if (onValidateField) {
      setFieldState(onValidateField());
    }
  }, [value]);

  return (
    <SettingProfileElementLayout fieldNumber={number} fieldState={fieldState}>
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
    </SettingProfileElementLayout>

  );
};
``;

export default TextField;
