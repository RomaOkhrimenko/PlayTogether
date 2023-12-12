'use client';
import styles from './index.module.scss';
import SettingProfileHeader from '../components/Header';
import HeaderImage from '@/assets/images/png/authorization/three-hand-with-pencil.png';
import { useState } from 'react';

const StepThree = () => {
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  return (
    <div className={styles.step_one}>
      <SettingProfileHeader image={HeaderImage} title={'Оберіть ігри в які граєте'} />
    </div>
  );
};

export default StepThree;