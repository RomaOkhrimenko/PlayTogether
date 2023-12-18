import { IGameType } from '@/modules/authorization/setting-profile/types/types';

export type UserInfo = {
 name: string;
 nickname: string;
 profilePicture: FileList | null;
 gender: number;
 bio: string;
};

export type SettingProfileStateType = {
 platforms: string[];
 genres: string[];
 games: IGameType[];
 userInfo: UserInfo;
};

export const SET_PLATFORMS = 'settingProfile/setPlatforms';
export const SET_GENRES = 'settingProfile/setGenres';
export const SET_GAMES = 'settingProfile/setGames';

export type SET_PLATFORMS = typeof SET_PLATFORMS;
export type SET_GENRES = typeof SET_GENRES;
export type SET_GAMES = typeof SET_GAMES;
