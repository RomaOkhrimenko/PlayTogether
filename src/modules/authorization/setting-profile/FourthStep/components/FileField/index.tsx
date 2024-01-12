import React, { useEffect, useState } from 'react';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';

import { FaTrash } from 'react-icons/fa';
import {
  AddButton,
  Container,
  File,
  FilePreview,
} from '@/modules/authorization/setting-profile/FourthStep/components/FileField/StyledComponents';

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

  return (
    <Container>
      <div>
        <FieldNumber state={state} text={number} />
      </div>

      <File>
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
          <AddButton htmlFor={'fileForSettingAccount'}>
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.2876 0V27" stroke="#00F580" strokeWidth="2" />
              <path
                d="M0.287598 13.5L27.2876 13.5"
                stroke="#00F580"
                strokeWidth="2"
              />
            </svg>
          </AddButton>
        )}

        {imagePreview && (
          <FilePreview>
            <div
              className={'close-file-preview-button'}
              onClick={onDeleteImage}
            >
              <FaTrash size={24} color={'#fff'} />
            </div>

            <img src={imagePreview} alt="Profile picture preview" />
          </FilePreview>
        )}
      </File>
    </Container>
  );
};

export default FileField;
