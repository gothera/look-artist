import { StyleSheet, ViewStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface Style {
  container: ViewStyle;
  expandableCalendarContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
  },
  expandableCalendarContainer: {
    marginTop: getStatusBarHeight(true),
  },
});
