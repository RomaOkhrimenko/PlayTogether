'use client';
import styles from './login.module.scss';
import LoginForm from '@/modules/authorization/login/form/form';
import Image from 'next/image';
import AuthorizationBackground from '@/assets/images/png/authorization/authorization-background.png';

const Login = () => {
 return (
  <div className={styles.wrapper}>
   <Image className={styles.background} src={AuthorizationBackground} alt="" />
   <div className={styles.form_container}>
    <LoginForm />
   </div>
  </div>
 );
};

export default Login;
