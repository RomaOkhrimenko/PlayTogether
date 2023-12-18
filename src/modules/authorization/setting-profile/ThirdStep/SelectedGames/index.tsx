import styles from './index.module.scss';
import { IGameType } from '@/modules/authorization/setting-profile/types/types';
import GameBLock from '@/modules/authorization/setting-profile/ThirdStep/SelectedGames/GameBlock';

type Props = {
 savedGames: IGameType[];
 onRemoveSavedGame: (arg1: string) => void;
};
const SelectedGames = ({ savedGames, onRemoveSavedGame }: Props) => {
 if (!savedGames) {
  return <div></div>;
 }

 if (!savedGames.length) {
  return (
   <div className={styles.selectedGames_empty}>
    <div className={styles.selectedGames_warningContainer}>
     <span className={styles.selectedGames_warningText}>
      Ви не вибрали жодоної гри
     </span>
    </div>
   </div>
  );
 }

 return (
  <div className={styles.selectedGames}>
   {savedGames?.map((game) => (
    <GameBLock
     key={game.id}
     image={game.image}
     onRemoveSavedGame={onRemoveSavedGame}
     id={game.id}
    />
   ))}
  </div>
 );
};

export default SelectedGames;
