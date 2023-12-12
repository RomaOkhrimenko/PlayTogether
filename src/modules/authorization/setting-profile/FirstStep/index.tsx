'use client';
import styles from './index.module.scss';
import SettingProfileHeader from '../components/Header';
import HeaderImage from '@/assets/images/png/authorization/three-hand-with-pencil.png';
import Platforms from '@/modules/authorization/setting-profile/StepOne/Platforms';
import StepButton from '@/modules/authorization/setting-profile/components/Button';
import { useState } from 'react';

const StepOne = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  return (
    <div className={styles.step_one}>
      <SettingProfileHeader image={HeaderImage} title={'Оберіть улюблену платформу'} />

      <div className={styles.step_one__platforms}>
        <Platforms setPlatforms={setSelectedPlatforms} />
      </div>

      <div className={styles.step_one__button}>
        <StepButton name={'Далі'} disable={!selectedPlatforms.length} />
      </div>
    </div>
  );
};

export default StepOne;