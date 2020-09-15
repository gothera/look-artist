import React, { useEffect } from 'react';
import { FlatListProps, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect, ConnectedProps } from 'react-redux';
import ScreenFlatList from '../../containers/screen/ScreenFlatList';
import { fetchAppointmentOfDay } from '../../store/appointment/appointment.actions';
import { fetchNotifications } from '../../store/notification/notification.actions';
import { fetchProfile } from '../../store/profile/profile.actions';
import { AsyncDispatch, StoreState } from '../../store/store.types';
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
  fetchAppointmentsOfDay: (artistId: number, date: string) =>
    dispatch(fetchAppointmentOfDay(artistId, date)),
  fetchProfile: () => dispatch(fetchProfile()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const NotificationsScreen: React.FC<PropsFromRedux> = ({
  notificationsById,
  fetchMoreNotifcations,
  fetchProfile,
  artistId,
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
        onPress={() => fetchMoreNotifcations(true)}
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
