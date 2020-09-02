import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ProfileAction } from './profile/profile.types';
import { OfferedService } from '../types/globalTypes';
export type Primitive = undefined | null | boolean | string | number | Function;

export interface ProfileState {
  firstName?: string;
  lastName?: string;
  token?: string;
  isLogging: boolean;
  userId?: number;
  artistId?: number;
  email?: string;
  category?: string;
  phoneNumber?: string;
  profilePicture?: string;
  bio?: string;
}

export interface OfferedServicesState {
  local: Record<number, OfferedService>;
}

export interface ViewState {
  aux: string;
}
export interface State {
  profile: ProfileState;
  view: ViewState;
  offeredServices: OfferedServicesState;
}

export type StoreState = State;

export type TAction = ProfileAction;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
