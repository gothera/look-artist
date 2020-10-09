import * as ReviewService from '../../services/api/ReviewService';
import { Page, Review } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';
import * as postConstants from './review.constants';
import * as reviewTypes from './review.types';

const fetchArtistReviewsRequest = (
  first: boolean,
): reviewTypes.fetchArtistReviewsRequest => {
  return {
    type: postConstants.FETCH_ARTIST_REVIEWS_REQUEST,
    payload: { first },
  };
};

const fetchArtistReviewsSuccess = (
  response: Page<Review>,
): reviewTypes.fetchArtistReviewsSuccess => {
  return {
    type: postConstants.FETCH_ARTIST_REVIEWS_SUCCESS,
    payload: { reviews: response.content, last: response.last },
  };
};

const fetchArtistReviewsFailure = (): reviewTypes.fetchArtistReviewsFailure => {
  return {
    type: postConstants.FETCH_ARTIST_REVIEWS_FAILURE,
  };
};

export const fetchArtistReviews = (first: boolean): ThunkResult<void> => {
  return async function (dispatch, getState) {
    if (
      getState().review.isFetching ||
      (!getState().review.hasNext && !first)
    ) {
      return Promise.resolve();
    }
    dispatch(fetchArtistReviewsRequest(first));

    const page = first ? 0 : getState().post.nextPage;
    const artistId = getState().profile.artistId;
    return ReviewService.fetchReviewsOfArtists(artistId || 0, page)
      .then((response: Page<Review>) => {
        dispatch(fetchArtistReviewsSuccess(response));
      })
      .catch(() => {
        dispatch(fetchArtistReviewsFailure());
      });
  };
};
