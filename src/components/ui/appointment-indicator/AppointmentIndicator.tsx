import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface OwnProps {
  addCircleOnTail?: boolean;
}

const AppointmentIndicator: React.FC<OwnProps> = ({ addCircleOnTail }) => {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.verticalLine} />
      {addCircleOnTail && (
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      )}
    </View>
  );
};

export default AppointmentIndicator;
