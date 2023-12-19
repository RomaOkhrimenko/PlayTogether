'use client';

import React from 'react';
import styles from './index.module.scss';
import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import { SubmitHandler, useForm } from 'react-hook-form';
import { emailReactHookFormField } from '@/modules/authorization/forgot-password/constants';
import { Button } from '@/components/ui';

const ForgotPassword = () => {
 const {
  register, handleSubmit,
  formState: { errors }
 } = useForm();

 const emailRegisterField = {
  ...register(emailReactHookFormField.inputType, {
   required: emailReactHookFormField.requiredText,
   pattern: emailReactHookFormField.emailPattern
  })
 };

 const onSubmit = (data: SubmitHandler<{ email: string }>) => {
  console.log(data);
 };
 return (
  <div className={styles.wrapper}>
   <div className={styles.container}>
    <h1>
     Forgot Password?
    </h1>
    <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
    <p>For security reasons, we do NOT store your password. So rest assured that we will never send your password via
     email.</p>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
     <InputText type={'email'} label={'Email Address'} register={emailRegisterField}
                error={errors[emailReactHookFormField.inputType]?.message} />

     <div className={styles.form_button__container}>
      <Button type={'submit'} onClick={() => {
      }} text={'Відправити'} />
     </div>
    </form>
   </div>
  </div>
 );
};

export default ForgotPassword;
