import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  Appointment,
  ArtistProgramEntry,
  Notification,
  OfferedService,
  RequestStatus,
} from '../types/globalTypes';
import { AppointmentAction } from './appointment/appointment.types';
import { NotificationAction } from './notification/notification.types';
import { ProfileAction } from './profile/profile.types';

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
  isUploadingProfilePicture: boolean;
  bio?: string;
  isFetching: boolean;
  localProgramEntries: Record<string, ArtistProgramEntry>;
  programEntriesByDate: string[];
}

export interface NotificationState {
  local: Record<number, Notification>;
  notificationsById: number[];
  nextPage: number;
  fetching: boolean;
  error?: string;
}

export interface AppointmentState {
  appointmentIDs: Record<string, string[]>;
  local: Record<string, Appointment>;
  fetching: boolean;
  error?: string;
}

export interface OfferedServicesState {
  offeredServicesById: number[];
  local: Record<number, OfferedService>;
}

export interface ViewState {
  aux: string;
  updateDefaultProgramRequestStatus?: RequestStatus;
  updateSpecificProgramRequestStatus?: RequestStatus;
}

export interface State {
  profile: ProfileState;
  view: ViewState;
  notification: NotificationState;
  offeredService: OfferedServicesState;
  appointment: AppointmentState;
}

export type StoreState = State;

export type TAction = ProfileAction | NotificationAction | AppointmentAction;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
