import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

const LEFT_BUTTON_CLOSE = 'close-add-appointment-modal';

interface OwnProps {
  componentId: string;
}

const AddAppointmentModal: React.FC<OwnProps> = ({ componentId }) => {
  Navigation.mergeOptions(componentId, {
    topBar: {
      leftButtons: [
        {
          id: LEFT_BUTTON_CLOSE,
          icon: require('../../res/images/icons/close-icon.png'),
        },
      ],
    },
  });

  Navigation.events().registerNavigationButtonPressedListener(
    ({ buttonId }) => {
      if (buttonId === LEFT_BUTTON_CLOSE) {
        closeModal();
      }
    },
  );

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default AddAppointmentModal;
