import { StyleSheet, TextStyle, ViewStyle, Platform } from 'react-native';
import { color, typography } from '../../theme';
import { STATUS_BAR_HEIGHT } from '../../res/constants';

const HEADER_HEIGHT = 220;

interface Style {
  container: ViewStyle;
  statusBar: ViewStyle;
  headerContainer: ViewStyle;
  tabItemBtn: ViewStyle;
  tabItemText: TextStyle;
  tabItemTextSelected: TextStyle;
  tabBarLine: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
    ...Platform.select({
      ios: {
        marginTop: STATUS_BAR_HEIGHT,
      },
    }),
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: color.background,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    zIndex: 2,
  },
  headerContainer: {
    backgroundColor: color.background,
    width: '100%',
    height: HEADER_HEIGHT,
  },
  tabItemBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemText: {
    ...typography.subheadline,
    color: color.muted,
  },
  tabItemTextSelected: {
    ...typography.subheadline,
    color: color.textPrimary,
  },
  tabBarLine: {
    backgroundColor: color.textPrimary,
  },
});
