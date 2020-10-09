import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  avatarStyle: ImageStyle;
  title: TextStyle;
  subTitle: TextStyle;
  statsContainer: ViewStyle;
  rightContainer: ViewStyle;
  counterContainer: ViewStyle;
  metricContainer: ViewStyle;
  metricText: TextStyle;
  counterText: TextStyle;
  divider: ViewStyle;
  fullContainer: ViewStyle;
  bioText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  fullContainer: {
    paddingHorizontal: spacing.base,
  },
  container: {
    width: '100%',

    backgroundColor: color.background,
    display: 'flex',
    flexDirection: 'row',
    marginTop: spacing.extraLarge,
  },
  rightContainer: {
    flex: 1,
    marginRight: spacing.extraLarge,
  },
  avatarStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: spacing.large,
  },
  title: {
    ...typography.title3Bold,
  },
  subTitle: {
    ...typography.subTitle,
    color: color.textSecondary,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.base,
  },
  counterContainer: {
    display: 'flex',
    marginBottom: spacing.smallest,

    flexDirection: 'row',
    alignItems: 'center',
  },
  metricContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  metricText: {
    ...typography.mutedDescriptionMedium,
    color: color.muted,
  },
  counterText: {
    ...typography.label,
    // marginTop:spacing.smallest,
    marginLeft: spacing.smallest,
  },
  divider: {
    marginTop: spacing.base,
    backgroundColor: color.unchosen,
    height: 1,
  },
  bioText: {
    ...typography.textInputLabel,
    color: color.textSecondary,
    marginTop: spacing.small,
    lineHeight: spacing.larger,
  },
});
