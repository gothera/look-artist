import { combineReducers } from 'redux';
import appointmentReducer from './appointment/appointment.reducer';
import notificationReducer from './notification/notification.reducer';
import offeredServiceReducer from './offeredService/offeredService.reducer';
import profileReducer from './profile/profile.reducer';
import viewReducer from './view/view.reducer';

export default combineReducers({
  profile: profileReducer,
  view: viewReducer,
  notification: notificationReducer,
  appointment: appointmentReducer,
  offeredService: offeredServiceReducer,
});
