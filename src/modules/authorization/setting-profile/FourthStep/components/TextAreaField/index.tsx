import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';
import InputTextArea from '@/components/ui/FormElements/Inputs/FormInputTextArea';

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
  <div className={styles.textAreaField_container}>
   <div className={styles.textAreaField_number}>
    <FieldNumber state={fieldState} text={number} />
   </div>
   <div className={styles.textAreaField}>
    <h4>{fieldName}</h4>
    <InputTextArea
     type={'text'}
     register={...register(inputType, {
      required: requiredText,
      pattern: pattern,
     })}
     error={error}
     placeholder={placeholder}
    />
   </div>
  </div>
 );
};
``;

export default TextAreaField;
