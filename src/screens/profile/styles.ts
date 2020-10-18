import { StyleSheet, TextStyle, ViewStyle, Platform } from 'react-native';
import { color, typography } from '../../theme';
import { STATUS_BAR_HEIGHT } from '../../res/constants';

interface Style {
  container: ViewStyle;
  header: ViewStyle;
  label: TextStyle;
  tab: ViewStyle;
  indicator: ViewStyle;
  statusBarAbsolute: ViewStyle;
  statusBar: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  header: {
    top: 0,
    height: Platform.OS === 'android' ? 210 : 190,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  label: { ...typography.label, fontSize: 16, color: '#222' },
  tab: { elevation: 0, shadowOpacity: 0, backgroundColor: '#FFFFFF' },
  indicator: { backgroundColor: '#34353E' },
  statusBarAbsolute: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: color.background,
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: color.background,
  },
});
