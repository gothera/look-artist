// import * as viewConstants from './view.constants';
import { INVALIDATE_STORE } from '../profile/profile.constants';
import initialState from '../initialState';
import { ViewState, TAction } from '../store.types';
function getInitialState(): ViewState {
  return Object.assign({}, initialState.view);
}

function viewReducer(state = getInitialState(), action: TAction): ViewState {
  switch (action.type) {
    case INVALIDATE_STORE: {
      return getInitialState();
    }

    default:
      return state;
  }
}

export default viewReducer;
