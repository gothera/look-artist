import initialState from '../initialState';
import { TAction, NotificationState } from '../store.types';
import * as profileConstants from './notification.constants';
import { act } from 'react-test-renderer';

function getInitialState() {
  return Object.assign({}, initialState.notification);
}

function notificationReducer(
  state = getInitialState(),
  action: TAction,
): NotificationState {
  switch (action.type) {
    case profileConstants.INVALIDATE_STORE: {
      return getInitialState();
    }
    case profileConstants.FETCH_NOTIFICATIONS_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        fetching: false,
      };
    }
    case profileConstants.FETCH_NOTIFICATIONS_REQUEST: {
      return {
        ...state,
        notifications: action.payload.isFirst ? [] : state.notifications,
        error: undefined,
        nextPage: action.payload.isFirst ? 0 : state.nextPage,
        fetching: true,
      };
    }
    case profileConstants.FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        notifications: [
          ...state.notifications,
          ...action.payload.notifications,
        ],
        nextPage:
          state.nextPage + (action.payload.notifications.length !== 0 ? 1 : 0),
        fetching: false,
      };
    }

    default:
      return state;
  }
}

export default notificationReducer;
