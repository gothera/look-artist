import { addArrayToDictByProp } from '../../utils/global';
import initialState from '../initialState';
import { NotificationState, TAction } from '../store.types';
import * as notificationConstants from './notification.constants';
import { POST_LOGOUT } from '../profile/profile.constants';

function getInitialState() {
  return Object.assign({}, initialState.notification);
}

function notificationReducer(
  state = getInitialState(),
  action: TAction,
): NotificationState {
  switch (action.type) {
    case notificationConstants.INVALIDATE_STORE: {
      return getInitialState();
    }

    case POST_LOGOUT: {
      return getInitialState();
    }

    case notificationConstants.FETCH_NOTIFICATIONS_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        fetching: false,
      };
    }
    case notificationConstants.FETCH_NOTIFICATIONS_REQUEST: {
      return {
        ...state,

        error: undefined,
        nextPage: action.payload.isFirst ? 0 : state.nextPage,
        fetching: true,
      };
    }
    case notificationConstants.FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,

        notificationsById: !action.payload.isFirst
          ? [
              ...new Set([
                ...state.notificationsById,
                ...action.payload.notifications.map(
                  (notification) => notification.id,
                ),
              ]),
            ]
          : action.payload.notifications.map((notification) => notification.id),
        local: {
          ...addArrayToDictByProp(state.local, action.payload.notifications),
        },
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
