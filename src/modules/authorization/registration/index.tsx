'use client'
import styles from './login.module.scss'
import LoginForm from "@/modules/authorization/login/form/form";
import AuthorizationMan from '@/assets/images/png/authorization/authorization-man.png'
import AuthorizationWoman from '@/assets/images/png/authorization/authorization-woman.png'
import Image from "next/image";
const Login = () => {
    return (
        <div className={styles.wrapper}>

            <Image className={styles.man_image} src={AuthorizationMan} alt=""/>
            <Image className={styles.woman_image} src={AuthorizationWoman} alt=""/>
            <div className={styles.form_container}>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;