import React, { useEffect } from 'react';
import { FlatListProps, Text, View } from 'react-native';
import { useNavigationBottomTabSelect } from 'react-native-navigation-hooks/dist/hooks';
import { connect, ConnectedProps } from 'react-redux';
import LineDivider from '../../components/ui/LineDivider';
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
  useNavigationBottomTabSelect((e) => {
    if (e.selectedTabIndex === 2) {
      fetchMoreNotifcations(true);
    }
  });

  const renderItem = ({ item }: { item: number; index: number }) => {
    return <NotificationRow id={item} />;
  };

  const flatListProps: FlatListProps<any> = {
    data: notificationsById,
    keyExtractor: (item) => `Notification$${item}`,
    renderItem: renderItem,
    onEndReached: () => {
      fetchMoreNotifcations(notificationsById.length === 0);
    },
    onEndReachedThreshold: 0.3,
    contentContainerStyle: { paddingHorizontal: 16 },
    style: { flex: 1 },
    ItemSeparatorComponent: LineDivider,
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
