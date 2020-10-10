import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import EditProgramOption from './components/edit-program-option/EditProgramOption';
import { styles } from './styles';
import { ScheduleBigIcon } from '../../res/svg';
import strings from '../../res/strings/strings';
import {
  showEditWeeklyProgramModal,
  showEditDailyProgramModal,
} from '../../navigation';

const LEFT_BUTTON_CLOSE = 'close-edit-program-modal';

interface OwnProps {
  componentId: string;
}

const EditProgramModal: React.FC<OwnProps> = ({ componentId }) => {
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

  const onDefaultDaysPress = () => {
    showEditWeeklyProgramModal(componentId);
  };

  const onSpecificDaysPress = () => {
    showEditDailyProgramModal(componentId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scheduleIntroContainer}>
        <ScheduleBigIcon />
        <Text style={styles.scheduleIntroText}>
          {strings.modal.editProgram.intro}
        </Text>
      </View>
      <View style={styles.optionsContainer}>
        <EditProgramOption
          title={strings.modal.editProgram.options.defaultDays}
          description={strings.modal.editProgram.options.defaultDaysDesc}
          onPress={onDefaultDaysPress}
        />
        <EditProgramOption
          title={strings.modal.editProgram.options.specificDays}
          description={strings.modal.editProgram.options.specificDaysDesc}
          onPress={onSpecificDaysPress}
          isLast
        />
      </View>
    </View>
  );
};

export default EditProgramModal;
