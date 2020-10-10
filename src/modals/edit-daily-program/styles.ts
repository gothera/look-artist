import { StyleSheet, ViewStyle } from 'react-native';
import { FOOTER_OPTIONS_HEIGHT } from '../../res/constants';
import { spacing } from '../../theme';

interface Style {
  container: ViewStyle;
  scrollContainerStyle: ViewStyle;
  chooseIntervalContainer: ViewStyle;
  errorContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  scrollContainerStyle: {
    paddingBottom: FOOTER_OPTIONS_HEIGHT + 30,
  },
  chooseIntervalContainer: {
    marginTop: -50,
  },
  errorContainer: {
    marginTop: spacing.base,
  },
});
