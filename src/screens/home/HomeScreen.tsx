import React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../../res/constants';
import CalendarHeader from './components/calendar-header/CalendarHeader';

interface OwnProps {
  componentId: string;
}

const HomeScreen: React.FC<OwnProps> = ({ componentId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <CalendarHeader />
      {/* <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'red',
        }}
      >
        <Text style={{ fontSize: 30 }}>Anything you want</Text>
      </View> */}
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
