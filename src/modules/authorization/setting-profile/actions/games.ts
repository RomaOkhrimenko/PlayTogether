import { SET_GAMES } from '@/store/setting-profile/types';
import { IGameType } from '@/modules/authorization/setting-profile/types/types';

export const setGamesAction = (
  games: IGameType[]
): { type: string; payload: IGameType[] } => {
  return {
    type: SET_GAMES,
    payload: games,
  };
};
