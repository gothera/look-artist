import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { typography, color } from '../../../../theme';

interface Style {
  container: ViewStyle;
  expandableCalendarContainer: ViewStyle;
  todayBtnText: TextStyle;
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
  todayBtnText: {
    ...typography.subheadline,
    color: color.textSecondary,
  },
});
