import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { getGenericPassword } from 'react-native-keychain';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';
import { loginKeychain } from '../store/profile/profile.actions';
import {
  ADD_APPOINTMENT_MODAL,
  APPOINTMENT_DETAILS_MODAL,
  DELETE_CONFIRMATION_MODAL,
  EDIT_WEEKLY_PROGRAM_MODAL,
  EDIT_PROGRAM_MODAL,
  SELECT_TIME_MODAL,
  LOADING_MODAL,
  EDIT_DAILY_PROGRAM_MODAL,
  ALERT_TEXT_MODAL,
  ADD_POST_MODAL,
  EDIT_PROFILE_MODAL,
  SELECT_DATE_MODAL,
  ADD_SERVICE_MODAL,
} from './modal-constants';
import {
  ADD_POST_SCREEN,
  AUTH_SCREEN,
  HOME_SCREEN,
  NOTIFICATIONS_SCREEN,
  PROFILE_SCREEN,
  SETUP_SCREEN,
  ADD_POST_DESCRIPTION_SCREEN,
} from './screen-constants';
import {
  LoadingModal,
  EditProgramModal,
  AddAppointmentModal,
  AppointmentDetailsModal,
  DeleteConfirmationModal,
  EditWeeklyProgramModal,
  SelectTimeModal,
  EditDailyProgramModal,
  AlertTextModal,
  AddPostModal,
  SelectDateModal,
  AddServiceModal,
} from '../modals';
import {
  AddPostScreen,
  AuthScreen,
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
  SetupScreen,
  AddPostDescriptionScreen,
} from '../screens';
import { pushAuthScreen, setLoggedInRoot } from './screen-navigation';
import EditProfileModal from '../modals/edit-profile/EditProfileModal';

const WrappedComponent = (Component: React.ComponentType<any>) => {
  return gestureHandlerRootHOC(
    React.memo((props) => {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...props} />
          </PersistGate>
        </Provider>
      );
    }),
  );
};

const registerScreens = () => {
  Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(HomeScreen));
  Navigation.registerComponent(AUTH_SCREEN, () => WrappedComponent(AuthScreen));
  Navigation.registerComponent(SETUP_SCREEN, () =>
    WrappedComponent(SetupScreen),
  );
  Navigation.registerComponent(ADD_POST_SCREEN, () =>
    WrappedComponent(AddPostScreen),
  );
  Navigation.registerComponent(NOTIFICATIONS_SCREEN, () =>
    WrappedComponent(NotificationsScreen),
  );
  Navigation.registerComponent(PROFILE_SCREEN, () =>
    WrappedComponent(ProfileScreen),
  );
  Navigation.registerComponent(ADD_POST_DESCRIPTION_SCREEN, () =>
    WrappedComponent(AddPostDescriptionScreen),
  );

  registerModals();
};

const registerModals = () => {
  Navigation.registerComponent(LOADING_MODAL, () =>
    WrappedComponent(LoadingModal),
  );

  Navigation.registerComponent(SELECT_TIME_MODAL, () =>
    WrappedComponent(SelectTimeModal),
  );

  Navigation.registerComponent(EDIT_PROGRAM_MODAL, () =>
    WrappedComponent(EditProgramModal),
  );

  Navigation.registerComponent(ADD_APPOINTMENT_MODAL, () =>
    WrappedComponent(AddAppointmentModal),
  );

  Navigation.registerComponent(APPOINTMENT_DETAILS_MODAL, () =>
    WrappedComponent(AppointmentDetailsModal),
  );

  Navigation.registerComponent(DELETE_CONFIRMATION_MODAL, () =>
    WrappedComponent(DeleteConfirmationModal),
  );

  Navigation.registerComponent(EDIT_WEEKLY_PROGRAM_MODAL, () =>
    WrappedComponent(EditWeeklyProgramModal),
  );

  Navigation.registerComponent(EDIT_DAILY_PROGRAM_MODAL, () =>
    WrappedComponent(EditDailyProgramModal),
  );

  Navigation.registerComponent(ALERT_TEXT_MODAL, () =>
    WrappedComponent(AlertTextModal),
  );

  Navigation.registerComponent(EDIT_PROFILE_MODAL, () =>
    WrappedComponent(EditProfileModal),
  );

  Navigation.registerComponent(ADD_POST_MODAL, () =>
    WrappedComponent(AddPostModal),
  );

  Navigation.registerComponent(SELECT_DATE_MODAL, () =>
    WrappedComponent(SelectDateModal),
  );

  Navigation.registerComponent(ADD_SERVICE_MODAL, () =>
    WrappedComponent(AddServiceModal),
  );
};

export async function initNavigationAsync() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      const genericPassword = await getGenericPassword();

      const loggedIn = genericPassword && genericPassword.username === 'token';

      // setLoggedInRoot();
      // pushAuthScreen();

      if (loggedIn) {
        store.dispatch(loginKeychain((genericPassword as any).password));
        /**
         * Screens with bottom navigation
         */
        setLoggedInRoot();
      } else {
        pushAuthScreen();
      }
    } catch (error) {
      console.log('Error initNavAsync', error);
      pushAuthScreen();
    }
  });
}
