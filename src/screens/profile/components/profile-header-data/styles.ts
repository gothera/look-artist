import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  statsContainer: ViewStyle;
  rightContainer: ViewStyle;
  counterContainer: ViewStyle;
  metricContainer: ViewStyle;
  metricText: TextStyle;
  counterText: TextStyle;
  divider: ViewStyle;
  fullContainer: ViewStyle;
  bioText: TextStyle;
  editButton: ViewStyle;
  editBtnText: TextStyle;
  categoryText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  fullContainer: {
    paddingHorizontal: spacing.base,
    width: '100%',
    marginTop: 0,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  rightContainer: {
    marginRight: spacing.extraLarge,
    marginLeft: spacing.large,
  },

  title: {
    ...typography.title3Bold,
    color: color.textPrimary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.base,
  },
  counterContainer: {
    marginBottom: spacing.smallest,
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },
  metricContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 38,
  },
  metricText: {
    ...typography.caption1,
    color: color.muted,
  },
  counterText: {
    ...typography.bodySemiBold,
    color: color.textPrimary,
    marginLeft: spacing.smallest,
  },
  divider: {
    marginTop: spacing.base,
    backgroundColor: color.unchosen,
    height: 1,
  },
  bioText: {
    ...typography.textInputLabel,
    color: color.textPrimary,
    marginTop: spacing.small,
    lineHeight: spacing.larger,
  },
  editButton: {
    ...typography.subheadline,
    paddingLeft: spacing.large,
    paddingVertical: spacing.smallest,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  categoryText: {
    ...typography.body,
    color: color.textPrimary,
    marginTop: spacing.smallest,
  },
  editBtnText: {
    ...typography.body,
    color: color.textPrimary,
  },
});
