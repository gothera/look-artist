import { Post } from '../../types/globalTypes';
import * as postConstants from './post.constants';

export interface InvalidateStoreAction {
  type: typeof postConstants.INVALIDATE_STORE;
}

export interface fetchArtistPostsSuccess {
  type: typeof postConstants.FETCH_ARTIST_POSTS_SUCCESS;
  payload: { posts: Post[]; last: boolean };
}

export interface fetchArtistPostsRequest {
  type: typeof postConstants.FETCH_ARTIST_POSTS_REQUEST;
  payload: { first: boolean };
}

export interface fetchArtistPostsFailure {
  type: typeof postConstants.FETCH_ARTIST_POSTS_FAILURE;
}

export type PostAction =
  | InvalidateStoreAction
  | fetchArtistPostsSuccess
  | fetchArtistPostsRequest
  | fetchArtistPostsFailure;
