import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const AppointmentIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.verticalLine} />
    </View>
  );
};

export default AppointmentIndicator;
