import {
  setGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';
import {
  pushSetupScreen,
  setLoggedInRoot,
  pushAuthScreen,
} from '../../navigation';
import {
  LoginResponse,
  SetupBody,
  SignupResponse,
  ProgramSpecificElement,
  UpdateArtistApi,
} from '../../services/api/api.types';
import * as AuthService from '../../services/api/AuthService';
import * as ProfileService from '../../services/api/ProfileService';
import { ArtistProgramEntry, ArtistResponseApi } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';
import * as profileConstants from './profile.constants';
import * as profileTypes from './profile.types';
import { DaysAbbreviation } from '../../types/enums';

/**
 * LOGIN
 */
const loginRequest = (): profileTypes.LoginRequest => {
  return {
    type: profileConstants.LOGIN_REQUEST,
  };
};

const loginSuccess = (token: string): profileTypes.LoginSuccess => {
  return {
    type: profileConstants.LOGIN_SUCCESS,
    payload: { token },
  };
};

const loginFailure = (): profileTypes.LoginFailure => {
  return {
    type: profileConstants.LOGIN_FAILURE,
  };
};

/**
 * Used when pressing Login
 * API Call for login
 */
export const login = (
  email: string,
  password: string,
  isRegister?: boolean,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    // if (getState().profile.isLogging) {
    //   return Promise.resolve();
    // }

    dispatch(loginRequest());

    return AuthService.login(email, password)
      .then((response: LoginResponse) => {
        dispatch(loginKeychain(response.accessToken));
      })
      .then(() => {
        if (!isRegister) {
          // pushHomeScreen();
          setLoggedInRoot();
        }
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log('Login error', error);
      });
  };
};

/** LOGOUT */

export const postLogout = (): profileTypes.postLogout => {
  return {
    type: profileConstants.POST_LOGOUT,
  };
};

export const logout = (): ThunkResult<void> => {
  return function (dispatch) {
    resetGenericPassword().then(async () => {
      dispatch(postLogout());
      pushAuthScreen();
    });
  };
};

/**
 * Used after login request and on init navigation
 * Set login in keychain
 */
export const loginKeychain = (token: string): ThunkResult<void> => {
  return async function (dispatch) {
    setGenericPassword('token', token).then(async () => {
      dispatch(loginSuccess(token));
      dispatch(fetchProfile(token));
    });
  };
};

export const signUpRequest = (): profileTypes.SignUpRequest => {
  return {
    type: profileConstants.SIGNUP_REQUEST,
  };
};

export const signUpFailure = (): profileTypes.SignUpFailure => {
  return {
    type: profileConstants.SIGNUP_FAILURE,
  };
};

export const signUpSuccess = (
  userId: number,
  artistId: number,
  email: string,
): profileTypes.SignUpSuccess => {
  return {
    type: profileConstants.SIGNUP_SUCCESS,
    payload: { email: email, artistId: artistId, userId: userId },
  };
};

export const signUp = (email: string, password: string): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(signUpRequest);

    return AuthService.signUp(email, password)
      .then((response: SignupResponse) => {
        const userId = response.user.id;
        const artistId = response.id;

        dispatch(signUpSuccess(userId, artistId, email));
      })
      .then(() => {
        dispatch(login(email, password, true));
      })
      .then(() => {
        pushSetupScreen();
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log('Login error', error);
      });
  };
};

export const setName = (
  firstName: string,
  lastName: string,
): profileTypes.SetName => {
  return {
    type: profileConstants.SET_NAME,
    payload: { firstName: firstName, lastName: lastName },
  };
};

export const setPhoneNumber = (
  phoneNumber: string,
): profileTypes.SetPhoneNumber => {
  return {
    type: profileConstants.SET_PHONE_NUMBER,
    payload: { phoneNumber: phoneNumber },
  };
};

export const setCategory = (category: string): profileTypes.SetCategory => {
  return {
    type: profileConstants.SET_CATEGORY,
    payload: { category: category },
  };
};

