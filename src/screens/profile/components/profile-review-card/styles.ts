import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  avatarContainer: ViewStyle;
  label: TextStyle;
  dateText: TextStyle;
  description: TextStyle;
  price: TextStyle;
  divider: ViewStyle;
  avatarStyle: ImageStyle;
}

export const styles = StyleSheet.create<Style>({
  avatarContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    ...typography.textInputLabel,
    color: color.textSecondary,
  },
  dateText: {
    ...typography.smallInterval,
    marginLeft: spacing.small,
    color: color.muted,
  },
  description: {
    ...typography.smallInterval,
    marginTop: spacing.small,
    color: color.textSecondary,
  },
  price: {
    ...typography.boldSubtitle,

    marginVertical: spacing.base,
    marginBottom: spacing.small,

    color: color.textSecondary,
  },
  divider: {
    marginTop: spacing.small,
    marginBottom: spacing.large,
  },
  avatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: spacing.large,
  },
});
