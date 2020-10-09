import React, { useState } from 'react';
import { View } from 'react-native';
import AppointmentsList from './components/appointments-list/AppointmentsList';
import CalendarHeader from './components/calendar-header/CalendarHeader';
import { styles } from './styles';
import { useNavigationListeners } from '../../hooks/useNavigationListeners';

interface OwnProps {
  componentId: string;
}

const HomeScreen: React.FC<OwnProps> = ({ componentId }) => {
  useNavigationListeners();

  const dateNow = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(dateNow);

  return (
    <View style={styles.container}>
      <CalendarHeader onNewDateSelected={setSelectedDate} />
      <AppointmentsList date={selectedDate} />
    </View>
  );
};

export default HomeScreen;
