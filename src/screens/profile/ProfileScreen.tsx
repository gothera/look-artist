import React from 'react';
import { Text, View, Platform } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import {
  TabView,
  Tabbar,
  TabbarInfo,
  TabItemButtonInfo,
} from 'react-native-head-tab-view';
import { fetchArtistPosts } from '../../store/post/post.actions';
import { fetchArtistReviews } from '../../store/review/review.actions';
import { AsyncDispatch } from '../../store/store.types';
import { useNavigationBottomTabSelect } from 'react-native-navigation-hooks/dist/hooks';
import { styles } from './styles';
import ArtistGallery from './components/artist-gallery/ArtistGallery';
import ProfileHeaderData from './components/profile-header-data/ProfileHeaderData';
import ArtistServices from './components/artist-services/ArtistServices';
import ArtistReviews from './components/artist-reviews/ArtistReviews';

const HEADER_HEIGHT = 220;

const TABS = ['Gallery', 'Services', 'Reviews'];

const mapDispatchToProps = (dispatch: AsyncDispatch) => ({
  fetchArtistPosts: (isFirst: boolean) => dispatch(fetchArtistPosts(isFirst)),
  fetchArtistReviews: (isFirst: boolean) =>
    dispatch(fetchArtistReviews(isFirst)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileScreen: React.FC<PropsFromRedux> = ({
  fetchArtistPosts,
  fetchArtistReviews,
}) => {
  useNavigationBottomTabSelect((e) => {
    if (e.selectedTabIndex === 3) {
      fetchArtistPosts(true);
      fetchArtistReviews(true);
    }
  });

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <ProfileHeaderData />
    </View>
  );

  const renderTabItemButton = (tabItemBtn: TabItemButtonInfo<string>) => {
    const { item, isActive } = tabItemBtn;

    return (
      <View style={styles.tabItemBtn}>
        <Text
          style={isActive ? styles.tabItemTextSelected : styles.tabItemText}
        >
          {item}
        </Text>
      </View>
    );
  };

  const renderTabBar = (tabBarProps: TabbarInfo<string>) => (
    <Tabbar
      {...tabBarProps}
      renderTabItemButton={renderTabItemButton}
      lineStyle={styles.tabBarLine}
    />
  );

  const renderScene = (sceneProps: { item: string; index: number }) => {
    const { item } = sceneProps;
    if (item === 'Gallery') {
      return <ArtistGallery listProps={sceneProps} />;
    } else if (item === 'Services') {
      return <ArtistServices listProps={sceneProps} />;
    } else if (item === 'Reviews') {
      return <ArtistReviews listProps={sceneProps} />;
    }
    return null;
  };

  return (
    <>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <View style={styles.container}>
        <TabView
          tabs={TABS}
          renderScene={renderScene}
          makeHeaderHeight={() => HEADER_HEIGHT}
          renderScrollHeader={renderHeader}
          renderTabBar={renderTabBar}
          // tabsWillMount={() => {
          //   console.log('=== TABS WILL MOUNT');
          // }}
        />
      </View>
    </>
  );
};

export default connector(ProfileScreen);
