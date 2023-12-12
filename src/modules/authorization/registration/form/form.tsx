'use client'

import styles from './form.module.scss'
import {ChangeEvent, useState} from "react";
import Link from "next/link";
import InputText from "../../../../components/FormElements/Inputs/InputText";
import {FieldValues, useForm} from "react-hook-form";
import {emailRegExp} from "@/utils/regexps";

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset, getValues} = useForm()

    const onSubmit = async (data: FieldValues) => {
        console.log('onSubmit', data)
    }



    return (
        <div className={styles.form}>
            <h1>Вхід</h1>
        <form onSubmit={handleSubmit(onSubmit)} name={'Login Form'} noValidate>
            <div className={styles.form_section}>
                <InputText register={...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: emailRegExp,
                        message: 'Please enter a valid email',
                    },
                })} label={'Email'} type="email" error={errors?.email?.message}/>
            </div>

            <div className={styles.form_section}>
                <InputText register={...register('password', {
                    required: 'Password is required',
                })} label={'Password'} isSecure type={'password'} error={errors?.password?.message} />
            </div>

            <div className={styles.form_support}>
                <Link href={'/authorization/forgot-password'}>Забули пароль?</Link>

                <div>
                    <span>Немає облікового запису?</span>
                    <br/>
                    <Link href={'/authorization/registration'}>Зареєструватись</Link>
                </div>
            </div>

            <div className={styles.form_button__container}>
                <button type='submit'>Увійти</button>
            </div>
        </form>
        </div>

    );
};

export default LoginForm;