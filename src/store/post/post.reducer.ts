import { addArrayToDictByProp } from '../../utils/global';
import initialState from '../initialState';
import { PostState, TAction } from '../store.types';
import * as postConstants from './post.constants';
import { POST_LOGOUT } from '../profile/profile.constants';

function getInitialState() {
  return Object.assign({}, initialState.post);
}

function profileReducer(state = getInitialState(), action: TAction): PostState {
  switch (action.type) {
    case postConstants.INVALIDATE_STORE: {
      return getInitialState();
    }

    case POST_LOGOUT: {
      return getInitialState();
    }

    case postConstants.FETCH_ARTIST_POSTS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        nextPage: action.payload.first ? 0 : state.nextPage,
        hasNext: action.payload.first ? true : state.hasNext,
      };
    }
    case postConstants.FETCH_ARTIST_POSTS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        postsById: [
          ...new Set([
            ...state.postsById,
            ...action.payload.posts.map((post) => post.id),
          ]),
        ],
        local: {
          ...addArrayToDictByProp(state.local, action.payload.posts),
        },
        nextPage: state.nextPage + 1,
        hasNext: !action.payload.last,
      };
    }
    case postConstants.FETCH_ARTIST_POSTS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        hasNext: false,
      };
    }

    default:
      return state;
  }
}

export default profileReducer;
