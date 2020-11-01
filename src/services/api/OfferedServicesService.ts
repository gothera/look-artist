import { OfferedService } from '../../types/globalTypes';
import { postRequest } from './apiRequest';
import { Currency } from '../../types/enums';
import { AddOfferedServiceApi } from './api.types';

export const addService = (
  category: string,
  name: string,
  description: string,
  price: number,
  duration: number,
  currency = Currency.RON,
): Promise<OfferedService> => {
  const url = `artist/service/`;
  const data: AddOfferedServiceApi = {
    category,
    name,
    description,
    price,
    currency,
    duration,
  };
  return postRequest<OfferedService>(url, data);
};
