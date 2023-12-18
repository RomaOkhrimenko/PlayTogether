'use client';
import styles from './index.module.scss';
import SettingProfileHeader from '../components/Header';
import HeaderImage from '@/assets/images/png/authorization/three-hand-with-pencil.png';
import { useState } from 'react';
import SelectedGames from '@/modules/authorization/setting-profile/ThirdStep/SelectedGames';
import AddGamesButton from '@/components/ui/AddGamesButton';
import StepButton from '../components/StepButton';
import { motion } from 'framer-motion';
import ModalContainer from '@/components/ui/Modals/ModalWrapper';
import { SelectGameModal } from '@/components/ui';
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
  <motion.div
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: 20 }}
   transition={{ duration: 1 }}
   className={styles.step_three}
  >
   <SettingProfileHeader
    image={HeaderImage}
    title={'Оберіть ігри в які граєте'}
   />

   <div className={styles.gamesContainer}>
    <SelectedGames savedGames={games} onRemoveSavedGame={onRemoveSavedGame} />
   </div>

   <div className={styles.buttons}>
    <AddGamesButton onClick={onOpenSelectGameModal} />

    <div className={styles.buttons_navigation}>
     <StepButton onClick={backStep} name={'Назад'} />
     <StepButton
      onClick={nextStep}
      name={'Далі'}
      accent
      disable={!selectedGames.length}
     />
    </div>
   </div>

   <ModalContainer open={isOpenModal}>
    <SelectGameModal
     selectedGames={selectedGames}
     onSaveGames={onSaveGames}
     games={gamesData}
     onCloseModal={onCloseModal}
    />
   </ModalContainer>
  </motion.div>
 );
};

export default StepThree;
