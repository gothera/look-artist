import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';

interface Style {
  background: ViewStyle;
  container: ViewStyle;
  doneBtnContainer: ViewStyle;
  doneBtnText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: color.modalBackground,
  },
  container: {
    height: '40%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: color.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneBtnContainer: {
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.large,
    marginBottom: spacing.base,
  },
  doneBtnText: {
    ...typography.body,
  },
});
