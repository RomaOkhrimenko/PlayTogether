'use client';

import styles from './form.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import { FieldValues, useForm } from 'react-hook-form';
import { emailRegExp } from '@/utils/regexps';
import AnimationWall from '@/components/animations/transitions/AnimationWall';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues
  } = useForm();

  const [success, setSuccess] = useState(false);
  const onSubmit = async (data: FieldValues) => {
    console.log('onSubmit', data);
    setSuccess(true);
  };

  return (
    <div className={styles.form}>
      <h1>Вхід</h1>
      <form onSubmit={handleSubmit(onSubmit)} name={'Login Form'} noValidate>
        <div className={styles.form_section}>
          <InputText
            register={...register('email', {
              required: 'Необхідно вести електорну адресу',
              pattern: {
                value: emailRegExp,
                message: 'Будь ласка, введіть дійсну електронну адресу'
              }
            })}
            label={'Електронна адреса'}
            type='email'
            error={errors?.email?.message}
          />
        </div>

        <div className={styles.form_section}>
          <InputText
            register={...register('password', {
              required: 'Необхідно вести пароль'
            })}
            label={'Пароль'}
            isSecure
            type={'password'}
            error={errors?.password?.message}
          />
        </div>

        <div className={styles.form_support}>
          <Link href={'/authorization/forgot-password'}>Забули пароль?</Link>

          <div>
            <span>Немає облікового запису?</span>
            <br />
            <Link href={'/authorization/registration'}>Зареєструватись</Link>
          </div>
        </div>

        <div className={styles.form_button__container}>
          <button type='submit'>Увійти</button>
        </div>
      </form>

      {success && <AnimationWall />}
    </div>
  );
};

export default LoginForm;
