import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  Appointment,
  ArtistProgramEntry,
  Notification,
  OfferedService,
  Post,
  RequestStatus,
  Review,
} from '../types/globalTypes';
import { AppointmentAction } from './appointment/appointment.types';
import { NotificationAction } from './notification/notification.types';
import { PostAction } from './post/post.types';
import { ProfileAction } from './profile/profile.types';
import { ReviewAction } from './review/review.types';
import { OfferedServiceAction } from './offeredService/offeredService.types';

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
  scheduledDates: string[];
  bio?: string;
  likes: number;
  appointmentsCount: number;
  rating: number;
  isFetching: boolean;
  localProgramEntries: Record<string, ArtistProgramEntry>;
  programEntriesByDate: string[];
  birthDate?: string;
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

export interface PostState {
  nextPage: number;
  hasNext: boolean;
  isFetching: boolean;
  postsById: number[];
  local: Record<number, Post>;
}

export interface ReviewState {
  nextPage: number;
  hasNext: boolean;
  isFetching: boolean;
  reviewById: number[];
  local: Record<number, Review>;
}

export interface State {
  profile: ProfileState;
  view: ViewState;
  notification: NotificationState;
  offeredService: OfferedServicesState;
  appointment: AppointmentState;
  post: PostState;
  review: ReviewState;
}

export type StoreState = State;

export type TAction =
  | ProfileAction
  | NotificationAction
  | AppointmentAction
  | PostAction
  | ReviewAction
  | OfferedServiceAction;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
