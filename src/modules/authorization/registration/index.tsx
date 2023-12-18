'use client';
import styles from './registration.module.scss';
import RegistrationForm from '@/modules/authorization/registration/form/form';
import AuthorizationBackground from '@/assets/images/png/authorization/authorization-background.png';
import Image from 'next/image';

const Registration = () => {
 return (
  <div className={styles.wrapper}>
   <div className={styles.shadow} />
   <Image className={styles.background} src={AuthorizationBackground} alt="" />
   <div className={styles.form_container}>
    <RegistrationForm />
   </div>
  </div>
 );
};

export default Registration;
