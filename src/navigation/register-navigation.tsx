import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { pushAuthScreen, setLoggedInRoot } from './screen-navigation';
import { persistor, store } from '../store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  HomeScreen,
  AuthScreen,
  SetupScreen,
  AddPostScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens';
import {
  HOME_SCREEN,
  AUTH_SCREEN,
  SETUP_SCREEN,
  ADD_POST_SCREEN,
  NOTIFICATIONS_SCREEN,
  PROFILE_SCREEN,
} from './screen-constants';
import { LOADING_MODAL } from './modal-constants';
import { LoadingModal } from '../modals';
import { getGenericPassword } from 'react-native-keychain';
import { loginKeychain } from '../store/profile/profile.actions';

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

  registerModals();
};

const registerModals = () => {
  Navigation.registerComponent(LOADING_MODAL, () =>
    WrappedComponent(LoadingModal),
  );
};

export async function initNavigationAsync() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      const genericPassword = await getGenericPassword();

      const loggedIn = genericPassword && genericPassword.username === 'token';

      // pushHomeScreen();

      // setLoggedInRoot();

      if (loggedIn) {
        store.dispatch(loginKeychain((genericPassword as any).password));
        // pushHomeScreen();
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
