import Link from 'next/link';

import InputText from '@/components/ui/FormElements/Inputs/FormInputText';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimationWall from '@/components/animations/transitions/AnimationWall';
import {
  confirmPasswordReactHookFormField,
  emailReactHookFormField,
  passwordReactHookFormField,
} from '@/modules/authorization/registration/constants';
import {
  ButtonContainer,
  Form,
  FormSection,
  FormSupport,
} from '@/modules/authorization/registration/StyledComponents';
import { Button } from '@/components/ui';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const onSubmit = async () => {
    setSuccess(true);

    setTimeout(() => {
      router.replace(`authorization/setting-profile`);
    }, 1400);
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

  const confirmPasswordRegistrationField = {
    ...register(confirmPasswordReactHookFormField.inputType, {
      required: confirmPasswordReactHookFormField.requiredText,
      validate: (value) =>
        value === getValues('password') || 'Пароль не співпадає',
    }),
  };

  // @ts-ignore
  return (
    <Form>
      <h1>Регистрація</h1>
      <form onSubmit={handleSubmit(onSubmit)} name={'Login Form'} noValidate>
        <FormSection>
          <InputText
            isRequired
            register={emailRegistrationField}
            label={'Електронна адреса'}
            type="email"
            error={errors?.email?.message}
          />
        </FormSection>

        <FormSection>
          <InputText
            isRequired
            register={passwordRegistrationField}
            label={'Пароль'}
            isSecure
            type={'password'}
            error={errors?.password?.message}
          />
        </FormSection>

        <FormSection>
          <InputText
            isRequired
            register={confirmPasswordRegistrationField}
            label={'Повторіть пароль'}
            isSecure
            type={'password'}
            error={errors?.confirmPassword?.message}
          />
        </FormSection>

        <FormSupport>
          <div>
            <span>У вас вже є обліковий запис?</span>
            <br />
            <Link href={'/authorization/login'}>Увійти</Link>
          </div>
        </FormSupport>

        <ButtonContainer>
          <Button type={'submit'} label={'Зарегеструватися'} />
        </ButtonContainer>
      </form>

      {success && <AnimationWall />}
    </Form>
  );
};

export default RegistrationForm;
