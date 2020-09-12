import {
  AnimationOptions,
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { color } from '../theme';
import { LOADING_MODAL } from './ModalsConstants';
import {
  ADD_POST_SCREEN,
  AUTH_SCREEN,
  HOME_SCREEN,
  NOTIFICATIONS_SCREEN,
  PROFILE_SCREEN,
  SETUP_SCREEN,
} from './ScreensConstants';

interface Config {
  props?: any;
  animations?: AnimationOptions;
  options?: any;
}

function getConfig(config?: Config): Config {
  return {
    props: {},
    animations: {},
    options: {},
    ...(config || {}),
  };
}

export const setLoggedInRoot = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
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

export async function pushHomeScreen(pushConfig?: Config) {
  const config = getConfig(pushConfig);

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: HOME_SCREEN,
              name: HOME_SCREEN,
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
}

export async function pushAuthScreen(pushConfig?: Config) {
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
}

export async function pushSetupScreen(pushConfig?: Config) {
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
}

export function showLoadingModal(pushConfig?: Config) {
  const config = getConfig(pushConfig);
  Navigation.showOverlay({
    component: {
      name: LOADING_MODAL,
      passProps: { ...config.props },
      options: {
        modalPresentationStyle:
          OptionsModalPresentationStyle.overCurrentContext,
        layout: {
          backgroundColor: 'transparent',
          componentBackgroundColor: 'transparent',
        },
      },
    },
  });
}