/**
 * SETUP
 */

export const setupRequest = (): profileTypes.SetupRequest => {
  return {
    type: profileConstants.SETUP_REQUEST,
  };
};

export const setupSuccess = (
  artist: ArtistResponseApi,
): profileTypes.SetupSuccess => {
  return {
    type: profileConstants.SETUP_SUCCESS,
    payload: artist,
  };
};

export const setupFailure = (): profileTypes.SetupFailure => {
  return {
    type: profileConstants.SETUP_FAILURE,
  };
};

export const setup = (
  firstName: string,
  lastName: string,
  category: string,
  birthDateISO: string,
  serviceName: string,
  serviceDescription: string,
  servicePrice: string,
  serviceDuration: string,
): ThunkResult<void> => {
  return async function (dispatch, _) {
    dispatch(setupRequest());

    const setupBody: SetupBody = {
      firstName: firstName,
      lastName: lastName,
      category: category,
      name: serviceName,
      description: serviceDescription,
      price: parseInt(servicePrice, 10),
      duration: parseInt(serviceDuration, 10),
      birthDate: birthDateISO,
    };

    return ProfileService.setup(setupBody)
      .then((response: ArtistResponseApi) => {
        dispatch(setupSuccess(response));
        setLoggedInRoot();
      })
      .catch((error) => {
        dispatch(setupFailure());
        console.log('Setup Failure', error);
      });
  };
};

/**
 * CHANGE PROFILE PICTURE
 */

export const changeProfilePictureRequest = (): profileTypes.ChangeProfilePictureRequest => {
  return {
    type: profileConstants.CHANGE_PROFILE_PICTURE_REQUEST,
  };
};

export const changeProfilePictureSuccess = (
  imageUrl: string,
): profileTypes.ChangeProfilePictureSuccess => {
  return {
    type: profileConstants.CHANGE_PROFILE_PICTURE_SUCCESS,
    payload: { imageUrl: imageUrl },
  };
};

export const changeProfilePictureFailure = (): profileTypes.ChangeProfilePictureFailure => {
  return {
    type: profileConstants.CHANGE_PROFILE_PICTURE_FAILURE,
  };
};

export const changeProfilePicture = (
  formData: FormData,
  onSuccess?: () => void,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(changeProfilePictureRequest());

    const { artistId } = getState().profile;
    if (!artistId) {
      return Promise.resolve();
    }

    return ProfileService.changeProfilePicture(formData)
      .then((response: string) => {
        dispatch(changeProfilePictureSuccess(response));
        /**
         * Callback onSuccess
         */
        onSuccess && onSuccess();
      })
      .catch((e) => {
        console.log('change picture failed', e);
        dispatch(changeProfilePictureFailure());
      });
  };
};

export const fetchProfileRequest = (): profileTypes.fetchProfileRequest => {
  return {
    type: profileConstants.FETCH_PROFILE_REQUEST,
  };
};

export const fetchProfileSuccess = (
  profile: ArtistResponseApi,
): profileTypes.fetchProfileSuccess => {
  return {
    type: profileConstants.FETCH_PROFILE_SUCCESS,
    payload: { profile: profile },
  };
};

export const fetchProfileFailure = (): profileTypes.fetchProfileFailure => {
  return {
    type: profileConstants.FETCH_PROFILE_FAILURE,
  };
};

export const fetchProfile = (token?: string): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(fetchProfileRequest());

    // const token = getState().token;
    // if (!token) {
    //   return Promise.resolve();
    // }

    return ProfileService.fetchProfile(token)
      .then((response: ArtistResponseApi) => {
        dispatch(fetchProfileSuccess(response));
      })
      .catch((error) => {
        dispatch(setupFailure());
        console.log('Setup Failure', error);
      });
  };
};

/**
 * Update Specific Program
 * ==========================
 */

