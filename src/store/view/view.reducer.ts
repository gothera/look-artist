// import * as viewConstants from './view.constants';
import {
  INVALIDATE_STORE,
  UPDATE_DEFAULT_PROGRAM_REQUEST,
  UPDATE_DEFAULT_PROGRAM_SUCCESS,
  UPDATE_DEFAULT_PROGRAM_FAILURE,
  UPDATE_SPECIFIC_PROGRAM_REQUEST,
  UPDATE_SPECIFIC_PROGRAM_SUCCESS,
  UPDATE_SPECIFIC_PROGRAM_FAILURE,
  POST_LOGOUT,
} from '../profile/profile.constants';
import initialState from '../initialState';
import { ViewState, TAction } from '../store.types';

function getInitialState(): ViewState {
  return Object.assign({}, initialState.view);
}

function viewReducer(state = getInitialState(), action: TAction): ViewState {
  switch (action.type) {
    case POST_LOGOUT: {
      return getInitialState();
    }

    case UPDATE_DEFAULT_PROGRAM_REQUEST: {
      return {
        ...state,
        updateDefaultProgramRequestStatus: 'loading',
      };
    }
    case UPDATE_DEFAULT_PROGRAM_SUCCESS: {
      return {
        ...state,
        updateDefaultProgramRequestStatus: 'success',
      };
    }
    case UPDATE_DEFAULT_PROGRAM_FAILURE: {
      return {
        ...state,
        updateDefaultProgramRequestStatus: 'failure',
      };
    }

    case UPDATE_SPECIFIC_PROGRAM_REQUEST: {
      return {
        ...state,
        updateSpecificProgramRequestStatus: 'loading',
      };
    }
    case UPDATE_SPECIFIC_PROGRAM_SUCCESS: {
      return {
        ...state,
        updateSpecificProgramRequestStatus: 'success',
      };
    }
    case UPDATE_SPECIFIC_PROGRAM_FAILURE: {
      return {
        ...state,
        updateSpecificProgramRequestStatus: 'failure',
      };
    }

    case INVALIDATE_STORE: {
      return getInitialState();
    }

    default:
      return state;
  }
}

export default viewReducer;
