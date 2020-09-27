import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';
import { DIALOG_MODAL_HEIGHT } from '../../res/constants';

interface Style {
  backgroundContainer: ViewStyle;
  modalContainer: ViewStyle;
  titleText: TextStyle;
  descriptionText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  backgroundContainer: {
    flex: 1,
    backgroundColor: color.modalBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: DIALOG_MODAL_HEIGHT,
    backgroundColor: color.background,
    borderRadius: spacing.base,
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.small,
    alignItems: 'center',
    marginBottom: 60,
  },
  titleText: {
    ...typography.headlineBold,
    color: color.textSecondary,
    marginTop: spacing.small,
  },
  descriptionText: {
    ...typography.subheadline,
    color: color.muted,
    marginTop: spacing.large,
  },
});
