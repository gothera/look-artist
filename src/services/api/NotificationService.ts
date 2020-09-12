import { getRequest } from './apiRequest';
import { FetchNotificationsResponse } from './api.types';

export const fetchNotifications = (
  page: number,
): Promise<FetchNotificationsResponse> => {
  const url = `notification?page=${page}`;
  return getRequest<FetchNotificationsResponse>(url);
};
