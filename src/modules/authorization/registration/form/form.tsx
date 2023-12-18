import styles from './form.module.scss';
import Link from 'next/link';

import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import { FieldValues, useForm } from 'react-hook-form';
import { emailRegExp } from '@/utils/regexps';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimationWall from '@/components/animations/transitions/AnimationWall';

const RegistrationForm = () => {
 const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
  getValues,
 } = useForm();
 const router = useRouter();
 const [success, setSuccess] = useState(false);
 const onSubmit = async (data: FieldValues) => {
  setSuccess(true);

  setTimeout(() => {
   router.replace(`/setting-profile`);
  }, 1400);
 };

 // @ts-ignore
 return (
  <div className={styles.form}>
   <h1>Вхід</h1>
   <form onSubmit={handleSubmit(onSubmit)} name={'Login Form'} noValidate>
    <div className={styles.form_section}>
     <InputText
      isRequired
      register={...register('email', {
       required: 'Необхідно вести електорну адресу',
       pattern: {
        value: emailRegExp,
        message: 'Будь ласка, введіть дійсну електронну адресу',
       },
      })}
      label={'Електронна адреса'}
      type="email"
      error={errors?.email?.message}
     />
    </div>

    <div className={styles.form_section}>
     <InputText
      isRequired
      register={...register('password', {
       required: 'Необхідно вести пароль',
      })}
      label={'Пароль'}
      isSecure
      type={'password'}
      error={errors?.password?.message}
     />
    </div>

    <div className={styles.form_section}>
     <InputText
      isRequired
      register={...register('confirmPassword', {
       required: 'Необіхдно підтвердити пароль',
       validate: (value) =>
        value === getValues('password') || 'Пароль не співпадає',
      })}
      label={'Повторіть пароль'}
      isSecure
      type={'password'}
      error={errors?.confirmPassword?.message}
     />
    </div>

    <div className={styles.form_support}>
     <div>
      <span>У вас вже є обліковий запис?</span>
      <br />
      <Link href={'/authorization/login'}>Увійти</Link>
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

export default RegistrationForm;
