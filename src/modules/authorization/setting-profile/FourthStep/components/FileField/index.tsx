import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';

import { FaTrash } from 'react-icons/fa';

type Props = {
 register: any;
 fieldName: string;
 error: any;
 inputType: string;
 number: string;
 value: FileList;
 setValue: (arg1: string, arg2: any) => any;
 onValidateField: (arg1: FileList | null) => string;
};

const FileField = ({
 register,
 fieldName,
 error,
 number,
 inputType,
 value,
 onValidateField,
 setValue,
}: Props) => {
 const [state, setState] = useState('text');
 const [imagePreview, setImagePreview] = useState<string | null>('');

 useEffect(() => {
  setState(onValidateField(value));

  if (value && value.length) {
   convertToBase64(value);
  }
 }, [value]);

 const convertToBase64 = (file: FileList) => {
  console.log('convertToBase64', file[0]);

  const reader = new FileReader();

  reader.onloadend = () => {
   console.log(reader);
   setImagePreview(reader.result!.toString());
  };

  reader.readAsDataURL(file[0]);
 };

 const onDeleteImage = () => {
  setValue(inputType, null);
  setImagePreview(null);
 };

 console.log('FILE', value);
 return (
  <div className={styles.fileField_container}>
   <div className={styles.fileField_number}>
    <FieldNumber state={state} text={number} />
   </div>

   <div className={styles.fileField}>
    <h4>{fieldName}</h4>
    <input
     type="file"
     id={'fileForSettingAccount'}
     style={{ display: 'none' }}
     {...register(inputType, {
      required: false,
     })}
    />

    {!imagePreview && (
     <label
      htmlFor={'fileForSettingAccount'}
      className={styles.fileField_addButton}
     >
      <svg
       width="28"
       height="27"
       viewBox="0 0 28 27"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path d="M14.2876 0V27" stroke="#00F580" strokeWidth="2" />
       <path d="M0.287598 13.5L27.2876 13.5" stroke="#00F580" strokeWidth="2" />
      </svg>
     </label>
    )}

    {imagePreview && (
     <div className={styles.fileField_preview}>
      <div
       className={styles.fileField_preview__closeBtn}
       onClick={onDeleteImage}
      >
       <FaTrash size={24} color={'#fff'} />
      </div>

      <img src={imagePreview} alt="Profile picture preview" />
     </div>
    )}
   </div>
  </div>
 );
};

export default FileField;
