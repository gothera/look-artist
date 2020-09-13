import React, { useEffect } from 'react';
import { FlatListProps, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect, ConnectedProps } from 'react-redux';
import ScreenFlatList from '../../containers/screen/ScreenFlatList';
import { fetchAppointmentOfDay } from '../../store/appointment/appointment.actions';
import { fetchNotifications } from '../../store/notification/notification.actions';
import { AsyncDispatch, StoreState } from '../../store/store.types';
import NotificationRow from './components/notification-row/NotificationRow';

const mapStateToProps = (state: StoreState) => {
  return {
    notificationsById: state.notification.notificationsById,
  };
};

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  fetchMoreNotifcations: (isFirst: boolean) =>
    dispatch(fetchNotifications(isFirst)),
  fetchAppointmentsOfDay: (artistId: number, date: string) =>
    dispatch(fetchAppointmentOfDay(artistId, date)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const NotificationsScreen: React.FC<PropsFromRedux> = ({
  fetchMoreNotifcations,
  notificationsById,
  fetchAppointmentsOfDay,
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
        onPress={() => fetchAppointmentsOfDay(33, '2020-09-14')}
      >
        <Text>Buna ziua</Text>
      </TouchableOpacity>
      <ScreenFlatList
        headerTitle="Notifications"
        flatListProps={flatListProps}
      />
    </>
  );
};

export default connector(NotificationsScreen);
