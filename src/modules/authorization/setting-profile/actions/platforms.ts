import { SET_PLATFORMS } from '@/store/setting-profile/types';

export const setPlatformsAction = (
  platforms: string[]
): { type: string; payload: string[] } => {
  return {
    type: SET_PLATFORMS,
    payload: platforms,
  };
};
