import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { resetGenericPassword } from 'react-native-keychain';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import FeedHeader from './components/FeedHeader';
import { STATUS_BAR_HEIGHT } from '../../res/constants';
import SideMenu from './components/SideMenu';

const DRAWER_EDGE_WIDTH =
  Math.round(Dimensions.get('window').width) *
  (Platform.OS === 'ios' ? 0.8 : 0.5);

interface OwnProps {
  componentId: string;
}

const HomeScreen: React.FC<OwnProps> = ({ componentId }) => {
  const drawerRef = useRef<DrawerLayout>(null);

  const onResetKeychain = () => {
    resetGenericPassword();
  };

  const openDrawer = () => drawerRef.current?.openDrawer();

  const renderSideMenu = () => (
    <View style={styles.sideMenuContainer}>
      <SideMenu componentId={componentId} />
    </View>
  );

  return (
    <DrawerLayout
      drawerWidth={300}
      edgeWidth={DRAWER_EDGE_WIDTH}
      renderNavigationView={renderSideMenu}
      ref={drawerRef}
    >
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <FeedHeader onProfilePress={openDrawer} />
        <TouchableOpacity onPress={onResetKeychain}>
          <Text>reset keychain click</Text>
        </TouchableOpacity>
      </View>
    </DrawerLayout>
  );
};

interface Style {
  container: ViewStyle;
  sideMenuContainer: ViewStyle;
  statusBar: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  sideMenuContainer: {
    flex: 1,
    // backgroundColor: 'white',
  },
  statusBar: {
    width: '100%',
    height: STATUS_BAR_HEIGHT,
    // backgroundColor: color[colorScheme].top,
  },
});

export default HomeScreen;
