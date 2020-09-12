import { Notification } from '../types/globalTypes';

export type ContentProp = keyof Notification;

export const addArrayToDictByProp = <T extends any, A extends any>(
  dict: T,
  arr: A[] = [],
  prop: ContentProp = 'id',
) => {
  arr.forEach((elem) => {
    dict[elem[prop]] = elem;
  });

  return dict;
};
