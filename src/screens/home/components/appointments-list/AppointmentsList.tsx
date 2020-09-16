import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { styles } from './styles';
import AppointmentRow from '../../../../components/appointment/appointment-row/AppointmentRow';
import { AsyncDispatch, StoreState } from '../../../../store/store.types';
import { fetchAppointmentOfDay } from '../../../../store/appointment/appointment.actions';
import { ConnectedProps, connect } from 'react-redux';
import { selectAppointmentsIdsPerDay } from '../../../../store/appointment/appointment.selectors';

interface OwnProps {
  date: string;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const appointmentsIds = selectAppointmentsIdsPerDay('2020-09-15')(state);
  return {
    appointmentsIds,
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
}) => {
  useEffect(() => {
    fetchAppointmentsOfDay('2020-09-15');
    console.log('appoint', appointmentsIds);
  }, []);

  const renderAppointmentRow = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    return <AppointmentRow appointmentIdStr={item} />;
  };

  return (
    <FlatList
      data={appointmentsIds}
      renderItem={renderAppointmentRow}
      style={styles.list}
      contentContainerStyle={styles.contentContainerList}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default connector(AppointmentsList);
