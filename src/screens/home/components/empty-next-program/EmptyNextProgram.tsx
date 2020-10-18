import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const EmptyNextProgram = () => {
  return (
    <View>
      <Text style={styles.text}>
        No program for this date. Edit Program for this day and add appointments
      </Text>
    </View>
  );
};

export default EmptyNextProgram;
