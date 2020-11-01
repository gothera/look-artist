import { addArrayToDictByProp } from '../../utils/global';
import initialState from '../initialState';
import {
  FETCH_PROFILE_SUCCESS,
  POST_LOGOUT,
  SETUP_SUCCESS,
} from '../profile/profile.constants';
import { OfferedServicesState, TAction } from '../store.types';
import * as offeredServiceConstants from './offeredService.constants';

function getInitialState() {
  return Object.assign({}, initialState.offeredService);
}

function offeredServiceReducer(
  state = getInitialState(),
  action: TAction,
): OfferedServicesState {
  switch (action.type) {
    case offeredServiceConstants.INVALIDATE_STORE: {
      return getInitialState();
    }

    case POST_LOGOUT: {
      return getInitialState();
    }

    case FETCH_PROFILE_SUCCESS: {
      return {
        ...state,
        local: {
          ...addArrayToDictByProp({}, action.payload.profile.offeredServices),
        },
        offeredServicesById: action.payload.profile.offeredServices.map(
          (offeredService) => offeredService.id,
        ),
      };
    }
    case SETUP_SUCCESS: {
      return {
        ...state,
        local: {
          ...addArrayToDictByProp({}, action.payload.offeredServices),
        },
        offeredServicesById: action.payload.offeredServices.map(
          (offeredService) => offeredService.id,
        ),
      };
    }

    case offeredServiceConstants.ADD_SERVICE_ACTION: {
      return {
        ...state,
        local: {
          ...addArrayToDictByProp(state.local, [action.payload.offeredService]),
        },
        offeredServicesById: [
          ...new Set([
            ...state.offeredServicesById,
            action.payload.offeredService.id,
          ]),
        ],
      };
    }

    default:
      return state;
  }
}

export default offeredServiceReducer;
