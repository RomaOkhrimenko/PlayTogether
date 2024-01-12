import React, { useEffect, useState } from 'react';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';
import InputTextArea from '@/components/ui/FormElements/Inputs/FormInputTextArea';
import {
  Container,
  TextArea,
} from '@/modules/authorization/setting-profile/FourthStep/components/TextAreaField/StyledComponents';

type Props = {
  register: any;
  requiredText?: string;
  inputType: string;
  pattern?: { value: string; message: string };
  error?: string | undefined | any;
  fieldName: string;
  placeholder: string;
  number: string;
  value: string;
  onValidateField?: () => string;
};
const TextAreaField = ({
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
      <TextArea>
        <h4>{fieldName}</h4>
        <InputTextArea
          register={...register(inputType, {
            required: requiredText,
            pattern: pattern,
          })}
          error={error}
          placeholder={placeholder}
        />
      </TextArea>
    </Container>
  );
};
``;

export default TextAreaField;
