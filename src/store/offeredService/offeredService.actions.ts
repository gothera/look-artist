import * as offeredServiceConstants from './offeredService.constants';
import * as offeredServiceTypes from './offeredService.types';
import * as OfferedServicesService from '../../services/api/OfferedServicesService';
import { OfferedService } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';

const addServiceAction = (
  offeredService: OfferedService,
): offeredServiceTypes.AddServiceAction => {
  return {
    type: offeredServiceConstants.ADD_SERVICE_ACTION,
    payload: {
      offeredService,
    },
  };
};

export const addService = (
  category: string,
  name: string,
  description: string,
  price: number,
  duration: number,
  onSuccess?: () => void,
): ThunkResult<void> => {
  return async (dispatch, _) => {
    return OfferedServicesService.addService(
      category,
      name,
      description,
      price,
      duration,
    )
      .then((response: OfferedService) => {
        dispatch(addServiceAction(response));
        onSuccess && onSuccess();
      })
      .catch((error) => {
        console.log('add service error', error);
      });
  };
};
