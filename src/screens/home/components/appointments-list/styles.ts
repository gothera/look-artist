import { StyleSheet, ViewStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { spacing } from '../../../../theme';

interface Style {
  list: ViewStyle;
  contentContainerList: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  list: {
    marginTop: 140 + getStatusBarHeight(true),
  },
  contentContainerList: {
    paddingHorizontal: 16,
    paddingBottom: spacing.extraLarge,
    paddingTop: 24,
  },
});
