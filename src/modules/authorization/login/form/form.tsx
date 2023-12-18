'use client';

import styles from './form.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import { useForm } from 'react-hook-form';
import AnimationWall from '@/components/animations/transitions/AnimationWall';
import {
 emailReactHookFormField,
 passwordReactHookFormField,
} from '@/modules/authorization/login/constants';

const LoginForm = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const [success, setSuccess] = useState(false);
 const onSubmit = async () => {
  setSuccess(true);
 };

 const emailRegistrationField = {
  ...register(emailReactHookFormField.inputType, {
   required: emailReactHookFormField.requiredText,
   pattern: emailReactHookFormField.emailPattern,
  }),
 };

 const passwordRegistrationField = {
  ...register(passwordReactHookFormField.inputType, {
   required: passwordReactHookFormField.requiredText,
  }),
 };

 return (
  <div className={styles.form}>
   <h1>Вхід</h1>
   <form onSubmit={handleSubmit(onSubmit)} name={'Login Form'} noValidate>
    <div className={styles.form_section}>
     <InputText
      register={emailRegistrationField}
      label={'Електронна адреса'}
      type="email"
      error={errors?.email?.message}
     />
    </div>

    <div className={styles.form_section}>
     <InputText
      register={passwordRegistrationField}
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
     <button type="submit">Увійти</button>
    </div>
   </form>

   {success && <AnimationWall />}
  </div>
 );
};

export default LoginForm;
