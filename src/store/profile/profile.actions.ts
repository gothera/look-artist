import { setGenericPassword } from 'react-native-keychain';
import { pushSetupScreen, setLoggedInRoot } from '../../navigation';
import { pushHomeScreen } from '../../navigation/Navigation';
import {
  LoginResponse,
  SetupBody,
  SignupResponse,
} from '../../services/api/api.types';
import * as AuthService from '../../services/api/AuthService';
import * as ProfileService from '../../services/api/ProfileService';
import { ArtistResponseApi } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';
import * as profileConstants from './profile.constants';
import * as profileTypes from './profile.types';

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

/**
 * Used after login request and on init navigation
 * Set login in keychain
 */
export const loginKeychain = (token: string): ThunkResult<void> => {
  return async function (dispatch) {
    setGenericPassword('token', token).then(async () => {
      dispatch(loginSuccess(token));
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
// TODO
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
  serviceName: string,
  serviceDescription: string,
  servicePrice: string,
  serviceDuration: string,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(setupRequest);

    const { profile } = getState();

    const setupBody: SetupBody = {
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      category: profile.category || '',
      phone: profile.phoneNumber || '',
      name: serviceName,
      description: serviceDescription,
      price: parseInt(servicePrice, 10),
      duration: parseInt(serviceDuration, 10),
    };

    console.log('== setup body ==', setupBody);

    return ProfileService.setup(setupBody)
      .then((response: ArtistResponseApi) => {
        setupSuccess(response);
        pushHomeScreen();
        setLoggedInRoot();
      })
      .catch((error) => {
        dispatch(setupFailure);
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

export const changeProfilePicture = (formData: FormData): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(changeProfilePictureRequest());

    const { artistId } = getState().profile;
    if (!artistId) {
      return Promise.resolve();
    }

    return ProfileService.changeProfilePicture(formData)
      .then((response: string) => {
        changeProfilePictureSuccess(response);
      })
      .catch((error) => {
        dispatch(setupFailure);
        console.log('Setup Failure', error);
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

export const fetchProfile = (): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(fetchProfileRequest());

    // const token = getState().token;
    // if (!token) {
    //   return Promise.resolve();
    // }

    return ProfileService.fetchProfile()
      .then((response: ArtistResponseApi) => {
        dispatch(fetchProfileSuccess(response));
      })
      .catch((error) => {
        dispatch(setupFailure());
        console.log('Setup Failure', error);
      });
  };
};
