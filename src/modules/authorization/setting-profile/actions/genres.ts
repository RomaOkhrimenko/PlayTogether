import { SET_GENRES } from '@/store/setting-profile/types';

export const setGenresAction = (
 genres: string[],
): { type: string; payload: string[] } => {
 return {
  type: SET_GENRES,
  payload: genres,
 };
};
