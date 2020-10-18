import React, { useEffect } from 'react';
import { FlatListProps, Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import ScreenFlatList from '../../containers/screen/ScreenFlatList';
import { fetchNotifications } from '../../store/notification/notification.actions';
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
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const NotificationsScreen: React.FC<PropsFromRedux> = ({
  notificationsById,
  fetchMoreNotifcations,
}) => {
  useEffect(() => {
    fetchMoreNotifcations(true);
  }, []);
  const renderItem = ({ item }: { item: number; index: number }) => {
    return <NotificationRow id={item} />;
  };

  const flatListProps: FlatListProps<any> = {
    data: [],
    keyExtractor: (item) => `Notification$${item}`,
    renderItem: renderItem,
    onEndReached: () => {
      console.log('bam end');
      fetchMoreNotifcations(notificationsById.length === 0);
    },
    onEndReachedThreshold: 0.3,
    contentContainerStyle: { paddingHorizontal: 16 },
    ListEmptyComponent: (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Available soon</Text>
      </View>
    ),
    style: { flex: 1 },
  };

  return (
    <>
      <ScreenFlatList
        headerTitle="Notifications"
        flatListProps={flatListProps}
      />
    </>
  );
};

export default connector(NotificationsScreen);
