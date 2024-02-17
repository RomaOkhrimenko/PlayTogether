import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingProfileStateType } from '@/store/setting-profile/types';
import { IGameType } from '@/modules/authorization/setting-profile/types/types';

const initialState: SettingProfileStateType = {
  platforms: [],
  genres: [],
  games: [],
  userInfo: {
    bio: '',
    gender: 0,
    name: '',
    nickname: '',
    profilePicture: null,
  },
};

const settingProfileSlice = createSlice({
  name: 'setting-profile',
  initialState,
  reducers: {
    setPlatforms: (
      state: SettingProfileStateType,
      { payload: platforms }: PayloadAction<string[]>
    ) => {
      state.platforms = platforms;
    },
    setGenres: (
      state: SettingProfileStateType,
      { payload: genres }: PayloadAction<string[]>
    ) => {
      state.genres = genres;
    },
    setGames: (
      state: SettingProfileStateType,
      { payload: games }: PayloadAction<IGameType[]>
    ) => {
      state.games = games;
    },
  },
});

export const { setPlatforms, setGenres, setGames } =
  settingProfileSlice.actions;
export default settingProfileSlice.reducer;
