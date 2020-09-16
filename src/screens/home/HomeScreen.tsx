import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import CalendarHeader from './components/calendar-header/CalendarHeader';
import { styles } from './styles';
import AppointmentsList from './components/appointments-list/AppointmentsList';
import { StoreState, AsyncDispatch } from '../../store/store.types';
import { fetchAppointmentOfDay } from '../../store/appointment/appointment.actions';
import { connect, ConnectedProps } from 'react-redux';

interface OwnProps {
  componentId: string;
}

const HomeScreen: React.FC<OwnProps> = ({ componentId }) => {
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
