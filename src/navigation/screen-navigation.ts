import { Navigation } from 'react-native-navigation';
import { color } from '../theme';
import {
  ADD_POST_SCREEN,
  AUTH_SCREEN,
  HOME_SCREEN,
  NOTIFICATIONS_SCREEN,
  PROFILE_SCREEN,
  SETUP_SCREEN,
} from './screen-constants';
import { Config, getConfig } from './utils-navigation';

export const setLoggedInRoot = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            animate: false,
            titleDisplayMode: 'alwaysHide',
            elevation: 30,
            backgroundColor: color.background,
            // drawBehind: true,
            tabsAttachMode: 'onSwitchToTab',
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/calendar.png'),
                  selectedIcon: require('../res/images/bottom-tabs/calendar-selected.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.textPrimary,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: ADD_POST_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/add-post.png'),
                  selectedIcon: require('../res/images/bottom-tabs/add-post-selected.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.textPrimary,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: NOTIFICATIONS_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/bell.png'),
                  selectedIcon: require('../res/images/bottom-tabs/bell-selected.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.textPrimary,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: PROFILE_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('../res/images/bottom-tabs/person.png'),
                  selectedIcon: require('../res/images/bottom-tabs/person-selected.png'),
                  iconColor: color.muted,
                  selectedIconColor: color.textPrimary,
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const pushAuthScreen = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: AUTH_SCREEN,
              name: AUTH_SCREEN,
              passProps: { ...config.props },
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
          },
          statusBar: {
            style: 'light',
            backgroundColor: 'white',
            drawBehind: true,
          },
          animations: {
            ...config.animations,
          },
        },
      },
    },
  });
};

export const pushSetupScreen = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: SETUP_SCREEN,
              name: SETUP_SCREEN,
              passProps: { ...config.props },
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
          },
          statusBar: {
            style: 'light',
            backgroundColor: 'white',
            drawBehind: true,
          },
          animations: {
            ...config.animations,
          },
        },
      },
    },
  });
};
