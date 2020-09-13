import initialState from '../initialState';
import { ProfileState, TAction } from '../store.types';
import * as profileConstants from './profile.constants';

function getInitialState() {
  return Object.assign({}, initialState.profile);
}

function profileReducer(
  state = getInitialState(),
  action: TAction,
): ProfileState {
  switch (action.type) {
    case profileConstants.INVALIDATE_STORE: {
      return getInitialState();
    }
    case profileConstants.LOGIN_REQUEST: {
      return {
        ...state,
        isLogging: true,
      };
    }
    case profileConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        isLogging: false,
      };
    }
    case profileConstants.LOGIN_FAILURE: {
      return {
        ...state,
        isLogging: false,
      };
    }
    case profileConstants.SIGNUP_REQUEST: {
      return {
        ...state,
        isLogging: true,
      };
    }
    case profileConstants.SIGNUP_SUCCESS: {
      return {
        ...state,
        isLogging: false,
        email: action.payload.email,
        userId: action.payload.userId,
        artistId: action.payload.artistId,
      };
    }
    case profileConstants.SIGNUP_FAILURE: {
      return {
        ...state,
        isLogging: false,
      };
    }
    case profileConstants.SET_NAME: {
      const { firstName, lastName } = action.payload;
      return {
        ...state,
        firstName: firstName,
        lastName: lastName,
      };
    }
    case profileConstants.SET_PHONE_NUMBER: {
      const { phoneNumber } = action.payload;

      return {
        ...state,
        phoneNumber: phoneNumber,
      };
    }
    case profileConstants.SET_CATEGORY: {
      const { category } = action.payload;
      return {
        ...state,
        category: category,
      };
    }
    case profileConstants.SETUP_SUCCESS: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        category: action.payload.category,
        phoneNumber: action.payload.phone,
        bio: action.payload.bio,
        artistId: action.payload.id,
      };
    }
    case profileConstants.CHANGE_PROFILE_PICTURE_SUCCESS: {
      return {
        ...state,
        profilePicture: action.payload.imageUrl,
      };
    }

    case profileConstants.FETCH_PROFILE_SUCCESS: {
      return {
        ...state,
        artistId: action.payload.profile.id,
        email: action.payload.profile.email,
        category: action.payload.profile.category,
        firstName: action.payload.profile.firstName,
        lastName: action.payload.profile.lastName,
        phoneNumber: action.payload.profile.phone,
        profilePicture: action.payload.profile.profilePicture,
        bio: action.payload.profile.bio,
      };
    }

    default:
      return state;
  }
}

export default profileReducer;
