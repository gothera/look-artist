import { Review } from '../../types/globalTypes';
import * as reviewConstants from './review.constants';

export interface InvalidateStoreAction {
  type: typeof reviewConstants.INVALIDATE_STORE;
}

export interface fetchArtistReviewsSuccess {
  type: typeof reviewConstants.FETCH_ARTIST_REVIEWS_SUCCESS;
  payload: { reviews: Review[]; last: boolean };
}

export interface fetchArtistReviewsRequest {
  type: typeof reviewConstants.FETCH_ARTIST_REVIEWS_REQUEST;
  payload: { first: boolean };
}

export interface fetchArtistReviewsFailure {
  type: typeof reviewConstants.FETCH_ARTIST_REVIEWS_FAILURE;
}

export type ReviewAction =
  | InvalidateStoreAction
  | fetchArtistReviewsSuccess
  | fetchArtistReviewsRequest
  | fetchArtistReviewsFailure;
