import * as offeredServiceConstants from './offeredService.constants';
import { OfferedService } from '../../types/globalTypes';

export interface InvalidateStoreAction {
  type: typeof offeredServiceConstants.INVALIDATE_STORE;
}

export interface AddServiceAction {
  type: typeof offeredServiceConstants.ADD_SERVICE_ACTION;
  payload: { offeredService: OfferedService };
}

export type OfferedServiceAction = InvalidateStoreAction | AddServiceAction;
