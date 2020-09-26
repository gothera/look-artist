import { Notification } from '../../types/globalTypes';
import * as notificationConstants from './notification.constants';
export interface InvalidateStoreAction {
  type: typeof notificationConstants.INVALIDATE_STORE;
}

export interface fetchNotificationsSuccess {
  type: typeof notificationConstants.FETCH_NOTIFICATIONS_SUCCESS;
  payload: { notifications: Notification[]; isFirst: boolean };
}

export interface fetchNotificationsFailure {
  type: typeof notificationConstants.FETCH_NOTIFICATIONS_FAILURE;
  payload: { error: string };
}

export interface fetchNotificationsRequest {
  type: typeof notificationConstants.FETCH_NOTIFICATIONS_REQUEST;
  payload: { isFirst: boolean };
}

export type NotificationAction =
  | InvalidateStoreAction
  | fetchNotificationsSuccess
  | fetchNotificationsFailure
  | fetchNotificationsRequest;
