import { emailRegExp } from '@/utils/regexps';

export const emailReactHookFormField = {
 emailPattern: {
  value: emailRegExp,
  message: 'Будь ласка, введіть дійсну електронну адресу'
 },
 inputType: 'email',
 requiredText: 'Необхідно вести електорну адресу'
};