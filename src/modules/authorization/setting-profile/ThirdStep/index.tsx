'use client';
import SettingProfileHeader from '../components/Header';
import HeaderImage from '@/assets/images/png/authorization/three-hand-with-pencil.png';
import { useState } from 'react';
import SelectedGames from '@/modules/authorization/setting-profile/ThirdStep/SelectedGames';
import AddGamesButton from '@/components/ui/AddGamesButton';
import ModalContainer from '@/components/ui/Modals/ModalWrapper';
import { Button, SelectGameModal } from '@/components/ui';
import {
  ApexLegends,
  Cs2Image,
  Dota2Image,
  FortnitePc,
  HeartStone,
  LeagueOfLegends,
  MinecraftPc,
  Overwatch,
  PubgPc,
  RocketLeague,
  WorldOfWarcraft,
} from '@/assets/images/jpg';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setGamesAction } from '@/modules/authorization/setting-profile/actions/games';
import { IGameType } from '@/modules/authorization/setting-profile/types/types';
import {
  ButtonsContainer,
  ButtonsNavigation,
  GamesWrapper,
  Step,
} from '@/modules/authorization/setting-profile/ThirdStep/StyledComponents';

type Props = {
  nextStep: () => void;
  backStep: () => void;
};

const gamesData = [
  { id: 'cs2', image: Cs2Image },
  { id: 'dota2', image: Dota2Image },
  { id: 'rocket-league', image: RocketLeague },
  { id: 'overwatch', image: Overwatch },
  { id: 'pubg-pc', image: PubgPc },
  { id: 'fortnite-pc', image: FortnitePc },
  { id: 'apex-legends', image: ApexLegends },
  { id: 'league-of-legends', image: LeagueOfLegends },
  { id: 'minecraft', image: MinecraftPc },
  { id: 'heart-stone', image: HeartStone },
  { id: 'world-of-warcraft', image: WorldOfWarcraft },
];

const StepThree = ({ nextStep, backStep }: Props) => {
  const { games } = useAppSelector((state) => state.settingProfile);
  const [selectedGames, setSelectedGames] = useState<IGameType[] | []>(games);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onSaveGames = (games: IGameType[]) => {
    setSelectedGames(games);
    dispatch(setGamesAction(games));
    onCloseModal();
  };

  const onRemoveSavedGame = (id: string) => {
    const filteredGames = selectedGames.filter((game) => game.id !== id);
    setSelectedGames(filteredGames);
    dispatch(setGamesAction(filteredGames));
  };

  const onOpenSelectGameModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => setIsOpenModal(false);

  return (
    <Step
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
    >
      <SettingProfileHeader
        image={HeaderImage}
        title={'Оберіть ігри в які граєте'}
      />

      <GamesWrapper>
        <SelectedGames
          savedGames={games}
          onRemoveSavedGame={onRemoveSavedGame}
        />
      </GamesWrapper>

      <ButtonsContainer>
        <AddGamesButton onClick={onOpenSelectGameModal} />

        <ButtonsNavigation>
          <Button onClick={backStep} label={'Назад'} theme={'outline'} />
          <Button
            onClick={nextStep}
            label={'Далі'}
            isDisabled={!selectedGames.length}
          />
        </ButtonsNavigation>
      </ButtonsContainer>

      <ModalContainer open={isOpenModal}>
        <SelectGameModal
          selectedGames={selectedGames}
          onSaveGames={onSaveGames}
          games={gamesData}
          onCloseModal={onCloseModal}
        />
      </ModalContainer>
    </Step>
  );
};

export default StepThree;
