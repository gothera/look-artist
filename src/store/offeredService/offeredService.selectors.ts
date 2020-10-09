import { createSelector } from 'reselect';
import { StoreState } from '../store.types';

const selectServicesById = (state: StoreState) =>
  state.offeredService.offeredServicesById;

const selectLocalServices = (state: StoreState) => state.offeredService.local;

export const selectServices = createSelector(
  [selectServicesById, selectLocalServices],
  (serviceIds, local) => {
    return serviceIds.map((id) => local[id]);
  },
);

export const selectServiceById = (id: number) =>
  createSelector([selectLocalServices], (local) => local[id]);
