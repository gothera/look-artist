import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  scrollContainer: ViewStyle;
  avatarContainer: ViewStyle;
  image: ImageStyle;
  chooseBtnContainer: ViewStyle;
  input: ViewStyle;
  divider: ViewStyle;
  saveButton: ViewStyle;
  disabledSaveButton: ViewStyle;
  saveContainer: ViewStyle;
  logoutContainer: ViewStyle;
  logoutText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  scrollContainer: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.larger,
    paddingBottom: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    ...typography.title1,
    marginTop: 70,
    marginBottom: spacing.base,
  },
  avatarContainer: {
    width: '100%',
    marginTop: 40,
  },
  image: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 200,
  },
  chooseBtnContainer: {
    ...typography.label,
    paddingHorizontal: 10,
    marginVertical: spacing.small,
  },
  input: {
    marginTop: spacing.largest,
  },
  divider: { marginTop: 0 },
  saveButton: {
    ...typography.button,
    color: color.brand,
  },
  disabledSaveButton: {
    ...typography.button,
    color: color.unchosen,
  },
  saveContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: spacing.base,
    marginRight: spacing.base,
  },
  logoutContainer: {
    marginTop: spacing.base,
  },
  logoutText: {
    color: color.delete,
  },
});
