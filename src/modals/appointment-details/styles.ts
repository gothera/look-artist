import { StyleSheet, ViewStyle } from 'react-native';
import { color, spacing } from '../../theme';

interface Style {
  container: ViewStyle;
  modal: ViewStyle;
  modalContainer: ViewStyle;
  footerContentContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  modal: {
    backgroundColor: color.background,
  },
  modalContainer: {
    marginTop: spacing.base,
    paddingHorizontal: spacing.base,
    paddingTop: spacing.large,
  },
  footerContentContainer: {
    alignItems: 'center',
  },
});
