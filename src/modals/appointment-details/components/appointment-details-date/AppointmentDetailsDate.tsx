import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CalendarDaysIcon, TimeIcon } from '../../../../res/svg';

interface OwnProps {
  date: string;
  startingTime: string;
  endingTime: string;
}

const AppointmentDetailsDate: React.FC<OwnProps> = ({
  date,
  startingTime,
  endingTime,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.labelRow}>
          <CalendarDaysIcon />
          <Text style={styles.labelText}>Date</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.labelRow}>
          <TimeIcon />
          <Text style={styles.labelText}>Interval</Text>
        </View>
        <Text style={styles.dateText}>{`${startingTime} - ${endingTime}`}</Text>
      </View>
    </>
  );
};

export default AppointmentDetailsDate;
