import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  chevronIcon: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  bottomBorder: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: color.unchosen,
    paddingHorizontal: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.base,
  },
  chevronIcon: {
    position: 'absolute',
    right: spacing.base,
    transform: [{ rotate: '180deg' }],
  },
  title: {
    ...typography.headlineSemiBold,
    color: color.textSecondary,
  },
  description: {
    ...typography.subheadline,
    color: color.muted,
    marginTop: spacing.smallest,
  },
  bottomBorder: {
    borderBottomColor: color.unchosen,
    borderBottomWidth: 1,
  },
});
