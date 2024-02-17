import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import {
  setGames,
  setGenres,
  setPlatforms,
} from '@/store/setting-profile/slice';
import {
  SET_GAMES,
  SET_GENRES,
  SET_PLATFORMS,
  UserInfo,
} from '@/store/setting-profile/types';
import { IGameType } from '@/modules/authorization/setting-profile/types/types';

function* setPlatformsSaga({ payload: platforms }: PayloadAction<string[]>) {
  yield put(setPlatforms(platforms));
}

function* setGenresSaga({ payload: genres }: PayloadAction<string[]>) {
  yield put(setGenres(genres));
}

function* setGamesSaga({ payload: games }: PayloadAction<IGameType[]>) {
  yield put(setGames(games));
}

function* onSubmitSettingProfile({
  payload: userSetting,
}: PayloadAction<UserInfo>) {}

// Generator function
export function* watchSettingsProfileSaga() {
  yield takeLatest(SET_PLATFORMS, setPlatformsSaga);
  yield takeLatest(SET_GENRES, setGenresSaga);
  yield takeLatest(SET_GAMES, setGamesSaga);
}
