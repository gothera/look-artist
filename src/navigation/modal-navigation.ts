import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { color } from '../theme';
import {
  ADD_APPOINTMENT_MODAL,
  APPOINTMENT_DETAILS_MODAL,
  DELETE_CONFIRMATION_MODAL,
  EDIT_PROGRAM_MODAL,
  LOADING_MODAL,
  SELECT_TIME_MODAL,
} from './modal-constants';
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
export const showSelectTimeModal = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);
  Navigation.showOverlay({
    component: {
      name: SELECT_TIME_MODAL,
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
                  fontFamily: 'Gilroy-SemiBold',
                },
              },
            },
          },
        },
      ],
    },
  });
};

export const showAddAppointmentModal = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: ADD_APPOINTMENT_MODAL,
            passProps: { ...config.props },
            options: {
              modalPresentationStyle: OptionsModalPresentationStyle.pageSheet,
              layout: {
                backgroundColor: color.background,
                componentBackgroundColor: 'transparent',
              },
              topBar: {
                title: {
                  text: 'Add Appointment',
                  fontFamily: 'Gilroy-SemiBold',
                },
              },
            },
          },
        },
      ],
    },
  });
};

export const showAppointmentDetailsModal = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);

  Navigation.showOverlay({
    component: {
      name: APPOINTMENT_DETAILS_MODAL,
      passProps: { ...config.props },
      options: {
        overlay: {
          interceptTouchOutside: true,
          handleKeyboardEvents: true,
        },
        layout: {
          componentBackgroundColor: 'transparent',
        },
        topBar: {
          visible: false,
        },
      },
    },
  });
};

export const showDeleteConfirmationModal = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);

  Navigation.showOverlay({
    component: {
      name: DELETE_CONFIRMATION_MODAL,
      passProps: { ...config.props },
      options: {
        overlay: {
          interceptTouchOutside: true,
          handleKeyboardEvents: true,
        },
        layout: {
          componentBackgroundColor: 'transparent',
        },
        topBar: {
          visible: false,
        },
      },
    },
  });
};
