import React, { useEffect } from 'react';
import { FlatListProps, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect, ConnectedProps } from 'react-redux';
import ScreenFlatList from '../../containers/screen/ScreenFlatList';
import {
  addAppointment,
  fetchAppointmentOfDay,
} from '../../store/appointment/appointment.actions';
import { fetchNotifications } from '../../store/notification/notification.actions';
import {
  fetchProfile,
  updateArtistProgram,
} from '../../store/profile/profile.actions';
import { AsyncDispatch, StoreState } from '../../store/store.types';
import {
  Appointment,
  AppointmentType,
  ArtistProgramEntry,
} from '../../types/globalTypes';
import NotificationRow from './components/notification-row/NotificationRow';

const mapStateToProps = (state: StoreState) => {
  return {
    notificationsById: state.notification.notificationsById,
    artistId: state.profile.artistId,
  };
};

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  fetchMoreNotifcations: (isFirst: boolean) =>
    dispatch(fetchNotifications(isFirst)),
  fetchAppointmentsOfDay: (date: string) =>
    dispatch(fetchAppointmentOfDay(date)),
  fetchProfile: () => dispatch(fetchProfile()),
  updateArtistProgram: (entries: ArtistProgramEntry[]) =>
    dispatch(updateArtistProgram(entries)),
  addAppointment: (appointment: Appointment) =>
    dispatch(addAppointment(appointment)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const NotificationsScreen: React.FC<PropsFromRedux> = ({
  notificationsById,
  fetchMoreNotifcations,
  fetchProfile,
  addAppointment,
  updateArtistProgram,
}) => {
  useEffect(() => {
    fetchMoreNotifcations(true);
  }, []);
  const renderItem = ({ item }: { item: number; index: number }) => {
    return <NotificationRow id={item} />;
  };

  const flatListProps: FlatListProps<any> = {
    data: notificationsById,
    keyExtractor: (item) => `Notification$${item}`,
    renderItem: renderItem,
    onEndReached: () => {
      console.log('bam end');
      fetchMoreNotifcations(notificationsById.length === 0);
    },
    onEndReachedThreshold: 0.3,
    contentContainerStyle: { paddingHorizontal: 16 },
  };

  return (
    <>
      <TouchableOpacity
        style={{ marginTop: 100, width: '100%', height: 100 }}
        onPress={() =>
          addAppointment({
            clientId: 1,
            artistId: 1,
            serviceId: 1,
            date: '2020-09-22',
            startingTime: '08:00',
            endingTime: '09:00',
            currency: 'RON',
            type: AppointmentType.Reserved,
          })
        }
      >
        <Text>Buna ziua</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 100, width: '100%', height: 100 }}
        onPress={() => fetchProfile()}
      >
        <Text>fetch profile</Text>
      </TouchableOpacity>
      <ScreenFlatList
        headerTitle="Notifications"
        flatListProps={flatListProps}
      />
    </>
  );
};

export default connector(NotificationsScreen);
