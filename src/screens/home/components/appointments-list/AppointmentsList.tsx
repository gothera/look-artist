import React, { useEffect, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { styles } from './styles';
import AppointmentRow from '../../../../components/appointment/appointment-row/AppointmentRow';
import { AsyncDispatch, StoreState } from '../../../../store/store.types';
import { fetchAppointmentOfDay } from '../../../../store/appointment/appointment.actions';
import { ConnectedProps, connect } from 'react-redux';
import { selectAppointmentsIdsPerDay } from '../../../../store/appointment/appointment.selectors';
import { color } from '../../../../theme';
import EmptyPreviousAppointments from '../empty-previous-appointments/EmptyPreviousAppointments';
import EmptyNextProgram from '../empty-next-program/EmptyNextProgram';
import SetDayProgram from '../set-day-program/SetDayProgram';

interface OwnProps {
  date: string;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const appointmentsIds = selectAppointmentsIdsPerDay(ownProps.date)(state);
  return {
    appointmentsIds,
    isLoading: state.appointment.fetching,
  };
};

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  fetchAppointmentsOfDay: (date: string) =>
    dispatch(fetchAppointmentOfDay(date)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AppointmentsList: React.FC<OwnProps & PropsFromRedux> = ({
  fetchAppointmentsOfDay,
  appointmentsIds,
  date,
  isLoading,
}) => {
  useEffect(() => {
    fetchAppointmentsOfDay(date);
  }, [date]);

  const dateObj = new Date(date);
  const todayDate = new Date();

  const isToday = dateObj.toDateString() === todayDate.toDateString();

  const isPreviousDate = dateObj.getTime() < todayDate.getTime();

  const onPullToRefresh = () => {
    fetchAppointmentsOfDay(date);
  };

  const keyExtractor = useCallback((i: string) => `appointment-item-${i}`, []);

  const renderAppointmentRow = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    return (
      <AppointmentRow
        appointmentIdStr={item}
        isLast={index === appointmentsIds.length - 1}
      />
    );
  };

  const renderRefreshControl = (
    <RefreshControl
      tintColor={color.textSecondary}
      colors={['transparent']}
      refreshing={isLoading}
      onRefresh={onPullToRefresh}
    />
  );

  return (
    <FlatList
      data={appointmentsIds}
      renderItem={renderAppointmentRow}
      style={styles.list}
      contentContainerStyle={[
        styles.contentContainerList,
        appointmentsIds.length === 0 &&
          (!isPreviousDate || isToday) && { paddingHorizontal: 0 },
      ]}
      showsVerticalScrollIndicator={false}
      refreshControl={renderRefreshControl}
      keyExtractor={keyExtractor}
      ListEmptyComponent={
        isPreviousDate && !isToday ? (
          <EmptyPreviousAppointments date={date} />
        ) : (
          <SetDayProgram date={date} />
        )
      }
    />
  );
};

export default connector(AppointmentsList);
