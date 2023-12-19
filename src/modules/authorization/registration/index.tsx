'use client';
import styles from './registration.module.scss';
import RegistrationForm from '@/modules/authorization/registration/form/form';

const Registration = () => {
 return (
  <div className={styles.wrapper}>
   <div className={styles.form_container}>
    <RegistrationForm />
   </div>
  </div>
 );
};

export default Registration;
