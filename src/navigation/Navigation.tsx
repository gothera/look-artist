import {
  AnimationOptions,
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { HOME_SCREEN, AUTH_SCREEN, SETUP_SCREEN } from './ScreensConstants';
import { LOADING_MODAL } from './ModalsConstants';

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
                  text: 'Home',
                  icon: require('../res/images/bottom-tabs/home-unselected.png'),
                  selectedIcon: require('../res/images/bottom-tabs/home-selected.png'),
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
                    name: HOME_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Add Post',
                  icon: require('../res/images/bottom-tabs/home-unselected.png'),
                  selectedIcon: require('../res/images/bottom-tabs/home-selected.png'),
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
                    name: HOME_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Notifications',
                  icon: require('../res/images/bottom-tabs/home-unselected.png'),
                  selectedIcon: require('../res/images/bottom-tabs/home-selected.png'),
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
                    name: HOME_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Profile',
                  icon: require('../res/images/bottom-tabs/home-unselected.png'),
                  selectedIcon: require('../res/images/bottom-tabs/home-selected.png'),
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
