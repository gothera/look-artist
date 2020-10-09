import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';
import { color, typography, spacing } from '../../../../theme';
import { ImageStyle } from 'react-native-fast-image';

const IMAGE_WIDTH = (Dimensions.get('screen').width - 16 * 4) / 2;

interface Style {
  listContentContainer: ViewStyle;
  image: ImageStyle;
  listItemContainer: ViewStyle;
  footerContainer: ViewStyle;
  footerText: TextStyle;
  descriptionContainer: ViewStyle;
  descriptionInput: TextStyle;
  descriptionLabel: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  listContentContainer: {
    paddingHorizontal: spacing.smaller,
    width: '100%',
    marginTop: spacing.large,
    paddingBottom: spacing.extraLarge,
  },
  image: {
    height: 240,
    width: IMAGE_WIDTH,
    borderRadius: 12,
  },
  listItemContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: spacing.base,
  },
  footerText: {
    ...typography.body,
    color: color.textSecondary,
    textAlign: 'center',
  },
  footerContainer: {
    marginTop: spacing.large,
    alignItems: 'center',
  },
  descriptionContainer: {
    marginTop: spacing.extraLarge,
    paddingHorizontal: spacing.smaller,
  },
  descriptionInput: {
    marginBottom: spacing.smaller,
    ...typography.body,
    color: color.textSecondary,
  },
  descriptionLabel: {
    ...typography.subheadline,
    color: color.textSecondary,
    marginBottom: spacing.smaller,
  },
});
