'use client';
import styles from './registration.module.scss';
import RegistrationForm from '@/modules/authorization/registration/form/form';
import AuthorizationMan from '@/assets/images/png/authorization/authorization-man.png';
import AuthorizationWoman from '@/assets/images/png/authorization/authorization-woman.png';
import Image from 'next/image';
const Registration = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shadow} />
      <Image className={styles.man_image} src={AuthorizationMan} alt="" />
      <Image className={styles.woman_image} src={AuthorizationWoman} alt="" />
      <div className={styles.form_container}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
