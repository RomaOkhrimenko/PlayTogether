'use client';
import styles from './login.module.scss';
import LoginForm from '@/modules/authorization/login/form/form';

const Login = () => {
 return (
  <div className={styles.wrapper}>
   <div className={styles.form_container}>
    <LoginForm />
   </div>
  </div>
 );
};

export default Login;
