import React, { useEffect, useRef } from 'react';
import { Text, View, FlatListProps } from 'react-native';
import { color } from '../../theme';
import ScreenFlatList from '../../containers/screen/ScreenFlatList';
import { StoreState, AsyncDispatch } from '../../store/store.types';
import { connect, ConnectedProps } from 'react-redux';
import { fetchNotifications } from '../../store/notification/notification.actions';
import FastImage, { ImageStyle } from 'react-native-fast-image';

const mapStateToProps = (state: StoreState) => {
  return {
    notifications: state.notification.notifications,
  };
};

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  fetchMoreNotifcations: (isFirst: boolean) =>
    dispatch(fetchNotifications(isFirst)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
const NotificationsScreen: React.FC<PropsFromRedux> = ({
  fetchMoreNotifcations,
  notifications,
}) => {
  useEffect(() => {
    fetchMoreNotifcations(true);
  }, []);
  const renderItem = ({ item, index }: { item: number; index: number }) => {
    return (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <FastImage
          resizeMode="contain"
          style={{ width: 50, height: 50, borderRadius: 50 }}
          source={{ uri: notifications[index].extra.avatar }}
        />
        <View
          style={{
            paddingVertical: 20,
            marginVertical: 10,
            marginHorizontal: 20,
            display: 'flex',
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: color.textPrimary,
            }}
          >
            {`${notifications[index].extra.name} reviewed you`}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: color.muted,
            }}
          >{`${notifications[index].extra.rating} Stars`}</Text>
        </View>
      </View>
    );
  };

  const flatListProps: FlatListProps<any> = {
    data: notifications.map((el) => 1),
    renderItem: renderItem,
    onEndReached: () => {
      console.log('bam end');
      fetchMoreNotifcations(notifications.length === 0);
    },
    onEndReachedThreshold: 0.3,
    contentContainerStyle: { paddingHorizontal: 16 },
  };

  return <ScreenFlatList headerTitle="Sabin" flatListProps={flatListProps} />;
};

export default connector(NotificationsScreen);
