import React from 'react';
import { Metadata } from 'next';
import Login from '@/modules/authorization/login';
import AnimationWall from '@/components/animations/transitions/AnimationWall';

export const metadata: Metadata = {
  title: 'Login | Play Together',
};
const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
