'use client';

import styles from './index.module.scss';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { InputStarSvg } from '@/assets/images/svg';

type Props = {
  label?: string;
  type: InputTypeProps;
  isSecure?: boolean;
  isRequired?: boolean;
  register: any;
  error: string | null | undefined;
};

type InputTypeProps = 'password' | 'text' | 'email';

const InputText = ({
                     value,
                     onChange,
                     label,
                     type = 'text',
                     isSecure,
                     isRequired,
                     error,
                     register
                   }: Props) => {
  const [inputType, setInputType] = useState<InputTypeProps>(type);

  const errorStyle = {
    border: '1px solid red'
  };

  const handleInputType = (type: 'password' | 'text'): void => {
    setInputType(type);
  };
  return (
    <div className={styles.input_text}>
      {label && (
        <div className={styles.input_text__title}>
          {isRequired && <InputStarSvg />}
          <label>{label}</label>
        </div>
      )}

      <div
        className={styles.input_text__container}
        style={error ? errorStyle : {}}
      >
        <input type={inputType} {...register} />

        {isSecure && inputType === 'password' && (
          <FiEyeOff size={20} onClick={() => handleInputType('text')} />
        )}
        {isSecure && inputType === 'text' && (
          <FiEye size={20} onClick={() => handleInputType('password')} />
        )}
      </div>

      {error && <span className={styles.input_text__error}>{error}</span>}
    </div>
  );
};

export default InputText;
