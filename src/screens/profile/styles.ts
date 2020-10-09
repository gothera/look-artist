import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, typography } from '../../theme';

interface Style {
  container: ViewStyle;
  header: ViewStyle;
  label: TextStyle;
  tab: ViewStyle;
  indicator: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,

    backgroundColor: color.background,
  },
  header: {
    top: 0,
    height: 180,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  label: { ...typography.label, fontSize: 16, color: '#222' },
  tab: { elevation: 0, shadowOpacity: 0, backgroundColor: '#FFFFFF' },
  indicator: { backgroundColor: '#34353E' },
});
