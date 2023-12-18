'use client';
import { useState } from 'react';
import styles from './index.module.scss';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

import ProgressBar from './components/ProgressBar';
import { useAppDispatch } from '@/hooks/redux';
import FourthStep from '@/modules/authorization/setting-profile/FourthStep';
import FirstStep from '@/modules/authorization/setting-profile/FirstStep';
import { UserInfo } from '@/store/setting-profile/types';

const stepCounts = 5;

const SettingProfile = () => {
 const [step, setStep] = useState(1);
 const dispatch = useAppDispatch();

 const nextStep = () => {
  setStep((prev) => prev + 1);
 };

 const backStep = () => {
  setStep((prev) => prev - 1);
 };

 const onSubmitSettingProfile = (data: UserInfo) => {
  console.log('SUBMIT', data);
 };

 return (
  <div className={styles.setting_profile}>
   <ProgressBar step={step} stepCounts={stepCounts} />

   {step === 1 && <FirstStep nextStep={nextStep} />}
   {step === 2 && <SecondStep backStep={backStep} nextStep={nextStep} />}
   {step === 3 && <ThirdStep backStep={backStep} nextStep={nextStep} />}
   {step === 4 && (
    <FourthStep
     onSubmitSettingProfile={onSubmitSettingProfile}
     backStep={backStep}
    />
   )}
  </div>
 );
};

export default SettingProfile;
