import { Notification } from '../types/globalTypes';
import { DaysAbbreviation } from '../types/enums';
import { DAYS_ABBREVIATION } from '../res/constants';

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

export const monthNumberToMonthName = (monthNumber: number) => {
  switch (monthNumber) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    default:
      return 'December';
  }
};

export const dayAbbEnumValue = (dayAbb: DaysAbbreviation) => {
  switch (dayAbb) {
    case DaysAbbreviation.Mon:
      return DAYS_ABBREVIATION.MONDAY;
    case DaysAbbreviation.Tue:
      return DAYS_ABBREVIATION.TUESDAY;
    case DaysAbbreviation.Wed:
      return DAYS_ABBREVIATION.WEDNESDAY;
    case DaysAbbreviation.Thu:
      return DAYS_ABBREVIATION.THURSDAY;
    case DaysAbbreviation.Fri:
      return DAYS_ABBREVIATION.FRIDAY;
    case DaysAbbreviation.Sat:
      return DAYS_ABBREVIATION.SATURDAY;
    case DaysAbbreviation.Sun:
      return DAYS_ABBREVIATION.SUNDAY;
  }
};
