import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { LOADING_MODAL } from './modal-constants';
import { Config, getConfig } from './utils-navigation';

export const showLoadingModal = (pushConfig?: Config) => {
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
};
