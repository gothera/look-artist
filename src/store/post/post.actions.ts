import * as PostService from '../../services/api/PostService';
import { Page, Post } from '../../types/globalTypes';
import { ThunkResult } from '../store.types';
import * as postConstants from './post.constants';
import * as profileTypes from './post.types';

/**
 * LOGIN
 */
const fetchArtistPostsRequest = (
  first: boolean,
): profileTypes.fetchArtistPostsRequest => {
  return {
    type: postConstants.FETCH_ARTIST_POSTS_REQUEST,
    payload: { first },
  };
};

const fetchArtistPostsSuccess = (
  response: Page<Post>,
): profileTypes.fetchArtistPostsSuccess => {
  return {
    type: postConstants.FETCH_ARTIST_POSTS_SUCCESS,
    payload: { posts: response.content, last: response.last },
  };
};

const fetchArtistPostsFailure = (): profileTypes.fetchArtistPostsFailure => {
  return {
    type: postConstants.FETCH_ARTIST_POSTS_FAILURE,
  };
};

/**
 * Used when pressing Login
 * API Call for login
 */
export const fetchArtistPosts = (first: boolean): ThunkResult<void> => {
  return async function (dispatch, getState) {
    if (getState().post.isFetching || (!getState().post.hasNext && !first)) {
      return Promise.resolve();
    }
    dispatch(fetchArtistPostsRequest(first));

    const page = getState().post.nextPage;
    const artistId = getState().profile.artistId;
    return PostService.fetchPostsOfArtists(artistId || 0, page)
      .then((response: Page<Post>) => {
        dispatch(fetchArtistPostsSuccess(response));
      })
      .catch(() => {
        dispatch(fetchArtistPostsFailure());
      });
  };
};
