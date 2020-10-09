import { createSelector } from 'reselect';
import { StoreState } from '../store.types';

export const selectLocalReviews = (state: StoreState) => state.review.local;

export const selectReviewById = (id: number) =>
  createSelector([selectLocalReviews], (local) => local[id]);
