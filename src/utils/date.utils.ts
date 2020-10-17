/**
 * convert Date to string 'yyyy-mm-dd'
 * @param date
 */
export const formatDateToYMD = (date: Date) => {
  return date.toISOString().split('T')[0];
};

/**
 * convert Date to string 'dd-mm-yyyy'
 * @param date
 */
export const formatDateToDDMMYYY = (date: Date) => {
  const strAuxArr = formatDateToYMD(date).split('-');
  return strAuxArr[2] + '-' + strAuxArr[1] + '-' + strAuxArr[0];
};
