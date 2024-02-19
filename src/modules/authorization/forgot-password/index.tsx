'use client';

import React from 'react';
import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import { SubmitHandler, useForm } from 'react-hook-form';
import { emailReactHookFormField } from '@/modules/authorization/forgot-password/constants';
import { Button } from '@/components/ui';
import {
  ButtonContainer,
  Container,
  Form,
  Wrapper,
} from '@/modules/authorization/forgot-password/StyledComponents';
import DesktopBackground from '../../../assets/images/png/authorization/authorization-background.png';
import MobileBackground from '../../../assets/images/png/authorization/authorization-mobile-background.png';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailRegisterField = {
    ...register(emailReactHookFormField.inputType, {
      required: emailReactHookFormField.requiredText,
      pattern: emailReactHookFormField.emailPattern,
    }),
  };

  const onSubmit = (data: SubmitHandler<{ email: string }>) => {
    console.log(data);
  };
  return (
    <Wrapper
      desktopBackground={DesktopBackground}
      mobileBackground={MobileBackground}
    >
      <Container>
        <h1>Forgot Password?</h1>
        <p>
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </p>
        <p>
          For security reasons, we do NOT store your password. So rest assured
          that we will never send your password via email.
        </p>
        {/*@ts-ignore*/}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            type={'email'}
            label={'Email Address'}
            register={emailRegisterField}
            error={errors[emailReactHookFormField.inputType]?.message}
          />

          <ButtonContainer>
            <Button type={'submit'} onClick={() => {}} label={'Відправити'} />
          </ButtonContainer>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;
