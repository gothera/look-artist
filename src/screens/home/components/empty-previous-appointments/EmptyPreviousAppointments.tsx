import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface OwnProps {
  date: string;
}

const EmptyPreviousAppointments: React.FC<OwnProps> = ({ date }) => {
  return (
    <View>
      <Text style={styles.text}>{`You had no appointments on ${date}`}</Text>
    </View>
  );
};

export default EmptyPreviousAppointments;
