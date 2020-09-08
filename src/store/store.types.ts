import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ProfileAction } from './profile/profile.types';
import { OfferedService, Notification } from '../types/globalTypes';
import { NotificationAction } from './notification/notification.types';
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

export interface NotificationState {
  notifications: Notification[];
  nextPage: number;
  fetching: boolean;
  error?: string;
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
  notification: NotificationState;
  offeredServices: OfferedServicesState;
}

export type StoreState = State;

export type TAction = ProfileAction | NotificationAction;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
