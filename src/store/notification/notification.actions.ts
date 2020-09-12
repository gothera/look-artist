import { FetchNotificationsResponse } from '../../services/api/api.types';
import * as NotificationService from '../../services/api/NotificationService';
import { Notification } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';
import * as notificationConstants from './notification.constants';
import * as notificationTypes from './notification.types';

const fetchNotificationsRequest = (
  isFirst: boolean,
): notificationTypes.fetchNotificationsRequest => {
  return {
    type: notificationConstants.FETCH_NOTIFICATIONS_REQUEST,
    payload: {
      isFirst,
    },
  };
};

const fetchNotificationsSuccess = (
  notifications: Notification[],
): notificationTypes.fetchNotificationsSuccess => {
  return {
    type: notificationConstants.FETCH_NOTIFICATIONS_SUCCESS,
    payload: {
      notifications,
    },
  };
};

const fetchNotificationsFailure = (
  error: string,
): notificationTypes.fetchNotificationsFailure => {
  return {
    type: notificationConstants.FETCH_NOTIFICATIONS_FAILURE,
    payload: {
      error,
    },
  };
};

/**
 * Used when pressing Login
 * API Call for login
 */

export const fetchNotifications = (isFirst: boolean): ThunkResult<void> => {
  return async function (dispatch, getState) {
    console.log('am ajuns aici');
    // if (getState().notification.fetching || getState().notification.error)
    //   return Promise.resolve();

    dispatch(fetchNotificationsRequest(isFirst));
    const pageNumber = getState().notification.nextPage;
    return NotificationService.fetchNotifications(pageNumber)
      .then((response: FetchNotificationsResponse) => {
        dispatch(fetchNotificationsSuccess(response.content));
      })
      .catch((error) => {
        dispatch(fetchNotificationsFailure(error));
      });
  };
};
