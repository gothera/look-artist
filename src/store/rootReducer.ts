import { combineReducers } from 'redux';
import profileReducer from './profile/profile.reducer';
import viewReducer from './view/view.reducer';

export default combineReducers({
  profile: profileReducer,
  view: viewReducer,
});