export const updateSpecificProgramRequest = (): profileTypes.updateSpecificProgramRequest => {
  return {
    type: profileConstants.UPDATE_SPECIFIC_PROGRAM_REQUEST,
  };
};

export const updateSpecificProgramSuccess = (
  programEntries: ProgramSpecificElement[],
): profileTypes.updateSpecificProgramSuccess => {
  return {
    type: profileConstants.UPDATE_SPECIFIC_PROGRAM_SUCCESS,
    payload: { programEntries: programEntries },
  };
};

export const updateSpecificProgramFailure = (
  error: string,
): profileTypes.updateSpecificProgramFailure => {
  return {
    type: profileConstants.UPDATE_SPECIFIC_PROGRAM_FAILURE,
    payload: { error },
  };
};

export const updateSpecificProgram = (
  dates: string[],
  startTime: string,
  endTime: string,
  onSuccess?: () => void,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(updateSpecificProgramRequest());

    const token = getState().profile.token;
    if (!token) {
      return Promise.resolve();
    }

    return ProfileService.updateSpecificProgram(dates, startTime, endTime)
      .then((response: ProgramSpecificElement[]) => {
        dispatch(updateSpecificProgramSuccess(response));
        onSuccess && onSuccess();
      })
      .catch((error) => {
        dispatch(updateSpecificProgramFailure(error));
      });
  };
};

/**
 * Update Default Program
 * ==========================
 */

export const updateDefaultProgramRequest = (): profileTypes.updateDefaultProgramRequest => {
  return {
    type: profileConstants.UPDATE_DEFAULT_PROGRAM_REQUEST,
  };
};

export const updateDefaultProgramSuccess = (): profileTypes.updateDefaultProgramSuccess => {
  return {
    type: profileConstants.UPDATE_DEFAULT_PROGRAM_SUCCESS,
  };
};

export const updateDefaultProgramFailure = (): profileTypes.updateDefaultProgramFailure => {
  return {
    type: profileConstants.UPDATE_DEFAULT_PROGRAM_FAILURE,
  };
};

export const updateDefaultProgram = (
  days: DaysAbbreviation[],
  startTime: string,
  endTime: string,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    const artistId = getState().profile.artistId;
    if (
      getState().view.updateDefaultProgramRequestStatus === 'loading' ||
      !artistId
    ) {
      return Promise.resolve();
    }

    dispatch(updateDefaultProgramRequest());

    return ProfileService.updateDefaultProgram(
      days,
      startTime,
      endTime,
      artistId,
    )
      .then((_) => {
        dispatch(updateDefaultProgramSuccess());
      })
      .catch((_) => {
        dispatch(updateDefaultProgramFailure());
      });
  };
};

export const updateArtistProfileRequest = (): profileTypes.updateArtistProfileRequest => {
  return {
    type: profileConstants.UPDATE_ARTIST_PROFILE_REQUEST,
  };
};

export const updateArtistProfileSuccess = (
  profile: UpdateArtistApi,
): profileTypes.updateArtistProfileSuccess => {
  return {
    type: profileConstants.UPDATE_ARTIST_PROFILE_SUCCESS,
    payload: { profile: profile },
  };
};

export const updateArtistProfileFailure = (): profileTypes.updateArtistProfileFailure => {
  return {
    type: profileConstants.UPDATE_ARTIST_PROFILE_FAILURE,
  };
};

export const updateArtistProfile = (
  profile: UpdateArtistApi,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    const token = getState().profile.token;
    const isFetching = getState().profile.isFetching;
    if (!token || isFetching) {
      return Promise.resolve();
    }
    dispatch(updateArtistProfileRequest());

    return ProfileService.updateProfile(profile)
      .then((response: UpdateArtistApi) => {
        dispatch(updateArtistProfileSuccess(response));
      })
      .catch((e) => {
        console.log(e);
        dispatch(updateArtistProfileFailure());
      });
  };
};
