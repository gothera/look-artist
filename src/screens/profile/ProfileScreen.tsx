import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  View,
  Platform,
} from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { connect, ConnectedProps } from 'react-redux';
import LineDivider from '../../components/ui/LineDivider';
import { fetchArtistPosts } from '../../store/post/post.actions';
import { fetchArtistReviews } from '../../store/review/review.actions';
import { AsyncDispatch, StoreState } from '../../store/store.types';
import ProfileHeaderData from './components/profile-header-data/ProfileHeaderData';
import ProfileReviewCard from './components/profile-review-card/ProfileReviewCard';
import ProfileServiceCard from './components/profile-service-card/ProfileServiceCard';
import TabScene from './components/profile-tab-scroller/ProfileTabScroller';
import { styles } from './styles';
import { STATUS_BAR_HEIGHT } from '../../res/constants';
import { color } from '../../theme';
import strings from '../../res/strings/strings';
import OutlinedButton from '../../components/button/outlined-button/OutlinedButton';
import { showAddServiceModal } from '../../navigation';

const HeaderHeight = 220;

const HANDLE_STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0;

interface Route {
  key: string;
  title: string;
}
const mapStateToProps = (state: StoreState) => {
  return {
    postsById: state.post.postsById,
    servicesById: state.offeredService.offeredServicesById,
    reviewsById: state.review.reviewById,
  };
};

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  fetchArtistPosts: (isFirst: boolean) => dispatch(fetchArtistPosts(isFirst)),
  fetchArtistReviews: (isFirst: boolean) =>
    dispatch(fetchArtistReviews(isFirst)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileScreen: React.FC<PropsFromRedux> = ({
  fetchArtistPosts,
  postsById,
  servicesById,
  reviewsById,
  fetchArtistReviews,
}) => {
  const [tabIndex, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'tab1', title: strings.screen.profile.tabs.gallery },
    { key: 'tab2', title: strings.screen.profile.tabs.services },
    { key: 'tab3', title: strings.screen.profile.tabs.reviews },
  ]);
  const scrollY = useRef(new Animated.Value(0)).current;
  let listRefArr = useRef<{ key: string; value: FlatList<number> }[]>([]);
  let listOffset = useRef<Record<string, number>>({});
  let isListGliding = useRef(false);

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      const curRoute = routes[tabIndex].key;
      listOffset.current[curRoute] = value;
    });
    return () => {
      scrollY.removeAllListeners();
    };
  }, [routes, tabIndex]);

  const syncScrollOffset = () => {
    const curRouteKey = routes[tabIndex].key;
    listRefArr.current.forEach((item) => {
      if (item.key !== curRouteKey) {
        //@ts-ignore
        if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
          if (item.value) {
            item.value.scrollToOffset({
              //@ts-ignore
              offset: scrollY._value,
              animated: false,
            });
            //@ts-ignore
            listOffset.current[item.key] = scrollY._value;
          }
          //@ts-ignore
        } else if (scrollY._value >= HeaderHeight) {
          if (
            listOffset.current[item.key] < HeaderHeight ||
            listOffset.current[item.key] == null
          ) {
            if (item.value) {
              item.value.scrollToOffset({
                offset: HeaderHeight,
                animated: false,
              });
              listOffset.current[item.key] = HeaderHeight;
            }
          }
        }
      }
    });
  };

  const onMomentumScrollBegin = () => {
    isListGliding.current = true;
  };

  const onMomentumScrollEnd = () => {
    isListGliding.current = false;
    syncScrollOffset();
  };

  const onScrollEndDrag = () => {
    syncScrollOffset();
  };

  const renderHeader = () => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight + HANDLE_STATUS_BAR_HEIGHT],
      outputRange: [
        HANDLE_STATUS_BAR_HEIGHT,
        -HeaderHeight - HANDLE_STATUS_BAR_HEIGHT,
      ],
      extrapolateRight: 'clamp',
    });
    return (
      <Animated.View
        style={[styles.header, { transform: [{ translateY: y }] }]}
      >
        <ProfileHeaderData />
      </Animated.View>
    );
  };

  const rednerTab1Item = ({ item, index }: { item: number; index: number }) => {
    return <Text>soon</Text>;
  };

  const rednerTab2Item = ({ item, index }: { item: number; index: number }) => {
    return <ProfileServiceCard serviceId={item} />;
  };

  const renderTab3Item = ({ item, index }: { item: number; index: number }) => {
    return <ProfileReviewCard reviewId={item} />;
  };

  const renderLabel = ({
    route,
    focused,
  }: {
    route: Route;
    focused: boolean;
  }) => {
    return (
      <Text
        style={[
          styles.label,
          { color: focused ? color.textSecondary : color.muted },
        ]}
      >
        {route.title}
      </Text>
    );
  };

  const onAddServicePress = () => {
    showAddServiceModal();
  };

  const renderScene = ({ route }: { route: Route }) => {
    let numCols;
    let data;
    let renderItem;
    let onEndReached = () => {};
    let ListFooterComponent;
    switch (route.key) {
      case 'tab1':
        numCols = 2;
        data = postsById;
        renderItem = rednerTab1Item;
        onEndReached = () => fetchArtistPosts(false);
        break;
      case 'tab2':
        numCols = 1;
        data = servicesById;
        renderItem = rednerTab2Item;
        ListFooterComponent = (
          <OutlinedButton title={'Add Service'} onPress={onAddServicePress} />
        );
        break;
      case 'tab3':
        numCols = 1;
        data = reviewsById;
        renderItem = renderTab3Item;
        onEndReached = () => {
          fetchArtistReviews(true);
        };
        break;
      default:
        return null;
    }
    return (
      <TabScene
        numColumns={numCols}
        data={data}
        renderItem={renderItem}
        ListFooterComponent={ListFooterComponent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        onEndReached={onEndReached}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onGetRef={(ref) => {
          if (ref) {
            const found = listRefArr.current.find((e) => e.key === route.key);
            if (!found) {
              listRefArr.current.push({
                key: route.key,
                value: ref,
              });
            }
          }
        }}
      />
    );
  };

  const renderTabBar = (props: any) => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [HeaderHeight, 0],
      extrapolateRight: 'clamp',
    });
    return (
      <Animated.View
        style={{
          top: 0,
          zIndex: 1,
          position: 'absolute',
          transform: [{ translateY: y }],
          width: '100%',
        }}
      >
        <TabBar
          {...props}
          onTabPress={({ route, preventDefault }) => {
            if (isListGliding.current) {
              preventDefault();
            }
          }}
          style={styles.tab}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
        <LineDivider />
      </Animated.View>
    );
  };

  const renderTabView = () => {
    return (
      <TabView
        onIndexChange={(index) => setIndex(index)}
        navigationState={{ index: tabIndex, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{
          height: 0,
          width: Dimensions.get('window').width,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: color.background }}>
      {Platform.OS === 'ios' && (
        <>
          <View style={styles.statusBarAbsolute} />
          <View style={styles.statusBar} />
        </>
      )}
      {renderHeader()}
      {renderTabView()}
    </View>
  );
};

export default connector(ProfileScreen);
