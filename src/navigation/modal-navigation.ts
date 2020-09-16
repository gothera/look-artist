import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { LOADING_MODAL, EDIT_PROGRAM_MODAL } from './modal-constants';
import { Config, getConfig } from './utils-navigation';
import { color, typography } from '../theme';

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

export const showEditProgramModal = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: EDIT_PROGRAM_MODAL,
            passProps: { ...config.props },
            options: {
              modalPresentationStyle: OptionsModalPresentationStyle.pageSheet,
              layout: {
                backgroundColor: color.background,
                componentBackgroundColor: 'transparent',
              },
              topBar: {
                title: {
                  text: 'Edit Program',
                  ...typography.bigTitle,
                },
              },
            },
          },
        },
      ],
    },
  });
};
