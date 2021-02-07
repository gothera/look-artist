import { StyleSheet, ViewStyle } from 'react-native';
import { BORDER_RADIUS } from '../../../res/constants';
import { spacing, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  halfContainer: ViewStyle;
  firstHalfContainerAux: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    borderColor: color.unchosen,
    flexDirection: 'row',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 0.5,
    paddingVertical: spacing.large,
    alignItems: 'center',
    width: '100%',
  },
  firstHalfContainerAux: {
    borderRightWidth: 1,
    borderRightColor: color.unchosen,
    alignItems: 'center',
  },
});
