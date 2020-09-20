import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { PlusIcon } from '../../../res/svg';
import { color } from '../../../theme';
import { showAddAppointmentModal } from '../../../navigation';

const AddAppointmentText: React.FC = () => {
  const onPress = () => {
    showAddAppointmentModal();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <PlusIcon
        width={14}
        style={styles.plusIcon}
        stroke={color.textSecondary}
      />
      <Text style={styles.btnText}>Add Appointment</Text>
    </TouchableOpacity>
  );
};

export default AddAppointmentText;
