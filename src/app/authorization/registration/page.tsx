import React from 'react';
import { Metadata } from 'next';
import RegistrationForm from '@/modules/authorization/registration/';

export const metadata: Metadata = {
  title: 'Registration | PlayTogether UA'
};

const Registration = () => {
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
