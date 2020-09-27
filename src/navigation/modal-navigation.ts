import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import {
  ADD_APPOINTMENT_MODAL,
  APPOINTMENT_DETAILS_MODAL,
  DELETE_CONFIRMATION_MODAL,
  EDIT_DEFAULT_DAYS_MODAL,
  SELECT_TIME_MODAL,
  LOADING_MODAL,
  EDIT_PROGRAM_MODAL,
  EDIT_SPECIFIC_DAYS_MODAL,
  ALERT_TEXT_MODAL,
} from './modal-constants';
import { Config, getConfig } from './utils-navigation';
import { color } from '../theme';
import strings from '../res/strings/strings';

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
                componentBackgroundColor: color.background,
              },
              topBar: {
                title: {
                  text: strings.modal.editProgram.title,
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

/**
 * Pushed on EditProgram
 * @param componentId
 * @param pushConfig
 */
export const showEditDefaultDaysModal = (
  componentId: string,
  pushConfig?: Config,
) => {
  const config = getConfig(pushConfig);

  Navigation.push(componentId, {
    component: {
      name: EDIT_DEFAULT_DAYS_MODAL,
      passProps: { ...config.props },
      options: {
        overlay: {
          interceptTouchOutside: true,
          handleKeyboardEvents: true,
        },
        layout: {
          componentBackgroundColor: color.background,
        },
        topBar: {
          title: {
            text: strings.modal.editDefaultDays.title,
            fontFamily: 'Gilroy-SemiBold',
          },
          backButton: {
            showTitle: false,
            icon: require('../res/images/icons/chevron-left-icon.png'),
            color: color.textPrimary,
          },
        },
      },
    },
  });
};

/**
 * Pushed on EditProgram
 * @param componentId
 * @param pushConfig
 */
export const showEditSpecificDaysModal = (
  componentId: string,
  pushConfig?: Config,
) => {
  const config = getConfig(pushConfig);

  Navigation.push(componentId, {
    component: {
      name: EDIT_SPECIFIC_DAYS_MODAL,
      passProps: { ...config.props },
      options: {
        overlay: {
          interceptTouchOutside: true,
          handleKeyboardEvents: true,
        },
        layout: {
          componentBackgroundColor: color.background,
        },
        topBar: {
          title: {
            text: strings.modal.editSpecificDays.title,
            fontFamily: 'Gilroy-SemiBold',
          },
          backButton: {
            showTitle: false,
            icon: require('../res/images/icons/chevron-left-icon.png'),
            color: color.textPrimary,
          },
        },
      },
    },
  });
};

export const showAlertTextModal = (pushConfig?: Config) => {
  const config = getConfig(pushConfig);

  Navigation.showOverlay({
    component: {
      name: ALERT_TEXT_MODAL,
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
