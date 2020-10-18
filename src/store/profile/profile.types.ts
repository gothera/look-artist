import { ArtistProgramEntry, ArtistResponseApi } from '../../types/globalTypes';
import * as profileConstants from './profile.constants';
import {
  ProgramSpecificElement,
  UpdateArtistApi,
} from '../../services/api/api.types';

export interface InvalidateStoreAction {
  type: typeof profileConstants.INVALIDATE_STORE;
}

export interface LoginSuccess {
  type: typeof profileConstants.LOGIN_SUCCESS;
  payload: { token: string };
}

export interface LoginRequest {
  type: typeof profileConstants.LOGIN_REQUEST;
}

export interface LoginFailure {
  type: typeof profileConstants.LOGIN_FAILURE;
}

export interface SignUpRequest {
  type: typeof profileConstants.SIGNUP_REQUEST;
}

export interface SignUpSuccess {
  type: typeof profileConstants.SIGNUP_SUCCESS;
  payload: { userId: number; artistId: number; email: string };
}

export interface SignUpFailure {
  type: typeof profileConstants.SIGNUP_FAILURE;
}

export interface SetName {
  type: typeof profileConstants.SET_NAME;
  payload: { firstName: string; lastName: string };
}

export interface SetPhoneNumber {
  type: typeof profileConstants.SET_PHONE_NUMBER;
  payload: { phoneNumber: string };
}

export interface SetCategory {
  type: typeof profileConstants.SET_CATEGORY;
  payload: { category: string };
}

// TODO COMPLETE PAYLOAD

export interface SetupRequest {
  type: typeof profileConstants.SETUP_REQUEST;
}

export interface SetupSuccess {
  type: typeof profileConstants.SETUP_SUCCESS;
  payload: ArtistResponseApi;
}

export interface SetupFailure {
  type: typeof profileConstants.SETUP_FAILURE;
}

export interface ChangeProfilePictureRequest {
  type: typeof profileConstants.CHANGE_PROFILE_PICTURE_REQUEST;
}

export interface ChangeProfilePictureSuccess {
  type: typeof profileConstants.CHANGE_PROFILE_PICTURE_SUCCESS;
  payload: { imageUrl: string };
}

export interface ChangeProfilePictureFailure {
  type: typeof profileConstants.CHANGE_PROFILE_PICTURE_FAILURE;
}

export interface fetchProfileRequest {
  type: typeof profileConstants.FETCH_PROFILE_REQUEST;
}

export interface fetchProfileSuccess {
  type: typeof profileConstants.FETCH_PROFILE_SUCCESS;
  payload: { profile: ArtistResponseApi };
}

export interface fetchProfileFailure {
  type: typeof profileConstants.FETCH_PROFILE_FAILURE;
}

export interface updateSpecificProgramRequest {
  type: typeof profileConstants.UPDATE_SPECIFIC_PROGRAM_REQUEST;
}

export interface updateSpecificProgramSuccess {
  type: typeof profileConstants.UPDATE_SPECIFIC_PROGRAM_SUCCESS;
  payload: { programEntries: ProgramSpecificElement[] };
}

export interface updateSpecificProgramFailure {
  type: typeof profileConstants.UPDATE_SPECIFIC_PROGRAM_FAILURE;
  payload: { error: string };
}

export interface updateDefaultProgramRequest {
  type: typeof profileConstants.UPDATE_DEFAULT_PROGRAM_REQUEST;
}

export interface updateDefaultProgramSuccess {
  type: typeof profileConstants.UPDATE_DEFAULT_PROGRAM_SUCCESS;
}

export interface updateDefaultProgramFailure {
  type: typeof profileConstants.UPDATE_DEFAULT_PROGRAM_FAILURE;
}

export interface updateArtistProfileRequest {
  type: typeof profileConstants.UPDATE_ARTIST_PROFILE_REQUEST;
}

export interface updateArtistProfileSuccess {
  type: typeof profileConstants.UPDATE_ARTIST_PROFILE_SUCCESS;
  payload: { profile: UpdateArtistApi };
}

export interface updateArtistProfileFailure {
  type: typeof profileConstants.UPDATE_ARTIST_PROFILE_FAILURE;
}

export interface postLogout {
  type: typeof profileConstants.POST_LOGOUT;
}

export type ProfileAction =
  | InvalidateStoreAction
  | LoginSuccess
  | LoginRequest
  | LoginFailure
  | SignUpRequest
  | SignUpSuccess
  | SignUpFailure
  | SetName
  | SetPhoneNumber
  | SetCategory
  | SetupRequest
  | SetupFailure
  | SetupSuccess
  | ChangeProfilePictureRequest
  | ChangeProfilePictureSuccess
  | ChangeProfilePictureFailure
  | fetchProfileRequest
  | fetchProfileSuccess
  | fetchProfileFailure
  | updateSpecificProgramSuccess
  | updateSpecificProgramRequest
  | updateSpecificProgramFailure
  | updateDefaultProgramRequest
  | updateDefaultProgramSuccess
  | updateDefaultProgramFailure
  | updateArtistProfileRequest
  | updateArtistProfileSuccess
  | updateArtistProfileFailure
  | postLogout;
