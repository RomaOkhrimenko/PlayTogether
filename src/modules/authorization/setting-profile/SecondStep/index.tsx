'use client';
import SettingProfileHeader from '../components/Header';
import HeaderImage from '@/assets/images/png/authorization/three-hand-with-pencil.png';
import Genres from '@/modules/authorization/setting-profile/SecondStep/Genres';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setGenresAction } from '@/modules/authorization/setting-profile/actions/genres';
import {
  ButtonContainer,
  GenresWrapper,
  Step,
} from '@/modules/authorization/setting-profile/SecondStep/StyledComponents';
import { Button } from '@/components/ui';

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
    <Step
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
    >
      <SettingProfileHeader
        image={HeaderImage}
        title={'Оберіть улюблений жанр'}
      />

      <GenresWrapper>
        <Genres setGenres={setSelectedGenres} savedGenres={genres} />
      </GenresWrapper>

      <ButtonContainer>
        <Button onClick={backStep} label={'Назад'} theme={'outline'} />
        <Button
          onClick={onSave}
          label={'Далі'}
          isDisabled={!selectedGenres.length}
        />
      </ButtonContainer>
    </Step>
  );
};

export default StepOne;
