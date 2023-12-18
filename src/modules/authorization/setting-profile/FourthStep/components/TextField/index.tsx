import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';
import InputText from '@/components/ui/FormElements/Inputs/FormInputText';

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
  <div className={styles.textField_container}>
   <div className={styles.textField_number}>
    <FieldNumber state={fieldState} text={number} />
   </div>
   <div className={styles.textField}>
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
   </div>
  </div>
 );
};
``;

export default TextField;
