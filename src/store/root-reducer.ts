import settingProfileReducer from './setting-profile/slice';
import { SettingProfileStateType } from '@/store/setting-profile/types';

export type StateType = {
  settingProfile: SettingProfileStateType;
};
export const rootReducers = {
  settingProfile: settingProfileReducer,
};
