import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, color, typography, font } from '../../../theme';

interface Style {
  container: ViewStyle;
  averageRatingText: TextStyle;
  averageRatingBaseText: TextStyle;
  starsContainer: ViewStyle;
  reviewsTotal: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
  },
  averageRatingText: {
    ...font.regular,
    fontSize: 28,
    color: color.textPrimary,
  },
  averageRatingBaseText: {
    ...typography.subheadlineRegular,
    color: color.textPrimary,
  },
  starsContainer: {
    marginTop: spacing.smaller,
  },
  reviewsTotal: {
    ...typography.footnoteRegular,
    textAlign: 'center',
    marginTop: spacing.smaller,
    color: color.muted,
  },
});
