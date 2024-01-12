import { IGameType } from '@/modules/authorization/setting-profile/types/types';
import GameBLock from '@/modules/authorization/setting-profile/ThirdStep/SelectedGames/GameBlock';
import {
  SelectedGamesContainer,
  SelectedGamesEmpty,
  WarningText,
  WarningTextContainer,
} from '@/modules/authorization/setting-profile/ThirdStep/StyledComponents';

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
      <SelectedGamesEmpty>
        <WarningTextContainer>
          <WarningText>Ви не вибрали жодоної гри</WarningText>
        </WarningTextContainer>
      </SelectedGamesEmpty>
    );
  }

  return (
    <SelectedGamesContainer>
      {savedGames?.map((game) => (
        <GameBLock
          key={game.id}
          image={game.image}
          onRemoveSavedGame={onRemoveSavedGame}
          id={game.id}
        />
      ))}
    </SelectedGamesContainer>
  );
};

export default SelectedGames;
