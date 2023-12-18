'use client';
import styles from './index.module.scss';
import SettingProfileHeader from '../components/Header';
import HeaderImage from '@/assets/images/png/authorization/three-hand-with-pencil.png';
import Genres from '@/modules/authorization/setting-profile/SecondStep/Genres';
import StepButton from '../components/StepButton';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setGenresAction } from '@/modules/authorization/setting-profile/actions/genres';

type Props = {
 nextStep: () => void;
 backStep: () => void;
};

const StepOne = ({ nextStep, backStep }: Props) => {
 const { genres } = useAppSelector((state) => state.settingProfile);
 const [selectedGenres, setSelectedGenres] = useState<string[]>(genres);
 const dispatch = useAppDispatch();

 const onSave = () => {
  dispatch(setGenresAction(selectedGenres));
  nextStep();
 };
 return (
  <motion.div
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: 20 }}
   transition={{ duration: 1 }}
   className={styles.second_step}
  >
   <SettingProfileHeader image={HeaderImage} title={'Оберіть улюблений жанр'} />

   <div className={styles.second_step__platforms}>
    <Genres setGenres={setSelectedGenres} savedGenres={genres} />
   </div>

   <div className={styles.second_step__buttons}>
    <StepButton onClick={backStep} name={'Назад'} />
    <StepButton
     onClick={onSave}
     name={'Далі'}
     accent
     disable={!selectedGenres.length}
    />
   </div>
  </motion.div>
 );
};

export default StepOne;
