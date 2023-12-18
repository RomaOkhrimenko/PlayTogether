'use client';
import styles from './index.module.scss';
import SettingProfileHeader from '../components/Header';
import HeaderImage from '@/assets/images/png/authorization/three-hand-with-pencil.png';
import Platforms from '@/modules/authorization/setting-profile/FirstStep/Platforms';
import StepButton from '../components/StepButton';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setPlatformsAction } from '@/modules/authorization/setting-profile/actions/platforms';

type Props = {
 nextStep: () => void;
};

const FirstStep = ({ nextStep }: Props) => {
 const { platforms } = useAppSelector((state) => state.settingProfile);
 const [selectedPlatforms, setSelectedPlatforms] =
  useState<string[]>(platforms);
 const dispatch = useAppDispatch();
 const onSubmit = () => {
  dispatch(setPlatformsAction(selectedPlatforms));
  nextStep();
 };

 return (
  <motion.div
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: 20 }}
   transition={{ duration: 1 }}
   className={styles.step_one}
  >
   <SettingProfileHeader
    image={HeaderImage}
    title={'Оберіть улюблену платформу'}
   />

   <div className={styles.step_one__platforms}>
    <Platforms setPlatforms={setSelectedPlatforms} savedPlatforms={platforms} />
   </div>

   <div className={styles.step_one__button}>
    <StepButton
     onClick={onSubmit}
     name={'Далі'}
     accent
     disable={!selectedPlatforms.length}
    />
   </div>
  </motion.div>
 );
};

export default FirstStep;
