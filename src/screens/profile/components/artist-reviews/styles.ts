import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../../theme';

interface Style {
  contentContainer: ViewStyle;
  headerContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  contentContainer: {
    paddingHorizontal: spacing.base,
  },
  headerContainer: {
    marginBottom: spacing.large,
    marginTop: spacing.smaller,
  },
});
