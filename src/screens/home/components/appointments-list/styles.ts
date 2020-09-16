import { StyleSheet, ViewStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
    paddingBottom: 16,
    paddingTop: 16,
  },
});
