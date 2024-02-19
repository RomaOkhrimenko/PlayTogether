'use client';

import { useState } from 'react';
import Link from 'next/link';
import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import { useForm } from 'react-hook-form';
import AnimationWall from '@/components/animations/transitions/AnimationWall';
import {
  emailReactHookFormField,
  passwordReactHookFormField,
} from '@/modules/authorization/login/constants';
import {
  ButtonContainer,
  Form,
  FormSection,
  FormSupport,
} from '@/modules/authorization/login/StyledComponents';
import { Button } from '@/components/ui';

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
    <Form>
      <h1>Вхід</h1>
      <form onSubmit={handleSubmit(onSubmit)} name={'Login Form'} noValidate>
        <FormSection>
          <InputText
            register={emailRegistrationField}
            label={'Електронна адреса'}
            type="email"
            error={errors?.email?.message}
          />
        </FormSection>

        <FormSection>
          <InputText
            register={passwordRegistrationField}
            label={'Пароль'}
            isSecure
            type={'password'}
            error={errors?.password?.message}
          />
        </FormSection>

        <FormSupport>
          <Link href={'/authorization/forgot-password'}>Забули пароль?</Link>

          <div>
            <span>Немає облікового запису?</span>
            <br />
            <Link href={'/authorization/registration'}>Зареєструватись</Link>
          </div>
        </FormSupport>

        <ButtonContainer>
          <Button type="submit" label={'Увійти'} />
        </ButtonContainer>
      </form>

      {success && <AnimationWall />}
    </Form>
  );
};

export default LoginForm;
