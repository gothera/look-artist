import { addArrayToDictByProp } from '../../utils/global';
import initialState from '../initialState';
import { ReviewState, TAction } from '../store.types';
import * as reviewConstants from './review.constants';
import { POST_LOGOUT } from '../profile/profile.constants';

function getInitialState() {
  return Object.assign({}, initialState.review);
}

function profileReducer(
  state = getInitialState(),
  action: TAction,
): ReviewState {
  switch (action.type) {
    case reviewConstants.INVALIDATE_STORE: {
      return getInitialState();
    }

    case POST_LOGOUT: {
      return getInitialState();
    }

    case reviewConstants.FETCH_ARTIST_REVIEWS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        nextPage: action.payload.first ? 0 : state.nextPage,
        hasNext: action.payload.first ? true : state.hasNext,
      };
    }
    case reviewConstants.FETCH_ARTIST_REVIEWS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        reviewById: [
          ...new Set([
            ...state.reviewById,
            ...action.payload.reviews.map((review) => review.id),
          ]),
        ],
        local: {
          ...addArrayToDictByProp(state.local, action.payload.reviews),
        },
        nextPage: state.nextPage + 1,
        hasNext: !action.payload.last,
      };
    }
    case reviewConstants.FETCH_ARTIST_REVIEWS_FAILURE: {
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
