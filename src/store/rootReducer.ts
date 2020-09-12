import { combineReducers } from 'redux';
import profileReducer from './profile/profile.reducer';
import viewReducer from './view/view.reducer';
import notificationReducer from './notification/notification.reducer';

export default combineReducers({
  profile: profileReducer,
  view: viewReducer,
  notification: notificationReducer,
});
