'use client';
import SettingProfileHeader from '../components/Header';
import HeaderImage from '@/assets/images/png/authorization/three-hand-with-pencil.png';
import Platforms from '@/modules/authorization/setting-profile/FirstStep/Platforms';
import StepButton from '../components/StepButton';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setPlatformsAction } from '@/modules/authorization/setting-profile/actions/platforms';
import {
  ButtonContainer,
  PlatformsContainer,
  Step,
} from '@/modules/authorization/setting-profile/FirstStep/StyledComponents';

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
    <Step
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
    >
      <SettingProfileHeader
        image={HeaderImage}
        title={'Оберіть улюблену платформу'}
      />

      <PlatformsContainer>
        <Platforms
          setPlatforms={setSelectedPlatforms}
          savedPlatforms={platforms}
        />
      </PlatformsContainer>

      <ButtonContainer>
        <StepButton
          onClick={onSubmit}
          name={'Далі'}
          accent
          disable={!selectedPlatforms.length}
        />
      </ButtonContainer>
    </Step>
  );
};

export default FirstStep;
