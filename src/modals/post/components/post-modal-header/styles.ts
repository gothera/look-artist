import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../../../../res/constants';
import { color, spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  backgroundContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    // backgroundColor: 'red',
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 10,
    paddingBottom: 10,
    paddingHorizontal: spacing.small,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: color.background,
    borderBottomWidth: 1,
    borderBottomColor: color.unchosen,
  },
});
