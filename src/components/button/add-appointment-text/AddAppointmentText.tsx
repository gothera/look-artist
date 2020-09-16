import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { PlusIcon } from '../../../res/svg';
import { color } from '../../../theme';

const AddAppointmentText = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <PlusIcon width={14} style={styles.plusIcon} stroke={color.muted} />
      <Text style={styles.btnText}>Add Appointment</Text>
    </TouchableOpacity>
  );
};

export default AddAppointmentText;
