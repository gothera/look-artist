import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  statRowContainer: ViewStyle;
  columnInStatRow: ViewStyle;
  starIcon: ViewStyle;
  indexText: TextStyle;
  horizontalLine: ViewStyle;
  filledHorizontalLine: ViewStyle;
  tailColumn: ViewStyle;
  totalCount: TextStyle;
  part1: ViewStyle;
  part2: ViewStyle;
  part3: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: spacing.small,
  },
  statRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginLeft: 4,
    marginBottom: 2,
  },
  indexText: {
    ...typography.caption1Regular,
    color: color.muted,
  },
  horizontalLine: {
    height: 3,
    backgroundColor: color.muted,
    borderRadius: 4,
    width: '100%',
  },
  filledHorizontalLine: {
    height: 3,
    backgroundColor: color.alert,
    zIndex: 2,
    borderRadius: 4,
    position: 'absolute',
    width: '20%',
  },
  columnInStatRow: {
    width: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tailColumn: {
    alignItems: 'flex-end',
  },
  totalCount: {
    ...typography.caption1Regular,
    color: color.textPrimary,
  },
  part1: {
    flex: 0.1,
  },
  part2: {
    flex: 0.8,
    flexDirection: 'row',
  },
  part3: {
    flex: 0.2,
  },
});
