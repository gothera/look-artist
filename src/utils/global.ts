import { DAYS_ABBREVIATION } from '../res/constants';
import { DaysAbbreviation, Category } from '../types/enums';
import { Notification, SelectedDateCalendar } from '../types/globalTypes';
import { Categories } from '../res/strings/categories';
import {
  makeupServicesSelection,
  lashesServicesSelection,
  eyebrowsServicesSelection,
  nailsServicesSelection,
  bodyCareServicesSelection,
  hairServicesSelection,
} from '../res/constants/pickerItems';

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
export const textWithZecimals = (text: string) => {
  if (text.includes('.')) {
    return `${text.split('.')[0]}.${text.split('.')[1][0]}`;
  } else {
    return text + '.0';
  }
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

/**
 * @param selectedDates object {selected: true/ false}
 * @return array of date strings where object.selected = true
 */
export const getSelectedDatesArrayFromCalendar = (
  selectedDates: SelectedDateCalendar,
): string[] => {
  const arrDates: string[] = [];
  for (let date in selectedDates) {
    if (selectedDates[date].selected) {
      arrDates.push(date);
    }
  }
  return arrDates;
};

/**
 * Compare starting = '08:00' with ending = '10:00';
 * @param startingHour
 * @param endingHour
 */
export const isEndingAfterStartingHour = (
  startingHour: string,
  endingHour: string,
) => {
  const hStart = parseInt(startingHour.split(':')[0]);
  const mStart = parseInt(startingHour.split(':')[1]);

  const hEnd = parseInt(endingHour.split(':')[0]);
  const mEnd = parseInt(endingHour.split(':')[1]);

  if (hStart === hEnd) {
    return mEnd > mStart;
  }

  return hEnd > hStart;
};

export const categoryEnumToStr = (category: Category) => {
  switch (category) {
    case Category.Makeup:
      return Categories.makeup;
    case Category.Lashes:
      return Categories.lashes;
    case Category.Hair:
      return Categories.hair;
    case Category.Eyebrows:
      return Categories.eyebrows;
    case Category.Nails:
      return Categories.nails;
    case Category.BodyCare:
      return Categories.bodyCare;
  }
};

export const categoryStrToEnum = (category: string) => {
  if (category === Categories.makeup) {
    return Category.Makeup;
  }
  if (category === Categories.lashes) {
    return Category.Lashes;
  }
  if (category === Categories.hair) {
    return Category.Hair;
  }
  if (category === Categories.eyebrows) {
    return Category.Eyebrows;
  }
  if (category === Categories.nails) {
    return Category.Nails;
  }
  if (category === Categories.bodyCare) {
    return Category.BodyCare;
  }
  return Category.Makeup;
};

export const getPickerServices = (category: Category) => {
  switch (category) {
    case Category.Makeup: {
      return makeupServicesSelection;
    }
    case Category.Lashes: {
      return lashesServicesSelection;
    }
    case Category.Eyebrows: {
      return eyebrowsServicesSelection;
    }
    case Category.Nails: {
      return nailsServicesSelection;
    }
    case Category.BodyCare: {
      return bodyCareServicesSelection;
    }
    case Category.Hair: {
      return hairServicesSelection;
    }
    default: {
      return makeupServicesSelection;
    }
  }
};

/**
 * @param date
 * ```
 * 2020-11-03 -> 3 November
 * ```
 */
export const dateToDayMonth = (date: string) => {
  const dayNumber = parseInt(date.split('-')[2]);
  const monthName = monthNumberToMonthName(parseInt(date.split('-')[1]));
  return dayNumber + ' ' + monthName;
};
