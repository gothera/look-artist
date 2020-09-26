import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { showAddAppointmentModal } from '../../../navigation';
import { PlusIcon } from '../../../res/svg';
import { color } from '../../../theme';
import { styles } from './styles';

interface OwnProps {
  startingTime: string;
  endingTime: string;
  date: string;
}

const AddAppointmentText: React.FC<OwnProps> = ({
  startingTime,
  endingTime,
  date,
}) => {
  const onPress = () => {
    showAddAppointmentModal({ props: { startingTime, endingTime, date } });
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
