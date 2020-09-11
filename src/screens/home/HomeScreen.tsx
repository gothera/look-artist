import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { resetGenericPassword } from 'react-native-keychain';
import FeedHeader from './components/FeedHeader';
import { STATUS_BAR_HEIGHT } from '../../res/constants';

interface OwnProps {
  componentId: string;
}

const HomeScreen: React.FC<OwnProps> = ({ componentId }) => {
  const onResetKeychain = () => {
    resetGenericPassword();
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <FeedHeader onProfilePress={() => {}} />
      <TouchableOpacity onPress={onResetKeychain}>
        <Text>reset keychain click</Text>
      </TouchableOpacity>
    </View>
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
    // backgroundColor: 'blue',
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
